# Tarefa 01 - Git e GitHub com Markdown 
**Discente:** Júlia Lilian Prudêncio da Costa
**Usuário Github:** julia2000-git
**Email:** julia.lilian.706@ufrn.edu.br

## Seção com as informações dos itens da Questão 9

### Item a - Informações sobre o Projeto

* **Título do Projeto:** Antiveaco
* **Descrição do Projeto:** Sistema web criado para o gerenciamento de vendas do tipo "fiado" em um pequeno estabelecimento comercial. O principal objetivo do projeto é permitir o controle de clientes, o registro de dívidas (compras fiadas), o abatimento de pagamentos (totais ou parciais) e a geração de relatórios de inadimplências e histórico de clientes.
* **Equipe:** Arthur Medeiros, Expedito Luiz, Ivyson Wanderson, José Gean e Júlia Lilian
* **Link do repositório:** <https://github.com/expeditofranca/ProjetoEngenharia1.git> 

### Item b - Linguagem de programação utilizada

A linguagem de programação que será utilizada no projeto será **Python**. É uma linguagem versátil, aplicada em diversos tipos de projeto, desde aplicações para desenvolvimento web (como back-end) até sistemas automatizados, ciências de dados e *machine learning*. É uma linguagem de alto nível, possuindo uma sintaxe mais próxima da linguagem humana, facilitando a compreensão e adaptação à linguagem. 

A equipe do projeto está razoavelmente familiarizada com Python, devido especialmente aos primeiros períodos do curso de Bacharelado em Sistemas de Informação (BSI), nos quais a linguagem foi frequentemente utilizada para a realização de diferentes atividades. Assim, há uma maior facilidade com a programação em Python por parte dos integrantes, sendo essa a maior motivação para sua escolha.

### Item c - Framework utilizado

O framework utilizando será **Django**. É um framework baseado em Python, de alto nível e de código aberto, bastante utilizado especialmente para o desenvolvimento de sites e aplicações web. Possui características importantes, como segurança (proteção contra manipulações indevidas no banco de dados), interação com bancos de dados (a partir do Python), fornecimento de interfaces prontas e personalizáveis, disponibilidade d ediversas bibliotecas e escalabilidade, sendo ideal para projetos grandes, que demandam grandes quantidades de usuários e grande volume de tráfego de dados.

### Item d - IDE utilizada e ferramentas de debug e controle de versão

A IDE utilizada será o **VS Code**. É um ambiente versátil e repleto de extensões, possuindo diversas características que auxiliam na codificação. Possui compatibilidade com diferentes sistemas operacionais (Linux, Windows, MacOS), seu código é leve e sua interface combina editor de texto (código) com várias ferramentas como terminais, sistema de controle de versão, depuração, suporte a várias linguagens e layout personalizável. 

A **ferramenta de depuração (debug)** nativa do VS Code serve para identificar, analisar e corrigir erros (*bugs*) no código, além da análise de variáveis e do fluxo dos programas. Ela possui a funcionalidade dos *breakpoints*, que são basicamente pontos de parada no código que podem ser definidos pelo próprio programador, permitindo pausar sua execução para análise do código, identificação de possíveis erros e inspeção de variáveis. Há um painel de depuração, no qual podem ser gerenciadas as configuraçãoes para a execução dos códigos. 

Há também a ferramenta de **controle de versão** do VS Code. Ela é nativa e integrada ao Git, permtindo gerenciar diferentes versões dos programas e as sequências de desenvolvimento. Com recursos como commits, branches, pull/push, entre outros, é possível realizar tarefas como salvar e enviar mensagens de mudanças, criar ramos de desenvolvimento independentes para diferentes funcionalidades, obter ou enviar códigos para repositórios no GitHub, destacar modificações em arquivos e identificar e resolver conflitos entre versões de arquivos, entre outros. 

### Item e - Tutorial CRUD com as tecnologias escolhidas

* Link de tutorial de CRUD com Python e Django: Seu primeiro CRUD com DJANGO - <https://youtu.be/ZXli2MJyRyk?si=zI3jxAvGKXGdpTIo>
* O vídeo acima busca ensinar como fazer um CRUD simples utilizando Python e Django. Explica sobre como usar templates do Django de forma mais básica, métodos de requisição e funções de CRUD, com design simples de interface.

### Item f - Branches, pull requests, Git, GitHub e Git Flow 

* **Branches**: As branches são ramificações independentes da linha principal de desenvolvimento de um software. Essa parte principal do projeto é conhecida como *main*, que também é uma branch, mas que contém o código e as branches são utilizadas para criar novas funcionalidades, correção de erros e realização de testes, entre outras atividades, de forma isolada, sem precisar alterar o código principal (main). Assim, por meio das branches, os integrantes da equipe de desenvolvimento podem trabalhar em conjunto e simultaneamente, sem que cada um faça modificações no trabalho do outro e sem alterar a main. 

* **Pull requests**: Um *pull request* pode ser entendido como uma forma de solicitar a avaliação e integração das alterações feitas em uma branch, para que sejam incorporadas à main, em um repositório remoto (GitHub). Quando um pull request é aberto, isso significa que alguém da equipe (o líder, algum revisor, etc) deverá avaliar se tudo o que foi desenvolvido naquela branch está correto, sem erros, estável e ponto para ser integrado ao código principal, e então, depois que o pull request é aprovado, uma *merge* (mescla) é feita e todas as mudanças desenvolvidas passarão a fazer parte da main. 

* Branches e pull requests fazem parte do **Git**, que é um sistema de controle de versão distribuído de código aberto que é instalado na máquina do usuário. O Git é geralmente utilizado junto com o **GitHub**, uma plataforma online que armazena repositórios de forma remota. Juntos, proporcionam a integração de repositórios remotos com repositórios locais, incluindo gerencionamento de versões e do fluxo de desenvolvimento.

* O **Git Flow** é uma estratégia de hierarquia de ramificação específica e estruturada baseada nos comandos do Git, orientando fluxos de trabalho de projetos quanto a recursos de ramificação, e mesclagens. Dessa forma, um projeto de desenvolvimento de software pode combinar os recursos do Git com o uso da plataforma do GitHub seguindo estruturas do Git Flow.

### Item g - Versionamento Semântico

O **versionamento semântico** é uma pequena estrutura de numeração (composta de três números no formato "X.Y.Z") que indica a versão de um software desenvolvido (ou em desenvolvimento). Ela é baseada de acordo com as atualizações, mudanças e correções feitas no decorrer da implementação e manutenção do software, fazendo com que o projeto mude de uma versão mais antiga para uma versão mais recente e atualizada. Existem regras que norteiam a mudança de uma versão para outra, e cada número do formato X.Y.Z indica uma especificidade desenvolvida no software. O número Z, conhecido como "PATCH", indica que houve correção de *bugs* no software compatíveis com o projeto (compatíveis com a versão da API utilizada, por exemplo), assim, um suposto software incrementa 1 no número Z da sua versão quando uma correção de erros compatíveis ocorrer. O número Y, conhecido como "MINOR", é incrementado quando novas funcionalidades compatíveis com a versão anterior são adicionadas ao software. Já o número "X", designado "MAJOR", é incrementado quando são acrescentadas mudanças que são incompatíveis com versões anteriores. 

Se um software está utilizando versionamento semântico, ele deve declarar uma API pública, podendo ser declarada no próprio código ou em documentação, de forma precisa e compreensiva. Uma outra regra diz que, no início do desenvolvimento, a versão MAJOR (maior) deve ser 0 (o formato deve ser 0.y.z, onde y e z podem mudar constantemente), e sua API não é estável. Outra regra diz que a versão 1.0.0 de um software, quando é lançada, define a API como pública e estável. Esses são alguns exemplos de regras que mostram como o versionamento semântico explicita as atualizações e mudanças feitas em um software. A estrutura do versionamento semântico, junto com suas regras e orientações, é essencial para garantir um bom gerenciamento de versões de um software, prevendo os possíveis impactos causados por novas atualizações, além de definir um padrão a ser compreendido por seus usuários e por evitar problemas relacionados à gestão de dependências de pacotes e bibliotecas.

### Item h - Conventional Commits

O **Conventional Commits** são um conjunto de regras que designam convenções para mensagens de commits. A estrutura definida para um commit a partir das convenções é a seguinte: 

>tipo(escopo opcional): < breve descrição >  
>[corpo opcional]
>[ rodapé(s) opcional(is)]           

Existem diferentes tipos de commits. Um commit do tipo 'feat' indica que foi desenvolvida uma nova *feature*, ou seja, uma nova funcionalidade no software. Um commit do tipo 'fix' indica que houve correção de erros e bugs. O tipo 'docs' indica alterações na documentação. O tipo 'style' indica mudanças realizadas que não afetam o significado do código (mudanças como linhas, espaços, ponto e vírgula, entre outros). O tipo 'perf' é para mudanças que melhoram o desempenho do código. O tipo 'test' é para adicionar testes ou corrigi-los. O 'refactor' indica mudanças na estrutura do código, sem a adicção de novas funcionalidades nem correção de bugs. O 'chore' é para tarefas rotineiras que não alteram código-fonte nem testes. O 'build' é para alterações de sistema de build ou relacionadas a dependências externas. Os padrões do conventional commits podem ser utilizados juntamente com o versionamento semântico, facilitando identificação de alterações e o controle de versões. Um exemplo disso é o uso do texto "BREAKING CHANGE" no rodapé opcional do commit (ou uso do sinal de exclamação '!' depois do tipo do commit): ele indica que foi realizada uma modificação que quebra a compatibilidade com a API, o que conversa diretamente com o versionamento semântico no que diz respeito a versões do tipo MAJOR. As convenções de commits, com suas regras e orientações, são importantes por definirem um padrão que pode ser facilmente compreendido pelo público, colegas de equipe e demais interessados, além de se integrarem ao uso do versionamento semântico e facilitar controle de alterações e de versões.
