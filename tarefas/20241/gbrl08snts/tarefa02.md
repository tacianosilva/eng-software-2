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
