# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Gabriel Ygor Canuto  
**Usuário GitHub:** Gabrielygor   
**E-mail:** gabrielcanuto042@gmail.com 

## 📌 Projeto na Disciplina
**Título:** TraininSync  
**Descrição:** Trainin Sync é uma plataforma que integra a gestão de alunos para personal trainers, abrangendo desde o controle de treinos e progresso físico até a administração financeira e incentivos gamificados.
  

| Equipe                               
|-------------------------------------|
| Arthur José dos Santos Azevedo      |
| Gabriel Ygor Canuto                 |
| José Alves dos Anjos Paiva          |
| Luiz Miguel Santos Silva            |
| Rael Araújo Silva                   |
| Renan Messias Rodrigues Alves da Costa |


**Repositório do Projeto:**

 Back: https://github.com/RenanCDev/TraininSync-Back-end  
 Front: https://github.com/RenanCDev/TraininSync-Front-end

## 💻 Linguagem de Programação
O projeto utilizará **Python com Django** no backend e **React com TypeScript** no frontend.

A equipe possui experiência intermediária com essas tecnologias e está aprimorando suas habilidades ao longo do projeto.

## 🚀 Framework Utilizado
- **Python (Django):** Framework web robusto e escalável, ideal para aplicações seguras e bem estruturadas.  
- **React com TypeScript:** Combina a flexibilidade do React com a tipagem forte do TypeScript, aumentando a segurança do código e a produtividade da equipe.

## 🛠️ IDE Escolhida
A IDE escolhida para o projeto é o **Visual Studio Code (VSCode)**.  
Recursos principais:
- **Debug:** O VSCode possui um depurador embutido que suporta várias linguagens e permite inspeção de variáveis em tempo real.
- **Controle de versão:** Integração nativa com Git, permitindo commits, criação de branches e resolução de conflitos diretamente na interface.

## 📚 Tutorial CRUD
Para desenvolver uma aplicação CRUD utilizando **Django** no backend e **React** com **TypeScript** no frontend, recomendo os seguintes recursos:

1. **Tutorial: Construindo uma Aplicação CRUD com Django e React**

   Este tutorial, publicado na *DEV Community*, orienta na criação de uma API REST com Django e Django Rest Framework, além de uma SPA (Single Page Application) com React para realizar operações CRUD. Embora o tutorial utilize JavaScript no frontend, os conceitos podem ser adaptados para TypeScript. [Link para o tutorial](https://dev.to/koladev/build-a-crud-application-using-django-and-react-5389)

2. **Artigo: Configuração de Produção com Django, Django-Restframework e React em TypeScript**

   Este artigo detalha a configuração de um ambiente de produção integrando Django no backend com React em TypeScript no frontend. Embora não seja um tutorial passo a passo, oferece insights valiosos sobre a integração dessas tecnologias. [Link para o artigo](https://medium.com/@Jangascodingplace/django-django-restframework-typescript-react-production-setup-7ac11de14969)

3. **Vídeo: Aprenda React e Django em 1 Hora | Para Iniciantes**

   Este vídeo apresenta um tutorial prático para iniciantes, abordando a configuração de ambos os frameworks e a construção de uma aplicação full-stack. Embora o foco seja em JavaScript, os conceitos podem ser aplicados ao uso de TypeScript.

   [![Aprenda React e Django em 1 Hora | Para Iniciantes](https://img.youtube.com/vi/xldTxXtNiuk/0.jpg)](https://www.youtube.com/watch?v=xldTxXtNiuk)

**Resumo do Conteúdo:**

- **Backend com Django:**
  - Configuração do ambiente virtual e instalação do Django.
  - Criação de um projeto e aplicação Django.
  - Definição de modelos (*models*) para representar os dados.
  - Configuração de *serializers* e *viewsets* utilizando Django Rest Framework.
  - Configuração de rotas para expor a API REST.

- **Frontend com React e TypeScript:**
  - Configuração do ambiente React com TypeScript.
  - Criação de componentes funcionais para listar, adicionar, editar e excluir itens.
  - Utilização de bibliotecas como Axios para realizar requisições HTTP para a API Django.
  - Gerenciamento de estado e efeitos colaterais com *hooks* como `useState` e `useEffect`.

Ao seguir esses recursos, você obterá uma compreensão sólida de como integrar Django com React e TypeScript para construir aplicações CRUD eficientes.

## 🔀 Branches e Pull Requests com GitFlow
O **GitFlow** é um fluxo de trabalho baseado em Git que ajuda a organizar o desenvolvimento de software de maneira eficiente. Ele utiliza diferentes **branches** para separar funcionalidades, correções e versões estáveis.

### 📌 Principais Branches:
1. **main** – Contém a versão estável e pronta para produção do projeto.
2. **develop** – Branch principal de desenvolvimento, onde novas funcionalidades são integradas antes de serem lançadas.

### 🔄 Branches Temporárias:
- **feature/** – Para desenvolver novas funcionalidades. Criadas a partir de `develop` e, ao concluir a feature, são mescladas de volta para `develop`.
- **release/** – Criadas quando uma nova versão está prestes a ser lançada. Permitem testes e correções antes de serem mescladas em `main` e `develop`.
- **hotfix/** – Para correções urgentes de bugs em produção. Criadas a partir de `main` e, após a correção, são mescladas de volta em `main` e `develop`.

### 🔁 Pull Requests:

O fluxo GitFlow recomenda o uso de **Pull Requests (PRs)** para revisar código antes de mesclá-lo.  
1. Um desenvolvedor cria um **branch feature/** e implementa a funcionalidade.
2. Quando finalizado, abre um **Pull Request** para `develop` no GitHub.
3. Outros membros da equipe revisam o código, sugerem melhorias e aprovam a mesclagem.
4. Após a aprovação, o código é mesclado em `develop`.

Esse fluxo melhora a colaboração, garante um código mais seguro e evita problemas na versão de produção. 🚀


## 🔢 Versionamento Semântico:

O **Versionamento Semântico (SemVer)** é um sistema de numeração de versões que segue o formato **MAJOR.MINOR.PATCH**:

- **MAJOR** (X.0.0) – Alterações que quebram compatibilidade com versões anteriores.  
- **MINOR** (0.X.0) – Novas funcionalidades adicionadas sem quebrar a compatibilidade.  
- **PATCH** (0.0.X) – Correções de bugs e melhorias sem alterar funcionalidades existentes.  

Exemplo:  
Se a versão atual for **1.2.3** e for lançada uma nova funcionalidade sem quebrar compatibilidade, a versão se tornaria **1.3.0**.  
Se fosse uma correção de bug, seria **1.2.4**.  
Caso houvesse uma mudança que quebrasse compatibilidade, passaria para **2.0.0**.

Mais detalhes em: [semver.org](https://semver.org/)  

---
