# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Aron da Silva Bezerra  
**GitHub:** @aronslv  
**E-mail:** aronsilvagm@gmail.com  

---

### **Projeto: Studio de Pilates MS**  
O Sistema de Gestão para “Studio de Pilates MS” é projetado para abranger uma variedade de funções essenciais para o funcionamento eficaz de um pequeno estúdio de Pilates. Este sistema inclui:  
- Controle de atividades  
- Gerenciamento de clientes  
- Agendamento de aulas  
- Registro de pagamentos  
- Acompanhamento do progresso dos alunos  

**Equipe:**  
- Aron Silva  
- Beatriz Costa  
- Giovanna Melo  
- Maria Eloísa Santos  
- Mariana Medeiros  
- Virlânia Canuto  

🔗 **Repositório:** [GitHub - Estúdio Pilates](https://github.com/EL0ISA/estudio_pilates)

---

### **Tecnologia Utilizada: Django**  
O projeto será desenvolvido utilizando a linguagem de programação **Python** e o framework **Django**, que é uma poderosa ferramenta para a construção de aplicações web. Django é conhecido por sua robustez, escalabilidade e facilidade de uso, oferecendo recursos como autenticação de usuários, painéis administrativos, integração com banco de dados, entre outros. 

---

### **Experiência da Equipe com a Linguagem:**

| Membro    | Experiência em Linguagens e Tecnologias                      |
|-----------|--------------------------------------------------------------|
| **Aron**  | Experiência em Python, C, Flutter                            |
| **Beatriz**| Experiência em C, Java, Flutter, PHP, Python, Django        |
| **Eloisa** | Experiência em C, Flutter, Laravel, PHP, Python, Django     |
| **Giovanna** | Experiência em C, Flutter, Python                         |
| **Mariana** | Experiência em JavaScript, C, Flutter, Python              |
| **Virlânia** | Experiência em Java, C, Flutter, Python, Django           |

---

A equipe tem uma sólida base em Python e Django, com experiência variada em outras linguagens, o que permite uma adaptação eficiente e um bom aproveitamento do framework para o desenvolvimento do sistema.

---

### **IDE Escolhida: Visual Studio Code (VS Code)**  
A IDE escolhida para o desenvolvimento do projeto é o **Visual Studio Code (VS Code)**, uma das mais populares e amplamente utilizadas por desenvolvedores. O VS Code oferece diversos recursos que ajudam no aumento da produtividade e na qualidade do código.

#### **Ferramentas de Debug Integradas:**
O VS Code possui uma poderosa ferramenta de **debugging** integrada que facilita a detecção e resolução de problemas no código. Com ela, é possível:
- Definir breakpoints para interromper a execução em pontos específicos do código.
- Inspecionar variáveis e ver seus valores em tempo real.
- Controlar a execução do código (passar, avançar, continuar, etc.).
- Depurar código em várias linguagens, incluindo Python (com o plugin apropriado).
  
#### **Ferramentas de Controle de Versão (Git):**
O VS Code também possui integração nativa com **Git**, permitindo:
- Visualizar alterações no código com uma interface gráfica intuitiva.
- Cometer alterações, criar branches e realizar merges diretamente pela interface do editor.
- Resolver conflitos de merge facilmente.
- Acompanhar o histórico de commits e visualizar o status do repositório.
  
Essas funcionalidades fazem do VS Code uma escolha robusta e eficiente para o desenvolvimento do projeto, além de otimizar o fluxo de trabalho da equipe.

### Tutorial

[MDN - Tutorial Django: Website da Biblioteca Local](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
 O tutorial da MDN sobre Django guia o usuário na criação de um site para gerenciar o catálogo de uma biblioteca local. Ele cobre desde a configuração do projeto até a implantação, abordando modelagem de dados, views, templates, autenticação, formulários e testes automatizados. O projeto ensina os fundamentos do Django de forma prática e completa.

---

### **GitFlow, Branches e Pull Requests**

#### **GitFlow: Modelo de Ramificação**
O **GitFlow** é um modelo de ramificação que organiza o fluxo de trabalho no Git, facilitando a gestão do código e suas versões. Ele é amplamente utilizado em equipes de desenvolvimento para manter o controle e a qualidade do código. Aqui estão as principais branches utilizadas no GitFlow:

- **`master`**: Representa o estado de produção do código. Cada commit nesta branch deve estar em funcionamento e pronto para ser implantado.
- **`develop`**: A branch de desenvolvimento principal, onde as funcionalidades são integradas antes de serem lançadas para produção.
- **Branches de Funcionalidade (`feature/*`)**: Criadas a partir de `develop`, essas branches são usadas para desenvolver novas funcionalidades. Após concluídas, são mescladas de volta em `develop`.
- **Branches de Release (`release/*`)**: Originadas de `develop`, são utilizadas para preparar novas versões de produção. Elas permitem a correção de bugs e ajustes finais antes da liberação para `master`.
- **Branches de Hotfix (`hotfix/*`)**: Derivadas de `master`, são usadas para corrigir problemas críticos em produção. Após a correção, as alterações são mescladas em `master` e `develop`.

#### **Pull Requests (PR) e Merge Requests**
Os **Pull Requests** (PR) — ou **Merge Requests** — são ferramentas essenciais para revisar e integrar código de maneira controlada. Eles permitem que os desenvolvedores notifiquem a equipe sobre alterações concluídas, solicitando a revisão antes da integração. O fluxo de trabalho básico com PRs é o seguinte:

1. **Criação de uma Branch de Funcionalidade**: Crie uma branch separada da `develop` para implementar uma nova funcionalidade.
2. **Desenvolvimento e Commit**: Realize as alterações e faça commits frequentemente para documentar o progresso.
3. **Push para o Repositório Remoto**: Envie a branch para o repositório remoto no GitHub.
4. **Criação do Pull Request**: Abra um PR no GitHub, direcionando a branch para `develop` (ou `master`, dependendo do caso).
5. **Revisão e Feedback**: Revisores analisam o código e fornecem feedback. Ajustes podem ser feitos até que o código esteja pronto para ser integrado.
6. **Aprovação e Merge**: Após aprovação, o PR é mesclado na branch de destino (`develop` ou `master`).
7. **Limpeza**: Após o merge, a branch de funcionalidade pode ser deletada para manter o repositório organizado.

Utilizando o GitFlow e PRs, é possível manter um fluxo de trabalho organizado, garantindo que todas as alterações sejam bem documentadas, revisadas e integradas de forma controlada.

---

### **Versionamento Semântico (SemVer)**  
O **Versionamento Semântico**, ou **SemVer**, é um sistema que define regras sobre como os números de versão são atribuídos e incrementados, com o objetivo de comunicar de forma clara a natureza das mudanças em cada versão do software. Isso facilita o entendimento sobre a compatibilidade e o impacto das alterações feitas.  
[SemVer - Site Oficial](https://semver.org/lang/pt-BR/)

**Formato da Versão:**
O número de versão no SemVer segue o formato **MAJOR.MINOR.PATCH**, onde:
- **MAJOR**: Incrementado quando há mudanças incompatíveis na API pública.
- **MINOR**: Incrementado quando são adicionadas funcionalidades compatíveis com versões anteriores.
- **PATCH**: Incrementado quando há correções de bugs compatíveis com versões anteriores.

Além disso, versões de pré-lançamento e metadados de construção podem ser adicionados para fornecer informações adicionais sobre o estado da versão.

**Princípios Fundamentais:**
- **Declaração de API Pública**: O software deve definir claramente sua API pública, seja por meio de documentação ou código, garantindo que seja precisa e compreensível.
- **Imutabilidade de Versões Lançadas**: Uma vez que uma versão é lançada, seu conteúdo não deve ser alterado. Quaisquer modificações devem resultar em uma nova versão.
- **Estabilidade Progressiva**: Versões com número MAJOR igual a zero (0.y.z) indicam que o software está em desenvolvimento inicial, e mudanças podem ocorrer a qualquer momento. A versão 1.0.0 marca a definição de uma API estável.

Adotar o Versionamento Semântico ajuda a manter a clareza sobre a evolução do software, permitindo que desenvolvedores e usuários compreendam rapidamente a natureza das mudanças entre as versões.

---
