const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { filterRes } = require("./middlewares/filterResponse");
const app = express();
const port = 4001;
app.use(express.static("static"));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(
  "/admin",
  createProxyMiddleware({
    // 转发地址
    target: "http://ceshi5.dishait.cn/",
    // 转发时重写路径
    pathRewrite: { "^/admin": "/admin" },
    changeOrigin: true,
    onProxyRes(proxyResponse, req, serverResponse) {
      var body = "";
      var _write = serverResponse.write;
      proxyResponse.on("data", function (chunk) {
        body += chunk;
      });

      serverResponse.write = function (data) {
        try {
          var jsonData = JSON.parse(data);
          console.log(jsonData);
          jsonData.path = "实训26班最棒的！";
          // here we can modify jsonData
          var buf = Buffer.from(JSON.stringify(jsonData), "utf-8");
          _write.call(serverResponse, buf);
        } catch (err) {
          console.log(err);
        }
      };
    },
  })
);

app.listen(port, () => {
  console.log("Server is success running!");
});
