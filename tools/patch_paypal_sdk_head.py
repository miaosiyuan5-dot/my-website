import glob
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SDK = (
    '  <script src="https://www.paypal.com/sdk/js?client-id='
    'BAAUyTkKK0LQAhZuvakURO7hWqZviH9jrKSvrcW5AG7QWwfqwdLLp1gm9aBc2eQQo_3JWBm3OB26swvmsc'
    '&components=hosted-buttons&disable-funding=venmo&currency=USD"></script>'
)

MARKER = 'paypal.com/sdk/js'

for path in glob.glob(os.path.join(BASE, 'product*.html')):
    if path.endswith('products.html'):
        continue
    with open(path, encoding='utf-8') as f:
        content = f.read()
    if MARKER in content:
        print('Already has SDK:', os.path.basename(path))
        continue
    needle = '  <link rel="stylesheet" href="css/style.css" />'
    if needle not in content:
        print('No stylesheet anchor:', os.path.basename(path))
        continue
    content = content.replace(needle, needle + '\n' + SDK, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated:', os.path.basename(path))
