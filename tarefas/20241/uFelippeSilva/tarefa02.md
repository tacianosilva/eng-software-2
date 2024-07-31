### Tarefa 02 - Teste de Unidade

**Nome:** Felippe da Silva Guedes
**Usuário GitHub:** uFelippeSilva
**E-mail:** felippe23silva@gmail.com

**Link do projeto:** https://github.com/Gedsonfa/ScheduleSphere

### Testes de Unidade

**Definição:**  
Testes de unidade são testes automatizados escritos e executados por desenvolvedores para garantir que uma pequena parte específica do software, geralmente uma função ou método, funcione corretamente. Esses testes isolam a unidade do código e validam sua correção.

**Objetivo:**  
O principal objetivo dos testes de unidade é verificar a exatidão do comportamento de unidades individuais de código. Isso ajuda a identificar e corrigir bugs desde cedo no ciclo de desenvolvimento, antes que eles se propaguem para outras partes do software.

**Benefícios:**
- **Detecção Precoce de Erros:** Permitem identificar problemas no início do processo de desenvolvimento.
- **Facilitam Refatorações:** Proporcionam segurança para modificar o código, sabendo que o comportamento desejado está sendo preservado.
- **Documentação Viva:** Servem como documentação do comportamento esperado do código.
- **Manutenção Simples:** Reduzem o custo e o esforço de manutenção ao garantir que pequenas partes do sistema estejam funcionando corretamente.

**Ferramentas Comuns:**
- **JUnit:** Usada para testes de unidade em Java.
- **NUnit:** Usada para testes de unidade em .NET.
- **pytest:** Popular em Python.
- **Jest:** Comum para testes em JavaScript/TypeScript.

**Boas Práticas:**
- **Isolamento:** Cada teste deve ser independente e não depender de outros testes.
- **Reprodutibilidade:** Testes devem produzir os mesmos resultados todas as vezes que são executados.
- **Clareza:** Testes devem ser claros e fáceis de entender.
- **Automatização:** Devem ser automatizados para execução contínua.

Testes de unidade são uma parte essencial da garantia de qualidade no desenvolvimento de software, ajudando a criar aplicações robustas e confiáveis.

### Linguagem de Programação e Stack para Desenvolvimento do Projeto

**Linguagem de Programação:**
Para o desenvolvimento do projeto da disciplina, utilizaremos a linguagem de programação **[Nome da Linguagem]**. Esta linguagem foi escolhida devido às suas características e benefícios específicos, que incluem:

- **Sintaxe Simples e Clara:** Facilita a escrita e manutenção do código.
- **Amplo Suporte a Bibliotecas e Frameworks:** Disponibilidade de diversas ferramentas que aceleram o desenvolvimento.
- **Comunidade Ativa:** Grande quantidade de recursos e suporte disponíveis.
- **Portabilidade:** Possibilidade de executar o código em diferentes plataformas sem grandes adaptações.

**Stack de Desenvolvimento:**
A stack de desenvolvimento consiste no conjunto de tecnologias e ferramentas que serão utilizadas para a construção do projeto. Abaixo estão os principais componentes da stack:

- **Framework de Desenvolvimento:** [Nome do Framework]
  - **Descrição:** Fornece uma estrutura organizada e facilita a implementação de funcionalidades comuns.
  - **Exemplos:** Django (para Python), Spring (para Java), React (para JavaScript).

- **Banco de Dados:** [Nome do Banco de Dados]
  - **Descrição:** Sistema de gerenciamento de banco de dados para armazenar e gerenciar dados do projeto.
  - **Exemplos:** MySQL, PostgreSQL, MongoDB.

- **Controle de Versão:** Git
  - **Descrição:** Sistema de controle de versão distribuído para rastrear alterações no código e facilitar a colaboração.
  - **Plataformas:** GitHub, GitLab, Bitbucket.

- **Ambiente de Desenvolvimento Integrado (IDE):** [Nome do IDE]
  - **Descrição:** Ferramenta que fornece um ambiente completo para codificação, depuração e testes.
  - **Exemplos:** Visual Studio Code, PyCharm, IntelliJ IDEA.

- **Ferramentas de Testes:** [Nome das Ferramentas]
  - **Descrição:** Utilizadas para escrever e executar testes automatizados.
  - **Exemplos:** JUnit (para Java), pytest (para Python), Jest (para JavaScript).

**Benefícios da Stack:**
- **Integração Facilitada:** Componentes da stack são escolhidos para funcionarem bem juntos.
- **Produtividade Aumentada:** Ferramentas e frameworks que aceleram o desenvolvimento.
- **Robustez e Escalabilidade:** Possibilidade de construir aplicações robustas e escaláveis.

Esta stack proporciona uma base sólida para o desenvolvimento do projeto, garantindo que tenhamos as ferramentas e tecnologias adequadas para atingir nossos objetivos.

# Vitest

O Vitest é uma ferramenta de teste de unidade voltada para aplicações JavaScript, TypeScript e frameworks modernos, como Vue e React. Ela é inspirada pelo Jest, mas otimizada para ser mais rápida e integrar-se melhor com ferramentas de construção modernas, como Vite.

## Características Principais

1. **Rápido e Leve**: Vitest é projetado para ser extremamente rápido, aproveitando o sistema de módulos do Vite para compilar e executar testes de forma eficiente.
2. **Suporte a Múltiplos Ambientes**: Ele pode rodar testes em diversos ambientes, incluindo Node.js e navegadores, oferecendo flexibilidade para diferentes tipos de projetos.
3. **Integração com Vite**: Sendo criado com a mesma filosofia do Vite, o Vitest se integra perfeitamente com ele, proporcionando uma experiência de desenvolvimento coesa e otimizada.
4. **APIs Compatíveis com Jest**: Muitas das APIs do Vitest são compatíveis com Jest, facilitando a migração de projetos existentes que já utilizam Jest.
5. **Testes em Modo Observação**: Vitest oferece suporte para rodar testes em modo observação (watch mode), permitindo que os testes sejam reexecutados automaticamente quando arquivos são alterados.
6. **Snapshots**: Ele suporta a criação e comparação de snapshots, uma funcionalidade popular para garantir que a saída de componentes e funções permaneça consistente ao longo do tempo.

## Vantagens do Vitest

- **Desempenho**: A performance é uma das maiores vantagens, especialmente em projetos grandes, onde o tempo de execução dos testes pode ser significativamente reduzido.
- **Ecossistema Moderno**: Projetado para funcionar bem com o ecossistema moderno de desenvolvimento front-end, aproveitando as vantagens do Vite.
- **Facilidade de Uso**: A compatibilidade com Jest torna a adoção do Vitest mais simples para desenvolvedores que já estão familiarizados com essa ferramenta.

# Visual Studio Code (VSCode)

Visual Studio Code, comumente chamado de VSCode, é um editor de código-fonte leve e poderoso desenvolvido pela Microsoft. Lançado em 2015, ele rapidamente ganhou popularidade devido à sua combinação de simplicidade, extensibilidade e recursos avançados.

## Características Principais

1. **Multi-linguagem**: VSCode suporta uma vasta gama de linguagens de programação, incluindo JavaScript, TypeScript, Python, Java, C++, e muitas outras, através de extensões.

2. **Extensível**: Possui um marketplace de extensões robusto onde os desenvolvedores podem encontrar ferramentas para ampliar a funcionalidade do editor, como temas, debuggers, linters, snippets, e integrações com diversas ferramentas de desenvolvimento.

3. **IntelliSense**: Oferece autocompletar inteligente que fornece sugestões baseadas na sintaxe e semântica do código, aumentando a produtividade dos desenvolvedores.

4. **Terminal Integrado**: Possui um terminal embutido que permite aos desenvolvedores executar comandos sem sair do editor, facilitando o fluxo de trabalho.

5. **Controle de Versão Integrado**: VSCode tem suporte nativo para Git e outras ferramentas de controle de versão, permitindo que os desenvolvedores gerenciem seu código-fonte e colaborem com outros diretamente do editor.

6. **Depuração**: O VSCode possui um poderoso sistema de depuração que pode ser utilizado para várias linguagens de programação e frameworks, com suporte para pontos de interrupção, inspeção de variáveis, e muito mais.

## Ferramenta de Debug

A ferramenta de debug padrão no VSCode é baseada no **Debug Adapter Protocol** (DAP), um protocolo aberto que permite que depuradores de diferentes linguagens sejam usados de forma consistente. O VSCode fornece depuradores integrados para várias linguagens e também permite que os desenvolvedores instalem extensões para depuradores específicos.

### Principais Características do Debug no VSCode

- **Breakpoints**: Permite definir pontos de interrupção no código onde a execução será pausada.
- **Watch**: Monitora expressões específicas e variáveis durante a execução do programa.
- **Call Stack**: Visualiza a pilha de chamadas para entender a sequência de execução.
- **Variables**: Inspeciona e altera o valor de variáveis em tempo de execução.
- **Debug Console**: Executa comandos durante a depuração.

### Suporte para Diversas Linguagens

- **JavaScript/TypeScript**: Debug embutido e suporte através do Node.js e extensões.
- **Python**: Suporte via a extensão oficial do Python para VSCode.
- **Java**: Suporte através da extensão do Java.
- **C++**: Suporte via a extensão do C/C++ fornecida pela Microsoft.

## Conclusão

Visual Studio Code é uma ferramenta versátil que combina um editor de código leve com funcionalidades avançadas, como IntelliSense, controle de versão integrado e um sistema de depuração poderoso. Sua extensibilidade através do marketplace de extensões e a integração com diversas linguagens de programação o tornam uma escolha popular entre desenvolvedores de todo o mundo.


### Lindo do Tutorial

https://www.youtube.com/watch?v=_lDXeKuw-ys

## Sobre

O tutorial em si fala sobre o uso das tecnologias e suas formas de serem utilizidas para a construção do CRUD completo.