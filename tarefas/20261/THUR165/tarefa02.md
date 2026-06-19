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

# IDE utilizada no desenvolvimento

A IDE utilizada no desenvolvimento foi o Visual Studio Code (VS Code), uma das ferramentas mais populares atualmente.

O VS Code oferece diversas funcionalidades que auxiliam no desenvolvimento e depuração (debug), tais como:

- Execução passo a passo do código (step over, step into, step out)
- Breakpoints para análise de trechos específicos
- Inspeção de variáveis em tempo de execução
- Integração com terminal
- Suporte a extensões para Python e Django
- Integração com Git

Essas ferramentas permitem identificar erros de forma mais eficiente, analisar o comportamento do sistema e melhorar a produtividade no desenvolvimento.

Além disso, o VS Code possui extensões específicas para testes, permitindo rodar e visualizar resultados diretamente na interface.

 # Tutoriais utilizados:


Foram selecionados dois tutoriais complementares utilizando Django.

Vídeo 1:
https://www.youtube.com/watch?v=Q2tEqNfgIXM&t=71s

O primeiro tutorial apresenta a construção de uma aplicação utilizando Django, abordando a criação de um sistema CRUD (Create, Read, Update e Delete). O conteúdo mostra como estruturar o projeto, definir models, criar views e configurar rotas, permitindo a manipulação completa de dados no sistema.

Vídeo 2:
https://www.youtube.com/watch?v=pZvhZ-Lr-PE

O segundo tutorial ensina a implementação de testes automatizados no python. Ele demonstra como validar funcionalidades da aplicação, garantindo que o sistema continue funcionando corretamente após modificações.

# Mocks Objects

Mock Objects são objetos simulados utilizados em testes de unidade para representar dependências externas do sistema.

Eles são especialmente úteis quando o código depende de elementos como:
- Banco de dados
- APIs externas
- Serviços de terceiros

Ao utilizar mocks, é possível isolar completamente a unidade que está sendo testada, garantindo que o teste seja rápido, previsível e independente de fatores externos.

Por exemplo, ao invés de acessar um banco de dados real, um mock pode simular o retorno esperado de uma consulta.

As principais vantagens do uso de Mock Objects são:
- Redução da complexidade dos testes
- Maior velocidade na execução
- Isolamento completo das funcionalidades
- Facilidade de simular cenários específicos (erros, retornos inesperados, etc.)

No Python, mocks podem ser implementados utilizando a biblioteca unittest.mock, que permite substituir funções e objetos durante a execução dos testes.

### User Story

como usuário do sistema, desejo registrar pagamentos de uma dívida (total ou parcial), para manter o controle atualizado dos valores devidos pelos clientes.

### Operações implementadas

- Inserir pagamento: permite registrar um pagamento associado a uma dívida existente
- Consultar pagamentos: permite visualizar os pagamentos realizados
- Atualizar pagamento: permite editar um pagamento registrado
- Remover pagamento: permite excluir um pagamento do sistema

Além das operações básicas de CRUD, o sistema implementa regras de negócio importantes, como:

- Atualização automática do saldo da dívida após o pagamento (TA03.02)
- Impedimento de pagamentos com valores inválidos (TA03.03)
- Bloqueio de pagamentos superiores ao valor da dívida (TA03.04)
- Atualização do status da dívida para "quitada" quando o valor total é atingido (TA03.06)

# Testes De Unidades Testadas

Foram implementados testes de unidade para validar as funcionalidades da User Story US03 – Controlar Pagamento.

Os testes foram baseados diretamente nos critérios definidos nos Testes de Aceitação (TA03.xx), garantindo que as regras de negócio fossem corretamente implementadas.

Os principais cenários testados incluem:

- Registro de pagamento válido (TA03.01)
- Atualização do saldo da dívida após pagamento parcial (TA03.02)
- Validação de valores inválidos (TA03.03)
- Impedimento de pagamento maior que a dívida (TA03.04)
- Registro de múltiplos pagamentos parciais (TA03.05)
- Atualização do status da dívida para "quitada" (TA03.06)

Os testes foram implementados utilizando a classe TestCase do Django, permitindo executar cada cenário de forma isolada e garantindo a integridade das regras de negócio.

A experiência de implementar os testes foi dificil ja que foi minha primeira vez que fazia testes usando o TestCase,mas foi fundamental para compreender melhor o comportamento do sistema, principalmente na validação da lógica de atualização da dívida e controle de pagamentos parciais.

# Teste Unitário ou Integração

Os testes de unidade são responsáveis por validar partes isoladas do sistema, como métodos e regras de negócio específicas, garantindo que cada componente funcione corretamente de forma independente.

Já os testes de integração verificam a interação entre diferentes partes do sistema, como a comunicação entre models, views e banco de dados.

Neste projeto, foram utilizados testes de unidade, pois o foco foi validar individualmente as regras de negócio da User Story US03, como o cálculo do saldo da dívida e a validação de pagamentos.

A principal diferença entre os dois está no nível de abrangência: testes de unidade são mais rápidos e específicos, enquanto testes de integração avaliam o comportamento do sistema como um todo.