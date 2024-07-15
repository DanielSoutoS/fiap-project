const app = require("./app");
const { setupRedoc } = require("./Middlewares/redoc.middlware");

const config = require("./serverConfig.json");
const port = config.port;

setupRedoc(app); // Antes de instanciar o nosso app, podemos passar o nosso setup, passando a nossa instância da aplicação
app
  .listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  })
  .on("error", (err) => {
    console.error("Erro ao iniciar o servidor: ", err);
  });
