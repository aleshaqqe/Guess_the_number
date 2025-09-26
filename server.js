// server.js
const http = require("http");

const hostname = "0.0.0.0"; // слушаем все интерфейсы (не только localhost)
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("<h1>Привет! Это мой локальный сайт 🚀</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен: http://${hostname}:${port}/`);
});