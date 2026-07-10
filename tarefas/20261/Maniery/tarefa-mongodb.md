# Tarefa - MongoDB

## 1. Links do Projeto
* [Script de Inicialização](./init_db.py)
* [Programa CRUD Principal](./main.py)
* [Configuração Docker](./docker-compose.yml)

## 2. Resumo sobre MongoDB
O MongoDB é um banco de dados NoSQL orientado a documentos. Diferente dos bancos tradicionais que usam tabelas e linhas, o MongoDB armazena dados em estruturas flexíveis chamadas BSON (uma versão binária do JSON). Suas principais características são a alta performance, escalabilidade horizontal e um esquema dinâmico, o que permite que diferentes documentos na mesma coleção tenham estruturas distintas.

## 3. Alta Disponibilidade (Replica Sets)
Um **Replica Set** no MongoDB é um grupo de instâncias (servidores) que mantêm o mesmo conjunto de dados, garantindo que o sistema continue funcionando mesmo se um servidor falhar.

### Papéis dos Membros:
* **Primário:** É o único membro que recebe todas as operações de escrita.
* **Secundário:** Replica os dados do primário para manter uma cópia idêntica. Pode atender operações de leitura.
* **Arbiter:** Não guarda dados. Sua única função é participar de votações para eleger um novo Primário caso o atual fique offline.

### Configuração de um Replica Set (3 membros):
Para transformar um servidor simples em um Replica Set de 3 membros via Docker, os passos essenciais são:
1. Configurar o `docker-compose.yml` com três serviços de mongo (ex: mongo1, mongo2, mongo3), cada um com a flag `--replSet rs0`.
2. Iniciar os containers.
3. No Mongo Shell do servidor principal, executar o comando de inicialização:
   ```javascript
   rs.initiate({
     _id: "rs0",
     members: [
       { _id: 0, host: "mongo1:27017" },
       { _id: 1, host: "mongo2:27017" },
       { _id: 2, host: "mongo3:27017" }
     ]
   })