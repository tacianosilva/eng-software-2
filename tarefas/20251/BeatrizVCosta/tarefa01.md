# Tarefa 01 - Git e GitHub com Markdown <h1>

| Nome                     | Usuário       | Email                         |
| ------------------------ | ------------- | ----------------------------- |
| Beatriz Vitória Da Costa | BeatrizVCosta | beatriz.costa.151@ufrn.edu.br |

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

# 🚀 Git, GitHub, GitFlow: Branches e Pull Requests

## 🔀 Branches no Git e GitHub

Uma **branch** (ramo) é uma linha de desenvolvimento independente. Ela permite que você trabalhe em novas funcionalidades ou correções sem interferir no código principal.

### Exemplos comuns de branches:

- `main` ou `master`: versão estável, pronta para produção.
- `develop`: versão de desenvolvimento contínuo.
- `feature/nome-da-feature`: para criar novas funcionalidades.
- `release/nome-da-release`: preparação de novas versões.
- `hotfix/nome-do-hotfix`: correções rápidas e urgentes em produção.

---

## 🔧 GitFlow

O **GitFlow** é uma estratégia de ramificação que organiza o fluxo de trabalho no Git, trazendo clareza e organização ao desenvolvimento em equipe.

### Principais tipos de branch no GitFlow:

- `main`: código de produção.
- `develop`: base de desenvolvimento.
- `feature/*`: novas funcionalidades, partem de `develop`.
- `release/*`: preparação de releases, partem de `develop`.
- `hotfix/*`: correções urgentes, partem de `main`.

### Exemplo de fluxo GitFlow:

```bash
git checkout develop
git checkout -b feature/login  # Cria uma branch para nova funcionalidade
# ... desenvolver, fazer commits ...
git push origin feature/login

```

# 📌 Versionamento Semântico (SemVer)

O **Versionamento Semântico** é um padrão para nomear versões de software no formato:

### Componentes:

- **MAJOR**: Mudanças incompatíveis na API.  
  Ex: `1.0.0 → 2.0.0`

- **MINOR**: Novas funcionalidades compatíveis.  
  Ex: `1.2.0 → 1.3.0`

- **PATCH**: Correções de bugs compatíveis.  
  Ex: `1.2.3 → 1.2.4`

---

### Pré-lançamentos:

- Usam sufixos como `-alpha`, `-beta`, `-rc.1`.  
  Ex: `2.0.0-beta`

---

### Vantagens:

- Indica claramente o tipo de mudança.
- Ajuda a evitar problemas ao atualizar dependências.
- Facilita a comunicação entre desenvolvedores.

🔗 [Saiba mais em semver.org](https://semver.org/lang/pt-BR/)
