import dotenv from "dotenv";
import express from "express";
import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./bd.js";
import roteadorUsuario from "./routes/usuario.js";


dotenv.config();

     // Requisição do pacote do express
const app = express();              // Instancia o Express

app.use(express.json());
const port = 5000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Adriano MIranda",      // Substitua pelo seu nome
  });
});



//index.js




app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(roteadorUsuario);
