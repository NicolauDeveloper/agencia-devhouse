// criando um servidor http

const express = require("express");
const rotasDeProdutos = require("./routes/produtos");
const rotas = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/manutencao", (req, res) => {
  res.sendFile(__dirname + "/views/manutencao.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/views/contato.html");
});

app.post("/receber-contato", (req, res) => {
  console.log(req.body);
  res.send("Contato recebido por:" + req.body.nome);
});
app.use(rotasDeProdutos);
app.use(rotas);

app.listen(3000);

