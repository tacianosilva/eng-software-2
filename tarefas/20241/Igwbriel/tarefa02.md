# Tarefa 02 - Teste de unidade

**Nome:** [José Gabriel]  
**Usuário GitHub:** [Igwbriel]  
**E-mail:** [gabriel.dias.150@ufrn.edu.br]

## Repositório
[ScheduleSphere](https://github.com/Gedsonfa/ScheduleSphere)

#### Questão 9

##### 9.A

Os testes são divididos em três grupos. **Testes de unidade** verificam automaticamente pequenas partes de um código, normalmente uma classe apenas. Eles formam a base da pirâmide, ou seja, a maior parte dos testes estão nessa categoria. Testes de unidade são simples, mais fáceis de implementar e executam rapidamente. No próximo nível, temos **testes de integração** ou **testes de serviços**, que verificam uma funcionalidade ou transação completa de um sistema.

Um teste de unidade é um programa que chama métodos de uma classe e verifica se eles retornam os resultados esperados.

##### 9.B

O projeto usa a linguagem Typescript, em conjunto com:
Node.js
React
NextJS
Prisma
Docker
Axios
Google APIs
Date-fns
Zod

##### 9.C

**Vitest** é um framework de teste de unidade para JavaScript. Até agora, muitas equipes confiavam no Jest, mas Jest não funciona bem com Vite, uma ferramenta moderna de construção de front-end. Usar Jest e Vite juntos forçou as equipes a criar dois pipelines — um para compilação e desenvolvimento e outro para testes de unidade — o que exigia uma configuração duplicada e tediosa dos pipelines. Esses problemas são resolvidos com Vitest. Ele é projetado especificamente para Vite e usa-o como um bundler. Como recurso adicional, o Vitest possui APIs compatíveis com Jest, o que torna possível usá-lo como substituto do Jest em várias configurações de compilação. No entanto, usar Vite e Vitest juntos fornece uma melhor experiência à pessoa desenvolvedora e, embora Vitest seja rápido, em nossa experiência, não é necessariamente mais rápido do que usar o Jest.

Clique >[AQUI](https://vitest.dev/guide/)< para ser encaminhado à documentação do vitest  

Clique >[AQUI](https://www.testingcompany.com.br/blog/realizando-testes-unitarios-em-api-com-vitest#:~:text=O%20Vitest%20é%20um%20framework,APIs%20ou%20outras%20dependências%20assíncronas)< para ser encaminhado a um breve tutorial de como utilizar o vitest 


##### 9.D

O IDE do **Visual Studio** é uma plataforma de lançamento criativa que você pode usar para editar, depurar e criar código e, em seguida, publicar um aplicativo. Além do editor e depurador padrão fornecidos pela maioria dos IDEs, o Visual Studio inclui compiladores, ferramentas de conclusão de código, designers gráficos e muitos outros recursos para aprimorar o processo de desenvolvimento de software.

Sobre a **ferramenta de debug**, a documentação oficial do VScode traz: Um dos principais recursos do Visual Studio Code é seu excelente suporte à depuração. O depurador integrado do VS Code ajuda a acelerar o ciclo de edição, compilação e depuração.

O VS Code tem suporte de depuração integrado para o runtime Node.js e pode depurar JavaScript, TypeScript ou qualquer outra linguagem que seja transpilada para JavaScript.

Para depurar outras linguagens e runtimes (incluindo PHP, Ruby, Go, C#, Python, C++, PowerShell e muitos outros), procure extensões de depuradores no VS Code Marketplace ou selecione Instalar Depuradores Adicionais no menu de execução principal.

##### 9.E

Clique >[AQUI](https://www.luiztools.com.br/post/tutorial-de-crud-com-typescript-prisma-e-mongodb/) para ir ao tutorial de CRUD com typescript, prisma e mongoDB

##### 9.F

Mock Objects são objetos simulados que imitam o comportamento de objetos reais em um ambiente controlado. Eles são utilizados em testes de unidade para isolar o código a ser testado e garantir que ele funcione corretamente sem depender de outras partes do sistema. Ao usar Mock Objects, é possível simular respostas de métodos, verificar interações e controlar o estado do objeto, permitindo que os testes se concentrem apenas na funcionalidade específica que está sendo verificada.