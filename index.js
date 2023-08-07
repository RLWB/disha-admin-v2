const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const queryString = require("querystring");
const app = express();
const port = 4001;
app.use(express.static("static"));
app.use(express.json());
app.use(
  "/admin",
  createProxyMiddleware({
    // 转发地址
    target: "http://ceshi5.dishait.cn",
    changeOrigin: true,
    onProxyReq(proxyReq, req, res) {
      if (!req.body || !Object.keys(req.body).length) {
        return;
      }
      const contentType = proxyReq.getHeader("Content-Type");
      const writeBody = (bodyData) => {
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      };

      if (contentType.includes("application/json")) {
        writeBody(JSON.stringify(req.body));
      }

      if (contentType === "application/x-www-form-urlencoded") {
        writeBody(queryString.stringify(req.body));
      }
    },
    onProxyRes(proxyResponse, req, res) {
      console.log(req.body);
      var body = "";
      var _write = res.write;
      proxyResponse.on("data", function (chunk) {
        body += chunk;
      });
      proxyResponse.on("end", () => {
        res.write = function (data) {
          try {
            var jsonData = JSON.parse(data);
            jsonData.path = "实训26班最棒的！";
            // here we can modify jsonData
            var buf = Buffer.from(JSON.stringify(jsonData), "utf-8");
            _write.call(res, buf);
          } catch (err) {
            console.log(err);
          }
        };
      });
    },
    // onProxyRes: (proxyRes, req, res) => {
    //   let responseData = "";
    //   // 当接收到数据块时，将其拼接到 responseData 中
    //   proxyRes.on("data", (chunk) => {
    //     responseData += chunk;
    //   });
    //   // 当代理响应结束时，重写返回数据
    //   proxyRes.on("end", () => {
    //     try {
    //       // 在这里可以对 responseData 进行修改
    //       const modifiedData = JSON.parse(responseData.toString("utf8"));
    //       modifiedData.path = "实训26班最棒";
    //       res.end(JSON.stringify(modifiedData)); // 发送修改后的数据作为响应
    //     } catch (error) {
    //       console.error("Error modifying response data:", error);
    //       res.end(responseData); // 发送原始数据以防修改出错
    //     }
    //   });
    // },
  })
);

app.listen(port, () => {
  console.log("Server is success running!");
});
