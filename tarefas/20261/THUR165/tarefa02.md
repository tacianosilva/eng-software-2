# Tarefa 02 - Teste de Unidade

Nome: Arthur De Medeiros Dantas  
GitHub: THUR165  
Email: arthur.dantas.017@ufrn.edu.br  

Repositório do Projeto: https://github.com/expeditofranca/ProjetoEngenharia1

# Testes De Unidade

Testes de software são técnicas utilizadas para verificar se um sistema está funcionando corretamente de acordo com os requisitos definidos. Eles têm como objetivo identificar falhas, garantir qualidade e aumentar a confiabilidade do sistema.

Dentre os tipos de testes existentes, destacam-se os testes de unidade, testes de integração, testes de sistema e testes de aceitação.

Os testes de unidade são responsáveis por validar pequenas partes isoladas do sistema, como funções, métodos ou classes. Esses testes são geralmente automatizados e escritos pelos próprios desenvolvedores durante o desenvolvimento.

A principal característica dos testes de unidade é o isolamento, ou seja, cada teste deve verificar apenas uma unidade do sistema sem depender de outros componentes externos, como banco de dados, APIs ou serviços.

A importância dos testes de unidade está em:
- Detectar erros rapidamente durante o desenvolvimento
- Facilitar refatorações com segurança
- Melhorar a qualidade do código
- Servir como documentação do comportamento esperado do sistema

Em projetos modernos, como os desenvolvidos com Django, os testes de unidade são essenciais para garantir a estabilidade da aplicação, principalmente em sistemas que possuem múltiplas regras de negócio.

## Linguagem de programação e stack utilizada

O projeto foi desenvolvido utilizando a linguagem Python, juntamente com o framework Django, que permite o desenvolvimento rápido e organizado de aplicações web.

A stack utilizada é composta por:

- Django (5.2.7): Framework principal responsável pela estrutura do sistema, incluindo gerenciamento de rotas, regras de negócio e integração com o banco de dados. O Django segue o padrão MVT (Model-View-Template).

- Django REST Framework (3.16.1): Extensão do Django utilizada para a construção de APIs RESTful, permitindo a criação de endpoints que retornam dados em formato JSON e facilitam a comunicação com aplicações frontend.

- SQLite: Banco de dados utilizado durante o desenvolvimento, escolhido por ser leve e de fácil configuração.

- django-cors-headers (4.9.0): Biblioteca responsável por permitir requisições entre diferentes origens, sendo essencial para integração entre frontend e backend.

- asgiref (3.9.2): Biblioteca que fornece suporte à comunicação assíncrona no Django, baseada no padrão ASGI.

- sqlparse (0.5.3): Utilizada internamente pelo Django para manipulação de consultas SQL.

- typing_extensions (4.15.0): Fornece suporte a tipagem avançada no Python, contribuindo para a organização e manutenção do código.

Essa combinação de tecnologias permite o desenvolvimento de aplicações web modernas, organizadas e escaláveis, seguindo boas práticas de engenharia de software.

# framework de Testes de Unidade

O framework de testes escolhido foi o Pytest, amplamente utilizado na comunidade Python devido à sua simplicidade e flexibilidade.

O Pytest permite a criação de testes de forma clara e objetiva, utilizando funções simples e assertivas. Além disso, oferece recursos avançados como:

- Fixtures: permitem configurar estados iniciais para testes
- Parametrização de testes
- Integração com bibliotecas de mocks
- Execução automática de múltiplos cenários

No contexto do Django, o Pytest pode ser utilizado juntamente com plugins como pytest-django, facilitando a integração com modelos, views e banco de dados.

As principais vantagens do Pytest são:
- Sintaxe simples e legível
- Facilidade de manutenção
- Alta cobertura de testes
- Comunidade ativa

Link oficial:
https://docs.pytest.org/en/stable/

