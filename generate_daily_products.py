# -*- coding: utf-8 -*-
"""Generate daily product detail HTML pages."""
from pathlib import Path

OUT_DIR = Path(r"c:\Users\Administrator\Desktop\定渊国际\site-new")

MATERIAL_EN = """        <h3>Zisha Clay — 紫砂泥</h3>
        <p>Our teapots are made exclusively from ore mined at the Huanglongshan deposit in Yixing, Jiangsu Province — the world's only known source of authentic Zisha clay. The ore is crushed, sieved, and aged naturally for at least one year before being worked by hand.</p>
        <ul>
          <li><strong>Purple Clay (Zini 紫泥):</strong> The most classic variety — dark reddish-brown with a fine texture. High iron content promotes even heat distribution and a patina that deepens with use.</li>
          <li><strong>Red Clay (Hongni 红泥):</strong> A lighter, more porous clay that fires to warm terracotta tones. Particularly suited to lighter oolongs and white teas.</li>
          <li><strong>Beige Clay (Duanni 段泥):</strong> A mixed mineral clay that fires to pale buff or yellow. Its lower density enhances aromatic clarity, ideal for aged puerh and high-fired oolongs.</li>
        </ul>
        <p style="margin-top:1rem;">No colorants, chemicals, or blending clays are ever used. What you see is pure Zisha.</p>"""

MATERIAL_ZH = """        <h3>紫砂泥料</h3>
        <p>本店茶壶均采用江苏宜兴黄龙山原矿紫砂，经粉碎、筛分与自然陈腐至少一年后手工制作，为世间唯一正宗紫砂矿源。</p>
        <ul>
          <li><strong>紫泥：</strong> 经典品种，色泽沉稳，含铁量高，传热均匀，久用包浆温润。</li>
          <li><strong>红泥：</strong> 质地细腻，烧成后呈暖色，适合轻发酵茶类。</li>
          <li><strong>段泥：</strong> 颗粒感丰富，色泽素雅，利于呈现茶香气韵，适合日常品饮。</li>
        </ul>
        <p style="margin-top:1rem;">不添加化工色料与外来泥料，所见即为原矿紫砂。</p>"""

CARE_EN = """        <h3>Caring for Your Zisha Teapot</h3>
        <p>A well-cared-for Zisha teapot improves with every use — developing a patina called 包浆 (bāo jiàng) that deepens flavour and enriches the clay's lustre over years of tea ceremony.</p>
        <ul>
          <li><strong>First use (开壶):</strong> Simmer the teapot gently in plain water for 30 minutes to open the pores, then brew two or three pots of the tea you intend to dedicate it to — one tea type per pot is the traditional practice.</li>
          <li><strong>Daily cleaning:</strong> Rinse with hot water only. Never use soap, detergent, or dishwasher — chemicals will block the micro-pores and damage the patina irreversibly.</li>
          <li><strong>Drying:</strong> After use, remove the lid and allow both pot and lid to air-dry completely before storage.</li>
          <li><strong>Polishing:</strong> After pouring tea over the exterior, gently buff with a clean soft cloth (茶巾) while still warm to build the patina.</li>
          <li><strong>Storage:</strong> Store uncovered in a dry, ventilated place away from strong odours. Avoid plastic bags or airtight containers.</li>
          <li><strong>Handling:</strong> Zisha is robust but brittle — avoid thermal shock (cold water into a hot pot) and dropping.</li>
        </ul>"""

CARE_ZH = """        <h3>紫砂壶养护</h3>
        <p>悉心养护的紫砂壶会随使用日益温润，形成「包浆」，使茶汤更醇、泥色更亮。</p>
        <ul>
          <li><strong>开壶：</strong> 清水小火温煮约 30 分钟，再以拟专泡之茶冲泡两三次；传统习惯一壶一类茶。</li>
          <li><strong>日常清洁：</strong> 仅用热水冲洗，勿用洗洁精或洗碗机，以免堵塞气孔、破坏包浆。</li>
          <li><strong>晾干：</strong> 使用后开盖，待壶身与壶盖完全自然干燥再收存。</li>
          <li><strong>拭养：</strong> 温壶后以干净软巾轻拭壶外，有助养出光泽。</li>
          <li><strong>存放：</strong> 置于干燥通风处，避免异味与密封塑料袋。</li>
          <li><strong>使用注意：</strong> 忌骤冷骤热与磕碰。</li>
        </ul>"""

PRODUCTS = [
    {
        "slug": "daily-benshan",
        "id": "daily-benshan-duanni",
        "images": ["daily-benshan-front.jpg", "daily-benshan-side.jpg", "daily-benshan-base.jpg"],
        "en": {
            "title": "Flat Round Teapot · Benshan Duanni",
            "zh_subtitle": "扁圆素壶 · 本山段泥",
            "meta_desc": "Flat-round teapot in authentic Benshan Duanni clay — warm golden tone, plain elegance for daily brewing. $238.",
            "keywords": "Benshan Duanni, flat teapot, Yixing Zisha, daily teapot, Dingyuan",
            "breadcrumb": "Flat Round · Benshan Duanni",
            "short": "A flat-round form in authentic Benshan Duanni clay — warm golden tone, visible sand grains, plain elegance for daily brewing.",
            "short_extra": "Daily Collection · Ships worldwide.",
            "desc_title": "About This Teapot",
            "desc": "This teapot is a flat-round form shaped from authentic Benshan Duanni clay. The colour is warm and golden, with clearly visible sand grains. The body is flat yet structured, with soft, flowing belly lines. A delicate round bead knob and steady pushed-in base. Spout and handle are symmetrical and coordinated — simple, restrained lines with no extra carving. A plain vessel prized for quiet elegance, ideal for daily tea and appreciation.",
            "craft_title": "Form & Finish",
            "craft_items": [
                "Benshan Duanni clay",
                "Flat-round form",
                "Plain surface",
                "Pushed-in base",
                "Round bead knob",
            ],
        },
        "zh": {
            "title": "扁圆素壶 · 本山段泥",
            "en_subtitle": "Flat Round Teapot · Benshan Duanni",
            "meta_desc": "扁圆器型本山段泥素壶，色泽温润金黄，适合日常泡茶赏玩。¥1,680。",
            "keywords": "本山段泥, 扁圆壶, 宜兴紫砂, 日常壶, 定渊国际",
            "breadcrumb": "扁圆素壶 · 本山段泥",
            "short": "扁圆器型，本山段泥，色泽温润金黄，素器清雅，适合日常泡茶赏玩。",
            "short_extra": "日常系列 · 全球发货。",
            "desc_title": "关于此壶",
            "desc": "此为扁圆器型，选取本山段泥制成，色泽温润金黄，砂质颗粒清晰可见。壶身扁而不塌，腹线舒展柔和，圆珠钮精巧圆润，一捺底稳重大方。流把对称协调，线条简约内敛，无额外刻绘，以素器见长，清雅素净，十分适合日常泡茶赏玩。",
            "craft_title": "器形与工艺",
            "craft_items": [
                "本山段泥",
                "扁圆器形",
                "素面光器",
                "一捺底",
                "圆珠钮",
            ],
        },
    },
    {
        "slug": "daily-qinghui",
        "id": "daily-qinghui-duanni",
        "images": ["daily-qinghui-front.jpg", "daily-qinghui-side.jpg", "daily-qinghui-base.jpg"],
        "en": {
            "title": "Flat Teapot · Qinghui Duanni",
            "zh_subtitle": "宽扁素壶 · 青灰段泥",
            "meta_desc": "Wide flat teapot in Qinghui Duanni — cool elegant tone, rich sandy texture, plain polished surface. $238.",
            "keywords": "Qinghui Duanni, flat teapot, Yixing Zisha, daily teapot, Dingyuan",
            "breadcrumb": "Flat · Qinghui Duanni",
            "short": "Refined from Qinghui Duanni clay — cool, elegant tone with rich sandy texture. Wide flat body, plain polished surface.",
            "short_extra": "Daily Collection · Ships worldwide.",
            "desc_title": "About This Teapot",
            "desc": "Refined from Qinghui Duanni clay with an elegant, cool, moist tone and rich sandy texture. The belly is wide and flat, steady and grounded. A domed lid with round bead knob; the spout curves softly and the handle tail lifts slightly for a touch of liveliness. Rounded, restrained lines throughout — a plain polished vessel without carving, quiet and composed, balancing grip comfort and visual beauty.",
            "craft_title": "Form & Finish",
            "craft_items": [
                "Qinghui Duanni clay",
                "Wide flat form",
                "Plain polished surface",
                "Domed lid",
                "Round bead knob",
            ],
        },
        "zh": {
            "title": "宽扁素壶 · 青灰段泥",
            "en_subtitle": "Flat Teapot · Qinghui Duanni",
            "meta_desc": "青灰段泥宽扁素壶，色泽素雅冷润，砂感丰富，适合日常泡茶。¥1,680。",
            "keywords": "青灰段泥, 宽扁壶, 宜兴紫砂, 日常壶, 定渊国际",
            "breadcrumb": "宽扁素壶 · 青灰段泥",
            "short": "青灰段泥炼制，色泽素雅冷润，砂感丰富，宽扁沉稳，素面光器。",
            "short_extra": "日常系列 · 全球发货。",
            "desc_title": "关于此壶",
            "desc": "采用青灰段泥炼制，色泽素雅冷润，砂感丰富。壶腹宽扁沉稳，穹盖搭配圆珠钮，壶流弧度柔和，端把尾端微微上扬，增添灵动之气。整器线条圆融含蓄，素面光器，不事雕琢，静雅从容，兼具握持手感与观赏美感。",
            "craft_title": "器形与工艺",
            "craft_items": [
                "青灰段泥",
                "宽扁器形",
                "素面光器",
                "穹盖",
                "圆珠钮",
            ],
        },
    },
    {
        "slug": "daily-qinghui2",
        "id": "daily-qinghui-duanni-2",
        "images": ["daily-qinghui2-front.jpg", "daily-qinghui2-side.jpg", "daily-qinghui2-base.jpg"],
        "en": {
            "title": "Flat Teapot · Qinghui Duanni · Upturned Handle",
            "zh_subtitle": "宽扁素壶 · 青灰段泥 · 端把款",
            "meta_desc": "Qinghui Duanni wide flat teapot with upturned handle spur — plain polished daily brewing piece. $238.",
            "keywords": "Qinghui Duanni, upturned handle, flat teapot, Yixing Zisha, Dingyuan",
            "breadcrumb": "Flat · Qinghui · Upturned Handle",
            "short": "Refined from Qinghui Duanni clay — cool, elegant tone with rich sandy texture. Wide flat body, plain polished surface.",
            "short_extra": "Daily Collection · Upturned handle spur · Ships worldwide.",
            "desc_title": "About This Teapot",
            "desc": "Refined from Qinghui Duanni clay with an elegant, cool, moist tone and rich sandy texture. The belly is wide and flat, steady and grounded. A domed lid with round bead knob; the spout curves softly and the handle tail lifts slightly for a touch of liveliness. Rounded, restrained lines throughout — a plain polished vessel without carving, quiet and composed, balancing grip comfort and visual beauty.",
            "craft_title": "Form & Finish",
            "craft_items": [
                "Qinghui Duanni clay",
                "Wide flat form",
                "Plain polished surface",
                "Domed lid",
                "Round bead knob",
                "Upturned handle spur",
            ],
        },
        "zh": {
            "title": "宽扁素壶 · 青灰段泥 · 端把款",
            "en_subtitle": "Flat Teapot · Qinghui Duanni · Upturned Handle",
            "meta_desc": "青灰段泥宽扁素壶端把款，色泽素雅，砂感丰富，适合日常泡茶。¥1,680。",
            "keywords": "青灰段泥, 端把, 宽扁壶, 宜兴紫砂, 定渊国际",
            "breadcrumb": "宽扁素壶 · 端把款",
            "short": "青灰段泥炼制，色泽素雅冷润，砂感丰富，宽扁沉稳，素面光器。",
            "short_extra": "日常系列 · 端把尾端上扬款 · 全球发货。",
            "desc_title": "关于此壶",
            "desc": "采用青灰段泥炼制，色泽素雅冷润，砂感丰富。壶腹宽扁沉稳，穹盖搭配圆珠钮，壶流弧度柔和，端把尾端微微上扬，增添灵动之气。整器线条圆融含蓄，素面光器，不事雕琢，静雅从容，兼具握持手感与观赏美感。",
            "craft_title": "器形与工艺",
            "craft_items": [
                "青灰段泥",
                "宽扁器形",
                "素面光器",
                "穹盖",
                "圆珠钮",
                "端把尾端上扬",
            ],
        },
    },
]

THUMB_LABELS_EN = ["front", "side", "base"]
THUMB_LABELS_ZH = ["正面", "侧面", "壶底"]


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def craft_ul(items, lang):
    lines = ["        <ul>"]
    for item in items:
        if lang == "en":
            lines.append(f"          <li><strong>{esc(item)}</strong></li>")
        else:
            lines.append(f"          <li><strong>{item}</strong></li>")
    lines.append("        </ul>")
    return "\n".join(lines)


def gallery_block(product, lang):
    imgs = product["images"]
    prefix = "images/products/"
    title = product["en"]["title"] if lang == "en" else product["zh"]["title"]
    labels = THUMB_LABELS_EN if lang == "en" else THUMB_LABELS_ZH
    main_src = prefix + imgs[0]
    parts = [
        '        <div class="product-gallery" role="region" aria-label="Product images">',
        '          <div class="product-main-image">',
        "            <img",
        '              id="main-product-img"',
        f'              src="{main_src}"',
        f'              alt="{esc(title)} — {labels[0]} view"',
        '              width="600" height="600"',
        '              fetchpriority="high"',
        "            />",
        "          </div>",
        '          <div class="product-thumbnails" role="list" aria-label="Product image thumbnails">',
    ]
    for i, img in enumerate(imgs):
        src = prefix + img
        active = " active" if i == 0 else ""
        label = labels[i] if i < len(labels) else f"view {i+1}"
        parts.extend([
            f'            <div class="thumbnail{active}" role="listitem"',
            f'                 data-src="{src}"',
            f'                 data-alt="{esc(title)} — {label}"',
            f'                 tabindex="0" role="button" aria-label="View {label}">',
            f'              <img src="{src}"',
            f'                   alt="{label} thumbnail" loading="lazy" width="150" height="150" />',
            "            </div>",
        ])
    parts.extend(["          </div>", "        </div>"])
    return "\n".join(parts)


def related_section(lang, current_slug):
    if lang == "en":
        subtitle, heading = "You May Also Like", "Related Teapots"
        coll_href, coll_label = "collections.html", "View all collections"
        cards = []
        for p in PRODUCTS:
            if p["slug"] == current_slug:
                continue
            href = f"product-{p['slug']}.html"
            cards.append(
                f"""        <article class="product-card reveal reveal-delay-1">
          <a href="{href}" class="product-card-image" aria-label="{esc(p['en']['title'])}">
            <img src="images/products/{p['images'][0]}"
                 alt="{esc(p['en']['title'])}"
                 loading="lazy" width="480" height="480" />
            <div class="product-card-overlay"><button class="quick-view-btn">Quick View</button></div>
          </a>
          <div class="product-card-info">
            <h3>{esc(p['en']['title'])}</h3>
            <div class="zh-name">{p['zh']['title']}</div>
            <div class="price">$238</div>
          </div>
        </article>"""
            )
        return f"""  <section class="related-products" aria-labelledby="related-heading">
    <div class="container">
      <div class="section-title">
        <span class="subtitle">{subtitle}</span>
        <h2 id="related-heading">{heading}</h2>
        <div class="title-divider"></div>
      </div>
      <div class="products-grid">
{chr(10).join(cards[:2])}
      </div>
      <p style="text-align:center;margin-top:2rem;"><a href="{coll_href}" class="btn-secondary">{coll_label}</a></p>
    </div>
  </section>"""
    cards = []
    for p in PRODUCTS:
        if p["slug"] == current_slug:
            continue
        href = f"product-{p['slug']}-zh.html"
        cards.append(
            f"""        <article class="product-card reveal reveal-delay-1">
          <a href="{href}" class="product-card-image" aria-label="{p['zh']['title']}">
            <img src="images/products/{p['images'][0]}"
                 alt="{p['zh']['title']}"
                 loading="lazy" width="480" height="480" />
            <div class="product-card-overlay"><button class="quick-view-btn">快速预览</button></div>
          </a>
          <div class="product-card-info">
            <h3>{p['zh']['title']}</h3>
            <div class="zh-name">{p['en']['title']}</div>
            <div class="price">¥1,680</div>
          </div>
        </article>"""
        )
    return f"""  <section class="related-products" aria-labelledby="related-heading">
    <div class="container">
      <div class="section-title">
        <span class="subtitle">猜您喜欢</span>
        <h2 id="related-heading">相关茶壶</h2>
        <div class="title-divider"></div>
      </div>
      <div class="products-grid">
{chr(10).join(cards[:2])}
      </div>
      <p style="text-align:center;margin-top:2rem;"><a href="collections-zh.html" class="btn-secondary">查看全部系列</a></p>
    </div>
  </section>"""


def render_en(product):
    p = product
    d = p["en"]
    slug = p["slug"]
    filename = f"product-{slug}.html"
    canonical = f"https://www.yixingdingyuan.cn/{filename}"
    lang_other = f"product-{slug}-zh.html"
    img0 = f"images/products/{p['images'][0]}"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{esc(d['title'])} | Dingyuan</title>
  <meta name="description" content="{esc(d['meta_desc'])}" />
  <meta name="keywords" content="{esc(d['keywords'])}" />
  <link rel="canonical" href="{canonical}" />
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "{esc(d['title'])}",
    "description": "{esc(d['short'])}",
    "brand": {{ "@type": "Brand", "name": "Dingyuan" }},
    "offers": {{
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "238",
      "availability": "https://schema.org/InStock"
    }}
  }}
  </script>
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body class="no-hero">

  <div class="scroll-progress" aria-hidden="true"></div>

  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="container">
      <a href="index.html" class="nav-logo" aria-label="Dingyuan — Home">
        <span class="logo-main">YIXING DINGYUAN</span>
        <span class="logo-zh">定渊国际</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="collections.html" class="active">Collections</a></li>
        <li><a href="craftsmanship.html">Craftsmanship</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-icons">
        <button class="nav-icon-btn" id="search-toggle" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="nav-icon-btn" id="cart-toggle" aria-label="Cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span class="cart-count">0</span>
        </button>
        <a href="{lang_other}" class="lang-toggle" aria-label="Switch to Chinese">中文</a>
        <button class="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <a href="index.html">Home</a>
    <a href="collections.html">Collections</a>
    <a href="craftsmanship.html">Craftsmanship</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
  </div>

  <main class="product-detail" aria-label="Product detail">
    <div class="container">
      <div class="product-detail-inner">

{gallery_block(p, "en")}

        <div class="product-info-section" role="region" aria-label="Product information">
          <nav class="product-breadcrumb" aria-label="Breadcrumb">
            <a href="index.html">Home</a>
            <span aria-hidden="true">/</span>
            <a href="collections.html">Collections</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{esc(d['breadcrumb'])}</span>
          </nav>

          <h1>{esc(d['title'])}</h1>
          <span class="product-zh-title">{p['zh']['title']}</span>

          <div class="product-price-block">
            <span class="product-price">$238</span>
            <span style="font-size:0.95rem;color:var(--color-text-muted);margin-left:0.5rem;">/ ¥1,680</span>
          </div>

          <div class="product-option-group">
            <label>Quantity</label>
            <div class="qty-selector" role="group" aria-label="Select quantity">
              <button class="qty-btn minus" aria-label="Decrease quantity">−</button>
              <input class="qty-input" type="number" value="1" min="1" max="99" aria-label="Quantity" />
              <button class="qty-btn plus" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div class="add-to-cart-row">
            <button class="btn-primary add-to-cart-btn"
              data-id="{p['id']}"
              data-name="{esc(d['title'])}"
              data-price="238"
              data-img="{img0}"
              aria-label="Add {esc(d['title'])} to cart">
              Add to Cart
            </button>
            <button class="wishlist-btn" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </button>
          </div>

          <div class="product-short-desc">
            <p>{esc(d['short'])}</p>
            <p>{esc(d['short_extra'])}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="product-tabs container" role="region" aria-label="Product details tabs">
      <div class="tabs-nav" role="tablist" aria-label="Product information tabs">
        <button class="tab-btn active" role="tab" aria-selected="true" aria-controls="tab-description" data-tab="description" id="btn-description">Description</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-material" data-tab="material" id="btn-material">Material</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-craft" data-tab="craft" id="btn-craft">Craftsmanship</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-care" data-tab="care" id="btn-care">Care Guide</button>
      </div>

      <div class="tab-content active" id="tab-description" role="tabpanel" aria-labelledby="btn-description">
        <h3>{esc(d['desc_title'])}</h3>
        <p>{esc(d['desc'])}</p>
      </div>

      <div class="tab-content" id="tab-material" role="tabpanel" aria-labelledby="btn-material">
{MATERIAL_EN}
      </div>

      <div class="tab-content" id="tab-craft" role="tabpanel" aria-labelledby="btn-craft">
        <h3>{esc(d['craft_title'])}</h3>
{craft_ul(d['craft_items'], 'en')}
      </div>

      <div class="tab-content" id="tab-care" role="tabpanel" aria-labelledby="btn-care">
{CARE_EN}
      </div>
    </div>
  </main>

{related_section('en', slug)}

  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-en">Dingyuan</span>
          <span class="logo-zh">定渊国际</span>
          <p>Authentic Yixing Zisha teapots — handcrafted by master artisans, shipped worldwide.</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="collections.html">Collections</a></li>
            <li><a href="craftsmanship.html">Craftsmanship</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="contact.html">Enquiries</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Authenticity</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@yixingdingyuan.cn</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Dingyuan International. All rights reserved.</p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="back-to-top" id="backToTop" aria-label="Back to top" title="Back to top">↑ Top</button>

  <div class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="Search teapots">
    <button class="search-close" id="search-close" aria-label="Close search">×</button>
    <div class="search-inner">
      <span class="search-label">Search Teapots</span>
      <div class="search-box">
        <input type="search" id="search-input" class="search-input" placeholder="Duanni, flat teapot…" autocomplete="off" aria-label="Search teapots" />
        <button class="search-submit" id="search-submit" aria-label="Search">→</button>
      </div>
    </div>
  </div>

  <div class="cart-overlay" id="cart-overlay" aria-hidden="true"></div>
  <aside class="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
    <div class="cart-drawer-header">
      <h2>Your Cart <span class="cart-drawer-count" id="cart-drawer-count"></span></h2>
      <button class="cart-close" id="cart-close" aria-label="Close cart">×</button>
    </div>
    <div class="cart-drawer-body" id="cart-drawer-body"></div>
    <div class="cart-drawer-footer" id="cart-drawer-footer" style="display:none;">
      <div class="cart-total">
        <span class="cart-total-label">Subtotal</span>
        <span class="cart-total-amount" id="cart-total-amount">$0</span>
      </div>
      <a href="contact.html" class="cart-checkout-btn">Enquire to Order</a>
      <p class="cart-note">Contact us to arrange payment and shipping.</p>
    </div>
  </aside>

  <script src="js/main.js"></script>
</body>
</html>
"""


def render_zh(product):
    p = product
    d = p["zh"]
    slug = p["slug"]
    en_file = f"product-{slug}.html"
    filename = f"product-{slug}-zh.html"
    canonical = f"https://www.yixingdingyuan.cn/{filename}"
    img0 = f"images/products/{p['images'][0]}"

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{d['title']} | 定渊国际</title>
  <meta name="description" content="{esc(d['meta_desc'])}" />
  <meta name="keywords" content="{esc(d['keywords'])}" />
  <link rel="canonical" href="{canonical}" />
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "{d['title']}",
    "description": "{esc(d['short'])}",
    "brand": {{ "@type": "Brand", "name": "定渊国际" }},
    "offers": {{
      "@type": "Offer",
      "priceCurrency": "CNY",
      "price": "1680",
      "availability": "https://schema.org/InStock"
    }}
  }}
  </script>
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body class="no-hero">

  <div class="scroll-progress" aria-hidden="true"></div>

  <nav class="navbar" role="navigation" aria-label="主导航">
    <div class="container">
      <a href="index-zh.html" class="nav-logo" aria-label="定渊国际 — 首页">
        <span class="logo-main">YIXING DINGYUAN</span>
        <span class="logo-zh">定渊国际</span>
      </a>
      <ul class="nav-links">
        <li><a href="index-zh.html">首页</a></li>
        <li><a href="collections-zh.html" class="active">作品系列</a></li>
        <li><a href="craftsmanship-zh.html">工艺传承</a></li>
        <li><a href="about-zh.html">关于我们</a></li>
        <li><a href="contact-zh.html">联系我们</a></li>
      </ul>
      <div class="nav-icons">
        <button class="nav-icon-btn" id="search-toggle" aria-label="搜索">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="nav-icon-btn" id="cart-toggle" aria-label="购物车">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span class="cart-count">0</span>
        </button>
        <a href="{en_file}" class="lang-toggle" aria-label="Switch to English">EN</a>
        <button class="hamburger" aria-label="切换移动端菜单" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <div class="mobile-menu" role="dialog" aria-modal="true" aria-label="移动端导航">
    <a href="index-zh.html">首页</a>
    <a href="collections-zh.html">作品系列</a>
    <a href="craftsmanship-zh.html">工艺传承</a>
    <a href="about-zh.html">关于我们</a>
    <a href="contact-zh.html">联系我们</a>
  </div>

  <main class="product-detail" aria-label="产品详情">
    <div class="container">
      <div class="product-detail-inner">

{gallery_block(p, "zh")}

        <div class="product-info-section" role="region" aria-label="产品信息">
          <nav class="product-breadcrumb" aria-label="面包屑">
            <a href="index-zh.html">首页</a>
            <span aria-hidden="true">/</span>
            <a href="collections-zh.html">作品系列</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{d['breadcrumb']}</span>
          </nav>

          <h1>{d['title']}</h1>
          <span class="product-zh-title">{p['en']['title']}</span>

          <div class="product-price-block">
            <span class="product-price">¥1,680</span>
            <span style="font-size:0.95rem;color:var(--color-text-muted);margin-left:0.5rem;">/ $238</span>
          </div>

          <div class="product-option-group">
            <label>数量</label>
            <div class="qty-selector" role="group" aria-label="选择数量">
              <button class="qty-btn minus" aria-label="减少数量">−</button>
              <input class="qty-input" type="number" value="1" min="1" max="99" aria-label="数量" />
              <button class="qty-btn plus" aria-label="增加数量">+</button>
            </div>
          </div>

          <div class="add-to-cart-row">
            <button class="btn-primary add-to-cart-btn"
              data-id="{p['id']}"
              data-name="{d['title']}"
              data-price="238"
              data-img="{img0}"
              aria-label="加入购物车">
              加入购物车
            </button>
            <button class="wishlist-btn" aria-label="加入心愿单">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </button>
          </div>

          <div class="product-short-desc">
            <p>{d['short']}</p>
            <p>{d['short_extra']}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="product-tabs container" role="region" aria-label="产品详情标签">
      <div class="tabs-nav" role="tablist" aria-label="产品信息标签">
        <button class="tab-btn active" role="tab" aria-selected="true" aria-controls="tab-description" data-tab="description" id="btn-description">产品描述</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-material" data-tab="material" id="btn-material">泥料</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-craft" data-tab="craft" id="btn-craft">工艺</button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-care" data-tab="care" id="btn-care">养护</button>
      </div>

      <div class="tab-content active" id="tab-description" role="tabpanel" aria-labelledby="btn-description">
        <h3>{d['desc_title']}</h3>
        <p>{d['desc']}</p>
      </div>

      <div class="tab-content" id="tab-material" role="tabpanel" aria-labelledby="btn-material">
{MATERIAL_ZH}
      </div>

      <div class="tab-content" id="tab-craft" role="tabpanel" aria-labelledby="btn-craft">
        <h3>{d['craft_title']}</h3>
{craft_ul(d['craft_items'], 'zh')}
      </div>

      <div class="tab-content" id="tab-care" role="tabpanel" aria-labelledby="btn-care">
{CARE_ZH}
      </div>
    </div>
  </main>

{related_section('zh', slug)}

  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-en">Dingyuan</span>
          <span class="logo-zh">定渊国际</span>
          <p>正宗宜兴紫砂壶 — 匠人手工制作，全球发货。</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>快速链接</h4>
          <ul>
            <li><a href="index-zh.html">首页</a></li>
            <li><a href="collections-zh.html">作品系列</a></li>
            <li><a href="craftsmanship-zh.html">工艺传承</a></li>
            <li><a href="about-zh.html">关于我们</a></li>
            <li><a href="contact-zh.html">联系我们</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>客户服务</h4>
          <ul>
            <li><a href="contact-zh.html">咨询</a></li>
            <li><a href="#">配送政策</a></li>
            <li><a href="#">退换货</a></li>
            <li><a href="#">真伪保障</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>联系方式</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@yixingdingyuan.cn</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 定渊国际. 保留所有权利.</p>
        <div class="footer-legal">
          <a href="privacy-zh.html">隐私政策</a>
          <a href="terms-zh.html">服务条款</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="back-to-top" id="backToTop" aria-label="返回顶部" title="返回顶部">↑ 顶部</button>

  <div class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="搜索茶壶">
    <button class="search-close" id="search-close" aria-label="关闭搜索">×</button>
    <div class="search-inner">
      <span class="search-label">搜索茶壶</span>
      <div class="search-box">
        <input type="search" id="search-input" class="search-input" placeholder="段泥、素壶…" autocomplete="off" aria-label="搜索茶壶" />
        <button class="search-submit" id="search-submit" aria-label="搜索">→</button>
      </div>
    </div>
  </div>

  <div class="cart-overlay" id="cart-overlay" aria-hidden="true"></div>
  <aside class="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-label="购物车">
    <div class="cart-drawer-header">
      <h2>购物车 <span class="cart-drawer-count" id="cart-drawer-count"></span></h2>
      <button class="cart-close" id="cart-close" aria-label="关闭购物车">×</button>
    </div>
    <div class="cart-drawer-body" id="cart-drawer-body"></div>
    <div class="cart-drawer-footer" id="cart-drawer-footer" style="display:none;">
      <div class="cart-total">
        <span class="cart-total-label">小计</span>
        <span class="cart-total-amount" id="cart-total-amount">$0</span>
      </div>
      <a href="contact-zh.html" class="cart-checkout-btn">咨询下单</a>
      <p class="cart-note">请联系我们安排付款与配送。</p>
    </div>
  </aside>

  <script src="js/main.js"></script>
</body>
</html>
"""


def main():
    written = []
    for product in PRODUCTS:
        en_name = f"product-{product['slug']}.html"
        zh_name = f"product-{product['slug']}-zh.html"
        en_path = OUT_DIR / en_name
        zh_path = OUT_DIR / zh_name
        en_path.write_text(render_en(product), encoding="utf-8")
        zh_path.write_text(render_zh(product), encoding="utf-8")
        written.extend([en_path, zh_path])
    print("Generated files:")
    for path in written:
        print(path)
    missing = [p for p in written if not p.is_file()]
    if missing:
        raise SystemExit(f"Missing after write: {missing}")
    print(f"OK: {len(written)} files verified.")


if __name__ == "__main__":
    main()
