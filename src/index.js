import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

     
const app = express();              // Instancia o Express
const port = 5000;                  // Define a 

app.use(express.json());

router.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Adriano MIranda",      // Substitua pelo seu nome
  });
});



router.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});




//src/routes/usuario.js
const router = Router();

router.get("/usuario", async (req, res) => {
  console.log(`Rota GET /usuarios solicitada pelo usuario ${req.userId}`);
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});
export default router;

app.use(roteadorUsuario);
