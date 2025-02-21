import dotenv from "dotenv";
import { selectUsuarios } from "./bd.js";
import express from "express"
dotenv.config();

;      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3030;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Adriano MIranda",      // Substitua pelo seu nome
  });
});

//index.js
app.get("/usuario", async (req, res) => {
  console.log("Rota GET/usuario solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});