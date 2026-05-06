Tarefa 02 - Teste de Unidade

Pedro Vitor Santos da Silva
PVeeeeeee
Pedro.santos.142@ufrn.edu.br

[Repositório Projeto](https://github.com/Finance-Cookie/back-end)

## 9. Pesquisa e Ferramentas

### a. Testes de Software e Testes de Unidade
Eles garantem que regras de negócio específicas funcionem conforme o esperado antes da integração completa do módulo.

### b. Linguagem e Stack do Projeto
Essa stack foi escolhida pela robustez do ORM do Django, que facilita a modelagem de entidades complexas (como Vendas, Entradas e Saídas) e agiliza a implementação de regras de negócio, além de possuir excelente integração para construção de APIs REST e sistemas web seguros.

### c. Framework de Testes de Unidade
Utilizamos o **pytest** junto com o plugin **pytest-django**.
* **Resumo:** O `pytest` é um framework que simplifica a escrita de testes em Python, substituindo o verboso `unittest` padrão por asserts simples e diretos. O `pytest-django` fornece *fixtures* prontas para lidar com o banco de dados e o cliente de requisições web do framework.
[https://pytest-django.readthedocs.io/](https://pytest-django.readthedocs.io/)

### d. IDE e Ferramentas de Debug
O desenvolvimento é feito no **Visual Studio Code (VS Code)**.
* **Debug:** O depurador do VS Code permite pausar a execução da aplicação em pontos específicos (*breakpoints*). No contexto deste sistema financeiro, utilizo a aba "Watch" e "Variables" para inspecionar em tempo real o cálculo do "Valor Total" durante o registro de vendas ou entradas, garantindo que descontos e fretes estejam sendo somados e subtraídos corretamente antes de persistirem no banco.










