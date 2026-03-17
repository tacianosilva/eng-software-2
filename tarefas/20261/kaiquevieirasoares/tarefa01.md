# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Kaique Vieira Soares

**Usuário GitHub:** kaiquevieirasoares

**E-mail:** kaique.vieira@academico.ufrn.edu.br

## 1. Projeto da Disciplina
**Título:** IService - Plataforma de Serviços.
**Descrição:** O IService é uma plataforma projetada para viabilizar o acesso e a busca por profissionais de diversas áreas. O sistema conecta prestadores de serviço a clientes de forma direta, oferecendo uma interface mobile intuitiva para localização de especialistas, agendamento e gestão de serviços em tempo real.
**Equipe:** Kaique Vieira Soares, Ismael Gomes da Silva, Isaque Guimarraes Carreiro, Caio Lucas Lopes, Eduardo Nascimento Santos e Luiz Henrique Felix
**Repositório:** Front-end: https://github.com/LuizFelixDev/iservice-app Back-end: https://github.com/LuizFelixDev/iservice-api

## 2. Linguagem de Programação
Utilizaremos **TypeScript**.
A escolha da linguagem foi feita pensando na colaboração da equipe; por ser uma linguagem amplamente utilizada e com sintaxe clara, o TypeScript facilitará o desenvolvimento e a integração de todos os integrantes no projeto. Além disso, sua tipagem estática ajuda a prevenir erros comuns, tornando o aprendizado e a manutenção mais fluidos para o grupo.

## 3. Framework
No Backend, utilizaremos o **NestJS**, que fornece uma estrutura organizada e baseada em módulos, ideal para lidar com as regras de negócio de uma plataforma de serviços. No Mobile, utilizaremos o **React Native com Expo Go**, permitindo que a equipe desenvolva uma aplicação nativa para Android e iOS com uma única base de código, agilizando o ciclo de testes.

## 4. IDE (Ambiente de Desenvolvimento)
Utilizaremos o **VS Code (Visual Studio Code)**.
A IDE é leve e conta com ferramentas de **debug** integradas para inspecionar a execução tanto da API quanto do app mobile. O controle de versão é gerenciado nativamente, permitindo realizar commits, visualização de branches e resolução de conflitos de forma visual e simples.


## 5. Tutorial CRUD
[CRUD with NestJS](https://youtu.be/P-bUX8XQHwc?si=OmAHryKHqzh3KxHS)
**Descrição:** Este tutorial ensina como construir uma aplicação completa, desde a criação da API com NestJS até a integração com uma interface mobile em React Native, cobrindo todas as operações básicas de um CRUD.

## 6. GitFlow: Branches e Pull Requests
Utilizaremos o modelo **GitFlow** para organizar o código:
* **Main:** Branch com a versão estável e testada.
* **Develop:** Onde a integração das funcionalidades acontece.
* **Feature branches:** Criadas especificamente para cada nova tarefa (ex: `feature/busca-profissionais`).
* **Pull Request (PR):** Processo onde as alterações de uma branch são revisadas pela equipe antes de serem mescladas, garantindo a qualidade do código.

## 7. Versionamento Semântico (SemVer)
Seguiremos o padrão `MAJOR.MINOR.PATCH`:
* **MAJOR:** Alterações que quebram a compatibilidade com versões anteriores.
* **MINOR:** Adição de novas funcionalidades de forma retrocompatível.
* **PATCH:** Correções de bugs e melhorias menores.
