import odbc from 'odbc';

async function executar(): Promise<void> {
  let connection: any;

  try {
    console.log("Conectando via ODBC...");

    connection = await odbc.connect(
      "Driver={PostgreSQL Unicode};Server=127.0.0.1;Port=5433;Database=atividadesbd;Uid=user;Pwd=1234;"
    );

    console.log("Conectado com sucesso!");

    await connection.query(`
      INSERT INTO atividade (descricao, id_projeto)
      VALUES ('Atividade ODBC TS', 1)
    `);
    console.log("Atividade inserida");

    
    await connection.query(`
      UPDATE projeto
      SET lider = 'Lider'
      WHERE id = 1
    `);
    console.log("Projeto atualizado");

    const result = await connection.query(`
      SELECT p.nome AS projeto, a.descricao AS atividade
      FROM projeto p
      JOIN atividade a ON a.id_projeto = p.id
    `);

    console.log("Resultados:");
    console.log(result);

  } catch (erro: any) {
    console.error("Erro:", erro.message);
  } finally {
    if (connection) {
      await connection.close();
      console.log("Conexão encerrada");
    }
  }
}

executar();