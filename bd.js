//bd.js
import pkg from "pg";
const { Pool } = pkg;

//bd.js
async function connect() { // depois mudar o nome da função pra não confundir com o método connet do pool
    const pool = new Pool({
      connectionString: process.env.URL_BD,
    });
    return pool.connect();
  }

  //bd.js
async function selectUsuarios() {
    const client = await connect();
    const res = await client.query("SELECT * FROM usuario");
    client.release();
    return res.rows;
  }

  //bd.js
async function selectUsuario(id) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  client.release();
  return res.rows;
}

  export { selectUsuarios, selectUsuario };