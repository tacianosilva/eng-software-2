# Tarefa 01 - Git e GitHub com Markdown

Nome: José Victor Bezerra de Medeiros
GitHub: victormedeiros1
Email: josevictordev@gmail.com

## Coders

O sistema a ser desenvolvido tem como objetivo fornecer uma plataforma para facilitar o encontro de estudantes e profissionais de tecnologia que buscam se aventurar em projetos reais, propostos por outros usuários, promovendo network e oportunidades para demonstrarem suas habilidades técnicas.

Repositório Frontend: https://github.com/guilhermecostam/coders_frontend
Repositório Backend: https://github.com/guilhermecostam/coders_backend

## Linguagem utilizada

No frontend da aplicação será utilizado JavaScript com framework NextJS, de início o TypeScript foi descartado, pois há devs com pouca experiência e colocar TypeScript assim pode acabar diminuindo a curva de aprendizado e sendo uma barreira a mais.

No backend da aplicação será utilizado C# com .NET.

## Framework

No frontend escolhemos NextJS, pois os desenvolvedores já tem familiaridade com React. A atualização recente do Next13 trouxe algumas novas funcionalidades que serão interessantes de serem testadas, além da sua facilidade em lidar com requisições HTTP.

No backend a escolha foi C# e .NET por causa de experiência prévia por parte dos desenvolvedores.

## IDE

Manteremos o padrão que já conhecemos, VSCode devido a familiaridade dos desenvolvedores, extensões e outros recursos adicionais que o software possui. O editor será utilizado tanto para o frontend quando para o backend.

## Pull request e branches

Um repositório funciona como uma árvore, onde você cria ramificações(branches) para desenvolver partes do código separadamente e através do merge você junta esse código num só.

#### Branches comuns

- main: é a ramificação principal do seu repositório onde o código que irá para produção fica.
- develop: ramificação responsável pelos testes.

#### Merge

O merge request nada mais é do a junção de branchs, quando se inicia um merge, o código das duas é comparado para verificar se há conflitos, se sim, será necessário resolver esses conflitos.

## Versionamento semântico

A especificação SemVer ajuda a evitar problemas de compatibilidade e oferece uma forma consistente e clara de comunicar alterações no software para os usuários e desenvolvedores. É um padrão de nomeclatura para de gerenciar as versões de um software e utiliza um esquema de numeração composto de 3 números: MAJOR, MINOR e PATCH.

- MAJOR é incrementado quando há mudanças incompatíveis na API;
- MINOR é incrementado quando funcionalidades são adicionadas de forma compatível;
- PATCH é incrementado quando correções de bugs são feitas.

## Conventional Commits

É um padrão para escrever de forma consistente e organizada. Você utiliz Labels que descrevem a categoria daquele commit, são eles:

- feat: criação de novo recurso
- fix: solução de problema (bug)
- docs: mudanças na documentação
- test: alteração em testes
- build: modificações de arquivos de build e dependências
- perf: alterações no código relacionada a performance
- style: formatação de código, semicolons
- refactor: refatoração de código
- chore: atualizações de tarefas
- ci: mudanças de integração contínua

Para saber mais detalhes sobre cada um deles deixo o [repositório do Iuri Code](https://github.com/iuricode/padroes-de-commits)
