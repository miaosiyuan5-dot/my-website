/*
 * 图片懒加载（lazyload）
 * ------------------------------------------------------------
 * 策略：
 *   1. 优先使用浏览器原生 loading="lazy"（现代浏览器全支持，零成本）
 *   2. 浏览器不支持时，自动回退到 IntersectionObserver
 *   3. 都不支持的极老浏览器，直接加载全部图片（保证能看到）
 *
 * 用法：
 *   - 把需要懒加载的图片这样写（真实地址放 data-src / data-srcset，
 *     src 放一张极小的占位图或留空的 1x1 透明图）：
 *
 *     <img
 *        data-src="images/optimized/photo-1280.jpg"
 *        data-srcset="images/optimized/photo-640.jpg 640w, images/optimized/photo-1280.jpg 1280w"
 *        sizes="(max-width: 640px) 100vw, 640px"
 *        width="1280" height="800"
 *        alt="描述文字"
 *        class="lazy"
 *        loading="lazy" />
 *
 *   - 然后在页面底部（</body> 之前）引入本文件：
 *     <script src="js/lazyload.js" defer></script>
 *
 *   注意：一定要给 <img> 写 width 和 height（或用 CSS 固定宽高比），
 *   否则图片加载时页面会跳动。
 */
(function () {
  'use strict';

  // 1x1 透明占位图，避免出现裂图图标
  var PLACEHOLDER =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  function loadImage(img) {
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
      img.removeAttribute('data-srcset');
    }
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
    img.classList.remove('lazy');
    img.classList.add('lazy-loaded');
  }

  function init() {
    var lazyImages = Array.prototype.slice.call(
      document.querySelectorAll('img.lazy')
    );
    if (lazyImages.length === 0) return;

    // 给还没设占位的图片补一张透明占位，防裂图
    lazyImages.forEach(function (img) {
      if (!img.getAttribute('src')) img.src = PLACEHOLDER;
    });

    var supportsNativeLazy = 'loading' in HTMLImageElement.prototype;

    if (supportsNativeLazy) {
      // 原生懒加载：把真实地址直接赋给 src/srcset，浏览器自己按需加载
      lazyImages.forEach(function (img) {
        loadImage(img);
      });
      return;
    }

    // 回退：IntersectionObserver
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              loadImage(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        {
          // 提前 200px 开始加载，体验更顺滑
          rootMargin: '200px 0px',
          threshold: 0.01,
        }
      );
      lazyImages.forEach(function (img) {
        observer.observe(img);
      });
      return;
    }

    // 最终兜底：极老浏览器，直接全部加载
    lazyImages.forEach(function (img) {
      loadImage(img);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
