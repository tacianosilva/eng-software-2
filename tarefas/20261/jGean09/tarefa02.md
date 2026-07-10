# Tarefa 02 - Teste de Unidade

* **Nome:** José Gean de Macêdo Alves
* **GitHub:** jGean09
* **E-mail:** josegeantlc@gmail.com
* **Repositório do Projeto:** [\[Link do Projeto de Engenharia 2\]](https://github.com/expeditofranca/ProjetoEngenharia1)

## Pesquisa e Ferramentas

### a. Testes de Software e Testes de Unidade

### Testes de Software
Como o desenvolvimento envolve falhas humanas, os testes são indispensáveis. Testar é o processo de executar um programa com a intenção de descobrir erros, provando a presença de defeitos, e não a sua ausência. Essa prática integra a Verificação e Validação (V&V), garantindo que o produto seja construído corretamente (atendendo aos requisitos) e seja o produto correto (atendendo ao cliente).

### Testes de Unidade

É a verificação focada na menor unidade testável do software, como um módulo, classe ou método, de forma individual. A abordagem ideal para testar uma unidade envolve:
* **Visão Externa (Técnicas Funcionais/Caixa Preta):** Avaliar as entradas e saídas para verificar se o requisito foi atendido.
* **Visão Interna (Técnicas Estruturais/Caixa Branca):** Complementar o teste checando se as estruturas lógicas do algoritmo estão funcionando.  

Na prática, a automação e validação desses testes dependem das ferramentas da stack do projeto. No desenvolvimento do nosso sistema de controle de vendas (em Python/Django), garantimos a qualidade das views e das User Stories (como a validação do Relatório de Pagamento) utilizando ferramentas de métrica como o Coverage. Ele nos permite medir a "cobertura de código", assegurando de forma visual quais estruturas lógicas e linhas do nosso sistema foram efetivamente executadas e validadas pelos testes.

### b. Linguagem de Programação e Stack
O projeto da disciplina foi desenvolvido utilizando a linguagem Python. A stack principal da aplicação é composta pelo framework Django no backend.

### c. Framework de Testes de Unidade
Para a linguagem escolhida, o framework de testes de unidade padrão e amplamente utilizado é o unittest (que serve de base para a suíte de testes do próprio Django). Ele foca em fornecer uma solução nativa e orientada a objetos, já incluindo ferramentas embutidas para asserções e criação de simulações (através do módulo unittest.mock), sem a necessidade de instalar bibliotecas de terceiros adicionais para essas funções. Para a análise de cobertura de código (code coverage), o padrão adotado no ecossistema em conjunto com o unittest é a biblioteca Coverage.py.

* **Link oficial do unittest:** [https://docs.python.org/3/library/unittest.html](https://docs.python.org/3/library/unittest.html)
* **Link oficial do Coverage.py:** [https://coverage.readthedocs.io/](https://coverage.readthedocs.io/)

### d. IDE e Ferramentas de Debug
A IDE utilizada para o desenvolvimento do projeto é o Visual Studio Code (VS Code). Ele é um editor leve, altamente customizável e possui um excelente suporte para o ecossistema Python/Django através de suas extensões oficiais.

O VS Code conta com uma interface nativa de "Executar e Depurar" (Run and Debug) muito poderosa, que facilita a localização de erros no código sem precisar encher o projeto de prints. Suas principais ferramentas de debug integradas incluem:

* **Breakpoints (Pontos de Parada):** Permitem clicar ao lado da numeração da linha para pausar a execução do código exatamente naquele ponto. É extremamente útil para parar uma view do Django e analisar o que está chegando na requisição.

* **Inspeção de Variáveis (Variables):** Quando o código pausa no breakpoint, a IDE mostra automaticamente o estado atual de todas as variáveis (locais e globais), permitindo ver exatamente o que está guardado nelas.

* **Watch (Observação):** Permite adicionar expressões ou variáveis específicas para monitorar constantemente como seus valores mudam durante a execução passo a passo.

* **Call Stack (Pilha de Chamadas):** Mostra o rastro de execução do sistema, ou seja, a sequência exata de funções e métodos que foram chamados até o programa chegar ao ponto em que está pausado.

* **Debug Console:** Um terminal interativo onde o desenvolvedor pode digitar comandos Python, avaliar expressões matemáticas ou até mesmo alterar o valor de variáveis "ao vivo" enquanto o sistema está pausado.

### e. Tutorial CRUD com Testes
**Link:** [https://www.youtube.com/watch?v=cEXt8hDyKQw](https://www.youtube.com/watch?v=cEXt8hDyKQw)

**Descrição:** Este tutorial em vídeo aborda os fundamentos práticos da criação de testes unitários em aplicações Django (essenciais para validar as regras de negócio e operações de CRUD), utilizando a biblioteca unittest nativa do framework.

O conteúdo destaca os seguintes pontos principais:
* **Organização e Estrutura:** Recomenda a criação de um diretório tests/ dentro de cada app (com o devido __init__.py), separando os arquivos por responsabilidade (ex: test_models.py e test_views.py), em vez de usar o arquivo tests.py padrão.

* **Boas Práticas:** Enfatiza a obrigatoriedade do prefixo test_ na nomenclatura dos métodos para que a ferramenta os reconheça e facilite a identificação de falhas.

* **Banco de Dados Isolado:** Demonstra como o Django (através do unittest.TestCase) gerencia automaticamente a criação e destruição de um banco de dados temporário para a execução dos testes, garantindo a integridade dos dados reais.

* **Execução e TDD:** Mostra o uso prático de métodos de asserção (como self.assertEqual) rodando o comando python manage.py test, e reforça o ciclo de desenvolvimento guiado por testes (TDD).

### f. Mock Objects em Testes de Unidade
Em testes de software, Mock Objects (ou objetos simulados) são componentes "falsos" criados para imitar o comportamento de objetos reais do sistema de forma controlada. Eles são uma ferramenta fundamental nos Testes de Unidade, pois o objetivo dessa fase é testar um pedaço de código em total isolamento.

Por exemplo: se a sua view do Django precisa consultar uma API externa de pagamentos ou enviar um e-mail, você não quer que o teste dependa da internet, do servidor de terceiros, ou que envie e-mails reais toda vez que for executado. Em vez disso, você usa um Mock para substituir essa dependência. O Mock intercepta a chamada e devolve uma resposta programada (como um retorno de "sucesso" ou um dado fictício). Assim, você valida apenas a regra de negócio interna da sua aplicação.

No ecossistema Python, essa técnica é amplamente suportada de forma nativa através da biblioteca unittest.mock (utilizando classes como Mock, MagicMock ou o decorador @patch), permitindo simular qualquer comportamento ou retorno de função com muita facilidade.

## Questão 10 - Repositório do Projeto

**Repositório:** [ProjetoEngenharia1](https://github.com/expeditofranca/ProjetoEngenharia1)

---

### a. CRUD Implementado — US04: Gerar Relatório de Pagamento

O User Story escolhido foi o **US04 - Gerar Relatório de Pagamento**, no qual sou o
testador responsável. Ele contempla a geração e exibição de um relatório com os
registros de pagamentos realizados pelos clientes. As operações cobertas pelos testes são:

- **Consultar (listagem):** Acesso à página de relatório de pagamentos via requisição
  GET, verificando se os dados do pagamento são exibidos corretamente na resposta.
- **Consultar (sem dados):** Acesso à página quando não há pagamentos cadastrados,
  verificando se o sistema responde sem erros.

O setUp dos testes cria toda a cadeia de dependências necessária: `Endereco` →
`Cliente` → `Divida` → `Pagamento`, simulando um cenário real de uso do sistema.

---

### b. Testes de Integração Implementados

Foram implementados **2 testes** para a view de Relatório de Pagamento (US04),
utilizando o `TestCase` do Django com banco de dados temporário real (SQLite) e
o client HTTP embutido do Django para simular requisições à view.

**Link para o arquivo de testes:**
[test_us04_relatorio.py](https://github.com/expeditofranca/ProjetoEngenharia1/blob/main/antiveaco/tests/pagamento/test_us04_relatorio.py)

| Teste | Caso de Aceitação | O que valida |
|---|---|---|
| `test_gerar_relatorio_com_sucesso` | TA04.01 | Página carrega com status 200 e exibe nome do cliente e valor pago |
| `test_gerar_relatorio_sem_dados` | TA04.02 | Página carrega com status 200 mesmo sem pagamentos cadastrados |

**Experiência de implementar os testes:** A principal dificuldade foi montar o `setUp`
corretamente, já que a entidade `Pagamento` depende de `Endereco`, `Cliente` e `Divida`
previamente criados. Foi necessário criar toda essa cadeia de objetos antes de cada
teste para simular um cenário real. O uso do `self.client.get()` do Django permitiu
testar a view de forma completa, verificando tanto o status HTTP quanto o conteúdo
HTML retornado com `assertContains`.

---

### c. Testes de Unidade vs. Testes de Integração

**Testes de Integração** verificam se diferentes partes do sistema funcionam
corretamente *juntas*. Em vez de isolar componentes com mocks, eles testam a cadeia
completa: a requisição HTTP chega à view, a view consulta o banco via ORM, e a
resposta HTML é verificada.

**O que foi feito nesta tarefa foram Testes de Integração**, pois os testes
utilizam `self.client.get()` para disparar uma requisição HTTP real à URL
`lista_pagamentos`, passando por toda a cadeia — URL → view → ORM → banco →
template → resposta — sem nenhum mock ou simulação de dependências.

Já um **teste de unidade puro** para o mesmo cenário isolaria a view com
`unittest.mock`, simulando o retorno do banco e verificando apenas se os métodos
corretos foram chamados, sem precisar de banco de dados ou template reais. A
diferença principal é que o teste de unidade aponta exatamente *qual* lógica
quebrou, enquanto o de integração indica que algo na comunicação entre as partes
falhou.git 