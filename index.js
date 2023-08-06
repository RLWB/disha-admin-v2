const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = 4001;
app.use(express.static("static"));
app.use(
  "/admin",
  createProxyMiddleware({
    // 转发地址
    target: "http://ceshi5.dishait.cn",
    // 转发时重写路径
    pathRewrite: { "^/admin": "admin" },
    changeOrigin: true,
  })
);
app.listen(port, () => {
  console.log("Server is success running!");
});
