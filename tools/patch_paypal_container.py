import glob
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUTTON_ID = '9BSLDUYYHD6UN'
CONTAINER_ID = f'paypal-container-{BUTTON_ID}'

PAYPAL_EN = f"""
          <div class="paypal-checkout-block">
            <p class="paypal-checkout-label">Or pay directly with PayPal</p>
            <div id="{CONTAINER_ID}" class="paypal-button-container" aria-label="PayPal checkout"></div>
          </div>
"""

PAYPAL_ZH = f"""
          <div class="paypal-checkout-block">
            <p class="paypal-checkout-label">或使用 PayPal 直接付款</p>
            <div id="{CONTAINER_ID}" class="paypal-button-container" aria-label="PayPal 付款"></div>
          </div>
"""

for path in glob.glob(os.path.join(BASE, 'product*.html')):
    if path.endswith('products.html'):
        continue

    with open(path, encoding='utf-8') as f:
        content = f.read()

    orig = content
    is_zh = path.endswith('-zh.html')
    block = PAYPAL_ZH if is_zh else PAYPAL_EN

    content = content.replace('id="paypal-button-container"', f'id="{CONTAINER_ID}"')

    if CONTAINER_ID not in content:
        content = re.sub(
            r'(</div>\s*\n\s*(?:<!-- (?:Short description|简短描述) -->?\s*\n\s*)?<div class="product-short-desc">)',
            block + r'\n\1',
            content,
            count=1,
        )

    if content != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated:', os.path.basename(path))
    else:
        print('OK:', os.path.basename(path))
