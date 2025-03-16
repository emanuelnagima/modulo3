
//servidor web
import express from "express";
import rotaUsuario from "./controller/routes/rotaUsuario";


const host = '0.0.0.0'; //disponivel em qualquer interface
const porta = 4000;

const app = express();
app.use("usuarios", rotaUsuario);


app.listen(porta,host,()=>{
    console.log("Servidor backend em execução em http://"+host+":"+porta);
});