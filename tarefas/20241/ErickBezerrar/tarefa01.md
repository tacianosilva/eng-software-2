# Tarefa 01 - Git e GitHub com Markdown

* Nome: Erick Bezerra Ribeiro Trindade
* Usuário Github: [ErickBezerrar](https://github.com/ErickBezerrar)
* E-mail: erickbrtrindade@gmail.com

* * * 

## SigQueijaria 

**Descrição:**

O projeto Sistema de Queijaria (SQ) é um sistema caracterizado por possuir diversas funções, dentre elas estão o controle de atividades, o gerenciamento dos fornecedores, a identificação e o controle dos processos internos da queijaria, os quais vão desde a entrada da matéria-prima no sistema até o destino final do produto, ou seja, até a compra do produto final pelo consumidor. Ademais, o SQ tem como propósito o desenvolvimento de um software que registra dados de uma queijaria artesanal, incluindo o lucro, as entradas e saídas financeiras, os tipos de produtos comercializados, o estoque, os prazos de validade, bem como o histórico de vendas e os gastos, com o objetivo de informatizar e automatizar a empresa com recursos administrativos mais sofisticados e eficientes.

**Equipe:**

* [Melque](https://github.com/melquetrindade)
* [Manuelly](https://github.com/Manuelly1)
* [Felipe Souza](https://github.com/FelipeSouza14)
* [Thamiris](https://github.com/Thami03)
* [Isa Kaillany](https://github.com/IsaKaillany)
* [Erick Bezerra](https://github.com/ErickBezerrar)

**Link do repositório:**

* [SigQueijaria](https://github.com/melquetrindade/sigQueijaria)

* * *

## Linguagem de Programação

* Linguagem usada: **Python**

Python é uma linguagem de programação de alto nível,[6] interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.[1] Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation. Apesar de várias partes da linguagem possuírem padrões e especificações formais, a linguagem, como um todo, não é formalmente especificada.

* * *

## Framework

* Framework usado: **Django**

O Django é um framework popular para o desenvolvimento rápido de aplicações web, sendo escrito em Python e seguindo o padrão model-template-view (MTV). Sua origem remonta ao uso inicial como um sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Posteriormente, evoluiu para um projeto de código aberto e foi lançado sob a licença BSD em 2005. O nome Django foi uma homenagem ao renomado músico de jazz Django Reinhardt.

* * *

## IDE

* IDE usada: **Visual Studio Code(VsCode)**

O Visual Studio Code é um editor de código-fonte amplamente utilizado, desenvolvido pela Microsoft para ser compatível com os sistemas operacionais Windows, Linux e macOS. Oferece uma variedade de recursos, como suporte para depuração, integração nativa com o Git para controle de versionamento, destaque de sintaxe, conclusão automática de código, snippets e ferramentas de refatoração de código. Além disso, é altamente customizável, permitindo que os usuários personalizem o tema do editor, atalhos de teclado e preferências de acordo com suas necessidades. Embora seja distribuído oficialmente sob uma licença proprietária, o Visual Studio Code é um software livre e de código aberto.

* * *

## Tutorial CRUD

* Link: https://www.youtube.com/watch?v=GGBzMpIAgz4

Criação de CRUD completo. CRUD é um acrônimo que representa as quatro operações básicas realizadas em sistemas que lidam com dados persistentes: Create (Criação), Read (Leitura), Update (Atualização) e Delete (Remoção). Essas operações são fundamentais em sistemas de gerenciamento de bancos de dados e são usadas para manipular dados de forma eficiente e organizada.

* * *

## Branches e Pull request 

Branches e pull requests são conceitos fundamentais no uso do Git e do GitHub, especialmente quando seguindo o GitFlow, um modelo de fluxo de trabalho popular para colaboração em projetos de desenvolvimento de software. Aqui está uma explicação sobre cada um desses elementos:

Branches (ramificações):

No Git, uma ramificação é uma linha de desenvolvimento independente que permite que você trabalhe em novas funcionalidades, correções de bugs ou outras alterações sem afetar diretamente a branch principal do projeto (normalmente a branch main ou master).
Com o GitFlow, são comuns várias branches, incluindo:
main ou master: representa a branch principal do projeto, onde o código estável e pronto para produção é mantido.
develop: uma branch de desenvolvimento onde as novas funcionalidades são integradas e testadas antes de serem mescladas na branch principal.
feature branches: criadas a partir da branch develop, são usadas para desenvolver novas funcionalidades ou fazer alterações específicas.
release branches: criadas a partir da branch develop, são usadas para preparar e testar o código para uma versão de lançamento.
hotfix branches: criadas a partir da branch main ou master, são usadas para corrigir bugs críticos em produção.
Pull Request (Merge Request):

Um pull request, também conhecido como merge request em algumas plataformas, é uma solicitação para mesclar as alterações de uma branch para outra. Por exemplo, você pode criar um pull request para mesclar as alterações de uma branch de funcionalidade (feature) na branch develop.
Ao abrir um pull request, você pode revisar as alterações, discutir e colaborar com outros desenvolvedores antes de mesclar as mudanças na branch de destino.
O GitHub fornece uma interface amigável para gerenciar pull requests, permitindo revisões de código, comentários, testes automatizados e ações de integração contínua antes da mesclagem.
O GitFlow é um modelo flexível que ajuda a organizar e facilitar o desenvolvimento colaborativo, fornecendo uma estrutura clara para trabalhar com branches, pull requests e fluxos de trabalho de desenvolvimento.

* * *

## Versionamento Semântico


O Versionamento Semântico é uma abordagem crucial para gerenciar as versões de software de forma significativa e consistente. Sem seguir uma especificação formal, os números de versão perdem sua utilidade no gerenciamento de dependências. Ao dar nomes claros e definir conceitos precisos ao versionamento, torna-se mais fácil comunicar as intenções aos usuários do software.

Ao adotar o Versionamento Semântico, torna-se possível especificar dependências de forma flexível, mas com limites bem definidos. Por exemplo, se o Caminhão de Bombeiros requer funcionalidades introduzidas na versão 3.1.0 da Escada, você pode declarar a dependência da Escada como sendo maior ou igual a 3.1.0, mas menor que 4.0.0. Isso garante compatibilidade com versões existentes do software dependente.

Quando novas versões da Escada, como 3.1.1 e 3.2.0, são lançadas, você pode atualizá-las em seu sistema de gerenciamento de pacotes com a certeza de que serão compatíveis com o software dependente existente. Como desenvolvedor responsável, é importante garantir que qualquer atualização de pacote funcione conforme anunciado. O Versionamento Semântico fornece uma maneira sensata de lançar e atualizar pacotes, economizando tempo e evitando problemas ao atualizar para novas versões de pacotes dependentes.

 * * *
  
##  Conventional Commits

A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o SemVer, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:

* fix: um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com PATCH do versionamento semântico).

* feat: um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com MINOR do versionamento semântico).

* BREAKING CHANGE: um commit que contém no rodapé opcional o texto BREAKING CHANGE:, ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com MAJOR do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.
* Outros tipos adicionais são permitidos além de fix: e feat:, por exemplo @commitlint/config-conventional (baseado na Convenção do Angular) recomenda-se build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, entre outros.
* Outros rodapés diferentes de BREAKING CHANGE: <descrição> podem ser providos e seguem a convenção simular a git trailer format.