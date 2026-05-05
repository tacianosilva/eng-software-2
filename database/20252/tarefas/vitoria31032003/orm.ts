import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface ProjetoAttributes {
  id: number;
  nome: string;
  lider: string;
}

interface ProjetoCreationAttributes extends Optional<ProjetoAttributes, 'id'> {}

interface AtividadeAttributes {
  id: number;
  descricao: string;
  id_projeto: number;
}

interface AtividadeCreationAttributes extends Optional<AtividadeAttributes, 'id'> {}


const sequelize = new Sequelize('atividadesbd', 'user', '1234', {
  host: '127.0.0.1',
  port: 5433,
  dialect: 'postgres',
  logging: false
});


class Projeto extends Model<ProjetoAttributes, ProjetoCreationAttributes>
  implements ProjetoAttributes {

  public id!: number;
  public nome!: string;
  public lider!: string;
}

Projeto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  lider: DataTypes.STRING
}, {
  sequelize,
  tableName: 'projeto',
  timestamps: false
});



class Atividade extends Model<AtividadeAttributes, AtividadeCreationAttributes>
  implements AtividadeAttributes {

  public id!: number;
  public descricao!: string;
  public id_projeto!: number;
}

Atividade.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: DataTypes.STRING,
  id_projeto: DataTypes.INTEGER
}, {
  sequelize,
  tableName: 'atividade',
  timestamps: false
});


Projeto.hasMany(Atividade, { foreignKey: 'id_projeto' });
Atividade.belongsTo(Projeto, { foreignKey: 'id_projeto' });


async function executar() {
  try {
    console.log("Conectando via ORM...");

    await sequelize.authenticate();
    console.log("Conectado com sucesso!");
    

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

  } catch (erro: any) {
    console.error("Erro:", erro.message);
  } finally {
    await sequelize.close();
    console.log("Conexão encerrada");
  }
}

executar();