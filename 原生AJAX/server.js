const express = require("express");

const app = express();

// 使用解析urlencoded形式的请求体参数的中间件
app.use(express.urlencoded({ extended: true }));

app.disable("x-powered-by");

// 暴露静态资源
app.use(express.static("./src"));

// query接收方式
app.get("/test_get", (req, res) => {
  console.log("query参数:", req.query);
  res.send("hello, get!");
});
// params接收方式
app.get("/test_get/:name/:age", (req, res) => {
  console.log("params参数:", req.params);
  res.send("hello, get!");
});

app.get("/get_person", (req, res) => {
  const person = { name: "zhh", age: 21 };
  res.send(JSON.stringify(person));
});

app.get("/get_person_delay", (req, res) => {
  const person = { name: "zhh", age: 21 };
  setTimeout(() => {
    res.send(JSON.stringify(person));
  }, 3000);
});

app.post("/test_post", (req, res) => {
  //   console.log("query参数:", req.query);
  console.log("请求体参数:", req.body);
  res.send("hello, post!");
});
app.post("/test_post/:name/:age", (req, res) => {
  console.log("params参数:", req.params);
  res.send("hello, post!");
});

app.get("/test_jquery_get_person", (req, res) => {
  console.log(req.query);
  const person = { name: "Riven", age: 21, sex: "女" };
  res.send(JSON.stringify(person));
});

app.post("/test_jquery_post", (req, res) => {
  console.log("请求体参数:", req.body);
  res.send("jquery的post请求");
});

app.listen(8080, (err) => {
  if (!err) {
    console.log("测试ajax的服务器启动成功!");
  }
});
