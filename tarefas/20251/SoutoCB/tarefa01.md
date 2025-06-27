# **Tarefa 01 - Git e GitHub com Markdown**

Bruno Costa Souto

@SoutoCB

brunocostasoutomoto2005@gmail.com

## **Titulo do Projeto**
### Sistema de gerenciamento para empresa Bonelaria Militar

## **Descrição**
O propósito do Sistema da Bonelaria Militar será desenvolver um sistema de informação para uma confecção de artigos militares, no qual será possível cadastrar os produtos fabricados, cadastrar as costureiras, além de cadastrar as saídas/entradas, cada costureira cadastrada receberá notificações de quando determinada matéria prima sair da fábrica para a sua residência, onde será confeccionado o produto (bonés, chapéus, calções entre outros), e a mesma vai poder confirmar que o produto foi recebido. Em cada costureira registrada, terá o relatório da quantidade de produtos já feitos, juntamente com os preços individuais de cada, no qual no final vai poder ser contabilizado o quanto foi o lucro de cada costureira individualmente de acordo com os produtos fabricados, dessa forma, será possível calcular o salário de forma prática além de trazer informações úteis para análise de dados sobre a produção de cada uma.

## **Equipe**
    Bruno Costa

    Cláudio Pereira

    Danilo Gabriel

    Felipe Augusto

    Mateus Dantas

## **Link do Repositório**

    https://github.com/mtzdantas/sistema-bonelaria

## **Linguagem de programação utilizada**

### **Dart**

Será utilizado o framework Flutter, que é baseado na linguagem de programação Dart, desenvolvida pelo Google para o desenvolvimento de aplicativos multiplataforma. Dart é uma linguagem moderna, rápida e orientada a objetos, ideal para aplicações eficientes e responsivas.

### **Experiência da equipe com a linguagem**

Todos possuem, no mínimo, conhecimento básico da linguagem, pois ela foi utilizada em um projeto para uma disciplina cursada por todos.

## **Framework (Flutter)**

Para o desenvolvimento do projeto, escolhemos Flutter, um framework multiplataforma baseado na linguagem Dart. O Flutter permite a criação de aplicativos para Android, iOS, Web e Desktop, garantindo uma interface visual moderna, desempenho otimizado e um desenvolvimento ágil graças ao seu recurso de Hot Reload, que facilita a visualização instantânea das mudanças no código.

## **Ambiente de Desenvolvimento Integrado (IDE) usado**

Vamos utilizar o Visual Studio Code (VS Code), que é uma ferramenta leve, extensível e amplamente conhecida. Essa IDE conta com uma ferramenta integrada para debug, o depurador permite configurar breakpoints, inspecionar variáveis e analisar a call stack. O controle de versão possui suporte nativo ao Git, permitindo a criação e o gerenciamento de branches, commits e a sincronização com repositórios remotos.

## **Tutorial de Flutter** 

### **FLUTTER TODO App With Hive DB, Task Management App, Hive CRUD Operation Tutorial | Flutter Tutorial**

 **Feito por [Programming With FlexZ](https://www.youtube.com/@ProgrammingWithFlexZ)** 

 **Link:**

    https://www.youtube.com/watch?v=RQlhC_rDrsc

**Resumo do video:**
No vídeo, é mostrado como desenvolver um aplicativo de lista de tarefas do zero, utilizando Flutter e o banco de dados Hive. O conteúdo é organizado da seguinte forma:

- Capítulo 1: Pacotes Essenciais e Estrutura de Pastas
- Capítulo 2: Construindo a Tela Inicial: Interface e Funcionalidades Principais
- Capítulo 3: Adicionando Animações: Drawer Animado e Ícones
- Capítulo 4: Sistema de Gerenciamento de Tarefas: Desenvolvimento da Tela de Tarefas e Exploração de Widgets
- Capítulo 5: Integração com Banco de Dados e Configuração de Alertas e Notificações
- Capítulo 6: Técnicas Avançadas de Interface e Operações no Banco de Dados
- Conclusão: Encerramento 

## **Branches**

Um branch é uma cópia do seu código principal, onde você pode trabalhar de forma isolada, sem modificar diretamente o código original. A branch principal normalmente é chamada de **master** ou **main**. A principal vantagem do uso de branches é a possibilidade de várias pessoas trabalharem simultaneamente no projeto sem causar conflitos.

### **GitFlow**

GitFlow é uma estratégia de ramificação (branching) que organiza as branches em um projeto. É bem útil em projetos de maior porte. Os principais tipos de branches no GitFlow são:

- **main** (ou master): é o código principal do projeto, estável e pronto para produção.
- **develop**: é a branch de desenvolvimento, onde novas funcionalidades ainda não publicadas são integradas.
- **feature**: usada para desenvolver funcionalidades específicas. É criada a partir da branch ****develop**.
- **release**: funciona como uma ponte entre **develop** e **main**. É um ambiente de preparação onde são realizados testes finais antes da entrega.
- **hotfix**: usada para corrigir problemas críticos diretamente na **main**, como bugs em produção.
- **bugfix**: utilizada para resolver problemas menores ainda em fase de desenvolvimento, geralmente criada a partir da **develop**.

### **Pull Request (ou Merge Request)**

Após finalizar o trabalho em uma branch, é necessário criar um **Pull Request** (ou **Merge Request**) para integrar o código da branch ao código principal. O pull request permite que outros desenvolvedores revisem o seu código antes que ele seja mesclado ao projeto principal.

## **Versionamento Semântico**
Versionamento Semântico é um padrão de regras para controle de versões que segue o formato **MAJOR.MINOR.PATCH (exemplo: 1.4.2)**, organizando e comunicando mudanças de forma padronizada

- MAJOR (versão principal): incrementada quando há mudanças incompatíveis com outras versões.

- MINOR (versão secundária): incrementada quando novas são adicionadas funcionalidades e não são incompativeis com outras versões .

- PATCH (correção): incrementada para correções de bugs que não afetam a compatibilidade.

## **Conventional Commits (Convenções para Mensagens de Commits)**

Conventional Commits é uma convenção para escrever mensagens de commit de forma padronizada. Facilita a leitura do histórico de commits, automatiza o controle de versão (como com o SemVer), e ajuda em ferramentas de integração contínua e geração de changelogs.

**Formato basico:**

    <tipo>[escopo opcional]: <mensagem curta>

**Principais tipos:**
- **feat**: nova funcionalidade

- **fix**: correção de bug

- **docs**: mudanças na documentação

- **style**: mudanças de formatação, sem alteração de código

- **refactor**: mudanças no código que não corrigem bugs nem adicionam funcionalidades

- **test**: adição ou modificação de testes

- **chore**: mudanças em tarefas de build ou ferramentas, sem impacto no código-fonte