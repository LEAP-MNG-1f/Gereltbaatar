// import express from "express";

// const server = express();
// const PORT = 8888;

// server.get("/", (_, response) => {
//   response.send("express hello world");
// });

// server.listen(PORT, () => {
//   console.log(`server is running in http://localhost:${PORT}`);
// });

const http = require("http");

const server = http.createServer((_, response) => {
  console.log(_);
  response.end("http hello world");
});

server.listen(3333);