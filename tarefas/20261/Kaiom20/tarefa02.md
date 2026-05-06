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