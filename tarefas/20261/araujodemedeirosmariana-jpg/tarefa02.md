### 9a) Testes de Unidade

Testes de Unidade (ou *Unit Testing*) são a camada mais fundamental e "granular" dos testes de software. Eles consistem em verificar o comportamento de uma unidade isolada do código — a menor parte testável, como uma função, um método ou uma classe. O objetivo é garantir que cada uma dessas partes funcione exatamente como o esperado, independentemente do resto do sistema. Um bom teste de unidade se destaca por três características principais, que trazem benefícios diretos para o desenvolvimento :

1.  **Isolamento**: O teste fala apenas com a unidade em questão. Dependências externas (como bancos de dados, APIs ou outras classes) são substituídas por objetos simulados (*mocks* ou *stubs*). Isso garante que, se o teste falhar, a causa está naquela unidade específica .
2.  **Determinismo**: Dado o mesmo cenário de entrada, o teste sempre produz o mesmo resultado (passa ou falha). Testes "instáveis" (*flaky*) que passam às vezes e falham em outras são um grande problema, pois minam a confiança da equipe .
3.  **Velocidade**: Devem ser extremamente rápidos para rodar (milissegundos). Uma suíte de testes unitários de um projeto pequeno a médio deve ser executada em segundos, fornecendo um retorno imediato para o desenvolvedor .

Essas características colocam o teste de unidade no início do ciclo de vida do desenvolvimento, em uma prática conhecida como **"shift-left"** , onde os testes são realizados o mais cedo possível, prevenindo bugs antes que se tornem caros e complexos de resolver .

## Como Funciona na Prática?

O processo geralmente envolve as seguintes etapas :

1.  **Preparação (*Setup*)**: Configura-se o ambiente e os dados necessários para o cenário de teste.
2.  **Execução (*Exercise*)**: Executa-se a unidade de código (a função/método) com os parâmetros definidos.
3.  **Verificação (*Verify*)**: Compara-se o resultado obtido com o resultado esperado, usando funções de **asserção** (*assertions*).
4.  **Limpeza (*Teardown*)**: (Opcional) Restaura-se o sistema ao estado original, desfazendo qualquer alteração.

## Duas Abordagens Principais: Caixa-branca e Caixa-preta

- **Caixa-branca (*White-box*)**: O teste é desenhado com base no conhecimento do código interno da unidade. O objetivo é percorrer os diferentes caminhos lógicos (como loops e condicionais `if`/`else`), garantindo que toda a estrutura interna seja verificada.
- **Caixa-preta (*Black-box*)**: O teste é desenhado com base na especificação da unidade, focando apenas no que ela deve fazer (entradas e saídas esperadas), sem se preocupar com a implementação interna.

## Ferramentas e Frameworks Populares

Atualmente, a automação é a regra. Os frameworks de teste fornecem a estrutura para escrever e executar os testes de forma simples. Os exemplos mais conhecidos incluem :

| Framework | Linguagem/Ecossistema |
| :--- | :--- |
| **JUnit** | Java (O mais clássico e padrão de fato) |
| **pytest** | Python (Famoso por sua sintaxe simples e poderosa) |
| **Jest** | JavaScript (Foco em React, com configuração mínima) |
| **Mocha** | JavaScript (Flexível e rico em funcionalidades para Node.js) |
| **xUnit / NUnit** | .NET (C#, F#, VB.NET) |

-----