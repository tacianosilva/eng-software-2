# Tarefa 02 - Teste de Unidade

**Nome:** Ariadny Francisca Dantas Santos
**Usuário GitHub:** ariadnyD
**E-mail:** ariadnyfran15@gmail.com
**Link para o repositório:** https://github.com/riamxpp/Oficina-mecanica

## a) Testes de Software e Testes de Unidade
Testes de software são processos sistemáticos para verificar se um sistema atende aos requisitos estabelecidos e garantir a sua qualidade, prevenindo bugs antes que cheguem à produção. O **Teste de Unidade** (Unit Testing) é o nível mais baixo e fundamental dessa prática. Nele, testamos as menores partes testáveis de uma aplicação — como funções, métodos ou classes — de forma isolada do resto do sistema e de dependências externas (bancos de dados, APIs). O objetivo é garantir que cada "engrenagem" da aplicação funcione perfeitamente sozinha.

## b) Linguagem de Programação e Stack do Projeto
Para o desenvolvimento do projeto desta disciplina, utilizaremos a stack composta por **Django** no back-end (utilizando a linguagem **Python**) e **React** no front-end (utilizando **JavaScript** / **TypeScript**). 
- O **Django** (especialmente com o Django REST Framework) facilitará a construção robusta e rápida da API, gerenciamento do banco de dados relacional e aplicação das regras de negócio.
- O **React** será responsável por consumir essas APIs e entregar uma interface de usuário dinâmica, componentizada e responsiva.

## c) Framework de Testes de Unidade
Como a stack engloba back-end e front-end, temos ecossistemas de testes distintos:

Para o Django (Python), destacamos o **Pytest** com o plugin `pytest-django`.
* **Resumo:** O Pytest é um framework de testes amplamente adotado na comunidade Python. Diferente do módulo `unittest` padrão, ele permite escrever testes de forma muito mais simples e limpa utilizando apenas declarações `assert` nativas. Ele também introduz o conceito de *fixtures*, que são blocos de código reaproveitáveis que preparam o estado necessário para rodar um teste (como preencher dados fakes no banco).
* **Link para o Pytest-Django:** [https://pytest-django.readthedocs.io/](https://pytest-django.readthedocs.io/)

Para o React (Front-end), a ferramenta mais comum no mercado é o **Jest** aliado à **React Testing Library**.
* **Link para o Jest:** [https://jestjs.io/pt-BR/](https://jestjs.io/pt-BR/)

## d) IDE Utilizada e Ferramentas de Debug
A IDE principal utilizada no projeto é o **Visual Studio Code (VS Code)**, conhecida por ser leve, altamente extensível e perfeita para fluxos de trabalho que envolvem múltiplas linguagens (Python e JS).
O VS Code possui ferramentas de **debug integradas** muito completas. Na aba "Run and Debug", é possível configurar execuções passo a passo da aplicação. Entre as principais ferramentas do debugger destacam-se:
* **Breakpoints (Pontos de interrupção):** Permite pausar a execução do código em uma linha exata.
* **Call Stack (Pilha de chamadas):** Mostra o caminho de funções que foram executadas até chegar ao ponto atual.
* **Watch (Variáveis):** Uma área para monitorar o estado e o valor das variáveis em tempo real enquanto o código está pausado.
* **Debug Console:** Um terminal interativo onde é possível rodar comandos, modificar variáveis ou testar pequenos trechos de código com a aplicação congelada no tempo.

## e) Tutorial: CRUD com Testes de Software
* **Link:** [Learn Django TDD - Test Driven Development - CRUD (YouTube)](https://www.youtube.com/watch?v=REhBTwubGzo) - Canal Code With Stein.
* **Resumo:** Este tutorial prático em vídeo demonstra a criação de uma aplicação web CRUD completa no Django utilizando a metodologia TDD (Desenvolvimento Orientado a Testes). O autor ensina como escrever os testes para os modelos, views de listagem, detalhes, criação, atualização e deleção *antes* de implementar a lógica de fato. É um excelente material para ver os testes orientando o design do software passo a passo.

## f) Mock Objects em Testes de Unidade
**Mock Objects** (Objetos Simulados) são "dublês" ou clones falsos usados durante a escrita de testes de unidade. Quando a função ou classe que estamos testando depende de algo externo que é lento, de difícil acesso ou que tem efeitos colaterais reais (como chamar uma API de pagamento externa, enviar um e-mail ou conectar no banco de dados da nuvem), nós inserimos um Mock no lugar dessa dependência.
A vantagem do Mock é que ele permite simular comportamentos controlados (ex: "simular que a API retornou o código HTTP 404") para ver como a sua função reage a erros. Ele também rastreia interações, possibilitando que o desenvolvedor crie asserções do tipo *"A função de enviar e-mail foi chamada pelo menos uma vez com o destinatário correto?"*, sem que o e-mail precise ser enviado de verdade. Isso mantém os testes de unidade rápidos, isolados e confiáveis.

