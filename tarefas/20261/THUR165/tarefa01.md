# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Arthur De Medeiros Dantas

**GitHub:** THUR165

**Email:** arthurdantas165@gmail.com

## Projeto da disciplina

**Título do projeto:** AntiVeaco

**Descrição:**
Sistema web criado para o gerenciamento de vendas "fiado" em um pequeno estabelecimento comercial. O principal objetivo do projeto é permitiro controle de clientes, o registro de dívidas (compras fiadas), o abatimento de pagamentos (totais ou parciais) e a geração de relatórios de inadimplência e histórico de clientes.

**Equipe:**
Arthur Medeiros, Expedito Luiz, Ivyson Wanderson, José Gean, Júlia Lilian 

**Repositório do projeto:**
https://github.com/expeditofranca/ProjetoEngenharia1.git

## Linguagem de programação

A linguagem escolhida para o projeto é o **Python**.

A equipe possui conhecimento básico a intermediário na linguagem, com experiência em lógica de programação e desenvolvimento de aplicações. O Python foi escolhido por ser uma linguagem simples, legível e muito utilizada no desenvolvimento web, além de possuir uma grande quantidade de bibliotecas e frameworks.

## Framework

O framework escolhido é o **Django**.

O Django é um framework web de alto nível escrito em Python, que facilita o desenvolvimento rápido e seguro de aplicações web. Ele já vem com diversas funcionalidades prontas, como sistema de autenticação, painel administrativo e ORM para banco de dados, o que agiliza bastante o desenvolvimento.

## IDE utilizada

A IDE utilizada é o **Visual Studio Code (VS Code)**.

O uso do VS Code para o projeto foi principalmente por oferecer diversas ferramentas importantes para o desenvolvimento, como:

* Debug integrado
* Suporte a extensões (como Python e Django)
* Integração com Git
* Terminal integrado

Esses recursos ajudam a aumentar a produtividade e facilitam o desenvolvimento do projeto.

## Tutorial CRUD

**Link:** https://www.youtube.com/watch?v=Q2tEqNfgIXM

**Descrição:**
O tutorial ensina a criar uma aplicação CRUD utilizando Django. Ele aborda a criação de modelos, views, templates e rotas, além de mostrar como realizar operações de criação, leitura, atualização e exclusão de dados no sistema.

## Branches e Pull Request (GitFlow)

Branches são ramificações do código principal que permitem desenvolver funcionalidades de forma isolada, sem afetar o código principal.

O GitFlow é um modelo de organização que utiliza diferentes tipos de branches, como:

* main: versão final do projeto
* develop: versão em desenvolvimento
* feature: novas funcionalidades

Pull Request é uma solicitação para juntar alterações de uma branch em outra, permitindo revisão de código antes da integração.

## Versionamento Semântico

O Versionamento Semântico (SemVer) é um padrão utilizado para organizar as versões de um software de forma clara e padronizada. Ele segue o formato:

**MAJOR.MINOR.PATCH**  
Exemplo: **1.0.0**

Cada número possui um significado específico:

- **MAJOR :** é alterado quando o sistema sofre mudanças grandes que quebram a compatibilidade com versões anteriores. Ou seja, quando algo que funcionava antes deixa de funcionar na nova versão.
- **MINOR :** é alterado quando novas funcionalidades são adicionadas ao sistema, mas sem quebrar o que já existia.
- **PATCH :** é alterado quando são feitas apenas correções de erros (bugs), sem adicionar novas funcionalidades e sem alterar o funcionamento principal do sistema.

Exemplo prático:
- Versão 1.0.0 → primeira versão estável do sistema
- Versão 1.1.0 → foi adicionada uma nova funcionalidade (ex: cadastro de usuários)
- Versão 1.1.1 → foi corrigido um erro no login
- Versão 2.0.0 → mudança grande no sistema que altera a forma como ele funciona

O Versionamento Semântico é muito importante porque ajuda os desenvolvedores a entender rapidamente o tipo de alteração feita em cada versão.

## Conventional Commits

Conventional Commits é uma convenção utilizada para padronizar as mensagens de commit em um projeto. O objetivo principal é deixar o histórico do Git mais organizado e fácil de entender.

A estrutura básica de um commit usando essa convenção é:

**descrição da alteração**

Exemplo:
- feat: adiciona sistema de login
- fix: corrige erro no cadastro de usuários
- docs: atualiza documentação do projeto
- style: ajusta formatação do código
- refactor: melhora o código sem alterar funcionalidade

Os tipos mais utilizados são:

- **feat:** usado quando uma nova funcionalidade é adicionada ao sistema
- **fix:** usado quando um erro é corrigido
- **docs:** usado quando algo relacionado à documentação é alterado
- **style:** usado quando apenas a formatação do código é alterada (sem mudar funcionamento)
- **refactor:** usado quando o código é reorganizado ou melhorado sem alterar o comportamento do sistema
- **test:** usado quando são adicionados ou alterados testes

Além de organizar o histórico, o Conventional Commits também facilita o controle de versões, pois ele pode ser utilizado junto com o Versionamento Semântico para indicar automaticamente quando uma versão deve ser atualizada.
