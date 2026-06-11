#!/usr/bin/env python3
"""
去除图片背景，输出透明底 PNG。
用法: python3 tools/remove_bg.py <输入图片> [输出图片]
"""
import sys
from pathlib import Path
from rembg import remove
from PIL import Image

def main():
    if len(sys.argv) < 2:
        print("用法: python3 tools/remove_bg.py <输入图片> [输出图片]")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    if not input_path.exists():
        print(f"错误: 找不到文件 {input_path}")
        sys.exit(1)

    # 默认输出路径: 原文件名_nobg.png
    if len(sys.argv) >= 3:
        output_path = Path(sys.argv[2])
    else:
        output_path = input_path.parent / (input_path.stem + "_nobg.png")

    print(f"正在处理: {input_path}")
    print(f"输出到:   {output_path}")

    with open(input_path, "rb") as f:
        input_data = f.read()

    output_data = remove(input_data)

    with open(output_path, "wb") as f:
        f.write(output_data)

    print(f"完成！透明底图已保存: {output_path}")

if __name__ == "__main__":
    main()
