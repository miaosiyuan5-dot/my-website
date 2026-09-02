"""Bulk site improvements: contact info, links, placeholder removal."""
import glob
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REPLACEMENTS = [
    ("+86 138 0000 0000", "+86 133 0153 1970"),
    ("8613800000000", "8613301531970"),
    ("+8613800000000", "+8613301531970"),
    ("privacy-zh.html", "privacy.html"),
    ("terms-zh.html", "terms.html"),
    ('href="#" aria-label="Instagram"', 'href="contact.html" aria-label="Instagram"'),
    ('href="#" aria-label="Facebook"', 'href="contact.html" aria-label="Facebook"'),
    ('href="#" aria-label="YouTube"', 'href="contact.html" aria-label="YouTube"'),
    ('href="#" aria-label="TikTok"', 'href="contact.html" aria-label="TikTok"'),
    ('href="#" class="social-link"', 'href="contact-zh.html" class="social-link"'),
    ("action=\"https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID\"", 'action="https://formsubmit.co/info@yixingdingyuan.cn"'),
]

POLICY_EN = [
    ('<li><a href="#">Shipping Policy</a></li>', '<li><a href="contact.html">Shipping Policy</a></li>'),
    ('<li><a href="#">Returns</a></li>', '<li><a href="contact.html">Returns</a></li>'),
    ('<li><a href="#">Authenticity</a></li>', '<li><a href="about.html">Authenticity</a></li>'),
]
POLICY_ZH = [
    ('<li><a href="#">发货说明</a></li>', '<li><a href="contact-zh.html">发货说明</a></li>'),
    ('<li><a href="#">退换货政策</a></li>', '<li><a href="contact-zh.html">退换货政策</a></li>'),
    ('<li><a href="#">正品保证</a></li>', '<li><a href="about-zh.html">正品保证</a></li>'),
    ('<li><a href="#">配送政策</a></li>', '<li><a href="contact-zh.html">配送政策</a></li>'),
    ('<li><a href="#">退换货</a></li>', '<li><a href="contact-zh.html">退换货</a></li>'),
    ('<li><a href="#">真伪保障</a></li>', '<li><a href="about-zh.html">真伪保障</a></li>'),
]

for path in glob.glob(os.path.join(BASE, "**", "*.html"), recursive=True):
    if ".git" in path:
        continue
    with open(path, encoding="utf-8") as f:
        content = f.read()
    orig = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    if path.endswith("-zh.html") or "contact-zh" in path or "index-zh" in path:
        for old, new in POLICY_ZH:
            content = content.replace(old, new)
    else:
        for old, new in POLICY_EN:
            content = content.replace(old, new)
    if content != orig:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated:", os.path.relpath(path, BASE))
