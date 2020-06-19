# Tarefa 01 - 2020.5 - Git e GitHub com Markdown


Nome: Gabriel Batista Félix
Usuário github: GabrielBFelix
E-mail: batistagabriel360@gmail.com


Título do projeto: EBook

Descrição do projeto: Um E-Commerce para a compra de livros. Tais livros seriam cadastrados por usuários vendedores e seriam comprados por usuários clientes (Quase que um "mercado livre de livros").

Equipe: 
Antonio Fernandes Junior
Darlan Gabriel de Medeiros Macedo
Evandir Linhares de Andrade Filho
Gabriel Batista Félix
Guilherme Felipe de Oliveira Medeiros
Tiago José Vieira de Oliveira

A linguagem utilizada será Javascript, ela é muito usada juntamente com HTML e CSS, para fazer paginas web, já tive um primeiro contato com tal tecnologia, no entanto, faz muito tempo e terei que estudá-la.

O framework utilizado será o Angular, ele é um framework javascript usado para a criação de SPA's (Single Page Aplications) para que quando o usuário receba os arquivos da pagina web, ele não precise receber novas páginas do servidor (É como se elas já fossem salvar na sua máquina no momento que você entra no site). Nunca utilizei essa tecnología e planejo estudá-la para fazer este projeto.

O IDE utilizado será o Visual Studio Code, ele é bem conhecido por ser leve no começo, e ir se adequando a necessidade do programador, dando suporte a várias linguagens e frameworks diferentes usando de alguns plugins instaláveis na própria IDE. Algumas de suas funcionalidades básicas para desenvolvimento são: Uma ferramenta de debug de JavaScript, TypeScript e suporte a projetos em Node.js, como também um suporte a Git, mostrando histórico de arquivos, comparação de ramos, sem contar o suporte a Git que existe na sua biblioteca de extensões.


Tutorial CRUD em Node.js: https://www.youtube.com/watch?v=4fWWn2Pe2Mk

    Primeiro, explicando "Branches", digamos que um repositório tenha apenas a branch "master", master sendo um apontador que aponta para o commit mais recente do projeto, no momento em que o comando "git branch x" é usado, outro apontador é criado, apontando para o commit em que você está no momento (Nesse caso, o mesmo commit do master, pois ele é a única outra branch que existe), agora com essas duas branches criadas, você pode fazer um commit estando na branch master, fazendo com que a branch master avançe em 1 commit, no entanto, a branch "x" (criada no comando "git branch x") vai continuar apontando para o commit passado, assim, essas duas branches podem apontar para dois commits diferente, servindo para fazer duas funcionalidades diferentes, ao mesmo tempo, por dois programadores diferentes, fazendo com que o trabalho e o esforço seja dividido. 
    Agora explicando o git pull, o "git pull" vai pegar as ultimas mudanças de uma branch de um repositório remoto, então, se existe dois programadores trabalhando em uma branch, vamos chama-los de "X" e "Y', consideremos que o programador X deu um "git push", empurrando suas mudanças para o repositório remoto, para que o repositório local do programador Y receba essas mudanças, o programador Y terá que dar um "git pull" fazendo com que o seu repositório local fosse atualizado com as mudanças mais recentes do repositório remoto (mudanças essas tendo sido enviadas pelo programador "X").

    O "Debito técnico" pode ser comparado a uma forma de pagar por erros ou escolhas erradas no desenvolvimento de um projeto, por exemplo, digamos que um projeto apresenta um bug, e ao invez da equipe investir um certo tempo para procurar e desenvolver uma solução segura, eles optam por uma solução fácil e rápida, como simplesmente comentar as linhas de código que estão dando erro e deixar isso para depois, o Debito técnico pode aparecer no futuro como outro bug, ocasionado pela falta da funcionalidade das linhas comentadas, e que agora pelo projeto estar bem maior, a equipe terá que usar o triplo de esforço para encontrar e consertar os erros.
