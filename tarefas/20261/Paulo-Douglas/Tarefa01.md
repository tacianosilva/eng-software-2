<h1 align="center">Atividade 01 - Git e GitHub com Markdown</h1>

| Nome | GitHub | Email |
|------|--------|--------|
| Paulo Douglas Martins Dias | [Paulo-Douglas](https://github.com/Paulo-Douglas) | paulo.matins.132@ufrn.edu.br |

## 📌 Sobre o projeto

**Touchfy** é uma plataforma de streaming de música que permite aos usuários descobrir, ouvir e organizar suas faixas favoritas em um só lugar. Com recursos como criação de conta, curtidas em músicas e a possibilidade de seguir artistas, o sistema oferece uma experiência personalizada para acompanhar lançamentos, explorar novos sons e manter playlists sempre atualizadas.

---

## 📊 Informações do projeto

| Categoria | Detalhes |
|----------|----------|
| 🎵 Nome do Projeto | **Touchfy** |
| 👥 Equipe | [Paulo Douglas](https://github.com/Paulo-Douglas), [Mosiah Adam](https://github.com/akemi-adam), [Diana Rodrigues](https://github.com/dianaRodriguess), [Anderson Gabriel](https://github.com/andersoncruzdev) |
| 💻 Repositórios | [touchfy-api](https://github.com/douglas-e-amigos/touchfy-api) • [touchfy-ui](https://github.com/douglas-e-amigos/touchfy-ui) |

---

## 💻 Tecnologias e Experiência da Equipe

O projeto será desenvolvido utilizando **Java com Spring Boot** no backend e **TypeScript com React** no frontend.

No backend, a equipe possui um nível **intermediário** de domínio. O integrante Mosiah Adam já possui experiência prática com **Java e Spring Boot**, enquanto os demais membros já têm base sólida em Java e estão evoluindo no uso do framework Spring.

No frontend, toda a equipe já possui experiência com **React**, adquirida em projetos anteriores, o que garante familiaridade com a construção de interfaces modernas e componentizadas utilizando TypeScript.

---

## ⚙️ Framework Utilizado

O projeto utilizará o **Spring Boot** no backend. Esse framework Java facilita a criação de aplicações web e APIs REST, reduzindo configurações manuais e acelerando o desenvolvimento.

Ele oferece recursos como configuração automática, integração com banco de dados e suporte a segurança, sendo amplamente utilizado no desenvolvimento de sistemas modernos e escaláveis.

🔗 Links úteis:
- https://spring.io/projects/spring-boot
- https://docs.spring.io/spring-boot/index.html
- https://www.baeldung.com/spring-boot

---

## 🛠️ IDE Utilizada

O projeto utilizará as IDEs **Visual Studio Code** e **IntelliJ IDEA**.

O Visual Studio Code será usado principalmente no desenvolvimento frontend, oferecendo suporte a debug com breakpoints e integração com Git para controle de versão.

Já o IntelliJ IDEA será utilizado no backend com Java e Spring Boot, contando com ferramentas avançadas de debug e integração nativa com Git, facilitando o gerenciamento do código e das versões.

O uso dessas IDEs contribui para maior produtividade e organização no desenvolvimento do projeto.

---

## 📚 Tutorial de CRUD

Um exemplo de tutorial para criação de um CRUD utilizando Spring Boot pode ser encontrado no link abaixo:

🔗 https://www.bezkoder.com/spring-boot-jpa-crud-rest-api/

Esse tutorial ensina passo a passo como criar uma API REST com operações de CRUD (Create, Read, Update e Delete) utilizando Spring Boot, Spring Data JPA e banco de dados como MySQL ou PostgreSQL. Ele aborda desde a configuração do projeto até a implementação de entidades, repositórios e controllers para manipulação dos dados.

---

## 🌿 Branches e Pull Request com GitFlow

No Git, **branches** são ramificações do código que permitem desenvolver novas funcionalidades ou correções sem alterar a versão principal do projeto.

O **GitFlow** é um modelo de organização que define padrões para uso de branches, como:
- `main`: versão estável do projeto
- `develop`: integração das funcionalidades
- `feature/*`: desenvolvimento de novas funcionalidades
- `hotfix/*`: correções urgentes

Já o **Pull Request (ou Merge Request)** é o processo de enviar alterações de uma branch para outra, geralmente de `feature` para `develop` ou `main`. Ele permite revisar o código antes da integração, garantindo mais qualidade e evitando erros.

Esse fluxo ajuda a manter o projeto organizado, facilitando o trabalho em equipe e o controle de versões.

---

## 🔢 Versionamento Semântico (SemVer)

O Versionamento Semântico (SemVer) é um padrão para definir versões de software no formato **X.Y.Z**, onde cada número possui um significado específico:

- **X (MAJOR)**: mudanças incompatíveis com versões anteriores  
- **Y (MINOR)**: adição de novas funcionalidades sem quebrar compatibilidade  
- **Z (PATCH)**: correções de bugs sem alterar funcionalidades  

Esse modelo ajuda a organizar a evolução do software e facilita o gerenciamento de dependências, evitando problemas de compatibilidade entre versões.

🔗 Link oficial: https://semver.org/lang/pt-BR/

---

## 📝 Conventional Commits

O Conventional Commits é uma convenção para padronizar mensagens de commit, tornando o histórico do projeto mais organizado e fácil de entender.

Ele define um formato padrão para as mensagens:

`tipo(escopo opcional): descrição`

Alguns tipos comuns são:
- `feat`: nova funcionalidade  
- `fix`: correção de erro  
- `docs`: alterações na documentação  

Essa padronização facilita a leitura do histórico, melhora a comunicação entre desenvolvedores e permite automatizar processos como geração de changelog e versionamento do projeto. :contentReference[oaicite:0]{index=0}

🔗 Link oficial: https://www.conventionalcommits.org/pt-br/v1.0.0/