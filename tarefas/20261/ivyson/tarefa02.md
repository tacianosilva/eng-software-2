# Tarefa 02 - Teste de Unidade

## Dados do aluno

- Nome: Ivyson Wanderson Nunes Martins
- Usuário GitHub: ivyson0
- E-mail: ivyson.nunes.707@ufrn.edu.br

## Repositório do projeto

[Link para o repositório do projeto](https://github.com/ivyson0/ProjetoEngenharia1)


## Questão 9
### A) Testes de Unidade 
A ideia dos testes de software é verificar se uma aplicação ou sistema está funcionando como o esperado, de acordo com seus requisitos especificados.

Os testes de unidade têm como foco avaliar um único componente ou uma unidade do software de forma isolada. Geralmente, são implementados pelo desenvolvedor, que isola essas unidades para confirmar a qualidade de uma funcionalidade antes mesmo de ela chegar ao processo de integração. Esses testes incentivam a detecção precoce de erros, o que agiliza o processo de desenvolvimento e, a longo prazo, reduz a necessidade de depuração.


### B) Linguagem de Programação e Stack
A linguagem de programação utilizada no projeto é o Python, uma linguagem interpretada, de alto nível e com sintaxe simples, o que facilita o desenvolvimento e aumenta a produtividade.

A stack utilizada no projeto é composta principalmente por:

- Python (linguagem principal)
- Django (framework web)
- ORM do Django (mapeamento objeto-relacional)
- Banco de dados (PostgreSQL ou SQLite, dependendo do ambiente)

O Django é um framework web em Python que acelera o desenvolvimento de aplicações robustas e seguras, oferecendo funcionalidades como autenticação, roteamento de URLs e integração com banco de dados.

Além disso, o Django utiliza o padrão ORM (Object-Relational Mapping), que permite interagir com o banco de dados sem a necessidade de escrever SQL diretamente na maioria dos casos.


### C) Framework de Testes
O framework de testes utilizado na linguagem Python é o unittest, que faz parte da biblioteca padrão da linguagem. Ele permite a criação de testes automatizados para verificar unidades isoladas do código, garantindo que cada parte do sistema funcione corretamente de forma independente. 

O Django utiliza o unittest como base para seu sistema de testes, adicionando recursos específicos para aplicações web, como a criação de um banco de dados separado durante a execução dos testes, o que evita qualquer impacto nos dados da aplicação em produção. Além disso, o framework permite organizar os testes em classes, o que facilita a manutenção, a leitura e a execução automatizada dos testes.

Link: https://docs.python.org/3/library/unittest.html


### D) IDE e ferramentas de depuração
A ferramenta utilizada é o Visual Studio Code (VS Code). Embora não seja originalmente uma IDE completa, pode ser configurado como tal por meio de extensões, oferecendo suporte para diversas linguagens e facilitando o desenvolvimento de software.

Em relação à depuração, o VS Code possui ferramentas integradas que permitem acompanhar a execução do código, definir pontos de parada (breakpoints) e analisar o comportamento do programa durante sua execução, o que facilita a identificação e correção de erros.


### E) Tutorial de CRUD com Testes
O tutorial demonstra como implementar operações de CRUD no Django REST Framework utilizando diferentes abordagens, como funções, APIView e ModelViewSet. Também apresenta o uso de roteadores para automatizar a criação de rotas da API.

A parte de testes é apresentada no repositório do projeto no GitHub associado ao tutorial, onde são implementados testes automatizados para validar os endpoints e garantir o correto funcionamento das operações de criação, leitura, atualização e remoção de dados.

Link do artigo: https://medium.com/djangotube/django-rest-api-curd-example-61c3a29b22ed  
Link do repositório: https://github.com/hemanth-sp/django_rest_curd


### F) Mock Objects
Mock objects são objetos simulados utilizados em testes de unidade para imitar o comportamento de dependências reais do sistema. Eles permitem testar uma unidade de forma isolada, substituindo componentes externos ou complexos, como acesso a banco de dados ou APIs externas. Dessa forma, facilitam a execução dos testes e tornam os resultados mais controlados, previsíveis e independentes do ambiente real.


## Questão 10
### A) Descrição do CRUD
O CRUD de Dívida foi implementado utilizando views baseadas em função no Django. A operação de inserção (Create) ocorre na função divida_manager, quando uma nova dívida é cadastrada por meio de um formulário. A consulta (Read) é realizada na função get_dividas, que permite listar e filtrar dívidas por critérios como CPF do cliente, status e valor.

A atualização (Update) também ocorre na função divida_manager, ao editar uma dívida existente a partir do parâmetro cod_divida. Já a exclusão (Delete) é realizada na mesma função, quando a requisição POST contém a ação de excluir. Esse CRUD foi implementado utilizando formulários do Django e renderização de templates HTML, caracterizando uma abordagem tradicional baseada em views e não em API REST.


### B) Implementação de Testes e Mock Objects
Foram implementados testes de unidade para as operações de CRUD da entidade Dívida, incluindo criação, leitura, atualização e remoção de registros utilizando a classe TestCase do Django. Além dos testes diretos com banco de dados, também foram utilizados Mock Objects por meio do unittest.mock.patch para simular comportamentos de métodos do modelo, como create, count, save e delete, permitindo testar as funcionalidades de forma isolada.

A principal dificuldade encontrada foi na utilização de Mock Objects e na configuração do ambiente de testes e depuração no Django, especialmente no entendimento de como isolar corretamente as dependências. Após essa etapa inicial, a implementação dos testes se tornou mais clara e eficiente para validar o comportamento do sistema.

Link para os testes: https://github.com/ivyson0/ProjetoEngenharia1/blob/main/antiveaco/tests.py


### C) Testes Unitários vs Testes de Integração
Testes de integração verificam se diferentes partes do sistema funcionam corretamente em conjunto, como a interação entre models, banco de dados e regras de negócio. Diferente dos testes unitários, que testam partes isoladas do código, os testes de integração validam o comportamento do sistema com seus componentes integrados.

No meu caso, foram implementados principalmente testes de unidade utilizando a classe TestCase do Django e Mock Objects com unittest.mock.patch. Os testes com banco de dados utilizam um ambiente de testes isolado do Django, enquanto os mocks foram usados para simular comportamentos de métodos como create, count, save e delete, permitindo validar partes do sistema de forma isolada.