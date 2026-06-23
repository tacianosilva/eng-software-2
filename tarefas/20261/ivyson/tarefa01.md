# Tarefa 01 - Git e GitHub com Markdown

## Nome
Ivyson Wanderson

## GitHub
ivyson0

## E-mail
ivyson.nunes.707@ufrn.edu.br

# Questão 9

## A) Projeto da Disciplina

### Título do Projeto

**AntiVeaco**

### Descrição

O AntiVeaco é um sistema web desenvolvido para auxiliar pequenos estabelecimentos comerciais no gerenciamento de vendas realizadas a prazo ("fiado"). O sistema permite o cadastro e controle de clientes, o registro de compras fiadas, o acompanhamento de dívidas em aberto, o registro de pagamentos parciais ou totais e a geração de relatórios para acompanhamento da inadimplência e do histórico financeiro dos clientes. O objetivo é proporcionar maior organização e controle das vendas realizadas no estabelecimento.

### Equipe

- Arthur Medeiros
- Expedito Luiz
- Ivyson Wanderson
- José Gean
- Júlia Lilian

### Repositório do Projeto

https://github.com/expeditofranca/ProjetoEngenharia1.git

## B) Linguagem de Programação

A linguagem decidida para o desenvolvimento do projeto foi o Python.

A equipe possui conhecimento em nível básico a intermediário na linguagem, com experiência em lógica de programação e construção de aplicações simples. A escolha do Python se deve à sua sintaxe clara e de fácil compreensão, além de ser amplamente utilizada no desenvolvimento web. Outro fator importante é o seu ecossistema rico, com diversas bibliotecas e frameworks que facilitam a implementação do sistema.

## C) Framework

O framework adotado no projeto é o Django.

O Django é um framework web de alto nível desenvolvido em Python, bastante utilizado para a criação de aplicações web de forma rápida e organizada. Ele já oferece recursos prontos como autenticação de usuários, painel administrativo e ORM para gerenciamento de banco de dados, o que facilita bastante o desenvolvimento e evita a necessidade de implementar essas funcionalidades do zero.

## D) IDE e Ferramentas

O desenvolvimento do projeto foi realizado utilizando o Visual Studio Code (VS Code) como ambiente principal.

O VS Code foi escolhido por ser uma ferramenta leve, flexível e bastante adaptável a diferentes tipos de projetos. Ele permite o uso de extensões que melhoram o suporte ao Python e ao Django, além de facilitar o versionamento com Git diretamente no editor.

Outro ponto importante é a presença do terminal integrado e do sistema de depuração, que ajudam tanto na execução quanto na identificação de erros durante o desenvolvimento. Isso torna o fluxo de trabalho mais contínuo, sem a necessidade de alternar entre várias ferramentas.

De forma geral, a IDE contribui para um desenvolvimento mais eficiente e organizado do projeto.

## E) Tutorial de CRUD

Link utilizado:
https://www.geeksforgeeks.org/python/build-a-django-application-to-perform-crud-operations/

O tutorial apresenta a construção de uma aplicação web utilizando Django para implementar operações de CRUD (criar, listar, atualizar e excluir registros). Ele mostra, de forma prática, como configurar um projeto Django desde a criação do app até a definição de modelos, views, URLs e templates.

Além disso, o material explica como integrar formulários, manipular dados no banco e estruturar uma interface simples para interação com o usuário. O exemplo utilizado é baseado em um sistema de receitas, mas os conceitos apresentados podem ser aplicados diretamente no nosso projeto, já que também envolve controle de registros e operações de cadastro, edição e remoção de dados.

## F) Branches e Pull Request com GitFlow

O Git trabalha com o conceito de branches (ramificações), que permitem criar linhas independentes de desenvolvimento dentro do mesmo projeto. Isso possibilita que diferentes funcionalidades, melhorias ou correções sejam feitas separadamente, sem interferir diretamente na versão principal do sistema.

Na prática, isso evita conflitos e ajuda a manter o código mais organizado, já que cada mudança pode ser desenvolvida e testada isoladamente antes de ser integrada ao projeto principal.

Para unir essas alterações ao código principal, utiliza-se o Pull Request (ou Merge Request, em outras plataformas). Ele funciona como uma solicitação de integração, onde as mudanças de uma branch são enviadas para revisão antes de serem incorporadas. Isso permite que outros membros da equipe analisem o código, identifiquem possíveis problemas e aprovem a alteração com mais segurança.

Dentro desse contexto, o GitFlow é um modelo de organização que define como essas branches devem ser estruturadas ao longo do projeto. Em vez de trabalhar de forma desorganizada, ele propõe um fluxo mais padronizado, geralmente envolvendo:

- main: versão estável do sistema
- develop: branch de desenvolvimento contínuo
- feature: criação de novas funcionalidades
- hotfix: correções urgentes
- release: preparação para novas versões

Esse modelo facilita o trabalho em equipe, melhora o controle de versões e torna o histórico do projeto mais claro e rastreável.

## G) Versionamento Semântico (SemVer)

O Versionamento Semântico, conhecido como SemVer, é um padrão utilizado para organizar versões de software de maneira clara e consistente. Ele foi criado para facilitar o entendimento das mudanças entre versões e evitar problemas de compatibilidade em sistemas que dependem de bibliotecas ou aplicações externas.

A estrutura segue o formato:

MAJOR.MINOR.PATCH (exemplo: 1.2.3)

Cada parte da versão representa um tipo de alteração no sistema:

- MAJOR: indica mudanças significativas que podem quebrar compatibilidade com versões anteriores
- MINOR: representa a adição de novas funcionalidades, mantendo compatibilidade com o que já existia
- PATCH: usado para correções de erros e ajustes internos, sem impacto nas funcionalidades principais

Na prática, esse modelo ajuda a identificar rapidamente o impacto de cada atualização. Por exemplo, mudanças pequenas de correção aumentam apenas o PATCH, enquanto alterações mais estruturais podem exigir uma nova versão MAJOR.

Com isso, o SemVer torna o processo de evolução do software mais organizado e previsível, tanto para quem desenvolve quanto para quem utiliza o sistema.

## H) Conventional Commits

O Conventional Commits é uma convenção para padronizar mensagens de commit em projetos que utilizam Git. A ideia principal é tornar o histórico de alterações mais organizado, legível e fácil de interpretar tanto por pessoas quanto por ferramentas automatizadas.

Nesse padrão, cada commit segue uma estrutura básica que começa com um tipo obrigatório, como `feat` (nova funcionalidade) ou `fix` (correção de erro), podendo incluir também um escopo opcional e uma descrição curta do que foi feito. Em alguns casos, podem existir informações adicionais no corpo da mensagem ou em rodapés, como indicações de mudanças que quebram compatibilidade (BREAKING CHANGE).

Um dos principais pontos dessa convenção é sua relação com o Versionamento Semântico (SemVer). Commits do tipo `fix` normalmente indicam correções que resultam em versões PATCH, enquanto `feat` está associado à adição de funcionalidades e versões MINOR. Já commits com BREAKING CHANGE indicam alterações incompatíveis, relacionadas a versões MAJOR.

Na prática, o uso do Conventional Commits facilita a automação de tarefas como geração de changelogs, controle de versões e integração contínua, além de melhorar a comunicação entre desenvolvedores ao deixar claro o impacto de cada alteração no código.

## AcademicDevFlow (Feedback)

Criei uma conta e acessei a plataforma AcademicDevFlow. A interface é bem organizada e a navegação é simples e intuitiva. O projeto foi criado pelo líder técnico e todos os membros da equipe foram devidamente vinculados, concluindo essa etapa da atividade.