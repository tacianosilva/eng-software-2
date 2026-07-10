from pymongo import MongoClient

# Conexão
client = MongoClient("mongodb://admin:password123@localhost:27017/")
db = client["AtividadesProj"]

# Dados iniciais
projetos = [
    {"nome": "Sistema de RH", "lider": "Ana Silva", "atividades": [{"id": 1, "titulo": "Modelagem"}]},
    {"nome": "App Mobile", "lider": "Beto Costa", "atividades": [{"id": 2, "titulo": "Design UI"}]},
    {"nome": "Portal Web", "lider": "Carla Dias", "atividades": [{"id": 3, "titulo": "Configuração Servidor"}]}
]

# Inserção
db.projetos.insert_many(projetos)
print("Banco de dados inicializado com sucesso!")