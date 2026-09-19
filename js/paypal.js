/**
 * PayPal Hosted Buttons — official embed pattern
 * https://www.paypal.com/buttons
 */
(function () {
  'use strict';

  var cfg = window.DY_PAYPAL;
  if (!cfg) return;

  var addBtn = document.querySelector('.add-to-cart-btn');
  if (!addBtn) return;

  var price = parseFloat(addBtn.getAttribute('data-price') || '0');
  var productId = addBtn.getAttribute('data-id') || '';
  var tier = price >= 500 ? 'master' : 'daily';
  var hostedId = (cfg.hostedButtons && cfg.hostedButtons[productId]) ||
    (cfg.hostedButtons && cfg.hostedButtons[tier]) ||
    (cfg.hostedButtons && cfg.hostedButtons.default) || '';

  var isZh = (document.documentElement.lang || '').indexOf('zh') === 0;
  var containerId = hostedId ? 'paypal-container-' + hostedId : 'paypal-button-container';
  var container = document.getElementById(containerId);

  if (!container) {
    var wrap = document.querySelector('.paypal-checkout-block');
    if (!wrap || !hostedId) return;
    container = document.createElement('div');
    container.id = containerId;
    container.className = 'paypal-button-container';
    container.setAttribute('aria-label', isZh ? 'PayPal 付款' : 'PayPal checkout');
    wrap.appendChild(container);
  }

  if (!hostedId) {
    container.innerHTML = '<p class="paypal-setup-note">' +
      (isZh ? '请在 js/payment-config.js 中配置 PayPal 按钮 ID。' : 'Configure PayPal hostedButtonId in js/payment-config.js.') +
      '</p>';
    return;
  }

  var selector = '#' + containerId;

  function render(paypal) {
    if (!paypal || !paypal.HostedButtons) {
      container.innerHTML = '<p class="paypal-setup-note">' +
        (isZh ? 'PayPal SDK 加载失败，请刷新页面重试。' : 'PayPal SDK failed to load. Please refresh and try again.') +
        '</p>';
      return;
    }

    paypal.HostedButtons({
      hostedButtonId: hostedId
    }).render(selector).catch(function () {
      container.innerHTML = '<p class="paypal-setup-note">' +
        (isZh ? 'PayPal 按钮加载失败，请检查按钮 ID：' : 'PayPal button failed to load. Check button ID: ') +
        hostedId + '</p>';
    });
  }

  function waitForPayPal(attempt) {
    if (window.paypal && window.paypal.HostedButtons) {
      render(window.paypal);
      return;
    }
    if (attempt > 120) {
      container.innerHTML = '<p class="paypal-setup-note">' +
        (isZh ? '无法连接 PayPal，请检查网络。' : 'Could not connect to PayPal. Check your network.') +
        '</p>';
      return;
    }
    setTimeout(function () { waitForPayPal(attempt + 1); }, 50);
  }

  waitForPayPal(0);
})();
