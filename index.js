const webServer = require("express");
const caminho = require("path");
const site = webServer();
const porta = 3000;

site.use(webServer.static(caminho.join(__dirname, "src")));

site.get("/", function (req, res) {
  res.sendFile(caminho.join(__dirname, "src/index.html"));
});

site.listen(porta, () => {
  console.log(
    "Clique aqui para acessar o meu site >> http://localhost:" + porta
  );
});
