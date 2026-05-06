# Tarefa 02 - Teste de Unidade

Nome: Luiz Henrique Felix Guedes  

Usuário GitHub: LuizFelixDev

E-mail: [luiz.henrique.felix.709@ufrn.edu.br]

Repositório do Projeto: https://github.com/LuizFelixDev/iservice-app

# 10.A: Testes de Unidade em Software

Os testes de unidade são uma técnica fundamental dentro dos testes de software, focada na verificação de pequenas partes isoladas do código, como funções ou métodos, garantindo que cada componente funcione corretamente de forma independente. Essa abordagem permite identificar erros rapidamente, ainda nas fases iniciais do desenvolvimento, reduzindo custos de correção e facilitando a manutenção do sistema ao longo do tempo. Além disso, os testes de unidade aumentam a confiança do desenvolvedor ao realizar alterações no código, pois asseguram que funcionalidades já implementadas continuam operando como esperado, sendo amplamente aplicados com o auxílio de ferramentas como Jest, JUnit e PyTest.

# 10.B: Linguagens e Stack do Projeto

O desenvolvimento do projeto da disciplina será baseado em uma stack moderna e bastante utilizada no mercado, composta por TypeScript, Next.js, PostgreSQL e React Native. O TypeScript será utilizado como linguagem principal, trazendo tipagem estática e maior segurança no desenvolvimento; o Next.js será responsável pela construção da aplicação web, oferecendo recursos como renderização no servidor e otimização de desempenho; o PostgreSQL atuará como banco de dados relacional, garantindo armazenamento confiável e estruturado das informações; e o React Native permitirá o desenvolvimento de aplicações mobile multiplataforma, compartilhando parte da lógica com o frontend web. Essa combinação forma uma stack completa, eficiente e escalável, cobrindo tanto o desenvolvimento web quanto mobile com boas práticas e ferramentas consolidadas.

# 10.C: Framework de Testes de Unidade: Jest

Um dos frameworks mais utilizados para testes de unidade na stack escolhida (TypeScript + Next.js + React Native) é o Jest. Ele é um framework open-source desenvolvido pela Meta (Facebook) e amplamente adotado para testar aplicações em JavaScript e TypeScript, especialmente em projetos que utilizam React e Node.js . O Jest se destaca por ser simples de usar e praticamente “zero configuração”, funcionando bem desde o início sem necessidade de setups complexos . Além disso, ele já vem com várias funcionalidades integradas, como execução automática de testes, geração de relatórios de cobertura de código e ferramentas de mock para simular dependências, o que facilita bastante a criação de testes de unidade isolados . Outro ponto forte é sua capacidade de rodar testes em paralelo, tornando o processo mais rápido e eficiente . Por essas características, o Jest é considerado uma escolha padrão para projetos modernos com TypeScript, Next.js e React Native, ajudando a garantir qualidade e confiabilidade no desenvolvimento do software.

Link Jest: https://jestjs.io/pt-BR/docs/getting-started

# 10.D: IDE Utilizada e Ferramentas de Debug

A IDE utilizada no desenvolvimento do projeto é o Visual Studio Code, uma das mais populares atualmente por ser leve, extensível e suportar diversas linguagens, incluindo TypeScript. Um dos seus grandes diferenciais é o sistema de debug integrado, que permite executar e analisar o código diretamente no editor, sem necessidade de ferramentas externas. Com ele, é possível utilizar breakpoints para pausar a execução em pontos específicos, inspecionar variáveis em tempo real, acompanhar a pilha de chamadas (call stack) e executar o código passo a passo (step over, step into e step out), facilitando a identificação de erros. Além disso, o VS Code possui integração com ambientes Node.js e navegadores, permitindo debugar tanto o backend quanto o frontend (como aplicações em Next.js e React Native). Essas ferramentas tornam o processo de desenvolvimento mais eficiente e ajudam a encontrar e corrigir problemas com mais precisão.