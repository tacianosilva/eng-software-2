# Título <h1>
Tarefa 01 - Git e GitHub com Markdown.
Virlania Canuto | virlaniacanuto12 | virlaniacanuto190@gmail.com
## Sistema de Gestão para Studio de Pilates MS
O Sistema de Gestão para “Studio de Pilates MS” é projetado para abranger uma
variedade de funções essenciais para o funcionamento eficaz de um pequeno estúdio de
Pilates. Este sistema inclui o controle de atividades, gerenciamento de clientes, agendamento de aulas, registro de pagamentos e acompanhamento do progresso dos alunos.

O propósito principal do sistema é desenvolver um software que simplifique e automatize
as operações diárias do estúdio. Ele permite o registro detalhado de informações sobre o
funcionamento geral. Além disso, o sistema auxilia na organização da agenda, oferecendo um calendário interativo para agendamento conveniente.

Com o sistema, é possível um melhor controle e gerenciamento eficaz das atividades
gerais da empresa, facilitando e agilizando todos os processos para a equipe e para os
clientes. Este software é uma ferramenta valiosa para a administração do estúdio,
contribuindo para a eficiência operacional e o sucesso do negócio.
## Equipe e repositório

Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Aron       | Analista           | aronsilvagm@gmail.com
Beatriz    | Analista           | beatriz.costa.151@ufrn.edu.br
Eloisa     | Analista           | maria-eloisa-santos@outlook.com
Giovanna   | Analista           | giovanna.melo.710@ufrn.edu.br
Mariana    | Líder técnico      | mari_caico@yahoo.com.br
Virlânia   | Analista           | virlaniacanuto190@gmail.com

**Link do repositório:** https://github.com/EL0ISA/estudio_pilates.git 

## Linguagem de programação e domínio da equipe 

A framework escolhida para o backend do projeto foi Django. O principal motivo dessa escolha foi o conhecimento e experiência de 3 membros da equipe nessa tecnologia. Os demais componentes possuem familiaridade e experiência com Pyhton, que é a linguagem utilizada no Django. 

## Contextualizando a framework que será utilizada - Django 

O Django é um framework web Python de código aberto, que se destaca por oferecer um ambiente que simplifica a criação de soluções web escaláveis, ao mesmo tempo, em que promove o desenvolvimento rápido e um design limpo, proporcionando ferramentas robustas e eficientes para pessoas desenvolvedoras.

Sendo uma das linguagens mais populares atualmente, Python têm se destacado devido à sua sintaxe enxuta e simples, robustez e versatilidade. Amplamente adotada para o desenvolvimento de modelos de machine learning, inteligência artificial e análise de dados, mas também é utilizada para desenvolvimento de sistemas Web.

O Django surgiu com a ideia de fornecer uma estrutura robusta com recursos para facilitar o processo de desenvolvimento para Web, dispensando a necessidade de reinventar a roda, ou seja, reescrever códigos comuns a todos os projetos web em Python.

O Framework disponibiliza, portanto, uma estrutura pré-configurada e bibliotecas com código pronto, que automatizam a maior parte dos trabalhos repetitivos. Assim, as pessoas responsáveis pelo desenvolvimento de aplicações Web em Python podem focar no produto desenvolvido, sem ter muitas preocupações com configurações de ambiente e escrita de códigos comuns.

## IDE utilizada e seu controle de versão e ferramentas de debug

O Visual Studio Code (VS Code) é um editor de código-fonte desenvolvido pela Microsoft, conhecido por ser leve, altamente personalizável e com suporte a diversas linguagens de programação. Ele é gratuito, open-source e roda em Windows, macOS e Linux.

### Controle de Versão no VS Code
O VS Code tem suporte nativo ao Git, mas também funciona com outros sistemas via extensões (SVN, Mercurial).

#### Funcionalidades do Git Integrado

- Barra de Status – Mostra o branch atual e alterações pendentes.

- Diff Tool – Visualiza mudanças entre versões diretamente no editor.

- Commit & Push – Realiza commits sem sair do VS Code.

- Ctrl+Enter (Commit)

- Sync (Push/Pull)

- Gerenciamento de Branchs – Cria, alterna e mescla branchs facilmente.

- Resolução de Conflitos – Interface amigável para resolver merge conflicts.

#### Depuração no VScode

A depuração no Visual Studio Code (VS Code) permite localizar e corrigir erros no código-fonte. Para isso, é possível definir pontos de interrupção, examinar variáveis e o estado do programa. 
Para depurar no VS Code, pode seguir os seguintes passos:

- Definir um ponto de interrupção na linha do código onde deseja iniciar a depuração
- Pressionar F5 ou ir em "Run" > "Start Debugging"(quando o código atingir o ponto de interrupção, a execução será pausada)
- Examinar as variáveis e o estado do programa
- Utilizar os botões de controle na barra superior para continuar a execução, pular para a próxima linha ou sair da depuração

## Tutorial para CRUD em django 

**Link do tutorial:** https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website 

**Descrição:** LocalLibrary é o nome do site que será criado. A proposta do site é fornecer um catálogo online para uma pequena biblioteca local, onde os usuários podem procurar por livros disponíveis e gerenciar suas contas.

## Pull Request e Branchs

Um Pull Request é uma funcionalidade comum em plataformas de hospedagem de código como GitHub, GitLab ou Bitbucket, que permite solicitar a integração de suas alterações em um repositório remoto (geralmente no branch principal, como main ou master). Então o Pull Request é uma solicitação para que o mantenedor de um projeto analise e mescle (merge) suas alterações em um branch específico. Funciona como um processo de revisão, onde outros colaboradores podem discutir, sugerir modificações ou aprovar as mudanças antes que elas sejam incorporadas.

Branches (ou ramos, em português) são uma das funcionalidades mais poderosas do Git. Eles permitem que você trabalhe em diferentes versões do seu projeto simultaneamente, isolando mudanças experimentais, desenvolvendo novas funcionalidades ou corrigindo bugs sem afetar o código principal.

## Versionamento semântico

O Versionamento Semântico é um padrão que organiza as versões de software no formato X.Y.Z (Maior.Menor.Correção), ajudando a evitar conflitos em dependências. A versão Maior (X) aumenta quando há mudanças incompatíveis, a Menor (Y) quando novas funcionalidades são adicionadas (sem quebrar compatibilidade), e a Correção (Z) para ajustes de bugs que não afetam a API.

**Por que adotar?**

- Clareza: Os números indicam o impacto das mudanças.
- Controle: Dependências podem especificar faixas seguras (ex.: >=1.2.0 <2.0.0).
- Colaboração: Padroniza a comunicação entre times e projetos.

Essa abordagem reduz o caos em atualizações e facilita a manutenção de sistemas complexos.

## Convencional commits 

A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. Esta convenção se encaixa com o SemVer, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.




