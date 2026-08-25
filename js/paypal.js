/**
 * PayPal checkout — hosted buttons (if configured) or dynamic Smart Buttons
 */
(function () {
  'use strict';

  var cfg = window.DY_PAYPAL;
  var container = document.getElementById('paypal-button-container');
  if (!cfg || !cfg.clientId || !container) return;

  var addBtn = document.querySelector('.add-to-cart-btn');
  if (!addBtn) return;

  var price = parseFloat(addBtn.getAttribute('data-price') || '0');
  var name = addBtn.getAttribute('data-name') || 'Yixing Zisha Teapot';
  var productId = addBtn.getAttribute('data-id') || '';
  var tier = price >= 500 ? 'master' : 'daily';
  var hostedId = (cfg.hostedButtons && cfg.hostedButtons[productId]) ||
    (cfg.hostedButtons && cfg.hostedButtons[tier]) || '';

  var isZh = (document.documentElement.lang || '').indexOf('zh') === 0;

  function sdkUrl(components) {
    return 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(cfg.clientId) +
      '&components=' + components +
      '&disable-funding=' + (cfg.disableFunding || 'venmo') +
      '&currency=' + (cfg.currency || 'USD');
  }

  function loadPayPal(components) {
    return new Promise(function (resolve, reject) {
      if (window.paypal) {
        resolve(window.paypal);
        return;
      }
      var existing = document.querySelector('script[data-dy-paypal-sdk]');
      if (existing) {
        existing.addEventListener('load', function () { resolve(window.paypal); });
        existing.addEventListener('error', reject);
        return;
      }
      var script = document.createElement('script');
      script.src = sdkUrl(components);
      script.setAttribute('data-dy-paypal-sdk', '1');
      script.onload = function () { resolve(window.paypal); };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function showSuccess(details) {
    var given = details.payer && details.payer.name && details.payer.name.given_name;
    var msg = isZh
      ? '付款成功' + (given ? '，' + given + '！' : '！') + '我们会尽快与您联系确认收货地址及发货事宜。'
      : 'Payment successful' + (given ? ', ' + given + '!' : '!') + ' We will contact you shortly to confirm shipping.';
    alert(msg);
  }

  function renderHosted(paypal) {
    paypal.HostedButtons({ hostedButtonId: hostedId })
      .render('#paypal-button-container')
      .catch(function () {
        container.innerHTML = '<p class="paypal-setup-note">' +
          (isZh ? 'PayPal 按钮加载失败，请检查 payment-config.js 中的按钮 ID。' : 'PayPal button failed to load. Check hostedButtons in payment-config.js.') +
          '</p>';
      });
  }

  function getQty() {
    var input = document.querySelector('.qty-input');
    var n = input ? parseInt(input.value, 10) : 1;
    return isNaN(n) || n < 1 ? 1 : Math.min(99, n);
  }

  function renderSmartButtons(paypal) {
    if (!paypal.Buttons) {
      container.innerHTML = '<p class="paypal-setup-note">' +
        (isZh ? '请在 PayPal 后台创建付款按钮，并将 hostedButtonId 填入 js/payment-config.js' : 'Create PayPal buttons in your dashboard and add hostedButtonId to js/payment-config.js') +
        '</p>';
      return;
    }

    paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 45 },
      createOrder: function (data, actions) {
        var qty = getQty();
        var unit = price.toFixed(2);
        var total = (price * qty).toFixed(2);
        return actions.order.create({
          purchase_units: [{
            description: name,
            amount: {
              currency_code: cfg.currency || 'USD',
              value: total,
              breakdown: {
                item_total: { currency_code: cfg.currency || 'USD', value: total }
              }
            },
            items: [{
              name: name.substring(0, 127),
              unit_amount: { currency_code: cfg.currency || 'USD', value: unit },
              quantity: String(qty),
              category: 'PHYSICAL_GOODS'
            }]
          }]
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(showSuccess);
      },
      onError: function () {
        alert(isZh ? 'PayPal 付款出现问题，请重试或通过联系我们下单。' : 'PayPal payment error. Please try again or contact us to order.');
      }
    }).render('#paypal-button-container');
  }

  if (hostedId) {
    loadPayPal('hosted-buttons').then(renderHosted).catch(function () {
      container.innerHTML = '<p class="paypal-setup-note">' +
        (isZh ? '无法加载 PayPal，请检查网络或按钮配置。' : 'Could not load PayPal. Check network or button config.') +
        '</p>';
    });
  } else {
    loadPayPal('buttons').then(renderSmartButtons).catch(function () {
      loadPayPal('hosted-buttons').then(function () {
        container.innerHTML = '<p class="paypal-setup-note">' +
          (isZh
            ? '请在 PayPal 后台（收款 → 付款链接/按钮）创建 $950 和 $238 两个按钮，把 ID 填入 js/payment-config.js 的 master / daily 字段。'
            : 'Create $950 and $238 PayPal buttons in your dashboard and add their IDs to master / daily in js/payment-config.js.') +
          '</p>';
      });
    });
  }
})();
