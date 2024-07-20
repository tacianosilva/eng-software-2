# Tarefa 01 - Git e GitHub com Markdown

*Nome:* Charles Eduardo Araújo de Faria  
*Usuário GitHub:* https://github.com/CharlesEdu07 
*E-mail:* charleseduardofaria@gmail.com

---

## Projeto: SigEstoque

### Descrição:

<div style="text-align: justify">
O sistema proposto tem como principal objetivo integrar as diferentes áreas de uma organização a um sistema de controle de estoque centralizado. Ele capacita os usuários a solicitar materiais,verificar disponibilidade e registrar entradas e saídas de recursos de forma eficiente e organizada.

Sua função primordial é assegurar a utilização harmoniosa dos recursos armazenados, evitando conflitos entre as diversas partes da organização.
Um dos desafios que o sistema visa superar é a ocorrência de situações em que múltiplos componentes tentam acessar o mesmo conjunto de itens sem conhecimento das ações dos outros, o que pode resultar em problemas internos ou dificuldades para aqueles que necessitarão desses itens no futuro.
A aplicabilidade do programa reside na sua capacidade de rastrear e controlar o fluxo de produtos que entram e saem da organização. Os dados gerados são valiosos para a gestão inteligente de futuras movimentações, permitindo previsões mais precisas e uma aquisição estratégica de materiais. Isso se traduz em evitar tanto a escassez quanto o excesso de estoque, adaptando-se dinamicamente às necessidades situacionais.

</div>

_Equipe:_

- Breno Costa Porfírio
- Charles Eduardo Araújo de Faria
- Gabriel Antônio Ferreira Lima
- Leonardo Alves da Costa
- Luis Felipe dos Santos

_Repositórios:_
[Back-end](https://github.com/leonardobezrr/sig-estoque-back-end)
[Front-end](https://github.com/leonardobezrr/sig-estoque-front-end)

### Testes de Software: Testes de Unidade

Os testes de unidade são uma prática fundamental no desenvolvimento de software, focada em garantir que as menores partes de uma aplicação, como funções, métodos ou classes, funcionem corretamente. Esses testes são executados isoladamente para verificar se a unidade de código está produzindo os resultados esperados para diferentes entradas.

#### Características dos Testes de Unidade

1. **Isolamento:** Testes de unidade isolam o código de suas dependências externas. Isso geralmente é alcançado usando mocks ou stubs, permitindo que o teste se concentre apenas na lógica interna da unidade.

2. **Automatização:** São frequentemente automatizados para facilitar a execução rápida e repetida dos testes. Ferramentas como JUnit (para Java), NUnit (para .NET), e pytest (para Python) são amplamente usadas.

3. **Foco na Função/Método:** Cada teste de unidade se concentra em uma única função ou método, verificando sua saída para várias entradas.

4. **Rapidez:** Esses testes são rápidos de executar, permitindo a detecção precoce de erros no ciclo de desenvolvimento.

#### Benefícios dos Testes de Unidade

- **Detecção Precoce de Erros:** Problemas são encontrados e corrigidos mais cedo, reduzindo o custo e o esforço para corrigir bugs.
- **Documentação Viva:** Testes de unidade servem como uma forma de documentação que explica como as unidades devem se comportar.
- **Facilidade de Manutenção:** Código bem testado é geralmente mais fácil de modificar e refatorar, pois os desenvolvedores podem ter confiança de que suas mudanças não introduzirão novos bugs.
- **Refatoração Segura:** Permite que desenvolvedores façam refatorações no código com segurança, sabendo que os testes ajudarão a garantir que a funcionalidade permanece intacta.

### Linguagem de Programação:
<div style="text-align: justify">
Estaremos utilizando JavaScript como linguagem principal para o desenvolvimento do projeto. A equipe possui um bom domínio da linguagem, com experiência em projetos anteriores e participação em cursos relacionados.
</div>

### Framework:
<div style="text-align: justify">
Para agilizar o desenvolvimento, estaremos utilizando o framework React, para o front-end e o Fastify para o back-end. Ambos são frameworks web em JavaScript, que incentivam o desenvolvimento rápido e limpo. Ele fornece uma série de ferramentas para facilitar tarefas comuns em desenvolvimento web.
</div>

### Framework de Testes:

Vitest é um framework de testes moderno para JavaScript e TypeScript, projetado para ser rápido e integrado com ferramentas populares de desenvolvimento como Vite. Ele se destaca por oferecer uma experiência de teste rápida, com suporte a recursos como mocking, cobertura de código, e depuração integrada. Vitest é particularmente útil para projetos frontend devido à sua integração perfeita com o ecossistema Vite, mas também pode ser usado em projetos Node.js.

### Principais características do Vitest:
- **Performance Rápida**: Graças à sua integração com Vite, o Vitest proporciona um tempo de execução de testes extremamente rápido.
- **Suporte a Múltiplas API's de Teste**: Inclui suporte para as APIs de teste mais usadas, como `expect`, `mock`, `spyOn`, entre outras.
- **Cobertura de Código**: Facilita a geração de relatórios de cobertura de código.
- **Depuração**: Inclui ferramentas de depuração integradas que ajudam a identificar e resolver problemas rapidamente.
- **Mocking e Spy**: Fornece funcionalidades robustas para criar mocks e espiões em testes.

Para saber mais sobre o Vitest, você pode acessar os seguintes links:
- [Documentação Oficial do Vitest](https://vitest.dev/)
- [Repositório no GitHub](https://github.com/vitest-dev/vitest)

Vitest se apresenta como uma excelente opção para desenvolvedores que buscam uma ferramenta de testes moderna, rápida e integrada, especialmente adequada para projetos que utilizam Vite.


### IDE:
<div style="text-align: justify">
A IDE escolhida para o desenvolvimento é o Visual Studio Code. Ela oferece excelentes ferramentas de debug, integração com Git e GitHub, além de uma grande variedade de extensões para melhorar a produtividade da equipe.
</div>

### Tutorial CRUD:
<div style="text-align: justify">
Encontramos tutoriais úteis que irão nos ajudar no desenvolvimento do projeto.
</div>

Tutoriais:
- [Tutorial Node + Fastify CRUD](https://www.youtube.com/watch?v=LMoMHP44-xM)
- [Tutorial React](https://www.youtube.com/watch?v=1bEbBkWc4-I&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm).

### Branches e Pull Requests com GitFlow:
<div style="text-align: justify">
Para organização do fluxo de trabalho, estaremos utilizando o GitFlow. Isso nos permite ter branches específicas para features, releases, hotfixes, entre outras, facilitando o gerenciamento do código. Os pull requests serão utilizados para revisão de código e integração das alterações.
</div>

### Versionamento Semântico:
<div style="text-align: justify">
O Versionamento Semântico é uma abordagem para atribuir significado a versões de software. Ele define um conjunto de regras e convenções para atribuir números de versão com base nas mudanças no software. Isso facilita a compreensão do impacto das atualizações e ajuda na comunicação entre desenvolvedores e usuários.
</div>

### Conventional Commits:
<div style="text-align: justify">
Conventional Commits é uma convenção para mensagens de commits que permite uma melhor compreensão das alterações realizadas no código. Ele define um formato padrão para as mensagens de commit, incluindo prefixos como fix, feat, chore, entre outros, facilitando o rastreamento de mudanças e automação de processos relacionados ao versionamento do software.
</div>