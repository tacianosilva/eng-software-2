# Tarefa 02 - Teste de Unidade

**Nome:** Kaio Marcio Araujo Cavalcante Lira  
**Usuário GitHub:** [Kaiom20](https://github.com/Kaiom20)  
**E-mail:** kaiomacl.20@gmail.com  
**Repositório do Projeto:** [linkhub-backend](https://github.com/linkhub-org/linkhub-backend)

---

## Questão 9

### a. Testes de Software com foco em Testes de Unidade

Testes de Software são técnicas utilizadas para verificar se um sistema se comporta conforme o esperado, garantindo qualidade e reduzindo falhas. Existem diferentes níveis de testes: unitário, integração, sistema e aceitação.

**Testes de Unidade** (ou Testes Unitários) são o nível mais granular de testes. Eles validam unidades individuais de código — geralmente funções ou métodos — de forma isolada, sem depender de bancos de dados, redes ou outros sistemas externos. O objetivo é garantir que cada parte do código funcione corretamente de forma independente.

Principais características:
- Rápidos de executar
- Isolados (sem dependências externas reais)
- Fáceis de automatizar
- Ajudam a identificar bugs cedo no ciclo de desenvolvimento
- Servem como documentação viva do comportamento esperado do código

### b. Linguagem de Programação e Stack

O projeto da disciplina é desenvolvido com a seguinte stack:

- **Linguagem:** Python 3.x
- **Framework Web:** Django + Django REST Framework (DRF)
- **Banco de Dados:** PostgreSQL
- **Gerenciamento de Dependências:** pip / virtualenv
- **Controle de Versão:** Git + GitHub

O Django é um framework web de alto nível que incentiva o desenvolvimento rápido e limpo. O Django REST Framework estende o Django para facilitar a criação de APIs RESTful, fornecendo serializers, viewsets, autenticação e muito mais.

### c. Framework de Testes de Unidade — pytest + pytest-django

Para Python/Django, o framework escolhido é o **pytest** em conjunto com o plugin **pytest-django**.

**pytest** é um dos frameworks de testes mais populares do ecossistema Python. Ele é simples, flexível e extensível, permitindo escrever testes de forma muito mais concisa do que o módulo padrão `unittest`.

**pytest-django** é um plugin que integra o pytest ao Django, facilitando:
- Acesso ao banco de dados de testes
- Uso de fixtures do Django
- Configuração automática do ambiente Django

**Recursos principais do pytest:**
- Sintaxe simples com funções `def test_*`
- Fixtures poderosas e reutilizáveis
- Relatórios detalhados de falhas
- Suporte a mocks via `unittest.mock` ou `pytest-mock`
- Integração com ferramentas de CI/CD

**Links:**
- [pytest](https://pytest.org/)
- [pytest-django](https://pytest-django.readthedocs.io/)
- [Documentação oficial Django - Testing](https://docs.djangoproject.com/en/stable/topics/testing/)

### d. IDE utilizada — VS Code

A IDE utilizada é o **Visual Studio Code (VS Code)**, desenvolvida pela Microsoft. É um editor leve, extensível e gratuito, amplamente adotado no desenvolvimento com Python e Django.

**Ferramentas de Debug integradas:**

- **Debugger nativo do VS Code:** Permite definir breakpoints, inspecionar variáveis, acompanhar a pilha de chamadas e executar o código passo a passo (step over, step into, step out).
- **Extensão Python (Pylance/Pylance):** Adiciona suporte a IntelliSense, análise estática, linting e integração com o debugger para projetos Python.
- **Integração com pytest:** O VS Code detecta automaticamente os testes pytest e permite rodá-los e depurá-los diretamente pela aba "Testing".
- **Debug Console:** Console interativo durante a sessão de debug para avaliar expressões em tempo real.
- **Watch Variables:** Monitoramento de variáveis em tempo real durante a execução.
- **Configuração via `launch.json`:** Permite configurar sessões de debug customizadas para Django (ex: `python manage.py runserver` em modo debug).

### e. Tutorial — CRUD com Django REST Framework e Testes

**Link:** [Django REST Framework — Quickstart + Testing](https://www.django-rest-framework.org/tutorial/quickstart/)

**Descrição:** O tutorial oficial do Django REST Framework mostra como construir uma API RESTful completa com operações de CRUD (Create, Read, Update, Delete) utilizando serializers, viewsets e routers. Além disso, demonstra como escrever testes para os endpoints da API utilizando o `APIClient` do próprio DRF, validando as respostas HTTP e o comportamento de cada operação. É um ponto de partida excelente para entender como estruturar tanto a aplicação quanto os testes.

### f. Mock Objects em Testes de Unidade

**Mock Objects** (objetos falsos/simulados) são substitutos de dependências reais usados durante os testes de unidade. Em vez de chamar um banco de dados, uma API externa ou um serviço de e-mail de verdade, o mock simula o comportamento dessas dependências de forma controlada e previsível.

**Por que usar Mocks?**
- Garantem o isolamento da unidade testada
- Tornam os testes mais rápidos (sem I/O real)
- Permitem simular cenários difíceis de reproduzir (ex: falha de rede, timeout)
- Evitam efeitos colaterais em dados reais

**Em Python**, o módulo `unittest.mock` (nativo) oferece as classes `Mock`, `MagicMock` e o decorador `@patch`, que permitem substituir objetos e verificar como foram chamados.

Exemplo básico:
```python
from unittest.mock import patch

@patch('myapp.services.send_email')
def test_user_creation_sends_email(mock_send_email):
    # Chama a função que internamente usa send_email
    create_user(email='test@example.com')
    # Verifica se o mock foi chamado
    mock_send_email.assert_called_once()
```

O uso de mocks é uma prática fundamental para manter testes unitários verdadeiramente isolados e confiáveis.

---

## Questão 10 — Repositório do Projeto
 
**Repositório:** [linkhub-backend](https://github.com/linkhub-org/linkhub-backend)
 
O **linkhub-backend** é a API backend do projeto LinHub, desenvolvida com Django e Django REST Framework. O sistema permite que usuários criem e gerenciem projetos acadêmicos, conectando pessoas de mesma instituição de ensino.
 
### a. CRUD implementado — User Story: Gerenciamento de Projetos
 
**User Story:** Como usuário autenticado, quero poder criar, visualizar, atualizar e encerrar projetos, para divulgar meu projeto e encontrar colaboradores da minha instituição.
 
| Operação | Método HTTP | Endpoint | Teste |
|----------|-------------|----------|-------|
| Inserir  | POST | `/api/projects/` | `test_create_project_success` |
| Consultar (lista/feed) | GET | `/api/projects/` | `test_feed_shows_own_institution_projects` |
| Buscar por título | GET | `/api/projects/?search=` | `test_search_by_title` |
| Atualizar (PUT) | PUT | `/api/projects/{id}/` | `test_owner_can_update_project` |
| Atualizar parcial (PATCH) | PATCH | `/api/projects/{id}/` | `test_owner_can_close_project` |
| Deletar | DELETE | `/api/projects/{id}/` | — |
 
O modelo `Project` possui os campos: `title`, `description`, `looking_for`, `category` (Academic, Startup, Open Source, Social, Other), `status` (Open, In Progress, Completed, Cancelled), `owner` (FK para User) e `institution` (FK para Institution).
 
### b. Testes implementados para o CRUD
 
Os testes foram implementados utilizando o `TestCase` do Django e o `APIClient` do Django REST Framework, na branch `feat/3-manter-projeto`.
 
**Link para o arquivo de testes:** [projects/tests.py](https://github.com/linkhub-org/linkhub-backend/blob/feat/3-manter-projeto/projects/tests.py)
 
Os testes cobrem os seguintes cenários:
 
| ID | Descrição |
|----|-----------|
| TA02.01 | Criação bem-sucedida de projeto |
| TA02.02 | Criação com campos obrigatórios em branco (validação) |
| TA02.03 | Feed exibe projetos da mesma instituição |
| TA02.04 | Feed oculta projetos de outra instituição |
| TA02.05 | Criador consegue editar o projeto |
| TA02.06 | Não-criador não pode editar o projeto (403 Forbidden) |
| TA02.07 | Criador pode encerrar o projeto via PATCH |
| TA02.08 | Busca por título retorna resultado correto |
 
**Experiência de implementar os testes:**  
Implementar os testes foi uma experiência bastante enriquecedora. O `setUp` centraliza a criação de usuários de diferentes instituições (UFRN e UFPB) e um projeto base, o que facilitou reutilizar o contexto em vários cenários. O maior aprendizado foi perceber que a regra de negócio de isolamento por instituição — usuários só veem projetos da sua instituição — precisava ser validada em testes separados, e não apenas manualmente. O método `force_authenticate` do `APIClient` simplificou a simulação de autenticação sem precisar gerar tokens manualmente.
 
### c. Testes de Integração x Testes Unitários
 
**Testes de Unidade** validam unidades isoladas de código (uma função ou método), usando Mocks para substituir dependências externas como banco de dados e APIs. São muito rápidos e precisos, mas não garantem que os componentes funcionam bem em conjunto.
 
**Testes de Integração** validam a interação entre múltiplos componentes reais — por exemplo, a view chamando o banco de dados de verdade, ou a API processando uma requisição HTTP completa com autenticação e serialização. São mais lentos, porém garantem que o sistema funciona de ponta a ponta.
 
**O que foi feito neste projeto:**  
Os testes implementados são **Testes de Integração**. Embora estejam organizados por cenário de forma granular (semelhante a testes unitários), eles utilizam o banco de dados de testes real do Django, criado e populado no `setUp`, sem nenhum Mock para isolar a persistência. A requisição passa pela URL, view, serializer e banco de dados — todos reais. A diferença principal em relação a um teste unitário puro seria usar `unittest.mock` para substituir o banco e testar apenas a lógica da view ou do serializer de forma isolada.