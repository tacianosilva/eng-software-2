# __Tarefa 02 - Teste de Unidade__

* __Nome__: Gabriel José de Aquino Santos.
* __Github__: gbrl08snts
* __Email:__ gabriel.aquino.069@ufrn.edu.br
* __Link do Repositório__: https://github.com/flaviogui/TechCell-Pro

# __Questão 9__
## __Questão A__

- Os testes de unidade são uma técnica fundamental no desenvolvimento de software, focada em validar a funcionalidade de componentes individuais, como funções, métodos ou classes, de forma isolada1. Esses testes são geralmente escritos e executados pelos próprios desenvolvedores durante a fase de codificação.

* __Resumo dos Testes de Unidade:__

    * __Objetivo:__ Garantir que cada unidade do código funcione conforme o esperado.
    * __Execução:__ Realizada durante o desenvolvimento, isolando e testando pequenas partes do código.
    * __Benefícios:__
        1. Identificação precoce de erros, facilitando correções antes que se propaguem.
        2. Redução de custos com manutenção e correção de bugs em fases posteriores do desenvolvimento.
        3. Melhoria na documentação do código, já que os testes servem como exemplos de uso.
    * __Ferramentas Comuns:__ JUnit, NUnit, TestNG, Pytets entre outras.

- Os testes de unidade são essenciais para a qualidade e a robustez do software, permitindo que os desenvolvedores façam alterações com confiança e mantenham um código mais limpo e bem documentado.

## __Questão B__

- A linguagem escolhida no projeto foi o Python, a linguagem é conhecida por sua simplicidade e legibilidade, o que a torna ideal tanto para iniciantes quanto para desenvolvedores experientes.

* __Características:__
    1. __Sintaxe Clara:__ Facilita a escrita e a leitura do código.
    2. __Bibliotecas Ricas:__ Possui uma vasta gama de bibliotecas e frameworks que aceleram o desenvolvimento.
    3. __Comunidade Ativa:__ Grande comunidade de desenvolvedores que contribuem com pacotes, tutoriais e suporte.

- O framework escolhido foi o Django que é um framework python de alto nível para o desenvolvimento de aplicações web rápidas e seguras.

* __Características:__
    1. __Arquitetura MVC:__ Segue o padrão Model-View-Controller, facilitando a organização do código.
    2. __Admin Interface:__ Interface administrativa pronta para uso, que facilita a gestão de dados.
    3. __Segurança:__ Inclui proteções contra ataques comuns, como SQL Injection e Cross-Site Scripting (XSS).
    4. __Escalabilidade:__ Projetado para escalar facilmente, suportando desde pequenos projetos até grandes aplicações.

## __Questão C__

- O Django TestCase é uma ferramenta poderosa para realizar testes de unidade em projetos Django. Aqui está um resumo sobre ele:

* __Descrição:__ O TestCase do Django é uma subclasse do unittest.TestCase que oferece funcionalidades adicionais específicas para o Django. Ele permite a criação de testes que interagem com o banco de dados e outras partes do framework de forma isolada e controlada.

* __Características:__
    1. __Banco de Dados de Teste:__ Cria um banco de dados temporário para cada conjunto de testes, garantindo que os testes não afetem o banco de dados de produção.
    2. __Fixtures:__ Permite carregar dados de teste a partir de arquivos JSON, XML ou YAML.
    3. __Client:__ Um cliente de teste que simula requisições HTTP, facilitando o teste de views e URLs.
    4. __Assertions:__ Várias funções de asserção para verificar o comportamento esperado do código.

- Link sobre o framework de testes: https://docs.djangoproject.com/en/5.0/topics/testing/overview/

## __Questão D__

- O Visual Studio Code (VS Code) é uma das IDEs mais populares e versáteis atualmente. Ele é conhecido por ser leve, rápido e altamente customizável, o que o torna uma escolha favorita entre desenvolvedores de diversas linguagens de programação.

- O VS Code possui um conjunto robusto de ferramentas de depuração integradas que facilitam a identificação e correção de erros no código.

    1. __Breakpoints:__ Permitem pausar a execução do código em pontos específicos para inspecionar variáveis e o fluxo do programa.
    2. __Watch:__ Monitora expressões e variáveis específicas durante a execução do código.
    3. __Call Stack:__ Exibe a pilha de chamadas, permitindo que você veja a sequência de funções que foram chamadas até o ponto atual.
    4. __Variables:__ Mostra os valores das variáveis no contexto atual, facilitando a inspeção e modificação de valores durante a depuração.
    5. __Debug Console:__ Permite a execução de comandos e expressões durante a depuração, ajudando a testar correções rápidas e verificar o comportamento do código.

- Além dessas ferramentas, o VS Code suporta extensões que podem adicionar ainda mais funcionalidades de depuração específicas para diferentes linguagens e frameworks.

## __Questão E__

- __Link de uma Playplist:__ https://www.youtube.com/watch?v=0MrgsYswT1c&list=PLbpAWbHbi5rMF2j5n6imm0enrSD9eQUaM&index=2

O tutorial aborda os seguintes pontos principais:

* __Configuração do ambiente de teste:__ Explica como configurar o ambiente de teste de forma adequada, incluindo a instalação das dependências necessárias e a criação de um arquivo de configuração específico para os testes.
* __Estrutura básica de um teste:__ Demonstra a estrutura básica de um teste unitário no Django, mostrando como criar uma classe de teste e como escrever métodos de teste individuais.
* __Testando modelos:__ Apresenta exemplos práticos de como testar modelos, verificando se os campos estão sendo validados corretamente, se as relações entre os modelos estão funcionando como esperado e outras funcionalidades relacionadas aos modelos.
* __Utilizando o framework de testes do Django:__ Explica como utilizar o framework de testes integrado ao Django para executar os testes e gerar relatórios de cobertura de código.
* __Conceitos importantes:__ Aborda conceitos importantes como assertions, fixtures e mocking, que são ferramentas essenciais para escrever testes eficazes.

- Em resumo, este vídeo fornece uma introdução prática à escrita de testes unitários no Django, capacitando o desenvolvedor a criar testes que garantam a qualidade e a confiabilidade do seu código.

## __Questão F__

- Mocks Objects são ferramentas poderosas para escrever testes unitários eficazes no Django. Ao isolar componentes e controlar o comportamento de dependências, você pode garantir a qualidade e a confiabilidade do seu código.

* __Benefícios:__
    * __Isolamento de testes:__ Ao simular dependências, os testes se tornam mais independentes e menos suscetíveis a falhas causadas por mudanças em outros componentes.
    * __Controle sobre o comportamento:__ Você pode definir exatamente como o Mock Object deve se comportar, permitindo que você teste diferentes cenários e casos de borda.
    * __Melhora na velocidade dos testes:__ Ao simular chamadas a sistemas externos lentos, como bancos de dados ou APIs, os testes se tornam mais rápidos.
    * __Facilita o desenvolvimento de testes:__ Mocks Objects podem simplificar a escrita de testes, especialmente quando você precisa testar componentes que possuem muitas dependências.

- No Django, você pode utilizar o módulo unittest.mock para criar Mock Objects. É comum usar Mocks para simular:

    1. __Chamadas a bancos de dados:__ Simulando o resultado de queries.
    2. __Chamadas a APIs externas:__ Simulando respostas de APIs.
    3. __Chamadas a outros componentes do sistema:__ Simulando o comportamento de outros módulos ou classes.

# __Questão 10__

## __Questão A__

- Eu implementei o User Story 01 - Manter Cliente, ele basicamente possui 4 operações normais. O sistema deve manter um cadastro de cliente através do técnico que tem acesso ao sistema via login e senha. Um cliente tem os atributos nome, telefone, email e endereço. O cadastro do(s) técnico(s) será realizados pelos criadores do sistema, e o cadastro dos clientes será realizado pelo(s) técnico(s). O técnico poderá alterar o cliente caso tenha um dado incorreto, como também consultar um cliente caso o mesmo venha a contratar novamente os serviços do técnico, o técnico também poderá vizualizar informações do cliente para um eventual confirmação de dados e por fim, a o técnico poderá excluir o cliente caso seja preciso devido a força maior.

- Para implementar esse User Story 01 eu criei um app no projeto django chamado clienteApp e segui o fluxo normal de desenvolvimento dentro do framework, criei a tabela do cliente no arquivo "models.py", após isso fiz acrecentei duas configurações nos arquivos "admin.py" e "apps.py" do meu módulo, para ele ser recconhecido pelo django ao rodar o projeto, logo em seguida trabalhei na construção das funções dentro do meu arquivo "views.py" onde criei 4 funções que realizam uma parte do CRUD cada uma, inserir(cliente_create_view), listar(cliente_list_view), atualizar(cliente_update_view) e deletar(cliente_delete_view), em seguida configurei meu arquivo "urls.py" para que as rotas estivessem funcionando corretamente ao acessá-las, após isso criei o arquivo "forms.py" e adicionei as configurações básicas dele, por último realizei mais duas etapas do CRUD, a criação de 4 arquivos HTML, um na pasta geral do projeto chamado "base.html" e outros 3 dentro da pasta templates do clienteApp chamados de cliente_form.html, cliente_list.html" e "cliente_update.html", tive que criar esses esqueletos do fron-end para testar se as views estavam funcionando corretamente, e por último criei um arquivo "tests.py" onde existe 4 classes de testes unitários, uma para testar as views, uma para testar os forms, uma para os models, e uma para as urls.

## __Questão B__

- Como dito na questão anterior implementei testes que não somente testavam o CRUD (as views), como também para testar os models, urls e forms do clienteApp. Durante o desenvolvimento dos testes unitários não realizei o uso dos Mock Objects, pois não tinha conhecimento do uso desse pacote para a realização de testes, e não cheguei a assistir tutoriais sobre testes unitários no django que utilizassem ele.

- A experiência de desenvolver os testes de unidade foi interessante, não tinha conhecimento de como realizar testes numa aplicação python ou em qualquer outra, pois nunca tinha feito antes, no geral foi satisfatório aprender e aplicar os testes embora eu tivesse alguns contra-tempos e erros durante a codificação deles.

- __Link do arquivo de testes:__ https://github.com/flaviogui/TechCell-Pro/blob/main/projeto/clienteApp/tests.py

## __Questão C__

- Em meu projeto utilizei os testes de unidade.

-  __Teste de Integração__

- Teste de integração é um nível de teste de software onde diferentes módulos ou componentes de um aplicativo são testados juntos. O objetivo é verificar se os módulos interagem corretamente uns com os outros. Em vez de testar apenas uma unidade isolada, os testes de integração verificam a funcionalidade de um conjunto de módulos como um todo.

* __Objetivos:__

    1. Validar as interações entre diferentes componentes do sistema.
    2. Detectar problemas de interface entre os módulos.
    3. Verificar o funcionamento correto do sistema em um ambiente integrado.

* __Características:__

    1. __Interações:__ Envolve a combinação de dois ou mais módulos do sistema.
    2. __Ambiente Real:__ Usa componentes reais para verificar as integrações.
    3. __Complexidade:__ Pode ser mais complexo e demorado de executar devido à necessidade de configurar um ambiente mais realista.

* __Diferença Entre Teste Unitário e Teste de Integração__
* __Teste Unitário:__

    * __Foco:__ Testa componentes individuais isoladamente.
    * __Objetivo:__ Garantir que cada unidade de código funcione conforme o esperado.
    * __Isolamento:__ As dependências são mockadas ou substituídas para isolar a unidade em teste.
    * __Rapidez:__ Geralmente são rápidos de executar e fáceis de escrever.
    * __Escopo:__ Pequeno, focado em funções, métodos ou classes.

* __Teste de Integração:__

    * __Foco:__ Testa a interação entre múltiplos componentes.
    * __Objetivo:__ Garantir que os componentes funcionem corretamente juntos.
    * __Isolamento:__ Não há isolamento completo, pois a interação entre componentes reais é verificada.
    * __Complexidade:__ Podem ser mais complexos e demorados de executar do que os testes unitários.
    * __Escopo:__ Maior, focado em interações entre componentes do sistema.