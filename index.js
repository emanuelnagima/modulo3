//                                                                   Servidor web
import express from "express";
import rotaUsuario from "./controller/routes/rotaUsuario.js";

const host = "0.0.0.0"; //     Disponível em qualquer interface
const porta = 4000;

const app = express(); //   Inicializa o app antes de usá-lo

//   Preparar aplicação para manipular dados no formato JSON
app.use(express.json());

app.use("/usuarios", rotaUsuario);

app.listen(porta, host, () => {
    console.log("Servidor backend em execução em http://" + host + ":" + porta);
});
