# Tarefa 02 - Teste de Unidade

|Aluno|Usuário do Github|E-mail|Repositório da Questão|
|-|-|-|-|
|Mosiah Adam|akemi-adam|tech.adam.servicos@gmail.com||

### 1. Testes de Software (foco em Testes de Unidade)

Testes de software são práticas utilizadas para garantir que um sistema funcione corretamente e atenda aos requisitos especificados. Dentro desse contexto, os **testes de unidade** têm como objetivo validar pequenas partes isoladas do sistema, como métodos ou classes, de forma independente.

Esses testes são importantes porque permitem identificar erros rapidamente, facilitam a manutenção do código e aumentam a confiança em alterações futuras. Além disso, ajudam a promover boas práticas como baixo acoplamento e alta coesão.

---

### 2. Linguagem e Stack do Projeto

A stack utilizada no backend do projeto é:

- **Linguagem:** Java  
- **Framework:** Spring Boot  
- **Testes:** JUnit  

O Java é uma linguagem amplamente utilizada no desenvolvimento backend, conhecida por sua robustez e portabilidade. O Spring Boot facilita a criação de aplicações web, oferecendo configuração simplificada e integração com diversos módulos. Já o JUnit é utilizado para a criação e execução de testes automatizados.

---

### 3. Framework de Testes de Unidade

O framework escolhido é o **JUnit**.

O JUnit é um dos frameworks mais populares para testes em Java. Ele permite a criação de testes automatizados de forma simples, utilizando anotações como `@Test`, `@BeforeEach` e `@AfterEach`. Também oferece suporte a assertions (verificações), que ajudam a validar se os resultados estão corretos.

**Links:**
- https://junit.org/junit5/
- https://github.com/junit-team/junit5

---

### 4. IDE Utilizada

A IDE utilizada é o **IntelliJ IDEA**.

O IntelliJ é uma IDE bastante poderosa para desenvolvimento em Java, que oferece diversas funcionalidades para aumentar a produtividade. Entre elas, destacam-se:

- Autocomplete inteligente
- Refatoração automática
- Integração com Spring Boot
- Execução de testes diretamente pela interface

**Ferramentas de debug:**

O IntelliJ possui um debugger integrado bastante completo, que permite:

- Definir breakpoints
- Inspecionar variáveis em tempo de execução
- Executar o código passo a passo (step over, step into, step out)
- Avaliar expressões em tempo real

Essas ferramentas facilitam muito a identificação e correção de bugs.

---

### 5. Tutorial de CRUD com Testes

**Link do tutorial:**
https://www.geeksforgeeks.org/software-testing/crud-junit-tests-for-spring-data-jpa/

O tutorial apresenta a construção de um CRUD utilizando Spring Data JPA e mostra como criar testes de unidade com JUnit para validar as operações básicas (Create, Read, Update, Delete). Ele demonstra como estruturar testes para repositórios e garantir que as operações no banco de dados estejam funcionando corretamente.

Ele utiliza uma entidade de empregado (employee) como exemplo, construindo um `EmployeeService` e uma classe de testes para esse service, além de testar o repository também.

---

