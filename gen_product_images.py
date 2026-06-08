#!/usr/bin/env python3
"""
宜兴紫砂壶产品图生成脚本
使用 Pollinations.ai 免费 API，无需 API Key
运行方式：python3 gen_product_images.py
"""

import urllib.request
import urllib.parse
import os
import time
import sys

# 图片保存目录（桌面）
output_dir = os.path.join(os.path.expanduser("~"), "Desktop", "紫砂壶产品图")
os.makedirs(output_dir, exist_ok=True)

print("=" * 50)
print("  宜兴紫砂壶产品图生成器")
print("  使用 Pollinations.ai 免费生成")
print("=" * 50)
print(f"\n图片将保存到：{output_dir}\n")

prompts = [
    {
        "filename": "01_正面全景.jpg",
        "desc": "正面全景 — 纯白背景电商主图",
        "prompt": (
            "professional product photography of a handmade Chinese Yixing Zisha teapot, "
            "reddish-brown clay, flat wide body, ring loop lid knob, hand-engraved peony flowers, "
            "pure white background, studio lighting, 8K ultra high resolution, "
            "e-commerce product photo, no shadow, crisp edges, luxury pottery"
        )
    },
    {
        "filename": "02_侧面刻花.jpg",
        "desc": "侧面 — 刻花牡丹特写",
        "prompt": (
            "macro close-up product photo of Yixing Zisha teapot side view, "
            "showing detailed hand-carved peony chrysanthemum floral engraving on reddish-brown clay surface, "
            "pure white background, soft studio lighting, 8K resolution, "
            "luxury Chinese pottery craftsmanship, sharp details, professional photography"
        )
    },
    {
        "filename": "03_俯视角度.jpg",
        "desc": "俯视 — 壶盖与整体造型",
        "prompt": (
            "overhead top-down product photography of Chinese Yixing Zisha teapot, "
            "reddish-brown clay, ring loop lid knob clearly visible, carved floral pattern, "
            "pure white background, flat lay composition, 8K resolution, "
            "luxury tea ware, professional e-commerce photo, soft even lighting"
        )
    },
    {
        "filename": "04_底部印章.jpg",
        "desc": "底部 — 印章款识特写",
        "prompt": (
            "macro product photo of bottom of Chinese Yixing Zisha teapot, "
            "showing square artisan seal stamp with Chinese calligraphy inscription, "
            "three white stilt marks on reddish-brown clay, pure white background, "
            "crisp studio lighting, 8K ultra detail, authentication close-up shot"
        )
    },
    {
        "filename": "05_茶席场景.jpg",
        "desc": "茶席场景 — 生活方式展示图",
        "prompt": (
            "lifestyle product photography of Chinese Yixing Zisha teapot on dark slate tea tray, "
            "reddish-brown clay with peony engravings, loose pu-erh tea leaves beside, "
            "traditional Chinese gongfu tea ceremony setup, moody dark background, "
            "warm studio lighting, 8K resolution, luxury editorial photography, premium tea culture"
        )
    },
]

success = 0
for i, item in enumerate(prompts):
    print(f"[{i+1}/5] 正在生成：{item['desc']}")
    encoded = urllib.parse.quote(item["prompt"])
    url = (
        f"https://image.pollinations.ai/prompt/{encoded}"
        f"?width=1024&height=1024&nologo=true&seed={i+2025}"
    )
    out_path = os.path.join(output_dir, item["filename"])
    try:
        urllib.request.urlretrieve(url, out_path)
        size = os.path.getsize(out_path)
        if size < 5000:
            print(f"  ⚠ 文件过小({size}B)，可能生成失败，请检查网络")
        else:
            print(f"  ✓ 已保存 ({size // 1024} KB)")
            success += 1
    except Exception as e:
        print(f"  ✗ 失败：{e}")
    if i < len(prompts) - 1:
        time.sleep(3)

print("\n" + "=" * 50)
print(f"  完成！成功生成 {success}/5 张图片")
print(f"  保存位置：{output_dir}")
print("=" * 50)

if sys.platform == "darwin":
    os.system(f'open "{output_dir}"')
elif sys.platform == "win32":
    os.system(f'explorer "{output_dir}"')
