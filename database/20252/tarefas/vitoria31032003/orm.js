const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('atividadesbd', 'user', '1234', {
  host: '127.0.0.1',
  port: 5433,
  dialect: 'postgres',
});

const Projeto = sequelize.define('Projeto', {
  nome: DataTypes.STRING,
  lider: DataTypes.STRING,
}, {
  tableName: 'projeto',
  timestamps: false
});

const Atividade = sequelize.define('Atividade', {
  descricao: DataTypes.STRING,
}, {
  tableName: 'atividade',
  timestamps: false
});

Projeto.hasMany(Atividade, { foreignKey: 'id_projeto' });
Atividade.belongsTo(Projeto, { foreignKey: 'id_projeto' });

async function executar() {
  try {
    console.log("Conectando via ORM...");
    await sequelize.authenticate();

      await Atividade.create({
      descricao: 'Atividade ORM',
      id_projeto: 1
    });

    
    const projeto = await Projeto.findByPk(1);
    if (projeto) {
      projeto.lider = "Lider ORM";
      await projeto.save();
    }

   
    const dados = await Projeto.findAll({
      include: Atividade
    });

    console.log("Resultados ORM:");
    console.log(JSON.stringify(dados, null, 2));

  } catch (erro) {
    console.error("Erro:", erro.message);
  } finally {
    await sequelize.close();
    console.log("Conexão encerrada");
  }
}

executar();