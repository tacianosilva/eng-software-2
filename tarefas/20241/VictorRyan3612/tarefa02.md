# Tarefa 02 - Teste de Unidade

**nome**: Victor Ryan Galvão Silva

**github**: [VictorRyan3612](https://github.com/VictorRyan3612)

**email pessoal**: vitorsilva3612@gmail.com

**email institucional**: ryan.silva.706@ufrn.edu.br

**Link do projeto**: [SigBordado](https://github.com/GomesLuan/SigBordado)


# Questão 9
## Testes de Software
Os problemas encontrados em um determinado software provavelmente surgiram por falhas de comunicação, tais problemas podem passar despercebidos sem a devida execução de um teste, dito isso, um teste serve para expor os devidos problemas em um software, mais precisamente, os resultados incorretos, ou falhas, a partir disso, pode ser encontrado os defeitos nos códigos.

Dos tipos de testes, um dos mais simples é o teste de unitário, o qual seu foco é testar um módulo ou classe individualmente, inicialmente analisando as entradas e as saídas esperadas, após isso, analisando o algoritmo.

## Tecnologias
### Javascript
JavaScript é uma das mais famosas linguagens usadas para desenvolvimento web, visto sua vasta gama de possibilidades, incluindo executar pelo cliente através do navegador ou pelo servidor, podendo assim fazer um site com apenas uma única linguagem.

Todos os membros do grupo possuem domínio e experiência básica da linguagem, pois a usamos na disciplina de Programação Web. Por isso, para o projeto ela foi escolhida juntamente com o framework React para o frontend.

### Python
Python é uma das linguagens de programação interpretada indicadas para iniciantes, inclusive todos os membros do grupo a usamos no início do curso, na disciplina Algoritmos e lógica de programação, além de outros projetos pessoais ou acadêmicos. Devido a sua ampla acessibilidade e facilidade, há muitas bibliotecas e frameworks disponíveis, tornando-a possível ser usadas para as mais diversas áreas, desde análise de dados até inteligência artificial. Para o projeto ela foi escolhida juntamente com o framework django para o backend.

## Postgres
O banco de dados escolhido pelo grupo foi o Postgres devido a nossa experiência proporcionada pelas disciplinas Banco de Dados 1 e 2.


## Framework de teste
O framework de testes unitários QUnit pode ser usado para testar qualquer código javascript facilmente, seu conceito de funcionamento é uma função test que retorna uma função de comparação, a mais simples é a equal, que recebe 2 parâmetros obrigatórios, a primeira sendo com a operação a ser realizada, a segunda sendo o resultado esperado, e o terceiro parâmetro, esse sendo opcional, a mensagem de sucesso.

* link para o site oficial: [QUnit](https://qunitjs.com/)
* link para um tutorial de uso: [tutorial Qunit](https://www.devmedia.com.br/javascript-qunit-conheca-o-framework-de-testes-unitarios/33579)

### IDE
O visual Studio Code, além de ser uma ferramenta editor de texto de código aberto extremamente versátil, ele ainda possui a capacidade de capaz de suportar extensões capazes de mudar completamente as suas funcionalidades ou adicionar novas, inclusive tais extensões o fazem ser capaz de suportar quase qualquer linguagem de programação, e para tal, possui um depurador nativo capaz de realizar inspeção de variáveis e pontos de interrupção que podem ser usados para analisar passo a passo o código em execução em tempo real.

### Mocks Objects
Durante testes, pode haver momentos que o objeto a ser testado tenha um comportamento imprevisível, relativo ou até mesmo que dependa de outro sistema ou serviço, como por exemplo um banco de dados que precisa ser inicializado, visto isso, para simular esse objeto real, é usado um Mock object, agilizando e focando assim no próprio teste em si, por exemplo, o código de um alarme, que dispara apenas em determinada hora, como isso depende do tempo, acaba atrasando o teste, mas com mock object programado para ser disparado como se fosse a determinada hora, o teste será instantâneo.
