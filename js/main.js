(function () {
  "use strict";

  /* ── TRANSLATIONS ── */
  const translations = {
    zh: {
      brand: "定渊国际", "brand-en": "Dingyuan International",
      "nav-home": "首页", "nav-about": "关于我们", "nav-products": "产品系列",
      "nav-gallery": "产品展示", "nav-why": "合作优势", "nav-contact": "联系我们",
      "hero-tag": "宜兴紫砂 · 匠心传承",
      "hero-title-sub": "DINGYUAN INTERNATIONAL",
      "hero-desc": "专注大师级、收藏级、日用级紫砂全系列产品，为全球客户提供稳定供货与专业外贸服务。",
      "hero-cta1": "浏览产品", "hero-cta2": "获取报价",
      "stat1": "产品等级", "stat2": "出口服务", "stat3": "OEM定制",
      "teaser-about-title": "关于我们", "teaser-about-desc": "扎根宜兴，深耕紫砂茶具外贸多年",
      "teaser-products-title": "产品系列", "teaser-products-desc": "大师级、收藏级、日用级三大系列",
      "teaser-gallery-title": "产品展示", "teaser-gallery-desc": "实拍精品，每件均有品质保证",
      "teaser-why-title": "合作优势", "teaser-why-desc": "产区直供，外贸全流程专业服务",
      "teaser-contact-title": "联系我们", "teaser-contact-desc": "24小时回复，获取专属采购方案",
      "teaser-view": "了解更多",
      "quote-text": "一壶一世界，匠心铸千年",
      "quote-sub": "Yixing · Heritage · Excellence",
      "about-label": "关于我们", "about-title": "传承紫砂工艺，连接全球市场",
      "about-p1": "定渊国际扎根宜兴紫砂产区，深耕茶具外贸多年。我们整合大师手作、收藏珍品与日用精品三大产品线，为海外经销商、茶文化品牌及电商平台提供一站式采购方案。",
      "about-p2": "从选泥、成型、烧制到质检包装，全程严格把控品质。配合成熟的国际物流与多语种客服体系，让中国传统茶器走向世界。",
      "about-f1": "宜兴产区直采，品质可追溯",
      "about-f2": "大师级 / 收藏级 / 日用级分级供应",
      "about-f3": "外贸全流程支持，中英文双语服务",
      "about-badge": "源头直供",
      "products-label": "产品系列", "products-title": "三大等级，满足不同市场需求",
      "products-desc": "从艺术收藏到日常品茗，我们为每一位客户提供精准匹配的产品线。",
      "p1-name": "大师级", "p1-desc": "名家手作，限量珍品。水墨竹纹、古法刻绘等传统工艺，适合高端收藏与礼品渠道。",
      "p1-i1": "工艺美术师作品", "p1-i2": "附收藏证书", "p1-i3": "限量编号供应",
      "p2-name": "收藏级", "p2-desc": "精选泥料，精工细作。兼具实用与收藏价值，是茶文化爱好者的理想之选。",
      "p2-i1": "优质原矿紫砂", "p2-i2": "经典器型设计", "p2-i3": "礼盒包装可选",
      "p3-name": "日用级", "p3-desc": "高性价比日常茶具，适合电商零售、茶室配套及批量采购，稳定供货有保障。",
      "p3-i1": "量大价优", "p3-i2": "多款式可选", "p3-i3": "快速发货",
      "gallery-label": "产品展示", "gallery-title": "精选实拍",
      "g1": "水墨竹纹 · 大师手作", "g2": "经典器型", "g3": "匠心细节",
      "g4": "产区实拍", "g5": "传统工艺",
      "filter-all": "全部", "filter-master": "大师级", "filter-collector": "收藏级", "filter-daily": "日用级",
      "why-label": "合作优势", "why-title": "为什么选择定渊国际",
      "w1-t": "产区直供", "w1-d": "宜兴本地合作工坊，减少中间环节，价格更有竞争力。",
      "w2-t": "品质分级", "w2-d": "大师级、收藏级、日用级清晰划分，方便客户精准选品。",
      "w3-t": "外贸经验", "w3-d": "熟悉国际物流、报关及跨境支付，降低海外采购门槛。",
      "w4-t": "定制服务", "w4-d": "支持 OEM 贴牌、礼盒定制及器型开发，满足品牌差异化需求。",
      "contact-label": "联系我们", "contact-title": "开启合作，获取专属报价",
      "contact-desc": "填写右侧表单，我们将在 24 小时内与您联系。也欢迎通过邮件或微信咨询。",
      "email-label": "邮箱", "loc-label": "地址", "loc-val": "江苏省宜兴市 · 紫砂产区",
      "f-name": "姓名 / 公司", "f-name-ph": "您的姓名或公司名称", "f-email": "邮箱",
      "f-product": "感兴趣的产品",
      "f-opt1": "大师级", "f-opt2": "收藏级", "f-opt3": "日用级", "f-opt4": "全系列 / 不确定",
      "f-msg": "留言", "f-msg-ph": "请描述您的采购需求、数量及目标市场...",
      "f-submit": "发送询盘", "f-note": "提交后将打开邮件客户端，您也可直接发送邮件至上方地址。",
      "modal-inquiry": "联系询价",
      "footer": "© 2026 定渊国际 Dingyuan International. 保留所有权利。"
    },
    en: {
      brand: "Dingyuan International", "brand-en": "Zisha Teaware Export",
      "nav-home": "Home", "nav-about": "About", "nav-products": "Products",
      "nav-gallery": "Gallery", "nav-why": "Why Us", "nav-contact": "Contact",
      "hero-tag": "Yixing Zisha · Heritage Craft",
      "hero-title-sub": "DINGYUAN INTERNATIONAL",
      "hero-desc": "Master, collector, and daily-grade purple clay teaware — reliable supply and professional export services worldwide.",
      "hero-cta1": "View Products", "hero-cta2": "Get a Quote",
      "stat1": "Product Grades", "stat2": "Global Export", "stat3": "OEM Support",
      "teaser-about-title": "About Us", "teaser-about-desc": "Rooted in Yixing, dedicated to Zisha teaware export",
      "teaser-products-title": "Products", "teaser-products-desc": "Master, collector & daily grade product lines",
      "teaser-gallery-title": "Gallery", "teaser-gallery-desc": "Authentic product photography and details",
      "teaser-why-title": "Why Us", "teaser-why-desc": "Direct supply, full export service expertise",
      "teaser-contact-title": "Contact", "teaser-contact-desc": "24hr response, tailored procurement solutions",
      "teaser-view": "Explore",
      "quote-text": "One pot, one world — craftsmanship spanning millennia",
      "quote-sub": "Yixing · Heritage · Excellence",
      "about-label": "About Us", "about-title": "Heritage Craft, Global Reach",
      "about-p1": "Based in Yixing, China's renowned Zisha region, Dingyuan International integrates master-crafted, collector, and daily product lines for overseas distributors, tea brands, and e-commerce platforms.",
      "about-p2": "From clay selection and shaping to firing, QC, and packaging — every step is strictly controlled. With mature logistics and bilingual support, we bring Chinese tea culture to the world.",
      "about-f1": "Direct sourcing from Yixing workshops",
      "about-f2": "Master / Collector / Daily grade supply",
      "about-f3": "Full export support in Chinese & English",
      "about-badge": "Direct Supply",
      "products-label": "Product Lines", "products-title": "Three Grades for Every Market",
      "products-desc": "From art collection to daily tea enjoyment — the right product line for every customer.",
      "p1-name": "Master Grade", "p1-desc": "Artisan masterpieces and limited editions. Traditional bamboo ink and carving techniques for premium gifts and collectors.",
      "p1-i1": "Certified artisan works", "p1-i2": "Certificate of authenticity", "p1-i3": "Limited numbered supply",
      "p2-name": "Collector Grade", "p2-desc": "Premium clay, meticulous craftsmanship. Practical yet collectible — ideal for tea culture enthusiasts.",
      "p2-i1": "Authentic Yixing clay", "p2-i2": "Classic vessel designs", "p2-i3": "Gift box options",
      "p3-name": "Daily Grade", "p3-desc": "Cost-effective everyday teaware for retail, tea houses, and bulk orders with stable supply.",
      "p3-i1": "Volume pricing", "p3-i2": "Wide style selection", "p3-i3": "Fast shipping",
      "gallery-label": "Gallery", "gallery-title": "Product Showcase",
      "g1": "Bamboo Ink · Master Craft", "g2": "Classic Forms", "g3": "Fine Details",
      "g4": "Workshop Photos", "g5": "Traditional Technique",
      "filter-all": "All", "filter-master": "Master", "filter-collector": "Collector", "filter-daily": "Daily",
      "why-label": "Why Partner With Us", "why-title": "Why Choose Dingyuan International",
      "w1-t": "Direct Supply", "w1-d": "Local Yixing workshop partnerships — fewer middlemen, better prices.",
      "w2-t": "Clear Grading", "w2-d": "Master, collector, and daily grades clearly defined for easy sourcing.",
      "w3-t": "Export Expertise", "w3-d": "Experienced in international logistics, customs, and cross-border payment.",
      "w4-t": "Customization", "w4-d": "OEM branding, gift boxes, and new vessel development for your brand.",
      "contact-label": "Contact", "contact-title": "Start a Partnership — Get Your Quote",
      "contact-desc": "Fill out the form and we'll respond within 24 hours. Email or WeChat inquiries are also welcome.",
      "email-label": "Email", "loc-label": "Location", "loc-val": "Yixing, Jiangsu · Zisha Production Zone",
      "f-name": "Name / Company", "f-name-ph": "Your name or company", "f-email": "Email",
      "f-product": "Product Interest",
      "f-opt1": "Master Grade", "f-opt2": "Collector Grade", "f-opt3": "Daily Grade", "f-opt4": "All / Not sure",
      "f-msg": "Message", "f-msg-ph": "Describe your needs, quantity, and target market...",
      "f-submit": "Send Inquiry", "f-note": "Submitting opens your email client. You can also email us directly.",
      "modal-inquiry": "Contact for Price",
      "footer": "© 2026 Dingyuan International. All rights reserved."
    }
  };

  let currentLang = localStorage.getItem('dy-lang') || 'zh';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dy-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang][key];
      if (text !== undefined) {
        if (text.includes('<br')) { el.innerHTML = text; }
        else { el.textContent = text; }
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = translations[lang][key];
      if (text) el.placeholder = text;
    });
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
  }

  /* ── ACTIVE NAV ── */
  function setActiveNav() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
      const href = a.getAttribute('href') || '';
      if (href === file || (file === '' && href === 'index.html') ||
          (file === 'index.html' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  /* ── PRELOADER ── */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
        // Trigger homepage animations
        if (document.body.classList.contains('page-home')) {
          triggerHomeAnimations();
        }
      }, 900);
    } else {
      // No preloader on inner pages
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        // handled by observer
      });
    }
  });

  /* ── HOMEPAGE ANIMATIONS ── */
  function triggerHomeAnimations() {
    // Background image reveal
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 100);

    // Eyebrow line
    const eyebrow = document.querySelector('.hero-eyebrow-line');
    if (eyebrow) setTimeout(() => eyebrow.classList.add('visible'), 200);

    // Characters - one by one
    const chars = document.querySelectorAll('.hero-chars .char');
    chars.forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), 400 + i * 130);
    });

    // Subtitle
    const sub = document.querySelector('.hero-subtitle');
    if (sub) setTimeout(() => sub.classList.add('visible'), 400 + chars.length * 130 + 200);

    // Desc
    const desc = document.querySelector('.hero-desc');
    if (desc) setTimeout(() => desc.classList.add('visible'), 1300);

    // Actions
    const actions = document.querySelector('.hero-actions');
    if (actions) setTimeout(() => actions.classList.add('visible'), 1600);

    // Stats bar
    const stats = document.querySelector('.hero-stats-bar');
    if (stats) setTimeout(() => stats.classList.add('visible'), 1900);

    // Scroll hint
    const hint = document.querySelector('.hero-scroll-hint');
    if (hint) setTimeout(() => hint.classList.add('visible'), 2200);
  }

  /* ── PARTICLES ── */
  function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    const particles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkParticle(startFresh) {
      return {
        x: Math.random() * (W || window.innerWidth),
        y: startFresh ? (H || window.innerHeight) + 10 : Math.random() * (H || window.innerHeight),
        r: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.6 + 0.2,
        opacity: Math.random() * 0.35 + 0.05,
        drift: (Math.random() - 0.5) * 0.4,
        twinkle: Math.random() * Math.PI * 2
      };
    }

    for (let i = 0; i < 70; i++) particles.push(mkParticle(false));
    resize();
    window.addEventListener('resize', resize, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p, i) => {
        p.y -= p.speed;
        p.x += p.drift;
        p.twinkle += 0.02;
        const opacity = p.opacity * (0.7 + 0.3 * Math.sin(p.twinkle));
        if (p.y < -5 || p.x < -10 || p.x > W + 10) {
          particles[i] = mkParticle(true);
          particles[i].x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ── CUSTOM CURSOR ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    });
    (function animF() {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.transform = `translate(${fx - 16}px, ${fy - 16}px)`;
      requestAnimationFrame(animF);
    })();
  }

  /* ── HEADER SCROLL ── */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── MOBILE NAV ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── LANG TOGGLE ── */
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  /* ── PARALLAX ── */
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      heroBg.style.transform = `translateY(${s * 0.3}px) scale(1.05)`;
    }, { passive: true });
  }

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    function update() {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      if (start < target) requestAnimationFrame(update);
    }
    update();
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.counter), 1500);
          cObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObs.observe(c));
  }

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const product = form.product.options[form.product.selectedIndex].text;
      const message = form.message.value.trim();
      const subject = encodeURIComponent(
        currentLang === 'zh' ? `【定渊国际询盘】${name}` : `[Dingyuan Inquiry] ${name}`
      );
      const body = encodeURIComponent(
        `${currentLang === 'zh' ? '姓名/公司' : 'Name/Company'}: ${name}\n` +
        `${currentLang === 'zh' ? '邮箱' : 'Email'}: ${email}\n` +
        `${currentLang === 'zh' ? '产品' : 'Product'}: ${product}\n\n` + message
      );
      window.location.href = `mailto:info@dingyuan-intl.com?subject=${subject}&body=${body}`;
    });
  }

  /* ── GALLERY FILTER ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-item');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const grade = btn.dataset.filter;

        // Fade out non-matching
        productItems.forEach(item => {
          const match = grade === 'all' || item.dataset.grade === grade;
          if (!match) {
            item.classList.add('filtered-out');
          } else {
            item.classList.remove('filtered-out');
            item.style.display = '';
          }
        });

        // Hide after transition
        setTimeout(() => {
          productItems.forEach(item => {
            if (item.classList.contains('filtered-out')) {
              item.style.display = 'none';
            }
          });
        }, 350);
      });
    });
  }

  /* ── PRODUCT MODAL ── */
  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) {
    // Open modal
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.product-item');
        if (!item) return;

        const name = item.dataset.name || '';
        const nameEn = item.dataset.nameEn || '';
        const grade = item.dataset.gradeLabel || '';
        const desc = currentLang === 'zh' ? (item.dataset.desc || '') : (item.dataset.descEn || '');
        const material = item.dataset.material || '';
        const size = item.dataset.size || '';
        const img = item.dataset.img || '';

        modalOverlay.querySelector('.modal-grade').textContent = grade;
        modalOverlay.querySelector('.modal-name').textContent = currentLang === 'zh' ? name : nameEn;
        modalOverlay.querySelector('.modal-desc').textContent = desc;
        const imgEl = modalOverlay.querySelector('.modal-img img');
        if (imgEl && img) { imgEl.src = img; imgEl.alt = name; }

        const specs = modalOverlay.querySelectorAll('.modal-spec-value');
        if (specs[0]) specs[0].textContent = material;
        if (specs[1]) specs[1].textContent = size;

        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close modal
    function closeModal() {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
    const closeBtn = modalOverlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ── GALLERY: Restore filter from localStorage (from products page links) ── */
  if (filterBtns.length) {
    const savedFilter = localStorage.getItem('galleryFilter');
    if (savedFilter && savedFilter !== 'all') {
      // Activate the right filter button
      filterBtns.forEach(b => {
        b.classList.remove('active');
        if (b.dataset.filter === savedFilter) b.classList.add('active');
      });
      // Hide non-matching
      productItems.forEach(item => {
        if (item.dataset.grade !== savedFilter) {
          item.style.display = 'none';
        }
      });
      localStorage.removeItem('galleryFilter');
    }
  }

  /* ── INIT ── */
  applyLanguage(currentLang);
  setActiveNav();
  initParticles();

})();
