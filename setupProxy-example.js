const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/robinreserve/v1/zones", {
      // logLevel: "debug",
      target: "http://localhost:3020",
      changeOrigin: true,
    })
  );
};
