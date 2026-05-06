# Tarefa 02 - Teste de Unidade

**Nome:** Nathan Lopes Rodrigues  
**Usuario GitHub:** nlopesr  
**E-mail:** nathanlpsr@gmail.com  
**Repositorio do projeto (fork):** https://github.com/nlopesr/eng-software-2  
**Repositorio base da disciplina:** https://github.com/tacianosilva/eng-software-2

## 1) Resumo sobre Testes de Software com foco em Testes de Unidade

Testes de Software ajudam a validar comportamento, prevenir regressao e aumentar a confianca em mudancas. No recorte de **Teste de Unidade**, o objetivo e validar partes pequenas e isoladas do sistema (funcoes, metodos, classes) com execucao rapida e feedback imediato. Esse tipo de teste e util para detectar erros cedo, documentar o comportamento esperado e facilitar refatoracoes.

## 2) Linguagem e stack do projeto

Para esta atividade, foi adotada uma stack comum para aplicacoes web da disciplina:

- **Linguagem:** Python
- **Framework backend:** Django + Django REST Framework
- **Banco de dados:** PostgreSQL
- **Testes:** `unittest` + `unittest.mock`

## 3) Framework de Testes de Unidade escolhido

Framework escolhido: **unittest** (biblioteca nativa do Python), com suporte a mocks via `unittest.mock`.

Resumo:

- Faz parte da biblioteca padrao do Python.
- Facil de executar em qualquer ambiente.
- Permite estruturar casos de teste por classe e metodo.
- Integra bem com mocks para isolamento da unidade testada.

Links:

- unittest: https://docs.python.org/3/library/unittest.html
- unittest.mock: https://docs.python.org/3/library/unittest.mock.html
- Testes no DRF: https://www.django-rest-framework.org/api-guide/testing/

## 4) IDE utilizada e ferramentas de debug

IDE utilizada: **Visual Studio Code**.

Recursos de debug usados com frequencia:

- Breakpoints simples e condicionais.
- Step over / step into / step out.
- Inspecao de variaveis e watch expressions.
- Call stack para rastrear fluxo de execucao.
- Debug Console para avaliar expressoes em tempo de execucao.

Referencias:

- https://code.visualstudio.com/docs/editor/debugging/
- https://code.visualstudio.com/docs/python/debugging

## 5) Tutorial CRUD com testes

Tutorial base consultado:

- Django REST Framework Quickstart (construcao de API com operacoes tipicas de CRUD e secao de teste de API): https://www.django-rest-framework.org/tutorial/quickstart/

Complemento de testes automatizados:

- Writing your first Django app, part 5 (Django Testing): https://docs.djangoproject.com/en/3.2/intro/tutorial05/

Resumo do conteudo: os materiais mostram criacao de endpoints e testes automatizados com cliente de teste, cobrindo validacao de respostas e comportamento esperado da aplicacao.

## 6) Resumo sobre Mock Objects em Testes de Unidade

Mock Objects simulam dependencias externas (banco, API, fila, repositorio) para testar apenas a unidade-alvo. Isso reduz acoplamento no teste, evita custo de infraestrutura e permite validar interacoes (por exemplo, se um metodo foi chamado com os argumentos corretos).

Referencia:

- `unittest.mock`: https://docs.python.org/3/library/unittest.mock.html

## 7) Descricao do repositorio do projeto

O repositorio contem os artefatos da disciplina Engenharia de Software II: documentacao do projeto, organizacao das tarefas por turma/periodo e implementacao incremental das atividades da equipe.

## 8) CRUD (User Story) implementado

User Story trabalhado no modulo de inscricoes: **Fazer Inscricao Geral e Especifica**.

Operacoes consideradas no CRUD:

- **Inserir:** criar inscricao (geral ou especifica).
- **Atualizar:** alterar dados/status da inscricao.
- **Deletar:** remover inscricao.
- **Consultar:** buscar inscricao por identificador.

## 9) Testes de Unidade do CRUD

Foram implementados testes de unidade com mock para cada operacao do CRUD em um servico de inscricao.

Arquivos:

- Implementacao do servico: [/projetos/20261/nlopesr/src/inscricao_service.py](/projetos/20261/nlopesr/src/inscricao_service.py)
- Testes unitarios: [/projetos/20261/nlopesr/tests/test_inscricao_service.py](/projetos/20261/nlopesr/tests/test_inscricao_service.py)

Experiencia resumida: o uso de mock facilitou isolar a regra de negocio da camada de persistencia, permitindo validar chamadas do servico para o repositorio de forma objetiva e rapida.

## 10) Testes de Integracao, tipo de teste realizado e diferenca

**Teste de Unidade** valida componentes isolados, normalmente com uso de mocks.

**Teste de Integracao** valida a comunicacao entre componentes reais (ex.: aplicacao + banco + camada HTTP).

Nesta atividade, o foco implementado foi **Teste Unitario**.