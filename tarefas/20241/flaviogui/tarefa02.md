# Tarefa 02 - Teste de Unidade

## Informações Pessoais
- Nome: Flávio Glaydson Guimarães Lopes
- Usuário GitHub: [flaviogui](https://github.com/flaviogui)
- E-mail: <flavio.lopes.709@ufrn.edu.br>
- **Repositório:** [Link do Repositório](https://github.com/flaviogui/TechCell-Pro)

## Seção 9
### Resumo de Teste de Software com ênfase em teste de unidade 
O teste de software é um processo essencial que envolve a verificação e validação do funcionamento de um sistema para garantir que ele atenda aos requisitos especificados e funcione corretamente. Esse processo pode incluir diferentes níveis de teste, como testes de unidade, integração, sistema e aceitação. O objetivo é identificar e corrigir defeitos, melhorar a qualidade do software e assegurar que ele esteja pronto para ser utilizado pelos usuários finais. Testes eficazes ajudam a minimizar falhas, reduzir custos de manutenção e aumentar a confiança na estabilidade e desempenho do software.

O teste de unidade, por sua vez, é a prática de verificar a menor unidade de código, geralmente uma função ou método, de forma isolada para garantir que ela opere conforme o esperado. Realizado em um ambiente controlado, o teste de unidade utiliza ferramentas como mocks e stubs para simular dependências externas. Este tipo de teste é frequentemente automatizado, permitindo execuções rápidas e frequentes, e é integrado em processos de integração contínua. Os benefícios incluem a detecção precoce de erros, facilidade na refatoração do código e melhoria na qualidade geral do software.

### Linguagem de programação utilizada
Python se destaca como uma linguagem de programação altamente popular e extremamente versátil, utilizada em diversos cenários, desde o desenvolvimento de simples programas até projetos complexos. Sua sintaxe clara e intuitiva, aliada à ampla gama de bibliotecas disponíveis, a torna acessível tanto para iniciantes quanto para programadores experientes.
Caracteristicas principais:

- Linguagem de alto nível: Abstrai detalhes complexos da máquina, permitindo que o programador se concentre na lógica do problema.
- Interpretada: O código é executado linha por linha, sem necessidade de compilação prévia, facilitando o desenvolvimento e testes.
- Imperativa: Foco na execução de instruções sequenciais, alterando o estado do programa.
Orientada a objetos: Permite organizar o código em módulos reutilizáveis e interligados, promovendo maior clareza e manutenabilidade.
- Funcional: Suporta funções anônimas e expressões lambda, possibilitando um estilo de programação mais conciso e elegante.
- Tipagem dinâmica: O tipo das variáveis não precisa ser declarado explicitamente, aumentando a flexibilidade do código.
- Forte: Realiza verificações de tipo durante a execução, prevenindo erros causados por incompatibilidade de tipos.

### Framework de Testes de Unidade
O pytest é um framework de testes de unidade para Python que facilita a escrita de testes simples e escaláveis. Ele é conhecido por sua sintaxe intuitiva e por suportar uma ampla gama de funcionalidades. Algumas das principais características do pytest incluem:
- Sintaxe Simples: Permite escrever testes de forma clara e concisa.
- Fixtures: Facilita a configuração e limpeza de testes com o uso de fixtures.
- Plugins: Possui uma arquitetura extensível com uma vasta gama de plugins disponíveis.
- Assert Reescrito: Fornece mensagens de erro detalhadas e legíveis ao usar assertivas.
- Compatibilidade: Funciona bem com outras bibliotecas e frameworks de teste, como unittest e doctest.
Para mais informações sobre o framework, acesse o site oficial do pytest neste [Link](https://docs.pytest.org/en/stable/).

### IDE utilizada e ferramentas de debug
O Visual Studio Code (VSCode) se destaca como uma IDE (Integrated Development Environment) extremamente popular e versátil, utilizada por milhões de programadores ao redor do mundo. Sua interface amigável, ampla gama de extensões e ferramentas integradas a tornam uma escolha ideal para diversos tipos de projetos.
Ferramentas de Debug Integradas:

O VSCode oferece um conjunto abrangente de ferramentas de debug que facilitam a identificação e correção de erros no seu código. Entre os principais recursos, podemos destacar:

- Definição de pontos de interrupção: Marque linhas de código onde a execução deve pausar para permitir a inspeção de variáveis ​​e o estado do programa.
- Execução passo a passo: Avance linha por linha no código, observando as alterações nas variáveis ​​e na pilha de chamadas.
- Inspeção de pilha de chamadas: Visualize a sequência de chamadas de função que levaram à linha de código atual.
- Expressões de avaliação: Crie expressões personalizadas para avaliar valores e realizar cálculos durante a depuração.
- Modificação de variáveis: Altere o valor das variáveis ​​diretamente no depurador, observando o impacto nas próximas linhas de código.
- Registro de saída: Capture a saída do programa durante a depuração, incluindo mensagens de console, erros e avisos.
- Suporte a diversas linguagens: O VSCode oferece suporte para depuração de uma ampla variedade de linguagens de programação, incluindo Python, Java, C++, JavaScript e muitas outras.

### Tutorial de CRUD e Teste de Software
**Tutorial:** [CRUD em Python - Python e MySQL e teste de software (playlist)](https://www.youtube.com/watch?v=-vrXnewHrwA)
O tutorial ensina a criar um CRUD em Python com MySQL e inclui testes de software usando pytest. Ele cobre a instalação do MySQL, criação de banco de dados e tabelas, conexão com Python, execução de comandos SQL e implementação de testes para garantir a funcionalidade do CRUD.

### Mocks Objects em Teste de Software
Mocks Objects, também conhecidos como objetos simulados, são ferramentas valiosas para testes unitários, permitindo isolar e testar unidades de código de forma eficiente. Ao invés de depender de recursos externos complexos ou ambientes instáveis, os mocks simulam o comportamento de objetos reais, facilitando o processo de teste e garantindo a confiabilidade do código.

Cenários Ideais para Mocks Objects:
- Testar interações com APIs externas: Simule APIs para evitar chamadas reais e garantir que o código funcione conforme o esperado.
- Isolar unidades de código complexas: Crie mocks para dependências complexas, focando no teste da unidade em questão.
- Testar em situações desafiadoras: Simule cenários de erro ou estados específicos que são difíceis de reproduzir no ambiente real.

Benefícios do Uso de Mocks Objects:
- Testes mais confiáveis: Mocks garantem que os testes se concentrem na lógica da unidade em teste, isolando-a de fatores externos.
- Agilidade no desenvolvimento: Simular dependências elimina a necessidade de configurar e gerenciar componentes externos, economizando tempo e esforço.
- Código robusto e resiliente: Testes com mocks identificam e corrigem problemas de dependência e acoplamento, resultando em um código mais robusto e resiliente a falhas.

Exemplos de Mocks Objects em Linguagens de Programação:
- Python: Mocks, unittest.mock.

## Seção 10
### UserStory que implementei: Manter Cliente (Front-end) 
Descrição: 
O sistema deve manter um cadastro de cliente através do técnico que tem acesso ao sistema via login e senha. Um cliente tem os atributos nome, telefone, email e endereço. O cadastro do(s) técnico(s) será realizados pelos criadores do sistema, e o cadastro dos clientes será realizado pelo(s) técnico(s). o técnico poderá alterar o cliente caso tenha um dado incorreto, como também consultar um cliente caso o mesmo venha a contratar novamente os serviços do técnico, o técnico também poderá vizualizar informações do cliente para um eventual confirmação de dados e por fim, a o técnico poderá excluir o cliente caso seja preciso devido a força maior.

Requesitos envolvidos: 
- RF01: Cadastrar Cliente
- RF02:	Alterar Cliente
- RF03:	Consultar Cliente
- RF04:	Vizualizar detalhes do Cliente
- RF05:	Excluir Cliente

### Implementação de testes de unidade

**Link do arquivo de teste do repositório:** [LINK](https://github.com/flaviogui/TechCell-Pro/blob/main/projeto/clienteApp/tests.py)

Os testes implementados diferentes funcionalidades das views, incluindo criação, listagem, atualização e deleção de clientes, assim como, há testes para validação de rotas (URLs), lógica do modelo (Cliente) e formulário (ClienteForm). Também foi utilizado dados bem definidos (como o cliente de teste) para verificar o comportamento esperado do sistema em cada cenário. 
Foi implementado testes para formulários (como ClienteFormTest) que ajudam a garantir que os dados de entrada estejam sendo validados corretamente. Ao implementar testes unitários, ganhei estabilidade e segurança no código e na previsibilidade do seu comportamento. 

### Comparação entre Teste de Integração e Teste de Unidade
Os Testes de Integração complementam os Testes Unitários, verificando como diferentes módulos do seu software se comunicam e funcionam juntos. Enquanto os testes unitários focam em unidades de código isoladas, os testes de integração garantem que a integração entre essas unidades funcione conforme o esperado. No projeto fiz apenas teste de unidade. 

Benefícios do Uso de Testes de Integração:

- Maior confiabilidade do sistema: Detectar falhas de integração precocemente, evitando problemas maiores em produção.
- Redução de bugs: Testes de integração podem encontrar bugs que passariam despercebidos em testes unitários.
- Código mais robusto: O processo de escrever e executar testes de integração leva a um código mais robusto e resiliente a falhas.
- Melhoria na comunicação entre módulos: Testes de integração ajudam a identificar e corrigir problemas de comunicação entre diferentes partes do código.

Tabela a seguir com a comparação entre os dois teste: 
| Característica             | Teste Unitário                  | Teste de Integração                                            |
|----------------------------|-----------------------------------------------------|----------------------------------------------------------------|
| Foco                       | Unidade de código isolada                           | Múltiplas unidades de código integradas                   |
| Objetivo                   | Verificar o funcionamento correto da unidade de código | Verificar a integração e comunicação entre as unidades de código |
| Mock de dependências       | Pode utilizar mocks para isolar dependências        | Dependências geralmente não são mockadas                       |
| Granularidade              | Mais granular                                       | Menos granular                                                 |
| Execução                   | Mais rápido                                         | Mais lento                                                     |


