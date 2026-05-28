#!/usr/bin/env node
/**
 * 图片批量优化脚本
 * ------------------------------------------------------------
 * 作用：
 *   1. 扫描指定目录下所有 jpg/jpeg/png 图片
 *   2. 为每张图片生成多个尺寸的 WebP 版本（响应式）
 *   3. 同时保留一份压缩后的原格式（jpg/png）作为不支持 WebP 的回退
 *   4. 输出一个 image-manifest.json 清单，包含每张图片的 srcset 信息
 *
 * 使用方法（在项目根目录的命令行里跑）：
 *   1. 先安装依赖（只需一次）：  npm install sharp fast-glob
 *   2. 运行：                    node optimize-images.js
 *
 * 默认从 ./images 读取，输出到 ./images/optimized
 * 你可以在下面的 CONFIG 里改路径和尺寸。
 */

const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require('fs');

// ============ 配置区（按需修改）============
const CONFIG = {
  // 原始图片所在目录（相对当前脚本）
  inputDir: './images',
  // 优化后图片的输出目录
  outputDir: './images/optimized',
  // 要生成的宽度档位（像素）。小于原图宽度的才会生成，避免放大模糊。
  widths: [320, 640, 960, 1280, 1920],
  // WebP 压缩质量 0-100，越高越清晰但文件越大
  webpQuality: 80,
  // 回退用的 jpg/png 压缩质量
  fallbackQuality: 82,
  // 清单文件输出路径
  manifestPath: './images/optimized/image-manifest.json',
};
// =========================================

async function main() {
  let sharp, fg;
  try {
    sharp = require('sharp');
    fg = require('fast-glob');
  } catch (e) {
    console.error('\n缺少依赖。请先运行：  npm install sharp fast-glob\n');
    process.exit(1);
  }

  const inputDir = path.resolve(CONFIG.inputDir);
  const outputDir = path.resolve(CONFIG.outputDir);

  if (!existsSync(inputDir)) {
    console.error(`找不到输入目录：${inputDir}`);
    console.error('请把图片放进该目录，或在脚本顶部 CONFIG.inputDir 改成你的图片目录。');
    process.exit(1);
  }

  await fs.mkdir(outputDir, { recursive: true });

  // 找出所有图片，排除输出目录本身，避免重复处理
  const patterns = ['**/*.{jpg,jpeg,png,JPG,JPEG,PNG}'];
  const files = await fg(patterns, {
    cwd: inputDir,
    absolute: true,
    ignore: [path.relative(inputDir, outputDir) + '/**'],
  });

  if (files.length === 0) {
    console.log('没有找到任何 jpg/png 图片。');
    return;
  }

  console.log(`找到 ${files.length} 张图片，开始处理...\n`);

  const manifest = {};

  for (const file of files) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const meta = await sharp(file).metadata();
    const originalWidth = meta.width || Math.max(...CONFIG.widths);

    // 只保留不超过原图宽度的档位，再加上原图宽度本身（去重）
    const targetWidths = [
      ...new Set(
        CONFIG.widths
          .filter((w) => w <= originalWidth)
          .concat(originalWidth > Math.max(...CONFIG.widths) ? [] : [originalWidth])
      ),
    ].sort((a, b) => a - b);

    if (targetWidths.length === 0) targetWidths.push(originalWidth);

    const webpEntries = [];
    const fallbackEntries = [];

    for (const w of targetWidths) {
      // 生成 WebP
      const webpName = `${baseName}-${w}.webp`;
      const webpOut = path.join(outputDir, webpName);
      await sharp(file)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: CONFIG.webpQuality })
        .toFile(webpOut);
      webpEntries.push({ width: w, file: webpName });

      // 生成压缩后的回退格式（保持原扩展名）
      const fbName = `${baseName}-${w}${ext.toLowerCase()}`;
      const fbOut = path.join(outputDir, fbName);
      const pipeline = sharp(file).resize({ width: w, withoutEnlargement: true });
      if (ext.toLowerCase() === '.png') {
        await pipeline.png({ quality: CONFIG.fallbackQuality, compressionLevel: 9 }).toFile(fbOut);
      } else {
        await pipeline.jpeg({ quality: CONFIG.fallbackQuality, mozjpeg: true }).toFile(fbOut);
      }
      fallbackEntries.push({ width: w, file: fbName });
    }

    // 生成 srcset 字符串（相对输出目录）
    const relDir = path.relative(process.cwd(), outputDir).replace(/\\/g, '/');
    const webpSrcset = webpEntries.map((e) => `${relDir}/${e.file} ${e.width}w`).join(', ');
    const fallbackSrcset = fallbackEntries.map((e) => `${relDir}/${e.file} ${e.width}w`).join(', ');
    const largestFallback = `${relDir}/${fallbackEntries[fallbackEntries.length - 1].file}`;

    manifest[path.basename(file)] = {
      original: path.relative(process.cwd(), file).replace(/\\/g, '/'),
      originalWidth,
      originalHeight: meta.height || null,
      webpSrcset,
      fallbackSrcset,
      defaultSrc: largestFallback,
      // 一段可直接用的 <picture> 模板，方便复制
      pictureHTML:
        `<picture>\n` +
        `  <source type="image/webp" srcset="${webpSrcset}" sizes="(max-width: 640px) 100vw, 640px">\n` +
        `  <img src="${largestFallback}" srcset="${fallbackSrcset}" sizes="(max-width: 640px) 100vw, 640px" ` +
        `width="${originalWidth}" height="${meta.height || ''}" loading="lazy" decoding="async" alt="">\n` +
        `</picture>`,
    };

    console.log(`  ✓ ${path.basename(file)}  →  ${targetWidths.length} 个尺寸 (WebP + 回退)`);
  }

  await fs.writeFile(CONFIG.manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\n完成！清单已写入：${CONFIG.manifestPath}`);
  console.log('打开清单文件，每张图片都附了一段可直接粘贴的 <picture> 代码。');
}

main().catch((err) => {
  console.error('出错了：', err);
  process.exit(1);
});
