/**
 * Yixing Zisha Teapot — Main JavaScript
 * Handles: custom cursor, navbar scroll, mobile menu, reveal animations,
 *          collections infinite scroll, product detail interactions,
 *          image lazy load, button press effects.
 */

(function () {
  'use strict';

  /* ============================================================
     1. Custom Cursor (Desktop only)
     ============================================================ */
  function initCursor() {
    // Skip on touch / mobile devices
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const ring = document.createElement('div');
    const dot  = document.createElement('div');
    ring.className = 'cursor-ring';
    dot.className  = 'cursor-dot';
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mouseX = -100, mouseY = -100;
    let ringX  = -100, ringY  = -100;
    let raf;

    // Track raw mouse position (dot follows immediately)
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });

    // Smooth ring animation via requestAnimationFrame
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      raf = requestAnimationFrame(animateRing);
    }
    raf = requestAnimationFrame(animateRing);

    // Hover effect: enlarge ring on interactive elements
    const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, label, .product-card, .thumbnail, .filter-pill, .tab-btn, .nav-icon-btn';

    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.remove('cursor-hover');
      }
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function () {
      ring.classList.add('cursor-hidden');
      dot.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', function () {
      ring.classList.remove('cursor-hidden');
      dot.classList.remove('cursor-hidden');
    });
  }

  /* ============================================================
     2. Navbar: scroll transparency → frosted glass
     ============================================================ */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function updateNav() {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ============================================================
     3. Scroll Progress Bar
     ============================================================ */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      const pct      = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ============================================================
     4. Mobile Hamburger Menu
     ============================================================ */
  function initMobileMenu() {
    const hamburger  = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    function toggleMenu() {
      const isOpen = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.classList.contains('active')) {
        toggleMenu();
      }
    });
  }

  /* ============================================================
     5. Active nav link based on current page
     ============================================================ */
  function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage ||
          (currentPage === '' && href === 'index.html') ||
          (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ============================================================
     6. Scroll Reveal (IntersectionObserver)
     ============================================================ */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ============================================================
     7. Lazy Image Loading (fade in on load)
     ============================================================ */
  function initLazyImages() {
    // Use native loading="lazy" + fade in when loaded
    function applyLoaded(img) {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });
        img.addEventListener('error', function () {
          img.classList.add('loaded'); // Show placeholder on error
        });
      }
    }

    document.querySelectorAll('img').forEach(applyLoaded);

    // Also observe dynamically added images (for infinite scroll)
    const mutObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            node.querySelectorAll('img').forEach(applyLoaded);
            if (node.tagName === 'IMG') applyLoaded(node);
          }
        });
      });
    });

    mutObserver.observe(document.body, { childList: true, subtree: true });
  }

  /* ============================================================
     8. Back to Top Button
     ============================================================ */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     9. Smooth Scroll for nav links
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('.nav-scroll, .nav-scroll-mobile').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* ============================================================
     10. Button Click Press Effect + Loading State
     ============================================================ */
  function initButtonEffects() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-primary, .btn-outline, .btn-outline-light, .quick-view-btn, .filter-pill, .tab-btn');
      if (!btn) return;
      btn.style.transform = 'translateY(1px) scale(0.98)';
      setTimeout(function () {
        btn.style.transform = '';
      }, 120);
    });

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-primary, .btn-add-cart');
      if (!btn) return;
      if (btn.dataset.loading === 'true') return;
      const original = btn.textContent;
      btn.dataset.loading = 'true';
      btn.textContent = 'Loading...';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        delete btn.dataset.loading;
      }, 1000);
    });
  }

  /* ============================================================
     9. Collections Page — Infinite Scroll
     ============================================================ */
  function initCollections() {
    const grid = document.getElementById('collections-grid');
    const loadArea = document.getElementById('load-more-area');
    if (!grid || !loadArea) return;

    // ── 30 mock products data ──
    const clays = ['Purple Clay', 'Red Clay', 'Beige Clay'];
    const capacities = ['150ml', '200ml', '250ml', '300ml', '400ml'];
    const styles = [
      'Classic Round', 'Dragon Egg', 'Flat Pear', 'Antique Round',
      'Square Lamp', 'Bonsai Form', 'Stone Scoop', 'Bamboo Knot',
      'Lotus Pod', 'Scholar Rock'
    ];
    const zhNames = [
      '经典圆壶', '龙蛋壶', '扁梨壶', '仿古圆壶',
      '四方灯壶', '树瘿壶', '石瓢壶', '竹节壶',
      '莲蓬壶', '文人石壶'
    ];

    const allProducts = Array.from({ length: 30 }, function (_, i) {
      const styleIdx = i % styles.length;
      const clay     = clays[i % clays.length];
      const cap      = capacities[i % capacities.length];
      const price    = (188 + i * 37).toFixed(0);
      const imgW     = 480;
      const imgH     = 480;
      const seed     = i + 1;
      return {
        id: seed,
        name: styles[styleIdx] + ' Teapot',
        zhName: zhNames[styleIdx],
        clay: clay,
        capacity: cap,
        price: '$' + price,
        badge: i < 3 ? 'New' : (i % 7 === 0 ? 'Popular' : ''),
        imgUrl: 'https://placehold.co/' + imgW + 'x' + imgH + '/E4DECE/3A3028?text=' + encodeURIComponent(styles[styleIdx])
      };
    });

    let loadedCount = 0;
    const batchSize = 8;
    let isLoading   = false;

    function renderProducts(products) {
      products.forEach(function (p) {
        const card = document.createElement('div');
        card.className = 'product-card reveal';
        card.innerHTML =
          '<a href="product.html" class="product-card-image">' +
            (p.badge ? '<span class="product-card-badge">' + p.badge + '</span>' : '') +
            '<img src="' + p.imgUrl + '" alt="' + p.name + ' — Yixing Zisha Teapot, ' + p.clay + ', ' + p.capacity + '" loading="lazy">' +
            '<div class="product-card-overlay">' +
              '<button class="quick-view-btn">Quick View</button>' +
            '</div>' +
          '</a>' +
          '<div class="product-card-info">' +
            '<h3>' + p.name + '</h3>' +
            '<div class="zh-name">' + p.zhName + ' · ' + p.clay + '</div>' +
            '<div class="price">' + p.price + '</div>' +
          '</div>';
        grid.appendChild(card);
      });

      // Trigger reveal for newly added cards
      setTimeout(initReveal, 50);
    }

    function loadMore() {
      if (isLoading || loadedCount >= allProducts.length) return;
      isLoading = true;
      loadArea.style.display = 'flex';

      // Simulate network delay
      setTimeout(function () {
        const batch = allProducts.slice(loadedCount, loadedCount + batchSize);
        renderProducts(batch);
        loadedCount += batch.length;

        if (loadedCount >= allProducts.length) {
          loadArea.style.display = 'none';
        }

        isLoading = false;
      }, 600);
    }

    // IntersectionObserver on load-more sentinel
    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) {
      const scrollObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      }, { rootMargin: '200px' });
      scrollObserver.observe(sentinel);
    }

    // Initial load
    loadMore();

    // Filter pills (visual only — filters applied client-side)
    document.querySelectorAll('.filter-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        const group = pill.closest('.filter-pills');
        group.querySelectorAll('.filter-pill').forEach(function (p) {
          p.classList.remove('active');
        });
        pill.classList.add('active');
      });
    });
  }

  /* ============================================================
     10. Product Detail Page
     ============================================================ */
  function initProductDetail() {
    // ── Thumbnail image switcher ──
    const mainImg      = document.getElementById('main-product-img');
    const thumbnails   = document.querySelectorAll('.thumbnail');

    if (mainImg && thumbnails.length) {
      thumbnails.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          const newSrc = thumb.getAttribute('data-src');
          const newAlt = thumb.getAttribute('data-alt') || '';

          // Fade out → swap → fade in
          mainImg.style.opacity = '0';
          setTimeout(function () {
            mainImg.src = newSrc;
            mainImg.alt = newAlt;
            mainImg.classList.remove('loaded');
            mainImg.addEventListener('load', function onLoad() {
              mainImg.classList.add('loaded');
              mainImg.removeEventListener('load', onLoad);
            });
            mainImg.style.opacity = '';
          }, 180);

          thumbnails.forEach(function (t) { t.classList.remove('active'); });
          thumb.classList.add('active');
        });
      });
    }

    // ── Tabs ──
    const tabBtns     = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-tab');
        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        tabContents.forEach(function (c) { c.classList.remove('active'); });
        btn.classList.add('active');
        const content = document.getElementById('tab-' + target);
        if (content) content.classList.add('active');
      });
    });

    // ── Quantity selector ──
    const qtyInput = document.querySelector('.qty-input');
    const qtyMinus = document.querySelector('.qty-btn.minus');
    const qtyPlus  = document.querySelector('.qty-btn.plus');

    if (qtyInput && qtyMinus && qtyPlus) {
      qtyMinus.addEventListener('click', function () {
        const val = parseInt(qtyInput.value, 10);
        if (val > 1) qtyInput.value = val - 1;
      });

      qtyPlus.addEventListener('click', function () {
        const val = parseInt(qtyInput.value, 10);
        if (val < 99) qtyInput.value = val + 1;
      });

      qtyInput.addEventListener('change', function () {
        let val = parseInt(qtyInput.value, 10);
        if (isNaN(val) || val < 1) val = 1;
        if (val > 99) val = 99;
        qtyInput.value = val;
      });
    }

    // ── Add to Cart button feedback ──
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function () {
        const original = addToCartBtn.textContent;
        addToCartBtn.textContent = 'Added ✓';
        addToCartBtn.style.background = 'var(--color-accent1)';
        setTimeout(function () {
          addToCartBtn.textContent = original;
          addToCartBtn.style.background = '';
        }, 2000);
      });
    }
  }

  /* ============================================================
     11. Contact Form — mailto: submission
     ============================================================ */
  function initContactForm() {
    var form    = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameEl    = form.querySelector('[name="name"]');
      var emailEl   = form.querySelector('[name="email"]');
      var subjectEl = form.querySelector('[name="subject"]');
      var msgEl     = form.querySelector('[name="message"]');

      var name    = nameEl    ? nameEl.value.trim()    : '';
      var email   = emailEl   ? emailEl.value.trim()   : '';
      var subject = subjectEl ? subjectEl.value.trim() : 'Website Enquiry';
      var msg     = msgEl     ? msgEl.value.trim()     : '';

      var mailSubject = encodeURIComponent('Enquiry from ' + (name || 'Customer') + ' — ' + subject);
      var mailBody    = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + msg
      );

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Opening email…';
        submitBtn.disabled = true;
      }

      window.open('mailto:info@yixingdingyuan.cn?subject=' + mailSubject + '&body=' + mailBody, '_self');

      setTimeout(function () {
        form.style.display = 'none';
        if (success) success.classList.add('visible');
      }, 1800);
    });
  }

  /* ============================================================
     12. Search Overlay
     ============================================================ */
  function initSearch() {
    var overlay   = document.getElementById('search-overlay');
    var toggleBtn = document.getElementById('search-toggle');
    var closeBtn  = document.getElementById('search-close');
    var input     = document.getElementById('search-input');
    var submitBtn = document.getElementById('search-submit');
    if (!overlay) return;

    function open() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { if (input) input.focus(); }, 120);
    }

    function close() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', open);
    if (closeBtn)  closeBtn.addEventListener('click', close);

    function doSearch() {
      var q = input ? input.value.trim() : '';
      if (!q) return;
      window.location.href = 'collections.html?q=' + encodeURIComponent(q);
    }

    if (submitBtn) submitBtn.addEventListener('click', doSearch);

    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') doSearch();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        open();
      }
    });

    // Close when clicking backdrop
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
  }

  /* ============================================================
     13. Cart Drawer
     ============================================================ */
  function initCart() {
    var cart = JSON.parse(localStorage.getItem('dy_cart') || '[]');

    var cartOverlay   = document.getElementById('cart-overlay');
    var cartDrawer    = document.getElementById('cart-drawer');
    var cartClose     = document.getElementById('cart-close');
    var cartToggle    = document.getElementById('cart-toggle');
    var cartBody      = document.getElementById('cart-drawer-body');
    var cartFooter    = document.getElementById('cart-drawer-footer');
    var cartTotal     = document.getElementById('cart-total-amount');
    var drawerCount   = document.getElementById('cart-drawer-count');

    function saveCart() {
      localStorage.setItem('dy_cart', JSON.stringify(cart));
    }

    function totalItems() {
      return cart.reduce(function (s, i) { return s + i.qty; }, 0);
    }

    function totalPrice() {
      return cart.reduce(function (s, i) {
        var num = parseFloat((i.price || '0').replace(/[^0-9.]/g, '')) || 0;
        return s + num * i.qty;
      }, 0);
    }

    function updateCountBadges() {
      var n = totalItems();
      document.querySelectorAll('.cart-count').forEach(function (el) {
        el.textContent = n;
      });
      if (drawerCount) {
        drawerCount.textContent = n > 0 ? '(' + n + ')' : '';
      }
    }

    function renderCart() {
      if (!cartBody) return;
      if (cart.length === 0) {
        cartBody.innerHTML =
          '<div class="cart-empty">' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>' +
            '<p>Your cart is empty.</p>' +
          '</div>';
        if (cartFooter) cartFooter.style.display = 'none';
        return;
      }

      var html = '';
      cart.forEach(function (item, idx) {
        html +=
          '<div class="cart-item">' +
            '<div class="cart-item-info">' +
              '<div class="cart-item-name">' + item.name + '</div>' +
              '<div class="cart-item-price">' + (item.price || '') + '</div>' +
              '<div class="cart-item-controls">' +
                '<button class="cart-qty-btn" data-action="dec" data-idx="' + idx + '" aria-label="Decrease quantity">−</button>' +
                '<span class="cart-qty-num">' + item.qty + '</span>' +
                '<button class="cart-qty-btn" data-action="inc" data-idx="' + idx + '" aria-label="Increase quantity">+</button>' +
              '</div>' +
              '<button class="cart-item-remove" data-idx="' + idx + '">Remove</button>' +
            '</div>' +
          '</div>';
      });
      cartBody.innerHTML = html;

      if (cartFooter) cartFooter.style.display = 'block';
      if (cartTotal)  cartTotal.textContent = '$' + totalPrice().toFixed(0);

      // Bind quantity buttons
      cartBody.querySelectorAll('.cart-qty-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx    = parseInt(btn.dataset.idx, 10);
          var action = btn.dataset.action;
          if (action === 'inc') cart[idx].qty = Math.min(99, cart[idx].qty + 1);
          if (action === 'dec') {
            cart[idx].qty = Math.max(1, cart[idx].qty - 1);
          }
          saveCart();
          updateCountBadges();
          renderCart();
        });
      });

      // Bind remove buttons
      cartBody.querySelectorAll('.cart-item-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.dataset.idx, 10);
          cart.splice(idx, 1);
          saveCart();
          updateCountBadges();
          renderCart();
        });
      });
    }

    function openCart() {
      if (!cartDrawer) return;
      renderCart();
      cartDrawer.classList.add('active');
      if (cartOverlay) cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeCart() {
      if (cartDrawer)  cartDrawer.classList.remove('active');
      if (cartOverlay) cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (cartToggle) cartToggle.addEventListener('click', openCart);
    if (cartClose)  cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Wire "Add to Cart" buttons
    document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name  = btn.dataset.product || 'Yixing Teapot';
        var card  = btn.closest('.product-card, .product-detail-inner');
        var priceEl = card ? card.querySelector('.price, .current-price') : null;
        var priceText = priceEl ? priceEl.firstChild.textContent.trim() : '';

        var existing = null;
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].name === name) { existing = cart[i]; break; }
        }
        if (existing) {
          existing.qty++;
        } else {
          cart.push({ name: name, price: priceText, qty: 1 });
        }
        saveCart();
        updateCountBadges();
        openCart();
      });
    });

    // Wire product detail "add to cart" button
    var addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function () {
        var qtyInput = document.querySelector('.qty-input');
        var qty      = qtyInput ? parseInt(qtyInput.value, 10) : 1;
        var nameEl   = document.querySelector('.product-name, h1.product-title, .product-detail h1');
        var name     = nameEl ? nameEl.textContent.trim() : 'Yixing Teapot';
        var priceEl  = document.querySelector('.current-price, .price');
        var price    = priceEl ? priceEl.firstChild.textContent.trim() : '';

        var existing = null;
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].name === name) { existing = cart[i]; break; }
        }
        if (existing) {
          existing.qty += qty;
        } else {
          cart.push({ name: name, price: price, qty: qty });
        }
        saveCart();
        updateCountBadges();
        openCart();
      });
    }

    // Init count display
    updateCountBadges();
  }

  /* ============================================================
     14. Init All
     ============================================================ */
  function init() {
    initNavbar();
    initScrollProgress();
    initMobileMenu();
    initActiveNav();
    initReveal();
    initLazyImages();
    initBackToTop();
    initSmoothScroll();
    initButtonEffects();
    initCollections();
    initProductDetail();
    initContactForm();
    initSearch();
    initCart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
