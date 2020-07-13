# Tarefa 01 - 2020.5 - Git e GitHub com Markdown

- Nome: Ewerton da Silva Leite
- Usuário Github: [Ewertonslv](github.com/Ewertonslv)
- E-mail: ewertoncom297@gmail.com


## Projeto da disciplina engenharia de software II
### Equipe: [Ewertonslv](https://github.com/Ewertonslv), [arthurmdros](https://github.com/arthurmdros), [kaelsilva](https://github.com/kaelsilva), [eduviictor](https://github.com/eduviictor), [cadu-brito](https://github.com/cadu-brito).
### Titulo: Event Manager  
### Descrição geral do sistema: 
O sistema Event Manager é uma ferramenta para o processo de gerenciamento de eventos. Fornece uma maneira intuitiva e eficiente para definir eventos adequados ao público-alvo. Um evento é um acontecimento (festa, espetáculo, comemoração, solenidade etc.) organizado por especialistas, com objetivos institucionais, comunitários ou promocionais.

A ferramenta estará disponível para ser utilizada tanto por organizadores de evento quanto para clientes que desejam participar do evento. Utilizando a ferramenta, o usuário cliente poderá buscar eventos, adquirir ingressos do evento e receber notificações sobre possíveis eventos que estão de acordo com o seu interesse ou proximidade da sua cidade. Utilizando a ferramenta, o usuário organizador de eventos poderá cadastrar novos eventos ou criar eventos a partir de outros já existentes. Além disso, poderá alterar, remover e consultar eventos já criados. Tais eventos geraram relatórios para o seu organizador que serão enviados via e-mail ou gerar um arquivo PDF que podem ser visualizados sem utilizar a ferramenta.

A ferramenta conterá também afiliação com outras empresas, como o PayPal, que possibilitem a venda de ingressos pela ferramenta e garanta a confiabilidade e segurança dos usuários com o sistema. O Event Manager contribui de modo decisivo para melhorar a qualidade do processo de gerenciamento de eventos como plataforma virtual de uma empresa.

### Tecnologias da aplicação:
- Front-End: React.js

Biblioteca do JavaScript utilizada para construir interfaces de usuário. Possui uma ótima performance em relação aos seus comandos. Sendo uma biblioteca de código aberto ela pode ser caractegorizada como o “V” no padrão MVC (Model-View-Controller). 
- Back-End: Node.js

Ambiente de execução Javascript, capaz de criar aplicações em JavaScript. Tem como vantagens a leveza, produtividade da equipe e flexibilidade.  

Em ambas possuindo nivel de domínio baixo. 

### Visual studio code
Trata-se de um editor de código leve, multiplatafoma, gratuito e open source. Mantido pela Microsoft, essa ferramenta conta com suporte a várias linguagens, extensões, integração com Git, debug, terminal integrado, entre outros recursos. 
- Debug e Release

Debug e Release são as configurações de compilação internas do Visual Studio. Você usa a configuração de compilação de depuração para depuração e a configuração de versão para a distribuição de versão final.
Na configuração de depuração, um programa é compilado com informações de depuração simbólicas completas e sem otimização. A otimização complica a depuração, porque a relação entre o código fonte e as instruções geradas é mais complexa. A configuração de versão de um programa não tem informações de depuração simbólicas e é totalmente otimizada.
Por padrão, Visual Studio Code usa a configuração de compilação de depuração

### Framework express
É o framework web mais popular, e é a biblioteca subjacente para uma série de outros frameworks populares de Nodes. Fornece mecanismos para:

1. Gerencia as requisições de diferentes requisições e rotas e URLs.
2. Combinar com mecanismos de renderização de "view" para gerar respostas inserindo dados em modelos.
3. Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
4. Adicionar em qualquer ponto da requisição um "middleware" para interceptar processar ou pré-processar e tratamentar à mesma.

Equanto o Express é bastante minimalista, os desenvolvedores criam pacotes de middleware para resolver quase todos os problemas no desenvolvimento web. Há bibliotecas para trabalhar com cookies, sessões, login de usuários, parametros de URL, dados em requisições POST, cabeçalho de segurança e entre tantos outros.
### Link com tutorial (CRUD):
https://medium.com/baixada-nerd/criando-um-crud-completo-com-nodejs-express-e-mongodb-parte-1-3-6c8389d7147d

### Branches e pull request
- O que é um branch

Uma ramificação no git é um ponteiro para as alterações feitas nos arquivos do projeto. É útil em situações nas quais você deseja adicionar um novo recurso ou corrigir um erro, gerando uma nova ramificação garantindo que o código instável não seja mesclado nos arquivos do projeto principal. Depois de concluir a atualização dos códigos da ramificação, você pode mesclar a ramificação com a principal, geralmente chamada de master.
- Como funciona o pull request?

É um mecanismo onde um desenvolvedor pode gerar uma notificação que sinaliza a conclusão do desenvolvimento de uma funcionalidade qualquer. Isso permite que todos os envolvidos saibam que precisam fazer o merge do código na branch principal. Além disso, podem ser discutidas as alterações em um fórum para possíveis aperfeiçoamentos da funcionalidade em questão.

### Débito Técnico
- O que é?

Débito técnico (ou dívida técnica) é um conceito no desenvolvimento de software que representa o custo implícito de uma implementação/solução pensada somente no agora, em vez de usar uma abordagem com melhor qualidade porém que levaria mais tempo.

O débito técnico pode ser comparado a uma dívida financeira, que, quando você não a quita, vai pagando os juros ao longo do tempo, acarretando ainda mais dificuldade em paga-la.

Em termos de software,o débito técnico cria a dificuldade de manutenção de código, gerando ainda mais atrasos e mudanças no produto final.
- Como zerar o débito técnico

Não dá, isso mesmo, se você acha que a solução dos seus problemas é acabar com todo o débito técnico do seu projeto, você está enganado. A dívida técnica é inevitável e, portanto, sempre irá existir, cabendo a nos somente controla-la. Por exemplo, somente com o passar do tempo, cria-se um débito técnico pois o código acaba envelhecendo.

Se você ou seu time está na luta para não ter débito técnico, saiba que isso é ruim, e é chamado de Gold Plating.

- Motivos do surgimento de um débito técnico
1. Prazos fora da realidade
2. Falta de conhecimento técnico
3. Escolha de tecnologia inadequada
4. Passar do tempo
5. Falta de uma metodologia de desenvolvimento iterativa (sem feedback e teste do cliente)

- Tipos de débito técnico

Existem 4 tipos de débito técnico, podemos classificá-lo da seguinte maneira:
1. Imprudente intencional: “Sabemos do problemas mas não vamos resolver!”
2. Imprudente não intencional: “Trabalhar com uma nova linguagem de programação”
3. Consciente intencional: “Temos um prazo X, precisamos entregar com esse problemas, depois corrigimos”
4. Consciente não intencional: “Agora que entregamos o projeto sabemos como deveríamos ter feito.”

- Como tratar

Através da metodologia Kanban que é baseada em uma série de princípios que a diferenciam do resto das metodologias conhecidas como ágil: Qualidade garantida. Tudo o que é feito deve ir bem na primeira vez, não há margem para erro. Assim, o Kanban não recompensa a velocidade, mas a qualidade final das tarefas executadas.

Em último caso, você pode criar uma SPRINT ou uma Release apenas com correções de débito técnico. Nós particularmente não gostamos disso, pois não tem geração de valor real para o cliente final, por isso é sempre bom mesclar.
