# Tarefa 01 - Git e GitHub com Markdown

**Nome:** José Alves dos Anjos Paiva  
**Usuário GitHub:** josealvs   
**E-mail:** jose.alves.092@ufrn.edu.br 

## Projeto na Disciplina
**Título:** TraininSync  
**Descrição:** O TraininSync é uma plataforma desenvolvida para auxiliar personal trainers na gestão de seus alunos. O sistema oferece funcionalidades para controle de treinos, acompanhamento da evolução física, administração financeira e um sistema de incentivos gamificados.

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

## Tecnologias Utilizadas
O projeto será desenvolvido com **Python e Django** para o backend e **React com TypeScript** no frontend.

A equipe já possui um conhecimento intermediário nessas tecnologias e busca aprimorá-lo ao longo do desenvolvimento do sistema.

## Frameworks Escolhidos
- **Python (Django):** Framework web robusto e altamente escalável, perfeito para criar aplicações seguras e organizadas.  
- **React com TypeScript:** A união do React com TypeScript permite um código mais confiável e melhora a produtividade da equipe.


## 🛠️ IDE Utilizada
A equipe optou pelo **Visual Studio Code (VSCode)** como ambiente de desenvolvimento.  
Principais recursos:
* **Depuração:** O VSCode oferece um depurador embutido, compatível com várias linguagens, que facilita a inspeção de variáveis em tempo real.
* **Integração com Git:** Suporte nativo ao Git, permitindo versionamento de código diretamente na interface.

## Guia para CRUD
Para criar um sistema CRUD utilizando **Django** no backend e **React** com **TypeScript** no frontend, seguem algumas recomendações:

**Vídeo: Criando uma aplicação com Django e React do zero**  
   Neste vídeo, é demonstrado como configurar Django e React, desenvolvendo um projeto full-stack. O tutorial utiliza JavaScript, mas os conceitos podem ser aplicados com TypeScript.

   Clique para assistir: https://www.youtube.com/watch?v=Mv6v9u4F43s

**Resumo do Processo:**

* **Backend (Django):**
  - Configuração do ambiente virtual e instalação do Django.
  - Criação de um projeto e aplicativos Django.
  - Definição dos modelos (*models*) para representar os dados.
  - Utilização do Django Rest Framework para criar *serializers* e *viewsets*.
  - Configuração das rotas da API.

* **Frontend (React + TypeScript):**
  - Configuração inicial do ambiente de desenvolvimento.
  - Construção de componentes para realizar operações CRUD.
  - Uso do Axios para comunicação com a API do Django.
  - Gerenciamento de estado e efeitos colaterais com *hooks* (`useState`, `useEffect`).

Esses recursos fornecem um ótimo caminho para dominar a integração entre Django e React com TypeScript.

## GitFlow: Estrutura de Branches e Pull Requests
O **GitFlow** é um modelo de fluxo de trabalho para organizar o desenvolvimento de software de forma eficiente, separando diferentes tipos de mudanças.

### Branches Principais:
1. **main** – Armazena a versão estável do projeto, pronta para produção.
2. **develop** – Contém a versão em desenvolvimento, onde novas funcionalidades são adicionadas antes do lançamento.

### Branches Secundárias:
* **feature/** – Criadas para novas funcionalidades. Iniciam a partir de `develop` e, ao serem finalizadas, são mescladas de volta.
* **release/** – Criadas para preparar uma nova versão antes de ser integrada à `main`.
* **hotfix/** – Criadas para corrigir bugs críticos encontrados em produção.

### Processo de Pull Request:
1. Um desenvolvedor cria um **branch feature/** e implementa uma funcionalidade.
2. Após a finalização, ele abre um **Pull Request** para `develop`.
3. Outros membros revisam o código, sugerindo melhorias ou aprovando a fusão.
4. O código é então incorporado à `develop`, garantindo qualidade e organização.

Esse processo melhora a colaboração e reduz riscos ao manter um código mais seguro. 


## Versionamento Semântico (SemVer)
O **Versionamento Semântico** adota um formato **MAJOR.MINOR.PATCH**:

* **MAJOR** (X.0.0) – Mudanças significativas que podem quebrar compatibilidade.
* **MINOR** (0.X.0) – Adição de funcionalidades sem impacto na compatibilidade.
* **PATCH** (0.0.X) – Correções e melhorias menores.

Exemplo:
Se a versão atual for **1.2.3**:
* Uma nova funcionalidade resultaria em **1.3.0**.
* Uma correção de bug mudaria para **1.2.4**.
* Alterações que quebram compatibilidade levariam a **2.0.0**.

Mais detalhes em: [semver.org](https://semver.org/)

## Commits Padronizados com Conventional Commits
O **Conventional Commits** propõe um padrão para mensagens de commit, tornando-as mais descritivas e organizadas.

### 🔹 Principais Tipos de Commits:
* **feat:** Implementação de uma nova funcionalidade.
* **fix:** Correção de um bug.
* **docs:** Atualizações na documentação.
* **style:** Ajustes na formatação do código.
* **refactor:** Melhorias no código sem alterar a lógica.
* **test:** Inclusão ou atualização de testes.
* **chore:** Tarefas de manutenção do projeto.

**Exemplos:**
```bash
 git commit -m "feat(login): adiciona autenticação via Google"
 git commit -m "fix(api): corrige erro na resposta do endpoint /users"
 git commit -m "docs(readme): atualiza instruções de instalação"
```

## Cadastro no AcademicDevFlow
Foi feito o cadastro no site, e deixado um feedback. Muito bem estruturado e fluido, apenas pecou um pouco na questão da responsividade do site no mobile, seria uma melhoria a se fazer.

