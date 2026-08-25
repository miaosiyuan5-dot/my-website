/**
 * PayPal payment configuration for Yixing Dingyuan
 * Client ID from PayPal Business → Pay link or button
 */
window.DY_PAYPAL = {
  clientId: 'BAAUyTkKK0LQAhZuvakURO7hWqZviH9jrKSvrcW5AG7QWwfqwdLLp1gm9aBc2eQQo_3JWBm3OB26swvmsc',
  currency: 'USD',
  disableFunding: 'venmo',

  /**
   * Optional hosted button IDs from PayPal dashboard.
   * Create buttons at https://www.paypal.com/buttons — copy each hostedButtonId here.
   * Per-product ID takes priority; otherwise tier fallback (master = $950, daily = $238).
   */
  hostedButtons: {
    // 'master-tiliang-narcissus': 'PASTE_BUTTON_ID',
    master: '',
    daily: ''
  }
};
