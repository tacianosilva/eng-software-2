# Tarefa 01 - Git e GitHub com Markdown 
### Thamiris de Oliveira Borges | Thami03 | thamirisbgrs@gmail.com :octocat:
<hr> 

# Sistema de Queijaria </br>
> O projeto Sistema de Queijaria (SQ) é um sistema caracterizado por possuir diversas funções, dentre elas estão o controle de atividades, o gerenciamento dos fornecedores, a identificação e o controle dos processos internos da queijaria, os quais vão desde a entrada da matéria-prima no sistema até o destino final do produto, ou seja, até a compra do produto final pelo consumidor. Ademais, o SQ tem como propósito o desenvolvimento de um software que registra dados de uma queijaria artesanal, incluindo o lucro, as entradas e saídas financeiras, os tipos de produtos comercializados, o estoque, os prazos de validade, bem como o histórico de vendas e os gastos, com o objetivo de informatizar e automatizar a empresa com recursos administrativos mais sofisticados e eficientes. </br>
 [Link do repositório do projeto](https://github.com/melquetrindade/sigQueijaria.git)

Equipe             |
------------------ |
Erick Bezerra      |
Felipe Souza       |  
Isa Kaillany       |  
Manuelly Rodrigues | 
Melque Rodrigues   | 
Thamiris Borges    | 

## Linguagem de programação que será usada no projeto </br>
>  Python é uma linguagem de programação de alto nível, interpretada, orientada a objetos e com tipagem dinâmica. Ela possui uma sintaxe simples e legível, facilitando o desenvolvimento e compreensão do código, também possui uma grande e ativa comunidade de desenvolvedores, contribuindo com recursos, tutoriais, documentação e pacotes, caracterizada pela colaboração e apoio mútuo. </br>
> Nossa equipe tem conhecimento intermediário.

## Framework que será usado no projeto </br>
> Django é um framework web de alto nível, escrito em Python, que incentiva o desenvolvimento rápido e limpo de aplicativos web. Foi desenvolvido para facilitar a criação de sites complexos, fornecendo uma estrutura robusta e eficiente para lidar com muitas das tarefas comuns encontradas no desenvolvimento web.


## IDE de programação que será usada no projeto </br>
> O Visual Studio Code (também conhecido como VS Code) é um editor de código-fonte desenvolvido pela Microsoft que se destaca pela sua leveza, rapidez e extensibilidade. Apesar de ser oferecido pela Microsoft, o Visual Studio Code é um software de código aberto e gratuito, o que contribuiu significativamente para sua popularidade entre os desenvolvedores.</br>

#### Ferramentas de Depuração:
> O Visual Studio Code oferece uma série de ferramentas de depuração poderosas e flexíveis que permitem aos desenvolvedores encontrar e corrigir problemas no código de forma eficiente. Algumas das principais características das ferramentas de depuração do VS Code incluem:

> * Pontos de Interrupção (Breakpoints): Os desenvolvedores podem definir pontos de interrupção no código para pausar a execução e inspecionar variáveis e o estado do programa em momentos específicos.

> * Inspeção de Variáveis: Durante a execução do programa, é possível inspecionar o valor das variáveis em tempo real para entender o comportamento do código e identificar possíveis problemas.

> * Execução Passo a Passo: Os desenvolvedores podem executar o código linha por linha, passo a passo, para entender exatamente como o programa está se comportando e identificar possíveis erros ou comportamentos inesperados.

> * Console de Depuração: O VS Code possui um console de depuração integrado que permite visualizar mensagens de log e informações de depuração durante a execução do programa.
 
#### Controle de Versão Integrado:
> O Visual Studio Code oferece integração nativa com sistemas de controle de versão, como Git, o que permite aos desenvolvedores gerenciar facilmente o controle de versão de seus projetos diretamente do editor. Algumas das principais características do controle de versão integrado do VS Code incluem:

> * Interface Gráfica para Git: O VS Code fornece uma interface gráfica intuitiva para operações comuns do Git, como commit, pull, push, merge e histórico de commits.

> * Controle de Ramificações: Os desenvolvedores podem criar, alternar e mesclar ramificações diretamente do editor, facilitando a colaboração em equipe e o desenvolvimento de recursos em paralelo.

> * Visualização de Diferenças: O VS Code oferece uma visualização de diferenças integrada que permite comparar facilmente as alterações entre diferentes versões de um arquivo e revisar as alterações antes de confirmá-las.

> * Suporte a Extensões de Controle de Versão: Além do Git, o VS Code suporta uma variedade de outras ferramentas de controle de versão, como SVN, Mercurial e outros, por meio de extensões disponíveis no Marketplace.


## Link de CRUD </br>
> O tutorial é em vídeo, no vídeo é mostrado na prática como fazer um CRUD usando Django. </br>
> [Vídeo - CRUD - Django](https://youtu.be/GGBzMpIAgz4?si=ue9_2kiSYAV2Gkw2)

## branches e pull request </br>
#### Usando git e github com o GitFlow
##### Branches (Ramos):
> Em Git, um branch é uma linha de desenvolvimento independente que diverge do branch principal (normalmente chamado de "master" ou "main"). Cada branch pode conter seu próprio conjunto de commits, alterações e histórico de código. O uso de branches permite que os desenvolvedores trabalhem em novas funcionalidades, correções de bugs ou outras tarefas sem interferir no código existente. No GitFlow, os tipos mais comuns de branches são:

 > * Branch Principal (Main): Este é o branch principal do repositório, contendo o código estável e pronto para produção. No GitFlow, este branch é frequentemente chamado de "main".

> * Branch de Desenvolvimento (Development): Este branch é usado para integrar todas as novas funcionalidades e alterações que ainda estão em desenvolvimento. No GitFlow, este branch é frequentemente chamado de "develop".

> * Feature Branches (Ramos de Funcionalidade): Esses branches são criados a partir do branch de desenvolvimento para trabalhar em novas funcionalidades. Eles são usados para isolar o trabalho em uma determinada funcionalidade antes de serem mesclados de volta ao branch de desenvolvimento.

> * Release Branches (Ramos de Lançamento): Esses branches são criados a partir do branch de desenvolvimento para preparar uma versão para lançamento. Eles são usados para finalizar os últimos ajustes, correções de bugs e preparativos para o lançamento antes de serem mesclados de volta ao branch de desenvolvimento e ao branch principal.

##### Pull Requests (ou Merge Requests):
> Um pull request (ou merge request) é uma solicitação para mesclar as alterações de um branch para outro. Em essência, ele permite que os desenvolvedores revisem e discutam as alterações propostas antes que elas sejam incorporadas ao código principal. Quando um desenvolvedor completa uma funcionalidade ou correção de bugs em um branch de funcionalidade, por exemplo, ele cria um pull request para solicitar a revisão e a mesclagem dessas alterações no branch de desenvolvimento. Algumas das principais características de um pull request incluem:

> * Revisão de Código: Os membros da equipe podem revisar o código, fazer comentários e sugerir alterações antes de aprovar a mesclagem.

> * Testes Automatizados: Muitas vezes, os pull requests são configurados para acionar testes automatizados, garantindo que as alterações propostas não quebrem o código existente.

> * Discussão e Colaboração: Os pull requests fornecem uma plataforma para discussão e colaboração entre os membros da equipe, permitindo que eles trabalhem juntos para melhorar o código.

> * Histórico e Auditoria: Os pull requests mantêm um registro completo das alterações propostas e das discussões associadas, fornecendo um histórico detalhado para referência futura e auditoria.

## Versionamento Semântico </br>
> O Versionamento Semântico é uma convenção para atribuir significado específico a números de versão de software. De acordo com as diretrizes do Versionamento Semântico, o número de versão é composto por três partes: MAJOR.MINOR.PATCH.

> * Versão Maior(MAJOR): Incrementado quando há alterações incompatíveis na API. Significa que houve mudanças que podem afetar a forma como o software interage com outros sistemas ou usuários. Na versão "2.0.0", o "2" indica que houve uma grande mudança ou adição de recursos desde a versão anterior.

> *Versão Menor(MINOR): Incrementado quando funcionalidades são adicionadas de forma compatível com as versões anteriores. Isso indica melhorias e adições que não quebram a compatibilidade com as versões anteriores. O "0" em "2.0.0" sugere que esta é a primeira versão "menor" da versão "2".

> * Versão de Correção(PATCH): Incrementado para correções de bugs e pequenas melhorias que não afetam a compatibilidade. O "0" final em "2.0.0" indica que não houve correções de bugs ou pequenas melhorias desde a última versão.


## Conventional Commits </br>