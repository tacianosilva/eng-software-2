# Tarefa 02 - Teste de Unidade

Nome: Luiz Henrique Felix Guedes  

Usuário GitHub: LuizFelixDev

E-mail: [luiz.henrique.felix.709@ufrn.edu.br]

Repositório do Projeto: https://github.com/LuizFelixDev/iservice-app

# 9.A: Testes de Unidade em Software

Os testes de unidade são uma técnica fundamental dentro dos testes de software, focada na verificação de pequenas partes isoladas do código, como funções ou métodos, garantindo que cada componente funcione corretamente de forma independente. Essa abordagem permite identificar erros rapidamente, ainda nas fases iniciais do desenvolvimento, reduzindo custos de correção e facilitando a manutenção do sistema ao longo do tempo. Além disso, os testes de unidade aumentam a confiança do desenvolvedor ao realizar alterações no código, pois asseguram que funcionalidades já implementadas continuam operando como esperado, sendo amplamente aplicados com o auxílio de ferramentas como Jest, JUnit e PyTest.

# 9.B: Linguagens e Stack do Projeto

O desenvolvimento do projeto da disciplina será baseado em uma stack moderna e bastante utilizada no mercado, composta por TypeScript, Next.js, PostgreSQL e React Native. O TypeScript será utilizado como linguagem principal, trazendo tipagem estática e maior segurança no desenvolvimento; o Next.js será responsável pela construção da aplicação web, oferecendo recursos como renderização no servidor e otimização de desempenho; o PostgreSQL atuará como banco de dados relacional, garantindo armazenamento confiável e estruturado das informações; e o React Native permitirá o desenvolvimento de aplicações mobile multiplataforma, compartilhando parte da lógica com o frontend web. Essa combinação forma uma stack completa, eficiente e escalável, cobrindo tanto o desenvolvimento web quanto mobile com boas práticas e ferramentas consolidadas.

# 9.C: Framework de Testes de Unidade: Jest

Um dos frameworks mais utilizados para testes de unidade na stack escolhida (TypeScript + Next.js + React Native) é o Jest. Ele é um framework open-source desenvolvido pela Meta (Facebook) e amplamente adotado para testar aplicações em JavaScript e TypeScript, especialmente em projetos que utilizam React e Node.js . O Jest se destaca por ser simples de usar e praticamente “zero configuração”, funcionando bem desde o início sem necessidade de setups complexos . Além disso, ele já vem com várias funcionalidades integradas, como execução automática de testes, geração de relatórios de cobertura de código e ferramentas de mock para simular dependências, o que facilita bastante a criação de testes de unidade isolados . Outro ponto forte é sua capacidade de rodar testes em paralelo, tornando o processo mais rápido e eficiente . Por essas características, o Jest é considerado uma escolha padrão para projetos modernos com TypeScript, Next.js e React Native, ajudando a garantir qualidade e confiabilidade no desenvolvimento do software.

Link Jest: https://jestjs.io/pt-BR/docs/getting-started

# 9.D: IDE Utilizada e Ferramentas de Debug

A IDE utilizada no desenvolvimento do projeto é o Visual Studio Code, uma das mais populares atualmente por ser leve, extensível e suportar diversas linguagens, incluindo TypeScript. Um dos seus grandes diferenciais é o sistema de debug integrado, que permite executar e analisar o código diretamente no editor, sem necessidade de ferramentas externas. Com ele, é possível utilizar breakpoints para pausar a execução em pontos específicos, inspecionar variáveis em tempo real, acompanhar a pilha de chamadas (call stack) e executar o código passo a passo (step over, step into e step out), facilitando a identificação de erros. Além disso, o VS Code possui integração com ambientes Node.js e navegadores, permitindo debugar tanto o backend quanto o frontend (como aplicações em Next.js e React Native). Essas ferramentas tornam o processo de desenvolvimento mais eficiente e ajudam a encontrar e corrigir problemas com mais precisão.

# 9.E: Tutoriais 

O tutorial de CRUD ensina a construir uma aplicação full stack com Next.js e TypeScript integrada a um banco de dados, enquanto o guia de testes mostra como adicionar testes de unidade com Jest para garantir que as funcionalidades criadas funcionem corretamente. Juntos, eles cobrem tanto o desenvolvimento quanto a qualidade do software.

[1]: https://fazt.dev/contenido/nextjs-prisma-typescript-crud-tutorial?utm_source=chatgpt.com "CRUD con Next.js, Prisma y PostgreSQL: Tutorial Práctico en TypeScript | Fazt.dev"
[2]: https://nextjs.org/docs/app/guides/testing/jest?utm_source=chatgpt.com "Testing: Jest | Next.js"

# 9.F: Mock Objects em Testes de Unidade

Os Mock Objects são objetos simulados usados em testes de unidade para imitar o comportamento de dependências reais, como APIs, banco de dados ou serviços externos. A ideia é isolar completamente a unidade que está sendo testada, garantindo que o resultado do teste dependa apenas da lógica interna daquela função ou método, e não de fatores externos. Com mocks, o desenvolvedor pode controlar as respostas dessas dependências (por exemplo, simular um retorno de sucesso ou erro), tornando os testes mais previsíveis, rápidos e confiáveis. Em ferramentas como Jest, é comum utilizar funções de mock para substituir módulos reais durante a execução dos testes. Em resumo, Mock Objects permitem testar o código de forma isolada e eficiente, evitando dependências externas e facilitando a identificação de falhas.

# 10.A: User Story: Gerenciamento de Acesso e Perfil (Cliente)

**Como** um cliente interessado em contratar serviços,
**Eu quero** realizar o login e gerenciar meus dados de acesso no aplicativo,
**Para que** eu possa manter minha conta segura e minhas informações de contato atualizadas para os prestadores.

### Critérios de Aceite (Operações do Front-end):

*   **Inserir (Create/Sign-In):**
    *   O front-end deve fornecer um formulário de cadastro (`SingIn.tsx`) onde insiro nome, e-mail e senha.
    *   Deve haver validação visual para garantir que todos os campos obrigatórios sejam preenchidos antes do envio.
*   **Consultar (Read/Login):**
    *   Através da tela de login (`Login.tsx`), o sistema deve validar minhas credenciais contra a base de dados.
    *   O front-end deve oferecer opções de login social via botões para **Google** e **Facebook**.
*   **Atualizar (Update):**
    *   Após o login, devo ter acesso a uma área de configurações para editar meu nome de exibição ou alterar minha senha de acesso.
    *   O sistema deve refletir as mudanças imediatamente na interface após a confirmação.
*   **Deletar (Delete):**
    *   Deve existir uma opção clara para "Excluir Conta", que solicita uma confirmação antes de remover permanentemente meu acesso ao sistema.

### Componentes de Interface Implementados:
*   **LoginContainer:** Organiza os elementos de entrada e botões de ação na tela de acesso.
*   **ButtonsContainer:** Gerencia os gatilhos para autenticação manual e integrações sociais.
*   **Estilização:** Utilização de `loginStyles.tsx` e `singStyles.tsx` para garantir uma experiência de usuário consistente e responsiva.

# 10.B: Link com os testes unitários 

Link: https://github.com/LuizFelixDev/iservice-app/commit/4c859ed5a5deeafca15d17aa029c0a580e144062

# 10.C: Testes de Integração

Os testes de integração verificam se diferentes partes do sistema funcionam corretamente juntas, ou seja, testam a comunicação entre módulos, serviços ou camadas (por exemplo: API + banco de dados, ou backend + frontend). Diferente dos testes de unidade, aqui não se testa algo isolado, mas sim o fluxo real da aplicação, incluindo dependências reais como o banco PostgreSQL ou requisições HTTP. O objetivo é encontrar erros que só aparecem quando os componentes interagem, como falhas de integração, problemas de dados ou incompatibilidades entre partes do sistema.

Teste Unitário ou de Integração?

No seu caso (pelos exemplos com Jest e foco em funções isoladas), o que foi feito foi teste unitário, pois você testou partes específicas do código sem depender de elementos externos, muitas vezes usando mocks. Já o teste de integração envolveria, por exemplo, testar uma rota completa do Next.js salvando dados de verdade no banco e retornando a resposta.