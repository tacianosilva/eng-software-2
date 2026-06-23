from pymongo import MongoClient

client = MongoClient("mongodb://admin:password123@localhost:27017/")
db = client["AtividadesProj"]
colecao = db.projetos

def create_atividade(projeto_nome, nova_atividade):
    colecao.update_one({"nome": projeto_nome}, {"$push": {"atividades": nova_atividade}})
    print(f"Atividade adicionada ao projeto {projeto_nome}!")

def read_projetos():
    for p in colecao.find():
        print(f"\nProjeto: {p['nome']} (Líder: {p['lider']})")
        for a in p.get('atividades', []):
            print(f" - Atividade: {a['titulo']}")

def update_lider(projeto_nome, novo_lider):
    colecao.update_one({"nome": projeto_nome}, {"$set": {"lider": novo_lider}})
    print(f"Líder do projeto {projeto_nome} atualizado para {novo_lider}!")

def delete_atividade(projeto_nome, atividade_id):
    colecao.update_one({"nome": projeto_nome}, {"$pull": {"atividades": {"id": atividade_id}}})
    print(f"Atividade removida do projeto {projeto_nome}!")

# Testando as funções
if __name__ == "__main__":
    print("--- Listando Projetos ---")
    read_projetos()
    
    print("\n--- Adicionando Atividade ---")
    create_atividade("Sistema de RH", {"id": 10, "titulo": "Teste de Software"})
    
    print("\n--- Atualizando Líder ---")
    update_lider("App Mobile", "Taciano Morais")
    
    print("\n--- Deletando Atividade ---")
    delete_atividade("Portal Web", 3)
    
    print("\n--- Resultado Final ---")
    read_projetos()