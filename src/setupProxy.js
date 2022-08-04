const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/razorpay',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
};