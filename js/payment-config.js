/**
 * PayPal payment configuration for Yixing Dingyuan
 * Client ID from PayPal Business → Pay link or button
 */
window.DY_PAYPAL = {
  clientId: 'BAAUyTkKK0LQAhZuvakURO7hWqZviH9jrKSvrcW5AG7QWwfqwdLLp1gm9aBc2eQQo_3JWBm3OB26swvmsc',
  currency: 'USD',
  disableFunding: 'venmo',

  /**
   * PayPal hosted button IDs — all products $238 USD.
   * Update button amount in PayPal dashboard to match.
   */
  hostedButtons: {
    default: 'RKD2ZZSF5JXQJ',
    master: 'RKD2ZZSF5JXQJ',
    daily: 'RKD2ZZSF5JXQJ'
  }
};
