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

## **9.e:**

### **Tutorial para fazer um CRUD com Django no YT e resumo:**

Link para vídeo no YouTube: [CRUD com Django](https://www.youtube.com/watch?v=-m5ywU8SW9E)

**Resumo do vídeo:**
este vídeo ensina iniciantes a criar um sistema de cadastro de usuários do zero usando Python e o framework Django (0:01). O tutorial cobre desde a instalação, criação do projeto e aplicativo, até a configuração do banco de dados, a criação de formulários HTML estilizados com Bootstrap e a listagem dos usuários cadastrados (1:15, 12:51, 32:45).

## **9.f:**

### **Um pouco sobre branches e pull request:**

**1. Branches (Ramificações)** Uma branch é como uma "linha do tempo" paralela do seu código. Ela permite que você trabalhe em uma nova funcionalidade ou corrija um erro sem estragar a versão do sistema que já está funcionando para os usuários.

**No modelo GitFlow, as branches são divididas por função:**
- Main (ou Master): Contém o código que está em produção (o que o usuário final vê). É sagrada e nunca deve ser editada diretamente.

- Develop: É onde a mágica acontece. O código aqui é o que será lançado na próxima versão.

- Feature Branches: Branches temporárias criadas a partir da develop para desenvolver uma tarefa específica (ex: feature/login-social).

- Hotfix: Criada a partir da main para corrigir erros críticos em produção que não podem esperar o próximo lançamento.

**2. Pull Request (ou Merge Request)** Embora os nomes variem (Pull Request no GitHub e Merge Request no GitLab), o conceito é o mesmo: é um pedido de integração de código.

Quando você termina seu trabalho em uma feature branch, você não simplesmente joga ela na develop. Você abre um Pull Request.

**Por que ele é importante?**
- Code Review: Outros desenvolvedores olham o seu código para sugerir melhorias ou encontrar erros antes da integração.

- Testes Automáticos: O GitHub pode rodar testes automaticamente no PR para garantir que sua mudança não "quebrou" nada.

- Histórico: Fica registrado o motivo da alteração, quem aprovou e quais discussões ocorreram.

- Resumo prático: Você cria uma Branch para trabalhar isolado e envia um Pull Request para que sua equipe revise e autorize a união (merge) desse trabalho ao projeto principal.

## **9.g:**

### **Um pouco sobre Versionamento Semântico:**

**1. O Formato Principal (X.Y.Z)**
- O número da versão deve ser composto por três números inteiros: MAIOR.MENOR.CORREÇÃO (ou Major.Minor.Patch).

- MAIOR (Major): Você aumenta esse número quando faz mudanças na API que não são compatíveis com as versões anteriores (ex: mudar o nome de uma função obrigatória).

- MENOR (Minor): Você aumenta esse número quando adiciona novas funcionalidades, mas garante que tudo o que já existia continue funcionando.

- CORREÇÃO (Patch): Você aumenta esse número quando faz apenas correções de bugs (bug fixes) que não alteram a forma como o programa é usado.

**2. Regras Fundamentais**
- API Pública: Para usar o SemVer, você deve declarar o que é a sua "API pública" (quais funções ou serviços os outros podem usar).

- Imutabilidade: Uma vez que uma versão é lançada, o código dela nunca deve ser alterado. Qualquer mudança exige um novo número de versão.

- Versão Zero (0.y.z): É usada para o desenvolvimento inicial. Nesse estágio, a API não é considerada estável e tudo pode mudar a qualquer momento.

- Estabilidade (1.0.0): A versão 1.0.0 define que o software está pronto para produção e que a API agora é estável.

**3. Extensões (Sufixos)**
- Pré-lançamento: Pode-se adicionar um hífen e um texto após a correção (ex: 1.0.0-alpha, 1.0.0-beta.1). Isso indica que a versão é instável.

- Metadados de Construção: Pode-se adicionar um sinal de "mais" para informações extras de build (ex: 1.0.0+20130313). Isso não altera a ordem de importância da versão.

**4. Objetivo**
O objetivo principal é que o número da versão transmita significado. Ao olhar para a mudança de 2.1.5 para 3.0.0, o desenvolvedor sabe instantaneamente que precisará fazer alterações no código dele para que a atualização funcione, economizando tempo e evitando erros inesperados em sistemas grandes.