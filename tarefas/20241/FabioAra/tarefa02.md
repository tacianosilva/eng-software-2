# Tarefa 02 - Teste de Unidade

## Informações Pessoais
- Nome: Fábio Fabrício Souza de Araújo
- Usuário GitHub: [FabioAra](https://github.com/FabioAra)
- E-mail: <fabio.araujo.016@ufrn.edu.br>
- **Repositório:** [Link do Repositório](https://github.com/flaviogui/TechCell-Pro)

## Seção 9
### Resumo de Teste de Software com ênfase em teste de unidade
Os Testes de Unidade são uma prática central no desenvolvimento de software, dedicados a verificar a funcionalidade de componentes individuais e isolados do código. A ideia é simples, mas poderosa: garantir que cada pequena parte do sistema — como funções ou métodos — funcione corretamente em situações específicas.

Ao realizar testes de unidade, o desenvolvedor cria casos de teste que examinam essas partes isoladas do código. Cada caso de teste é projetado para avaliar um aspecto específico da função ou método em questão. Por exemplo, se você tem uma função que calcula o imposto sobre vendas, um teste de unidade pode verificar se essa função retorna o valor correto para uma determinada quantia e taxa de imposto.

Esses testes são fundamentais porque permitem detectar problemas em um estágio muito precoce do desenvolvimento. Ao identificar e corrigir falhas quando o código é modificado, os testes de unidade ajudam a evitar que esses problemas se propaguem para outras partes do sistema. Isso não só economiza tempo e esforço, mas também melhora a qualidade geral do software.

Para tornar o processo mais eficiente, os testes de unidade são frequentemente automatizados. Ferramentas e frameworks específicos, como JUnit para Java, NUnit para .NET, ou pytest para Python, facilitam a criação, execução e análise dos testes. Essas ferramentas permitem que os desenvolvedores execute uma bateria de testes de forma rápida e repetitiva, assegurando que as mudanças no código não introduzam novos erros.

Adotar boas práticas é essencial para garantir que os testes de unidade sejam eficazes. Isso inclui:

- Isolamento: Garantir que cada teste avalie apenas o componente específico sem dependências externas, o que ajuda a identificar com precisão a origem de qualquer falha.
- Automatização: Utilizar ferramentas que possibilitem a execução automática dos testes, permitindo que eles sejam executados frequentemente e com eficiência.
- Cobertura: Testar uma ampla gama de condições e cenários para assegurar que a maioria dos caminhos e situações no código seja verificada.
- Manutenção: Atualizar os testes sempre que o código for modificado para garantir que eles continuem relevantes e precisos.
Em resumo, os testes de unidade são uma prática fundamental para garantir a robustez e a confiabilidade do software, permitindo que os desenvolvedores verifiquem e mantenham a qualidade do código à medida que ele evolui.


###  linguagem de programação, e stack

A escolha da linguagem de programação deve levar em conta vários fatores, como o tipo de projeto, requisitos específicos, familiaridade da equipe com a linguagem e suporte para bibliotecas e frameworks. Aqui estão algumas linguagens populares e suas características:

Python

- Características: Fácil de aprender e usar, excelente para prototipagem rápida, rica em bibliotecas e frameworks.
- Usos Comuns: Desenvolvimento web, ciência de dados, automação, scripts.
- Frameworks: Django e Flask (para web), Pandas e NumPy (para ciência de dados).

Uma stack tecnológica é uma combinação de ferramentas e tecnologias usadas para desenvolver um projeto.

###framework de Testes de Unidade

O pytest é um framework de testes para Python que facilita a escrita de testes simples e escaláveis. Ele se destaca por sua sintaxe intuitiva e por fornecer uma série de funcionalidades avançadas para tornar os testes mais poderosos e expressivos. O pytest permite a criação de testes com menos código e proporciona recursos como fixtures, parametrização e uma rica configuração de relatórios de erros, o que torna o processo de teste mais eficiente e abrangente.

Características Principais:

- Simplicidade: Os testes podem ser escritos com uma sintaxe simples e clara. Não há necessidade de criar classes para os testes, o que reduz a verbosidade.
- Fixtures: Permitem configurar e fornecer dados e objetos para os testes, promovendo a reutilização e a organização do código de teste.
- Parametrização: Permite executar o mesmo teste com diferentes conjuntos de dados, ajudando a cobrir uma gama mais ampla de casos de teste com menos código.
- Plugins: O pytest possui uma arquitetura de plugins extensível, oferecendo suporte para uma ampla gama de funcionalidades adicionais, como cobertura de código, testes paralelos e relatórios avançados.
- Compatibilidade: É compatível com os testes escritos usando o framework unittest e também com outros frameworks de testes mais antigos.

- Links para Recursos:

Site Oficial: pytest.org
Documentação: pytest Documentation
Repositório GitHub: pytest GitHub Repository
O pytest é uma escolha recomendada para quem busca um framework robusto e flexível para testes de unidade em Python. Com sua rica gama de funcionalidades e suporte ativo da comunidade, ele facilita a manutenção de testes e a garantia da qualidade do código.


### Ide ultilizada

O Visual Studio Code (VSCode) é uma das IDEs (Ambientes de Desenvolvimento Integrado) mais populares e amplamente utilizadas para desenvolvimento de software. Desenvolvida pela Microsoft, ela é conhecida por sua leveza, extensibilidade e suporte para uma ampla gama de linguagens de programação e ferramentas. Além disso, oferece uma série de funcionalidades de depuração integradas que facilitam a identificação e a correção de problemas no código.

Recursos de Depuração Integrados no VSCode
Depuração de Código

Pontos de Interrupção (Breakpoints): Permite que você defina pontos específicos no código onde a execução será pausada. Isso é útil para inspecionar o estado do programa em momentos críticos.
Execução Passo a Passo: Oferece a capacidade de executar o código linha por linha (Step Over), entrar em funções (Step Into) e sair delas (Step Out), o que facilita a análise detalhada do fluxo de execução.
Visualização de Variáveis: Permite observar o valor das variáveis enquanto o código está em execução. As variáveis podem ser inspecionadas na janela de variáveis, e você também pode avaliar expressões personalizadas.
Console de Depuração

Console Integrado: Mostra a saída do programa e mensagens de log durante a depuração. Além disso, você pode interagir com o console para executar comandos e avaliar expressões enquanto o código está pausado.
Watch Expressions

Avaliação de Expressões: Permite que você defina expressões a serem avaliadas durante a execução do código. Isso é útil para monitorar o valor de variáveis ou expressões específicas em tempo real.
Call Stack

Pilhas de Chamadas: Mostra a pilha de chamadas, permitindo que você visualize a sequência de funções chamadas que levaram ao ponto atual de execução. Isso ajuda a entender o fluxo de execução e identificar onde o problema pode ter começado.
Breakpoints Condicionais e de Registro

Breakpoints Condicionais: Permite definir condições para um breakpoint ser ativado, ajudando a interromper a execução apenas quando certas condições são atendidas.
Breakpoints de Registro: Permite registrar informações no console sem pausar a execução do código, útil para obter informações sobre o estado do programa sem interromper o fluxo.
Depuração Remota

Suporte a Depuração Remota: Permite conectar-se e depurar aplicativos que estão sendo executados em máquinas remotas ou contêineres, o que é útil para ambientes de desenvolvimento distribuídos ou em nuvem.
Outras Funcionalidades
Extensões de Depuração: O VSCode possui um ecossistema de extensões que adiciona suporte a depuração para várias linguagens e frameworks, ampliando suas capacidades além do suporte nativo.
Integração com Git: Oferece suporte integrado para controle de versão, facilitando o gerenciamento de código e a colaboração em equipe.
Terminal Integrado: Permite que você execute comandos e scripts diretamente dentro do VSCode, sem precisar alternar para uma linha de comando separada.

### Tecnologia Escolhida para CRUD

O site explica um pouco de como fazer Crud usando o Django, e depois faz um tutorial sobre como fazer.
link: https://awari.com.br/aprenda-a-criar-um-crud-com-python-e-django-guia-completo-para-iniciantes/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Aprenda%20a%20Criar%20um%20Crud%20com%20Python%20e%20Django:%20Guia%20Completo%20para%20Iniciantes

### Mocks Objects

Em testes de unidade, o conceito de Mocks Objects desempenha um papel crucial na criação de ambientes controlados e na simulação de comportamentos de componentes que interagem com o código sob teste. Mocks são objetos simulados que imitam o comportamento de objetos reais de maneira controlada, permitindo aos desenvolvedores testar a unidade de código de forma isolada e focada.

Mocks Objects são essencialmente substitutos que imitam o comportamento de componentes externos, como serviços, bancos de dados ou APIs, que o código sob teste normalmente interage. A principal vantagem de usar mocks é a capacidade de isolar a unidade de código em teste, garantindo que os testes avaliem apenas o comportamento dessa unidade específica e não sejam afetados pelas complexidades e estados variáveis de seus componentes dependentes.

Por exemplo, se você está testando uma função que faz uma chamada a um serviço externo para obter dados, usar um mock permite que você simule as respostas desse serviço sem realmente fazer a chamada externa. Isso não apenas acelera o processo de teste, evitando a latência e os problemas associados à comunicação com serviços externos, mas também permite criar cenários específicos para testar como a unidade de código lida com diferentes respostas ou falhas.

A criação e o gerenciamento de mocks são facilitados por ferramentas e frameworks específicos, como Mockito para Java, unittest.mock para Python, e Sinon.js para JavaScript. Estas ferramentas fornecem APIs para definir o comportamento dos mocks e verificar se o código sob teste interage com eles de maneira adequada. Por exemplo, você pode configurar um mock para retornar valores específicos quando métodos são chamados, ou verificar se certos métodos foram chamados com argumentos esperados.

No entanto, é importante usar mocks com discernimento. Um excesso de mocks pode levar a testes que não refletem com precisão o comportamento real do sistema, especialmente se os mocks forem configurados para retornar dados que não representam cenários reais. Além disso, enquanto mocks são úteis para isolar a unidade de código, eles devem ser usados em conjunto com outros tipos de testes, como testes de integração e testes de sistema, para garantir que a interação entre componentes funciona corretamente no contexto completo do sistema.

Em resumo, mocks objects são ferramentas valiosas em testes de unidade, permitindo a simulação de componentes externos e o isolamento do código sob teste. Isso facilita a criação de testes mais focados e controlados, ajudando a garantir a integridade e a qualidade do software. No entanto, deve-se balancear seu uso com outros métodos de teste para garantir uma cobertura completa e precisa do comportamento do sistema.



