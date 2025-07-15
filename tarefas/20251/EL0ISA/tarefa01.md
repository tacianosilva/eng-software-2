# Tarefa 01 - Git e GitHub com Markdown

**Eloisa**  
**Usuário do GitHub:** [EL0ISA](https://github.com/EL0ISA)  
**E-mail:** maria-eloisa-santos@outlook.com

# Projeto da Disciplina
## Sobre o projeto 
**Título:** Sistema de Gestão PilatesInspire    

**Descrição:** O Sistema de Gestão PilatesInspire é uma solução desenvolvida para otimizar a administração de estúdios de Pilates de pequeno porte. Ele oferece funcionalidades como cadastro de instrutores e colaboradores, gerenciamento de clientes, registro dos serviços oferecidos, controle de horários e agendamento de aulas. Além disso, possibilita o acompanhamento de pagamentos e do progresso dos alunos. Seu principal objetivo é automatizar as operações diárias do estúdio, proporcionando mais eficiência e organização para a equipe e clientes.

**Equipe**
> Aron da Silva Bezerra 

> Beatriz Vitoria da Costa

> Giovanna Kailany de Melo  

> Maria Eloisa da Silva Santos  

> Mariana dos Santos Batista Medeiros

> Virlânia Micarla Medeiros Canuto

**Repositório:** [PilatesInspire](https://github.com/EL0ISA/estudio_pilates.git)  

## Linguagem de Programação
A linguagem de programação adotada para este projeto é o Python, uma linguagem interpretada, de alto nível e com foco na simplicidade e legibilidade do código. Sua sintaxe limpa e intuitiva facilita o desenvolvimento e a manutenção do software, tornando-a uma excelente escolha para projetos colaborativos e de rápida evolução.

Além disso, todos os integrantes da equipe já possuem experiência prévia e domínio da linguagem, o que contribui para um desenvolvimento mais eficiente e assertivo.

## Framework
O framework escolhido para o projeto é o Django, uma ferramenta de alto nível, escrita em Python e voltada para o desenvolvimento de aplicações web. O Django foi projetado para acelerar o processo de desenvolvimento, promovendo segurança, escalabilidade e reutilização de código. Sua arquitetura segue o padrão MTV (Model-Template-View), o que contribui para uma organização eficiente da aplicação.

## IDE
A IDE escolhida para o desenvolvimento do projeto é o Visual Studio Code (VS Code), um editor de código-fonte leve e poderoso, desenvolvido pela Microsoft. O VS Code oferece amplos recursos que otimizam a produtividade dos desenvolvedores, como realce de sintaxe, autocompletar inteligente, snippets, refatoração de código e uma extensa galeria de extensões que permitem personalizar e expandir suas funcionalidades.

O VS Code também permite executar e depurar aplicações diretamente no editor, com suporte a breakpoints, inspeção de variáveis em tempo real, watch expressions e controle do fluxo de execução. Tudo isso pode ser configurado com facilidade para diferentes linguagens, como Python, através dos seus recursos de extensões como "Python Extension for VS Code".

O editor ainda possui integração nativa com o Git, possibilitando a realização de commits, push, pull, criação de branches e visualização de históricos de alterações diretamente pela interface gráfica, sem a necessidade de usar o terminal. Isso torna o gerenciamento do repositório mais prático e intuitivo.

## Tutorial
O tutorial da MDN intitulado [Tutorial: website de biblioteca local com Django (MDN)](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) ensina, passo a passo, como criar uma aplicação web funcional usando o framework Django atraves de um sistema de gerenciamento de biblioteca, permitindo o cadastro e empréstimo de livros. Nele, você se aprende a configurar um projeto Django do zero, criar modelos, rotas, views e templates, a utilização do Django Admin, implementação da autenticação de usuários e também a trabalhar com formulários e relacionamentos entre modelos.

## Branches e Pull Requests
### Branches
Branches são versões paralelas de um código. Elas permitem que se trabalhe em novas funcionalidades, correções de bugs ou testes sem interferir diretamente no código principal.

No GitFlow, as principais branches são:

> main: contém o código em produção, sempre estável.

> develop: usada para o desenvolvimento com os recursos mais atualizados que ainda não foram lançados.

> feature: usada para desenvolver novas funcionalidades.

> release: usada para preparar uma nova versão.

> hotfix: usada para corrigir rapidamente erros em produção.

### Pull Request (ou Merge Request)
Um pull request (PR) é uma solicitação para mesclar uma branch com outra. Esse recurso permite que a equipe revise o código antes da integração.

No GitHub, o processo costuma seguir este fluxo:

- Se cria uma branch a partir da develop (ex: feature/login).

- Se faz as alterações e commits nessa branch.

- Quando se termina, abre um pull request para mesclar a feature/login com a develop.

- Outros membros da equipe revisam o código, sugerem melhorias e, se aprovado, o código é integrado.

## Versionamento Semântico
O Versionamento Semântico (ou SemVer, de Semantic Versioning) é um sistema de numeração de versões de software que segue um formato padronizado para indicar o tipo de mudança feita no código. Ele usa o seguinte formato:

> MAJOR.MINOR.PATCH

Cada parte da versão tem um significado específico:

- MAJOR (versão principal): muda quando há alterações incompatíveis na API.

- MINOR (versão secundária): muda quando novas funcionalidades são adicionadas de forma compatível.

- PATCH (correção): muda quando são feitas correções de bugs compatíveis com versões anteriores.

Além disso, pode-se adicionar rótulos de pré-lançamento (-alpha, -beta, etc.) e metadados de build, se necessário.

Seguir o versionamento semântico, ajuda desenvolvedores e usuários a saberem se a nova versão quebra compatibilidade com versões anteriores, se ela adiciona funcionalidades de forma segura ou ainda se apenas corrige problemas existentes.

## Conventional Commits
Conventional Commits é uma convenção padronizada para escrever mensagens de commits no Git, com o objetivo de tornar o histórico de alterações mais legível, organizado e automatizável. Ela ajuda a equipe a entender melhor o histórico de mudanças, facilita automatizações como o versionamento semântico e a geração de changelogs, além de tornar os projetos mais profissionais.

A estrutura básica da mensagem é:
> < tipo > [escopo opcional]: < descrição >

Tipos comuns:
- feat: nova funcionalidade

- fix: correção de bug

- docs: mudanças na documentação

- style: ajustes de formatação (espaços, ponto e vírgula etc.)

- refactor: refatoração de código (sem mudar funcionalidade)

- test: adição ou ajuste de testes

- chore: tarefas internas que não afetam o código da aplicação (ex: atualizações de dependências)