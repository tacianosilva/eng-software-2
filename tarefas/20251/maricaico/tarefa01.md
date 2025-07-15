# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Mariana Caico  
**GitHub:** [maricaico](https://github.com/maricaico)  
**E-mail:** mari_caico@yahoo.com.br


## **Sistema de Gestão PilatesInspire**

**Descrição**
  
Sistema para gestão de estúdios de Pilates de pequeno porte, oferecendo cadastro de instrutores, clientes e serviços, controle de horários e agendamentos, além do acompanhamento de pagamentos e progresso dos alunos. Busca automatizar operações, garantindo eficiência e organização.

## Equipe  

### Nome e usuário do GitHub  
- **Aron da Silva Bezerra** - [aronslv](https://github.com/aronslv)
- **Beatriz Vitoria da Costa** - [BeatrizVCosta](https://github.com/BeatrizVCosta)
- **Giovanna Kailany de Melo** - [Giovanna-Melo](https://github.com/Giovanna-Melo) 
- **Maria Eloisa da Silva Santos** - [EL0ISA](https://github.com/EL0ISA) 
- **Mariana dos Santos Batista Medeiros** - [maricaico](https://github.com/maricaico) 
- **Virlânia Micarla Medeiros Canuto** - [virlaniacanuto12](https://github.com/virlaniacanuto12)

## Link do repositório
[Repositório Estúdio Pilates](https://github.com/EL0ISA/estudio_pilates)


## Linguagem de programação que será usada no projeto
Python foi escolhido para o desenvolvimento deste projeto por sua versatilidade, eficiência e ampla adoção no mercado. Sua sintaxe clara e intuitiva facilita a colaboração entre os membros da equipe e acelera o processo de desenvolvimento. Além disso, sua grande variedade de bibliotecas permite implementar funcionalidades de forma rápida e prática. Outro ponto importante é a experiência da equipe com a linguagem, o que contribui para um fluxo de trabalho mais ágil e produtivo. 

## Framework que será usado no projeto 
Django é um framework web de alto nível escrito em Python, projetado para otimizar o desenvolvimento de aplicações robustas e escaláveis. Ele segue o padrão MVC, organizando a estrutura do projeto de forma clara e eficiente. Com uma abordagem "baterias incluídas", Django fornece diversas funcionalidades prontas para uso, reduzindo a necessidade de código repetitivo. Além disso, sua segurança integrada e boas práticas tornam o desenvolvimento mais ágil e confiável, permitindo que a equipe se concentre na lógica do negócio em vez de lidar com detalhes complexos da infraestrutura web.

## IDE de programação que será usada no projeto
O Visual Studio Code (VS Code) foi escolhido como ambiente de desenvolvimento para este projeto devido à sua leveza, rapidez e grande flexibilidade. Criado pela Microsoft, este editor de código-fonte se tornou uma das ferramentas mais populares entre desenvolvedores por ser gratuito, de código aberto e altamente extensível, permitindo personalizações conforme as necessidades do projeto.

#### Ferramentas de Depuração
O VS Code oferece um conjunto completo de ferramentas para depuração, permitindo que os desenvolvedores encontrem e corrijam problemas no código de maneira eficiente. Um dos principais recursos é o console de depuração, que exibe logs detalhados durante a execução, auxiliando no diagnóstico de erros. Além disso, a ferramenta possibilita interromper a execução do código em pontos específicos (breakpoints), permitindo uma análise precisa do estado do programa naquele momento. Para uma investigação mais aprofundada, o VS Code permite monitorar o valor das variáveis em tempo real, possibilitando verificar se os dados estão sendo manipulados corretamente. Outra funcionalidade essencial é a execução passo a passo, que permite avançar pelo código linha por linha, ajudando a identificar exatamente onde um comportamento inesperado ocorre.

#### Controle de Versão Integrado
O VS Code também possui uma integração eficiente com Git, tornando o controle de versão mais acessível e intuitivo. A interface gráfica simplifica tarefas como commits, push, pull e merges, eliminando a necessidade de comandos manuais no terminal. Além disso, o editor permite comparar diferentes versões de um arquivo, destacando as mudanças feitas ao longo do tempo para facilitar a revisão de código. Outra funcionalidade essencial é o gerenciamento de branches, que possibilita criar, alternar e mesclar ramificações diretamente no editor, o que facilita o desenvolvimento colaborativo. Embora o Git seja a ferramenta principal integrada, o VS Code também suporta outras soluções de controle de versão, como SVN e Mercurial, através de extensões disponíveis no Marketplace.

## CRUD
[MDN - Tutorial Django: Website da Biblioteca Local](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
O tutorial da MDN sobre Django guia o usuário na criação de um site para gerenciar o catálogo de uma biblioteca local. Ele cobre desde a configuração do projeto até a implantação, abordando modelagem de dados, views, templates, autenticação, formulários e testes automatizados. O projeto ensina os fundamentos do Django de forma prática e completa.

## Branches, Pull Request e GitFlow
No desenvolvimento de software, o GitFlow estabelece um sistema organizado para gerenciar diferentes versões do código através de branches (ramos). Esses ramos funcionam como linhas paralelas de desenvolvimento, permitindo que múltiplas alterações sejam trabalhadas simultaneamente sem interferir no código estável.

O processo começa com dois branches fundamentais:

> * main/master: armazena o código de produção, sempre estável e pronto para uso

> * develop: serve como base para o desenvolvimento contínuo, agregando novas funcionalidades

Quando um desenvolvedor inicia um novo trabalho, cria um branch específico (como feature/nova-funcionalidade ou hotfix/correcao-urgente). Esse isolamento permite experimentos e desenvolvimentos sem riscos para o projeto principal. Cada commit nesses branches mantém um histórico independente até o momento da integração.

Os pull requests representam o mecanismo de controle de qualidade nesse fluxo. Ao invés de mesclar alterações diretamente, o desenvolvedor submete suas mudanças para revisão através de um PR. Esse processo inclui:

> * Uma comparação clara das modificações propostas

> * Espaço para discussão técnica entre os membros da equipe

> * Verificações automáticas de qualidade e testes

> * Aprovação formal antes da integração

O GitFlow ainda prevê branches especializados para situações específicas:

> * release/*: para preparação de novas versões

> * hotfix/*: para correções emergenciais em produção

Essa estrutura combinada com a disciplina nos pull requests cria um equilíbrio entre desenvolvimento ágil e manutenção da estabilidade, permitindo que times colaborativos trabalhem de forma organizada e segura. O resultado é um histórico de projeto limpo e um processo de integração contínua mais confiável.

## Versionamento Semântico
O Versionamento Semântico (ou Semantic Versioning, SemVer) é um padrão amplamente adotado para numerar versões de software de forma significativa e consistente. Ele ajuda a comunicar claramente o impacto das mudanças em uma nova versão, facilitando a gestão de dependências e a compatibilidade entre sistemas.
Estrutura Básica: MAIOR.MENOR.PATCH

O número de versão segue o formato X.Y.Z, onde:

> * MAIOR (X.0.0) → Mudanças que quebram compatibilidade com versões anteriores.

> * MENOR (0.Y.0) → Novas funcionalidades adicionadas, sem afetar versões anteriores.

> * PATCH (0.0.Z) → Correções de bugs e pequenas melhorias, sem impactar o funcionamento do software.

Outras Regras Importantes

> * A partir da versão 1.0.0, a API é considerada estável.

> * Versões pré-lançamento são indicadas por sufixos como -alpha, -beta (exemplo: 2.1.0-beta.1).

> * É possível incluir metadados, como 1.0.0+20231001, para informações extras sem afetar a compatibilidade.

Por Que Usar?

> * Previsibilidade: Saber se uma atualização pode quebrar seu sistema.
> * Controle de Dependências: Evita conflitos em projetos que dependem do seu código.
> * Clareza: Comunica o impacto da atualização (bugfix, feature ou breaking change).

## Conventional Commits
A especificação do Conventional Commits estabelece um padrão para mensagens de commit, tornando o histórico do projeto mais claro e estruturado. Essa convenção segue as diretrizes do Versionamento Semântico (SemVer) e define como registrar novos recursos, correções e alterações que quebram a compatibilidade da API.

Cada commit deve seguir um formato específico, contendo um tipo, um escopo opcional, uma descrição breve e, se necessário, um corpo com mais detalhes e um rodapé. Os principais tipos são:

> * feat: usado para introduzir um novo recurso (equivalente a uma mudança MINOR no SemVer).

> * fix: indica a correção de um erro no código (corresponde a um PATCH no SemVer).

> * BREAKING CHANGE: pode ser adicionado no rodapé ou representado por um ! no tipo do commit para sinalizar uma alteração incompatível com versões anteriores (alteração MAJOR no SemVer).

Além desses, outros tipos como docs, style, refactor, test e chore podem ser usados para categorizar melhor as mudanças.

Seguir essa convenção traz benefícios como a automação de changelogs, a determinação precisa da versão do software e a melhora na comunicação entre desenvolvedores, tornando o processo de desenvolvimento mais organizado e eficiente.

