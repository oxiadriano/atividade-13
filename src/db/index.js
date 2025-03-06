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

  //bd.js
async function insertUsuario(data) {
  const client = await connect();
  const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
  const usuario = [data.nome, data.senha, data.email];
  await client.query(query, usuario);
  client.release();
}

//bd.js
async function deleteUsuario(id) {
  const client = await connect();
  const query = "DELETE FROM usuario WHERE id = $1";
  await client.query(query, [id]);
  client.release();
}


//bd.js
async function updateUsuario(id, data) {
  const client = await connect();
  const query = "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const usuario = [data.nome, data.email, data.senha, id];
  await client.query(query, usuario);
  client.release();
}


//bd.js
export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario };