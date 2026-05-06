# Tarefa 02 - Teste de Unidade

**Nome:** Nathan Lopes Rodrigues  
**Usuário GitHub:** nlopesr  
**E-mail:** nathanlpsr@gmail.com  
**Repositório do projeto (fork):** https://github.com/nlopesr/eng-software-2  
**Repositório base da disciplina:** https://github.com/tacianosilva/eng-software-2

## 1) Resumo sobre Testes de Software com foco em Testes de Unidade

Testes de Software ajudam a validar comportamento, prevenir regressão e aumentar a confiança em mudanças. No recorte de **Teste de Unidade**, o objetivo é validar partes pequenas e isoladas do sistema (funções, métodos, classes) com execução rápida e feedback imediato. Esse tipo de teste é útil para detectar erros cedo, documentar o comportamento esperado e facilitar refatorações.

## 2) Linguagem e stack do projeto

Para esta atividade, foi adotada uma stack comum para aplicações web da disciplina:

- **Linguagem:** Python
- **Framework backend:** Django + Django REST Framework
- **Banco de dados:** PostgreSQL
- **Testes:** `unittest` + `unittest.mock`

## 3) Framework de Testes de Unidade escolhido

Framework escolhido: **unittest** (biblioteca nativa do Python), com suporte a mocks via `unittest.mock`.

Resumo:

- Faz parte da biblioteca padrão do Python.
- Fácil de executar em qualquer ambiente.
- Permite estruturar casos de teste por classe e método.
- Integra bem com mocks para isolamento da unidade testada.

Links:

- unittest: https://docs.python.org/3/library/unittest.html
- unittest.mock: https://docs.python.org/3/library/unittest.mock.html
- Testes no DRF: https://www.django-rest-framework.org/api-guide/testing/

## 4) IDE utilizada e ferramentas de debug

IDE utilizada: **Visual Studio Code**.

Recursos de debug usados com frequência:

- Breakpoints simples e condicionais.
- Step over / step into / step out.
- Inspeção de variáveis e watch expressions.
- Call stack para rastrear fluxo de execução.
- Debug Console para avaliar expressões em tempo de execução.

Referências:

- https://code.visualstudio.com/docs/editor/debugging/
- https://code.visualstudio.com/docs/python/debugging

## 5) Tutorial CRUD com testes

Tutorial base consultado:

- Django REST Framework Quickstart (construção de API com operações típicas de CRUD e seção de teste de API): https://www.django-rest-framework.org/tutorial/quickstart/

Complemento de testes automatizados:

- Writing your first Django app, part 5 (Django Testing): https://docs.djangoproject.com/en/3.2/intro/tutorial05/

Resumo do conteúdo: os materiais mostram criação de endpoints e testes automatizados com cliente de teste, cobrindo validação de respostas e comportamento esperado da aplicação.

## 6) Resumo sobre Mock Objects em Testes de Unidade

Mock Objects simulam dependências externas (banco, API, fila, repositório) para testar apenas a unidade-alvo. Isso reduz acoplamento no teste, evita custo de infraestrutura e permite validar interações (por exemplo, se um método foi chamado com os argumentos corretos).

Referência:

- `unittest.mock`: https://docs.python.org/3/library/unittest.mock.html

## 7) Descrição do repositório do projeto

O repositório contém os artefatos da disciplina Engenharia de Software II: documentação do projeto, organização das tarefas por turma/período e implementação incremental das atividades da equipe.

## 8) CRUD (User Story) implementado

User Story trabalhado no módulo de inscrições: **Fazer Inscrição Geral e Específica**.

Operações consideradas no CRUD:

- **Inserir:** criar inscrição (geral ou específica).
- **Atualizar:** alterar dados/status da inscrição.
- **Deletar:** remover inscrição.
- **Consultar:** buscar inscrição por identificador.

## 9) Testes de Unidade do CRUD

Foram implementados testes de unidade com mock para cada operação do CRUD em um serviço de inscrição.

Arquivos implementados (na pasta de projeto, não na pasta `tarefas`):

- Implementação do serviço: [/projetos/20261/nlopesr/src/inscricao_service.py](/projetos/20261/nlopesr/src/inscricao_service.py)
- Testes unitários: [/projetos/20261/nlopesr/tests/test_inscricao_service.py](/projetos/20261/nlopesr/tests/test_inscricao_service.py)

Experiência resumida: o uso de mock facilitou isolar a regra de negócio da camada de persistência, permitindo validar chamadas do serviço para o repositório de forma objetiva e rápida.

## 10) Testes de Integração, tipo de teste realizado e diferença

**Teste de Unidade** valida componentes isolados, normalmente com uso de mocks.

**Teste de Integração** valida a comunicação entre componentes reais (ex.: aplicação + banco + camada HTTP).

Nesta atividade, o foco implementado foi **Teste Unitário**.