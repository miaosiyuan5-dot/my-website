import glob
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PAYPAL_EN = """
          <div class="paypal-checkout-block">
            <p class="paypal-checkout-label">Or pay directly with PayPal</p>
            <div id="paypal-button-container" class="paypal-button-container" aria-label="PayPal checkout"></div>
          </div>
"""

PAYPAL_ZH = """
          <div class="paypal-checkout-block">
            <p class="paypal-checkout-label">或使用 PayPal 直接付款</p>
            <div id="paypal-button-container" class="paypal-button-container" aria-label="PayPal 付款"></div>
          </div>
"""

SCRIPTS = """  <script src="js/payment-config.js"></script>
  <script src="js/paypal.js"></script>
  <script src="js/main.js"></script>"""

for path in glob.glob(os.path.join(BASE, "product*.html")):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    orig = content
    is_zh = path.endswith("-zh.html")
    block = PAYPAL_ZH if is_zh else PAYPAL_EN
    if "paypal-button-container" not in content:
        content = re.sub(
            r"(</div>\s*\n\s*<!-- (?:Short description|简短描述))",
            block + r"\n\1",
            content,
            count=1,
        )
    content = content.replace('  <script src="js/main.js"></script>', SCRIPTS)
    if content != orig:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Updated:", os.path.basename(path))
    else:
        print("Skipped:", os.path.basename(path))
