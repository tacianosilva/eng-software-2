# Tarefa 01 - Git e GitHub com Markdown
---
* Nome: Arthur José dos Santos Azevêdo
* Usuário Github: arthurazvd
* E-mail: arthur.azevedo.700@ufrn.edu.br
---

# Titulo

## Trainin Sync

## Visão Geral
Trainin Sync é uma plataforma que integra a gestão de alunos para personal trainers, abrangendo desde o controle de treinos e progresso físico até a administração financeira e incentivos gamificados. Este repositório contém a implementação do back-end, responsável pela lógica de negócio, integração com o banco de dados e disponibilização de APIs que alimentam o front-end.

## Tecnologias Utilizadas
O projeto é desenvolvido em **Python**, uma linguagem de programação robusta e amplamente utilizada no desenvolvimento web. A equipe domina frameworks como **Django**, que facilita a criação de aplicações escaláveis e seguras, além de proporcionar uma estrutura eficiente para o desenvolvimento do back-end. O banco de dados utilizado é **PostgreSQL**, garantindo confiabilidade e performance para o armazenamento das informações.

### Por que Django?
O **Django** é um dos frameworks mais populares para desenvolvimento web em Python, conhecido por sua filosofia "batteries included", que inclui diversas funcionalidades prontas para uso. Ele permite um desenvolvimento ágil, fornecendo ferramentas para autenticação, ORM (Object-Relational Mapping), administração automática, segurança embutida e suporte a escalabilidade. Além disso, sua integração com o **PostgreSQL** facilita a manipulação de dados de forma eficiente e segura.

## Ambiente de Desenvolvimento
Para o desenvolvimento do projeto, utilizamos o **Visual Studio Code (VS Code)** como IDE principal. O VS Code é uma ferramenta poderosa e altamente personalizável, com suporte para **Python** e **Django**, além de contar com diversas extensões que auxiliam no desenvolvimento.

### Ferramentas Integradas no VS Code:
- **Depurador (Debugging)**: O VS Code oferece um depurador embutido que permite configurar pontos de interrupção, inspecionar variáveis e executar o código passo a passo para facilitar a correção de bugs.
- **Controle de Versão (Git Integration)**: O suporte nativo ao **Git** permite clonar repositórios, criar branches, fazer commits e push diretamente pela interface da IDE.
- **Extensões**: A equipe utiliza extensões como **Python**, **Django**, **PostgreSQL** e **GitLens** para aumentar a produtividade e facilitar o desenvolvimento.

## Link de Tutorial
Para aprender a fazer um CRUD com Django, confira este tutorial em vídeo no YouTube: [Tutorial CRUD Django](https://www.youtube.com/watch?v=GGBzMpIAgz4)

### Sobre o Tutorial
Este tutorial em vídeo ensina a construir um CRUD básico utilizando o Django, cobrindo desde a instalação e configuração até a criação das funcionalidades de criação, leitura, atualização e exclusão de dados em uma aplicação web. É ideal para quem está começando com Django e quer entender os conceitos fundamentais do framework enquanto cria uma aplicação real.

## Branches e Pull Requests com GitFlow
No fluxo de trabalho com o GitFlow, a utilização de **branches** e **pull requests (PRs)** (também conhecidos como **merge requests**) é uma prática fundamental para garantir a colaboração eficiente entre os desenvolvedores e manter o código organizado.

### Branches
O conceito de **branch** (ramo) no Git permite que diferentes desenvolvedores trabalhem em partes distintas de um projeto sem afetar a versão estável do código. Cada branch representa uma linha de desenvolvimento, onde novas funcionalidades, correções de bugs e melhorias podem ser feitas de forma isolada. Ao seguir o modelo **GitFlow**, as principais branches são:

- **master**: Representa a versão de produção, sempre estável.
- **develop**: A branch onde o desenvolvimento contínuo acontece. Funciona como a base para as futuras releases.
- **feature branches**: Criadas a partir da branch **develop**, essas branches são usadas para o desenvolvimento de novas funcionalidades.
- **release branches**: Quando a **develop** está pronta para ser lançada, uma **release branch** é criada para preparar o código para produção.
- **hotfix branches**: Utilizadas para corrigir problemas urgentes na versão de produção.

### Pull Requests (PRs) e Merge Requests
Após concluir o trabalho em uma branch de **feature** ou **hotfix**, o desenvolvedor cria um **pull request** (PR) para solicitar que suas alterações sejam integradas ao código principal. O processo de **merge** é realizado após a revisão e aprovação do código, garantindo que as mudanças não quebrem a funcionalidade existente e estejam de acordo com os padrões do projeto.

Os **pull requests** são fundamentais no GitFlow, pois facilitam a colaboração entre os membros da equipe e proporcionam uma maneira estruturada de revisar e integrar alterações. Além disso, os PRs oferecem a possibilidade de comentar e sugerir melhorias antes que as alterações sejam mescladas com o código principal.

## Equipe
- **Renan Costa**
- **Luiz Miguel**  
- **José Alves**
- **Arthur Azevêdo**
- **Gabriel Ygor**
- **Rael Araújo**

## Repositório
Acesse o código-fonte no GitHub: [Trainin Sync - Back-end](https://github.com/RenanCDev/TraininSync-Back-end.git)
