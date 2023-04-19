### Tarefa 01 - Git e GitHub com Markdown

nome: Renan Dantas
usuário github: [Renanvaled](https://github.com/RenanValed)
e-mail: rénanvaled@gmail.com

# Sistema de controle de pronto (REPy)
## Descrição do projeto:

O Sistema de Controle de Pontos surge com a necessidade de contabilizar a jornada de trabalho dos funcionários/colaboradores de uma empresa de forma mais ágil, dinâmica e eficiente. Evitar fraudes, erros na hora do registro, rasuras e no fim tudo mais organizado, protegido e gerenciável.
O sistema será capaz de auxiliar seus devidos usuários no gerenciamento e consulta de dados relacionado a cada cliente envolvido, tendo em vista a modernização na marcação de ponto em sua jornada de trabalho. Além disso, será capaz de gerar relatórios de carga-horárias cumpridas e acompanhá-la periodicamente.

# Equipe
Nome | Competências | Papel |
---- | ------------ | ----- |
Bruno Costa | Desenvolvedor Web-Apps, sites, python, C | Gerente, Desenvolvedor |
David Santos | Desenvolvedor Back-end, API REST (django) | Desenvolvedor |
Renan vale | Product Manager, Dev. python, Dev. C | Gerente, Desenvolvedor |
Marcelo Vitor | Desenvolvedor Front-end, UX/UI | Desenvolvedor |

## Linguagens de programação:
### Python
    A equipe possui um conhecimento intermediário em Python, adquirido através de projetos realizados, cursos assistidos e da disciplina de ALP, que utilizou Python como linguagem base. Caso surjam dúvidas durante a construção do projeto, a equipe pode utilizar materiais de apoio previamente organizados para auxiliar no desenvolvimento.

## Frameworks:
### ReactJs
ReactJs é um framework com base em javascript voltado para criação de interfaces com o usuário(front-end), em que sua grande caracteristica é criar componentes reutilizáveis. Essa componentização permite o reaproveitamento de conteúdos e possibilita a criação de sites bem otimizados.

### DjangoREST

O DjangoREST é uma biblioteca do Django que ajuda a construir APIs RESTful de forma simples e eficiente. Algumas das vantagens são: a facilidade na criação de APIs, o suporte embutido para autenticação e autorização, a manipulação fácil de dados serializados e a integração perfeita com outros componentes do Django, como o ORM e o sistema de autenticação.

## IDE(Integrated Development Environment)
### Visual Studio
É um ambiente de desenvolvimento integrado desenvolvido pela Microsoft. Principais características incluem suporte a diversas linguagens de programação, depuração integrada, controle de versão, gerenciamento de pacotes e bibliotecas, bem como ferramentas para teste de código e análise de desempenho.

#### Ferramentas de debug e controle de versão da IDE
* A ferramenta de debug integrada ajuda os desenvolvedores a encontrar e corrigir erros em seu código com facilidade,e tamém, os desenvolvedores definam pontos de interrupção e inspecionem variáveis em tempo real, bem como acompanhem a execução do código linha por linha.

* Possui integração nativa com vários sistemas de controle de versão, como o Git, SVN e Mercurial. Isso permite que os desenvolvedores gerenciem seus projetos de maneira eficiente, rastreiem alterações no código, revertam alterações e resolvam conflitos.

##Exemplo de aplicaçao CRUD emm python

Este tutorial, mostra como relacionar a tecnologia de Python com o MySQL. Exibindo: inicializaçao de conexão com o BD, o envio de dados(INESERT), a requisição de dados (READ), a atualizaçao de um campo na tabela e a excusão de um dado existente no BD. 
Além de, na descriçao deixar um link para outro vídeo que mostra como integrar o CRUD em botões.
- [Ir para vídeo](https://www.youtube.com/watch?v=_q3j25ACmQ4)

### Branches e Pull Request com GitFlow

O GitFlow é uma metodologia de desenvolvimento de software que utiliza o Git como sistema de controle de versão. Ele define um fluxo de trabalho para gerenciar as branches e pull requests em projetos colaborativos.

## Branches principais

O GitFlow propõe a criação de duas branches principais:

- **Master**: contém o código estável e pronto para ser lançado.
- **Develop**: onde as novas funcionalidades são desenvolvidas e testadas antes de serem integradas à branch master.

### Branches secundárias

Além das branches principais, o GitFlow sugere a criação de outras branches secundárias:

- **Feature**: para desenvolvimento de novas funcionalidades.
- **Hotfix**: para correção rápida de bugs.
- **Release**: para preparação da próxima versão do software.

### Pull Request

Quando uma nova funcionalidade é desenvolvida na branch feature, por exemplo, ela deve passar por testes locais antes de ser enviada para revisão através do pull request. O pull request é uma solicitação para que os outros membros da equipe revisem o código e deem feedbacks antes da integração com a branch develop.

Após a revisão e aprovação do pull request, a nova funcionalidade pode ser integrada à branch develop. Quando a branch develop estiver pronta para ser lançada em produção, ela pode ser mesclada com a branch master através do pull request.

Em resumo, o GitFlow é uma metodologia eficiente para gerenciar as branches e pull requests em projetos colaborativos utilizando o Git e o GitHub. Ele ajuda a manter um fluxo organizado e seguro para o desenvolvimento do software.

### Versionamento Semântico

## Estrutura

| Versão | Significado |
|--------|-------------|
| X      | Versão Maior: Incrementado quando há alterações incompatíveis com as versões anteriores da API. |
| y      | Versão Menor: Incrementado quando há adições ou alterações compatíveis com as versões anteriores da API. |
| z      | Versão de Correção: Incrementado quando há correções de falhas (bug fixes) que não afetam a API. |

Essa estrutura é utilizada para atribuir números de versão específicos para cada mudança no código, permitindo que os desenvolvedores entendam rapidamente o significado do código subjacente e evitem problemas comuns ao atualizar pacotes ou dependências em projetos complexos.

O Versionamento Semântico pode ser aplicado através do uso de pacotes ou bibliotecas em um projeto. Suponha que você esteja trabalhando em um projeto que utiliza a biblioteca "ExemploLib" na versão 1.0.0.

Se a equipe de desenvolvimento da "ExemploLib" lançar uma nova versão, digamos a 1.1.0, e essa nova versão incluir apenas correções de bugs que não afetam a API pública, então você pode atualizar para essa nova versão sem se preocupar com problemas de compatibilidade.

No entanto, se a equipe de desenvolvimento da "ExemploLib" lançar uma nova versão 2.0.0 que inclui mudanças incompatíveis com as versões anteriores da API pública, então você precisará avaliar cuidadosamente essas mudanças antes de atualizar para essa nova versão.

Dessa forma, o Versionamento Semântico ajuda os desenvolvedores a entenderem rapidamente o significado do código subjacente e evita problemas comuns como bloqueios de versão ou promiscuidade da versão ao atualizar pacotes ou dependências em projetos complexos.

### Conventional Commits 1.0.0

O Conventional Commits é uma convenção simples para utilizar nas mensagens de commit que define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o SemVer, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

A mensagem do commit deve ser estruturada da seguinte forma:

<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]


O commit contém os seguintes elementos estruturais:

- `fix`: soluciona um problema na sua base de código.
- `feat`: inclui um novo recurso na sua base de código.
- `BREAKING CHANGE`: introduz uma modificação que quebra a compatibilidade da API.

Outros tipos adicionais são permitidos além de `fix:` e `feat:`, por exemplo `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:` e `test:`.

## Exemplo

Suponha que você esteja trabalhando em um projeto e precise adicionar uma nova funcionalidade ao código. Para isso, você pode utilizar a convenção do Conventional Commits da seguinte forma:

feat: adiciona nova funcionalidade X


Dessa forma, fica claro para outros desenvolvedores qual foi a intenção do seu commit.

## Tabela

Segue abaixo uma tabela com os termos utilizados no Conventional Commits e seus significados:

| Termo | Significado |
|-------|-------------|
| fix   | Soluciona um problema na sua base de código. |
| feat  | Inclui um novo recurso na sua base de código. |
| BREAKING CHANGE | Introduz uma modificação que quebra a compatibilidade da API. |
| build | Alterações relacionadas ao processo de build ou dependências externas. |
| chore | Outras alterações que não modificam o código fonte ou os testes. |
| ci    | Alterações nos arquivos e scripts de configuração do CI (Travis, Circle, etc). |
| docs  | Alterações na documentação. |
| style | Alterações relacionadas a formatação de código, como espaços em branco, ponto e vírgula, etc. |
| refactor | Refatoração do código fonte (sem adição ou remoção de funcionalidades). |
| perf  | Melhorias de performance. |
| test  | Adição ou modificação dos testes existentes. |

Essa tabela pode ser útil para entender rapidamente o significado dos termos utilizados no Conventional Commits e ajudar a criar mensagens de commit mais claras e explícitas.