# **Tarefa 01 - Git e GitHub com Markdown**

## **Aluno**: Diêgo Axel Bernardo Santos Rodrigues
### **User:** [Diego-Axel](https://github.com/Diego-Axel)
### **Email:** diegoaxelbsr@gmail.com

---

# **Seção 9**

## **9.a:**

### **Título do Projeto:** 
Sistema Complementar de Gestão de Atividade de Extensão  (SIGAEX)

### **Descrição:** 
O SIGAEX é um sistema desenvolvido para gerenciar e consolidar a participação de estudantes em atividades de extensão acadêmica, como palestras, minicursos e semanas temáticas, a exemplo da Semana de Informática. A plataforma não realiza o processo de inscrição nas atividades, pois essas informações são obtidas a partir dos dados do sistema oficial de eventos da instituição.

O sistema importa ou integra as listas de participantes já inscritos em cada atividade e realiza o controle de presença durante o evento. Cada atividade possui uma carga horária definida, e o SIGAEX calcula automaticamente as horas de extensão obtidas por cada participante com base em sua presença efetiva. Caso o participante esteja inscrito em uma atividade e não compareça, a carga horária correspondente não é contabilizada.

### **Equipe:** 
Diêgo Axel, Nathan Lopes, Vitória, Tomé Galileu e Hildenberg.

### **Link para repositórios:**
[Backend](https://github.com/SIGAEX/backend) < / > [Frontend](https://github.com/SIGAEX/frontend)

---

## **9.b:**

### **Linguagens de Programação utilizadas:**
A aplicação é desenvolvida com backend em Django, responsável pela API e regras de negócio, frontend em Vue 3 com TypeScript, responsável pela interface e interação com os usuários, e utiliza PostgreSQL como sistema de gerenciamento de banco de dados para armazenamento e processamento das informações.


### **Domínio da Equipe com as Tecnologias:**
Nossa equipe está familiarizada com essas tecnologias, pois na disciplina de Engenharia de Software I, foram usadas essas mesmas stacks. Além do mais, temos membros da equipe que tem experiencia com essas tecnologias em mercado de trabalho. Como o meu caso (Diêgo) com o PostgreSQL e TypeScript e Hildenberg com Vue e  Django.

## **9.c:**

### **Um pouco dos Frameworks que serão usados no projeto. Escolhido(Django):**
Lançado em 2005, o Django é um framework de código aberto escrito em Python. Ele segue o princípio "batteries included" (baterias inclusas), o que significa que ele já vem com quase tudo o que um desenvolvedor precisa para criar um site robusto sem ter que instalar bibliotecas externas para tarefas básicas.

**Por que usar?**
- Escalabilidade: Grandes empresas como Instagram, Pinterest e Spotify utilizam Django para lidar com milhões de usuários.

- ORM (Object-Relational Mapper): Você interage com o banco de dados usando código Python puro, sem precisar escrever comandos SQL complexos.

- Comunidade: Por ser muito popular, é fácil encontrar soluções para erros e tutoriais na internet.

O Django foca na automação de tarefas repetitivas e na segurança, permitindo que os desenvolvedores foquem no que realmente importa: as funcionalidades do aplicativo.

## **9.d:**

### **Falando um pouco da IDE que será usada (VsCode). Ferramentas de debug e de controle de versão que ela inegra:**
O Visual Studio Code (VS Code) é, atualmente, o editor de código mais popular do planeta. Embora seja leve como um editor de texto, ele possui o "cérebro" de uma IDE (Ambiente de Desenvolvimento Integrado), especialmente por conta da sua extensibilidade.

**1. Ferramentas de Debug (Depuração)**
O VS Code elimina a necessidade de usar comandos como print() para entender o que está errado no código. Ele possui um console de depuração nativo que permite:

- Breakpoints: Você pode clicar ao lado do número da linha para "pausar" a execução do programa exatamente ali.

- Variable Inspection: Enquanto o código está pausado, você pode ver o valor atual de todas as variáveis em uma aba lateral.

- Call Stack: Mostra a ordem de funções que foram chamadas até chegar naquele ponto.

- Debug Console: Permite que você digite comandos e teste expressões em tempo real com o programa pausado.

**2. Controle de Versão Integrado (Git)**
O VS Code já vem com suporte nativo ao Git, o que torna o gerenciamento de versões muito mais visual e intuitivo do que usar apenas o terminal.

- Source Control View: Uma aba dedicada que mostra todos os arquivos alterados, deletados ou criados.

- Stage & Commit: Você pode preparar as alterações (stage) e fazer o "commit" (salvar a versão) apenas digitando uma mensagem em um campo de texto e clicando em um botão.

- Indicadores de Alteração: No próprio código, ele exibe barras coloridas na lateral (azul para editado, verde para novo, vermelho para deletado) para você saber o que mudou em relação ao último commit.

- Merge Conflict: Quando duas pessoas editam a mesma linha, o VS Code abre uma interface visual que permite escolher qual versão manter com apenas um clique.