# Tarefa 02 - Teste de Unidade

Thomas Almeida de Souza Farias
GitHub: tgo-mas
E-mail: talmeidasf@gmail.com
[Repositório do projeto (SIGApoio)](https://github.com/tgo-mas/SIGApoio)

### Questão 9

<ol type="a">
    <li><p>A fase de teste é muito importante no ciclo de vida de um software. Esses testes devem ser executados regularmente, assim como novos testes devem ser adicionados sempre que um novo recurso é implementado ao sistema. Os testes geralmente são separados em três categorias: Testes de Unidade, de Integração, e de Aceitação. <br/><br/> Os Testes de Unidade passam pelas menores unidades de código, ou seja, funções e/ou métodos. Idealmente, todas as funções e métodos de um sistemas devem ter um teste de unidade designado. Cada linguagem possui suas bibliotecas de testes unitários: Pytest (Python), JUnit (Java) e QUnit (Javascript) são exemplos. <br/><br/> Os testes de integração, por sua vez, testam a interação entre partes do sistema. Por exemplo, posso escrever um teste que parta do front-end e verifica se o banco de dados está respondendo corretamente. Já os testes de aceitação cobrem um sistema como um todo, simulando o uso deste como se estivesse em produção. Podem ser realizados por pessoas da equipe de desenvolvimento, ou comunidade externa, como um beta aberto.</li>
    <li>Para nosso projeto, utilizamos a linguagem de programação Python, com o framework Django. Teremos uma aplicação monolítica, com o front-end diretamente conectado ao back-end. </li>
    <li>Para framework de teste, escolhi o <a href="https://docs.pytest.org/en/stable/">Pytest</a>. Possui uma sintaxe muito simples, com as verificações usando apenas a palavra-chave 'assert' seguida da operação lógica a ser verificada. Ele é utilizando tanto para teste unitários simples, quanto para testes de integração mais complexos.</li>
    <li>Utilizo para quase todas as linguagens o Visual Studio Code. Ele contém diversas ferramentas já implementadas, mas sua funcionalidade pode ir muito além por meio das extensões. Dessa forma, oferece suporte para praticamente todas as linguagens existentes. O VSCode possui ferramentas de debug nativas, facilitando assim todo o processo. Para definir um breakpoint, basta clicar ao lado da linha em que você pretende parar, executar em modo de debug, e o VSCode irá parar onde você definiu. Além disso possui controles intuitivos de pausa, parada, conitinuação, e outros.</li>
    <li>Para programar em Python usando Django, usei este curso da Udemy: <a href="https://www.udemy.com/course/django-python-advanced/learn/lecture/32236856?start=0#overview">API em Django</a>. Ele ensina os princípios básicos do Django, focando no Django Rest Framework, que é especializado no back-end da aplicação. Nesse caso, o exemplo usado é uma API de receitas, onde podemos cadastrar, ler, atualizar e excluir ingredientes, receitas, categorias e comentários. Além disso, o curso usa o método TDD, que prioriza testes e é ótimo para aprender como eles funcionam.</li>
    <li>Mocks são uma ferramenta muito usada em testes de unidade. Nada mais são do que objetos 'de mentira' ou simulados, para se obter um resultado esperado em um teste, isolando-o do código real de produção. Por exemplo, podemos simular uma função que retorna tal valor no nosso código real criando apenas um Mock que retorne esse mesmo valor, e usá-lo nos nossos testes. Dessa forma, os Mocks ajudam a ter controle, isolamento, flexibilidade e facilidade nos testes.</li>
</ol>

### Questão 10
<ol type="a">
    <li>Atualmente, estou trabalhando no CRUD de reservas. O progresso está lento, pois são 3 tipos de reservas com diferentes regras de negócio para cada uma, resultando em 3 CRUDS diferentes em um. Além de inserir, atualizar, consultar e deletar, precisa-se fazer validações e conversões de datas e horários entre as reservas para saber os locais vagos. No momento, esse User Story conta apenas com as operações de criação, mas as outras serão implementadas logo, já que a parte mais complicada já foi feita.</li>
    <li>A experiência de implementar testes é simples. Como nosso aplicativo é monolítico, costumamos testar principalmente os códigos HTTP recebidos das solicitações, além do tipo de payload e método que deve ser enviado em cada URL. Os testes do nosso projeto se encontram <a href="https://github.com/tgo-mas/SIGApoio/blob/main/proj_SIGApoio/app/tests.py">nesse link</a>.</li>
    <li>Um teste de integração, ao contrário do de unidade, verifica mais de uma parte do sistema. Ele pode executar uma operação que vá do front-end ao banco de dados, por exemplo, ou a conexão do front-end com a API utilizada. Alguns dos nossos testes são de integração, pois podemos testar o salvamento de objetos no banco de dados enviando-os pelo front-end.</li>
</ol>
