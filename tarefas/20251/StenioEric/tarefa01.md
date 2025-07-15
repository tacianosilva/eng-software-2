# Tarefa 01 - Git e GitHub com Markdown

*Nome:* Stênio Éric Barrêto da Costa
*Usuário GitHub:* https://github.com/StenioEric
*E-mail:* stenioeric1@gmail.com

---

## Projeto: KNN-Barber-App

### Descrição

<div style="text-align: justify">
O sistema de informação desenvolvido tem como foco ser utilizado pela Barbearia KN, no formato de um aplicativo de agendamento de horários. O software busca acima de tudo trazer a simplicidade para que o usuário, de forma intuitiva, consiga agendar os horários e o tipo de serviço que deseja dentre os oferecidos pela empresa.

Dentro da ideia de agendamento de horários, é importante destacar as funcionalidades principais deste módulo. Além da criação do horário de atendimento com nome e descrição, há a possibilidade de modificar os agendamentos manualmente ou até mesmo desmarcá-los caso haja necessidade. Por fim, os horários seguirão o padrão de Brasília, para evitar conflitos de fuso horário.

Ademais, o software pode ser uma ponte para uma nova forma de controle de pagamentos online, gerando também um relatório de contas referente aos lucros do mês com base em dados de clientes atendidos, assim facilitando a análise dos empresários sobre o empreendimento e as possíveis estratégias futuras.

</div>

_Equipe:_

- Stênio Éric Barrêto da Costa
- Alec Can Yalcin
- Denner Bismarck
- Júlio César
- Guilherme Medeiros 

_Repositório:_
[Clique aqui](https://github.com/AlecYalcin/KNN-Barber-App)


### Liguagem de Programação

<div style="text-align: justify">
No nosso projeto, escolhemos JavaScript/React para o front-end e Python/FastAPI para o back-end. Nossa equipe é composta por integrantes com níveis de experiência que variam do básico ao intermediário, dependendo da área em que cada um atua no momento.
</div>

### Frameworks

<div style="text-align: justify">

 **FastApi**: Um framework moderno para desenvolvimento de APIs em Python, projetado para alto desempenho e simplicidade. Ele utiliza tipagem estática, gerando automaticamente documentação interativa e oferecendo suporte à validação de dados com Pydantic. Para construir um CRUD com FastAPI, é necessário definir os modelos de dados usando Pydantic, configurar os endpoints com `@app.post()`, `@app.get()`, `@app.put()` e `@app.delete()`, além de integrar um banco de dados com SQLAlchemy.

**React**: Uma biblioteca JavaScript voltada para a criação de interfaces dinâmicas e componentizadas. Sua abordagem modular facilita o desenvolvimento de aplicações Single Page Applications (SPA), permitindo a reutilização de componentes e otimizando a experiência do usuário.

</div>

### Visual Studio Code (VS Code)

<div style="text-align: justify">

Para o desenvolvimento do nosso projeto, utilizaremos o **Visual Studio Code (VS Code)**, uma das IDEs mais populares e versáteis para programação. O VS Code é um editor leve, rápido e altamente extensível, oferecendo suporte a diversas linguagens, incluindo **JavaScript, Python e TypeScript**, que utilizamos no projeto.  

#### **Ferramentas de Debug**  
O VS Code possui um **depurador integrado**, permitindo a execução do código passo a passo, inspeção de variáveis, definição de breakpoints e análise do fluxo de execução. Além disso, conta com suporte nativo para **FastAPI e React**, com extensões que melhoram a experiência de depuração, como:  
- **Python Debugger**: Facilita a depuração de aplicações FastAPI, permitindo acompanhar requisições e testar a API diretamente na IDE.  
- **React Developer Tools**: Auxilia na inspeção do estado e da árvore de componentes da aplicação.  
- **Live Server**: Ferramenta útil para desenvolvimento web, recarregando a aplicação automaticamente conforme as alterações no código.  

#### **Controle de Versão**  
O VS Code possui **integração nativa com Git e GitHub**, permitindo que os desenvolvedores realizem operações de versionamento diretamente na interface da IDE. Entre as principais funcionalidades, destacam-se:  
- **Commit e Push/Pull diretamente no editor**  
- **Histórico de alterações e comparação entre versões**  
- **Resolução simplificada de conflitos em merge**  
- **Extensões como GitLens**, que ajudam a visualizar alterações no código e rastrear contribuições de cada membro da equipe  

Essas funcionalidades tornam o **VS Code** uma excelente escolha para o nosso projeto, proporcionando um ambiente de desenvolvimento eficiente e organizado.

</div>

### Tutorial de CRUD utilizando FastApi

<div style="text-align: justify">

 Lindo do vídeo: https://fastapi.tiangolo.com/tutorial/sql-databases/

 ### **O que podemos aprender com o tutorial?**  
- Configuração e uso do banco de dados **SQLite** no projeto.  
- Integração com **SQLAlchemy** para manipulação dos dados.  
- Definição de modelos de dados e implementação de endpoints CRUD.  
- Aplicação do **Pydantic** para validação e estruturação dos dados.  

</div>

### Branches e Pull Requests no GitHub com GitFlow

<div style="text-align: justify">

#### **Branches no GitFlow**  
No GitFlow, as **branches** (ramificações) são utilizadas para organizar o fluxo de desenvolvimento. Algumas das principais são:  

- **`main`**: Contém o código estável e pronto para produção.  
- **`develop`**: Onde ocorre o desenvolvimento contínuo antes de ser integrado à `main`.  
- **`feature/nova-funcionalidade`**: Criada a partir da `develop` para implementar novas funcionalidades.  
- **`release/x.y.z`**: Usada para preparar uma nova versão antes de ser mesclada na `main`.  
- **`hotfix/correção-bug`**: Criada a partir da `main` para correção emergencial de bugs em produção.  

#### **Pull Request (Merge Request)**  
Um **Pull Request (PR)** é o processo de solicitação para mesclar uma branch em outra, garantindo que as mudanças sejam revisadas antes da integração.  

**Fluxo de um Pull Request no GitFlow:**  
1. Criar uma branch (`feature/nova-funcionalidade`) a partir da `develop`.  
2. Desenvolver e realizar commits regularmente.  
3. Criar um **Pull Request** para mesclar a feature na `develop`.  
4. O código é revisado e, se aprovado, a branch é mesclada.  
5. A branch de feature pode ser deletada após a mesclagem.  

Os Pull Requests garantem **colaboração eficiente, revisão de código e um histórico organizado** no repositório.  
</div>


### Versionamento Semântico (SemVer)

<div style="text-align: justify">

O **Versionamento Semântico** é um sistema padronizado para atribuição de números de versão a softwares, facilitando a identificação das mudanças e garantindo compatibilidade entre versões. Segundo essa convenção, cada versão é representada por três números no formato **X.Y.Z**, onde:

- **X (Major)**: Incrementado quando há alterações incompatíveis na API.
- **Y (Minor)**: Incrementado ao adicionar funcionalidades compatíveis com versões anteriores.
- **Z (Patch)**: Incrementado ao corrigir falhas mantendo a compatibilidade com versões anteriores.

Essa abordagem permite que desenvolvedores e usuários compreendam facilmente o impacto das atualizações e mantenham a integridade das dependências em seus projetos.
</div>

### Conventional Commits

<div style="text-align: justify">

O **Conventional Commits** é uma especificação que define um conjunto de regras para criar mensagens de commit claras e padronizadas. Isso facilita a leitura do histórico de commits e possibilita a automação de processos, como geração de changelogs e versionamento semântico. A estrutura básica de uma mensagem de commit conforme essa convenção é:

```
tipo(escopo opcional): descrição breve

[corpo opcional]
[rodapé opcional]
```

Os principais elementos são:

- **tipo**: Indica a natureza da mudança, como `feat` (nova funcionalidade) ou `fix` (correção de bug).
- **escopo** (opcional): Contextualiza a parte do código afetada pela mudança.
- **descrição**: Resumo conciso da alteração realizada.
- **corpo** (opcional): Detalhamento adicional sobre a mudança.
- **rodapé** (opcional): Informações complementares, como referências a issues ou notas sobre quebras de compatibilidade (`BREAKING CHANGE`).

Ao seguir essa convenção, equipes de desenvolvimento promovem uma comunicação mais eficiente e estruturada sobre as alterações no código, facilitando a manutenção e evolução dos projetos.

</div>