const express = require("express");
const server = express();
const path = require("path");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));

server.get("/inicio", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

server.listen(3333, () => {
  console.log("Servidor aberto!");
});
