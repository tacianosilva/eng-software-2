const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  password: '1234',
  database: 'atividadesbd',
  host: '127.0.0.1', // evita conflito com localhost
  port: 5433,
});

class JDBC {
  async inserirAtividade(descricao, id_projeto) {
    const sql = `
      INSERT INTO atividade (descricao, id_projeto)
      VALUES ($1, $2)
    `;
    await pool.query(sql, [descricao, id_projeto]);
  }

  async atualizarLider(id, lider) {
    const sql = `
      UPDATE projeto
      SET lider = $1
      WHERE id = $2
    `;
    await pool.query(sql, [lider, id]);
  }

  async listarProjetos() {
    const sql = `
      SELECT p.nome AS projeto, a.descricao AS atividade
      FROM projeto p
      JOIN atividade a ON a.id_projeto = p.id
    `;
    const result = await pool.query(sql);
    return result.rows;
  }
}

async function executar() {
  const jdbc = new JDBC();

  try {
    console.log("✅ Conectando via JDBC...");

    await jdbc.inserirAtividade("Atividade JDBC", 1);
    await jdbc.atualizarLider(1, "Lider JDBC");

    const dados = await jdbc.listarProjetos();
    console.log("📊 Resultados:");
    console.log(dados);

  } catch (err) {
    console.error("❌ Erro:", err.message);
  } finally {
    await pool.end();
    console.log("🔌 Conexão encerrada");
  }
}

executar();