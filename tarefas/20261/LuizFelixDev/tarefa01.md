# Tarefa 01 - Git e GitHub com Markdown
## Nome: Luiz Henrique Felix Guedes
## Usuario: LuizFelixDev
## e-mail: luiz.henrique.felix.709@ufrn.edu.br

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 1. Título, Descrição do Projeto, Equipe e Repositório

* **Título do Projeto:** iService
* **Descrição:** Desenvolvido para a disciplina de Engenharia de Software II na UFRN, o iService insere-se no contexto da *Gig Economy* (economia sob demanda). Ele funciona como um marketplace geolocalizado em tempo real focado em conectar pessoas com necessidades urgentes de manutenção, reparos ou serviços rápidos a profissionais qualificados geograficamente próximos. A otimização e inteligência espacial são realizadas por meio da extensão PostGIS do PostgreSQL.
* **Equipe e Papéis:**
* **Taciano:** Cliente Professor
* **Kaique:** Ex Líder Técnico e Desenvolvedor Back-end
* **Luiz Henrique:** Ex Líder Técnico Desenvolvedor Mobile / Front-end
* **Ismael Gomes da Silva:** Desenvolvedor Back-end
* **Caio Lucas Lopes:** Analista de Requisitos
* **Eduardo Nascimento Santos:** Líder técnico Desenvolvedor Full-stack
* **Isaque Guimaraes:** Desenvolvedor Mobile / Front-end


* **Link para o Repositório do Projeto:** O projeto divide-se nos ecossistemas hospedados sob o perfil do GitHub da equipe:
* Backend API: `https://github.com/luizfelixdev/iservice-api`
* Frontend Mobile App: `https://github.com/luizfelixdev/iservice-app`


Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 2. Linguagem de Programação Utilizada

A linguagem de programação principal adotada no ecossistema do projeto (tanto no front-end quanto no back-end) é o **TypeScript**.

* **Domínio e Experiência da Equipe:** A escolha foi motivada pela tipagem estática rigorosa, que evita erros em tempo de execução e facilita refatorações seguras. A equipe possui competências bem distribuídas: o ecossistema Back-end (Kaique, Ismael e Eduardo) utiliza intensamente os recursos avançados de tipagem do TypeScript integrados a decoradores e injeção de dependência, enquanto o time Front-end/Mobile (Luiz Henrique e Isaque) foca na tipagem de interfaces de usuário, estados e consumo de APIs REST no ecossistema React Native/Expo.

Com base nas informações extraídas dos documentos de documentação (`documento_visao.md` e `arquitetura.md`) e de configuração (`package.json`) do projeto **iService**, elaborei as seções solicitadas de forma detalhada e contextualizada à realidade da sua equipe:

---

### 3. Framework Utilizado

No coração do desenvolvimento do Back-end está o **NestJS** (v11.0.1).

* **Sobre o NestJS:** É um framework Node.js progressivo voltado à construção de aplicativos eficientes, confiáveis e escaláveis no lado do servidor. Ele combina elementos de Programação Orientada a Objetos, Programação Funcional e Programação Reativa.
* **Justificativa no iService:** Ele impõe uma arquitetura modular rígida através da separação explícita entre *Controllers* (tratamento de rotas e requisições HTTP), *Services* (regras de negócio isoladas) e *Guards* (camada nativa para proteção de rotas com JWT e papéis de acesso). Essa modularidade otimiza a separação de conceitos (SoC) e simplifica os testes automatizados com o ecossistema Jest já nativamente embutido no projeto.

