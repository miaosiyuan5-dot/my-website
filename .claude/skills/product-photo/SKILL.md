# 产品图处理 / Product Photo

拿到用户的茶壶照片 → 去除背景 → 输出透明底或白底产品图 → 可选直接上传到网站。

完全免费，本地处理，无需 API Key。

---

## 第一步：询问用户

用中文问：

```
请告诉我：
1. 你的照片路径（例：/Users/你的名字/Desktop/teapot.jpg）
   或者直接把图片拖进对话框
2. 要白底图还是透明底？（白底 → 适合直接放网站；透明底 → 适合自己后续编辑）
3. 处理完之后要不要直接添加到网站产品页？（是/否）
```

---

## 第二步：去除背景

使用 Bash 工具运行：

```bash
python3 tools/remove_bg.py "<用户提供的图片路径>" "<输出路径>"
```

输出路径规则：
- 在同一目录下生成 `原文件名_nobg.png`
- 例：`teapot.jpg` → `teapot_nobg.png`

首次运行会自动下载 AI 模型（约 170MB），需要等待 1-2 分钟，告知用户正在下载。

---

## 第三步：如果用户要白底图

去背景完成后，再运行以下 Python 代码，在透明底上合成白色背景：

```bash
python3 - <<'EOF'
from PIL import Image
img = Image.open("<透明底PNG路径>").convert("RGBA")
bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
bg.paste(img, mask=img.split()[3])
result = bg.convert("RGB")
result.save("<输出路径，将_nobg.png改为_white.jpg>", "JPEG", quality=92)
print("白底图完成！")
EOF
```

---

## 第四步：展示结果

告诉用户：
- 透明底图路径
- 白底图路径（如果有）
- 图片尺寸（建议上传到网站前压缩到 480×480 到 800×800 之间）

---

## 第五步：可选 — 上传到网站

如果用户说"是，要添加到网站"，则：

1. 把处理好的图片复制到 `/home/user/my-website/images/` 目录（如不存在则创建）
2. 记下图片的相对路径，例：`images/teapot_white.jpg`
3. 提示用户："接下来我可以用 /add-product 把这张图和产品信息一起添加到产品页，要继续吗？"

---

## 注意事项

- rembg 对**单色或简单背景**效果最好（白色、灰色背景下拍的茶壶图）
- 背景复杂（花纹桌布、人物遮挡）时效果可能不完美，建议拍摄时用白纸/白布做背景
- 支持格式：JPG、PNG、WEBP
- 如果运行出错提示找不到 rembg 或 onnxruntime，运行：`pip3 install "rembg[cpu]"`
