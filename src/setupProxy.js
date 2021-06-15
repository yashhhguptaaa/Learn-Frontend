const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mern-auth-template1.herokuapp.com',
      changeOrigin: true,
    })
  );
};