# Tarefa 02 - Teste de Unidade

**Nome:** José Guilherme Silva de Araújo  
**Usuário GitHub:** [oguiaraujo](https://github.com/oguiaraujo)  
**E-mail:** guilherme.araujo.702@ufrn.edu.br  
**Repositório do Projeto:** [Linkhub](https://github.com/linkhub-org/linkhub-backend.git)

---

## 1. Testes de Software e Testes de Unidade
Testes de Software visam garantir a qualidade e o comportamento esperado do sistema. O **Teste de Unidade** foca na menor parte funcional do código (funções ou métodos) de forma isolada, garantindo que a lógica base esteja correta.

## 2. Linguagem e Stack do Projeto
O projeto utiliza **Python** com o framework **Django** e **Django REST Framework** para a construção da API, utilizando banco de dados relacional.

## 3. Framework de Testes
Utilizo o framework nativo do Django (`django.test.TestCase`), que estende o `unittest` do Python, permitindo simular requisições à API e gerenciar um banco de dados de teste isolado.
* [Link: Django Testing](https://docs.djangoproject.com/en/stable/topics/testing/)

## 4. IDE e Debug
Utilizo o **VS Code**. Ele possui integração nativa com o debugger do Python, permitindo inspecionar variáveis, definir breakpoints e analisar o fluxo de execução linha a linha.

## 5. Tutorial de CRUD com Testes
* [Tutorial: Testing a DRF API](https://testdriven.io/blog/drf-views-part-1/)
* O tutorial aborda a criação de uma API completa seguindo a metodologia TDD (Test Driven Development), ensinando a validar rotas de criação e consulta.

## 6. Mock Objects
Mocks são objetos que simulam o comportamento de componentes reais. São usados para isolar a unidade testada, evitando chamadas reais a serviços externos como APIs de terceiros ou envio de e-mails.