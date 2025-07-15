# Tarefa 01 - Git e GitHub com Markdown
Juan Vitório Dutra de Araújo
JuanVitorio
juanvitorioclash@gmail.com

# Sobre o projeto

O projeto *Caderneta Virtual de Vendas (CVV)* é um sistema de gerenciamento desenvolvido para um pequeno comércio que comercializa produtos domésticos da marca Tupperware. Seu objetivo é automatizar processos que antes eram realizados manualmente, aproveitando as vantagens de um software para melhorar a eficiência e reduzir erros. A proprietária enfrentava dificuldades no controle de pagamentos, especialmente no que se refere a clientes com dívidas pendentes. O sistema irá armazenar os dados cadastrais dos clientes, informações sobre os produtos à venda e o histórico de vendas. Ele também permitirá o acompanhamento detalhado dos pagamentos, com a identificação de clientes adimplentes, inadimplentes e com parcelas em aberto. Além disso, o software incluirá relatórios periódicos sobre os produtos mais vendidos, os devedores e o status de quitação das dívidas, proporcionando um controle mais eficaz do fluxo financeiro do comércio.

## Equipe

1. Emanuel Alves de Medeiros
2. Gabriel Azevedo de Araújo
3. Juan Vitório Dutra de Araújo
4. Marlison Soares da Silva
5. Matheus Diniz Fernandes
6. Maxsuel Gadelha Oliveira da Silva

## Repositório

https://github.com/Lleusxam/caderneta-virtual


# Linguagem

## Python

Vamos usar o framework Django que por sua vez usa a linguagem Python.

## Django

É um framework web em Python focado em produtividade, modularização, segurança e escalabilidade. Para isso, oferece diversas funcionalidades prontas que agilizam o desenvolvimento, como um painel de administração, sistema de autenticação, ORM e proteções de segurança embutidas. Seu sistema de apps independentes funciona como módulos reutilizáveis, permitindo um desenvolvimento simultâneo e extensível de funcionalidades. Além disso, sua arquitetura baseada em MVT é intuitiva e facilita a organização do código.

## Experiência da equipe

Quatro dos seis integrantes têm experiência com Django, e, somado aos benefícios de modularização e produtividade do framework, isso torna sua escolha altamente justificável. Além disso, os outros dois integrantes demonstraram interesse em estudar a ferramenta, reforçando ainda mais a viabilidade da decisão.

# IDE

O Visual Studio Code foi escolhido para ser o ambiente de desenvolvimento. Apesar de não ser uma IDE propriamente dita, é um editor de código altamente extensível que pode funcionar como uma IDE por meio de suas extensões. Para depuração, o VSCode conta com um debugger integrado, permitindo a execução passo a passo do código, inspeção de variáveis e definição de pontos de interrupção. Além disso, possui suporte nativo ao Git, oferecendo uma interface mais amigável para o controle básico de versionamento.

# Tutorial

[Playlist Crud em Django](https://www.youtube.com/watch?v=UIvnNCQnejw&list=PLHWfNMxB2F4HdKbo8zdgXyxVDOxH429Ko)

Esse o link de uma playlist que eu utilizei enquanto aprendia a usar o Django. Vi todas as aulas para fazer um projeto da  matéria de programação no IFRN. Basicamente, ao longo dos vídeos, ele apresenta o conceitos básicos do Django, conceito da web e conceitos na parte de programação. Após algumas aulas, ele fazer um tutorial de como implementar todas as partes de um CRUD.

# Branches e Pull Requests

O GitFlow é um modelo de organização do Git que define diferentes tipos de branches para facilitar o desenvolvimento de software. Ele divide as branches em principais e de suporte. As principais são a master (código pronto para produção) e a develop (onde novas funcionalidades são integradas). As de suporte incluem as feature branches (para novas funcionalidades), release branches (para preparar versões antes do lançamento) e hotfix branches (para correções urgentes em produção).

Os Pull Requests (ou Merge Requests) são usados para revisar e integrar mudanças no código. No GitFlow, eles são criados para mesclar feature branches na develop, release branches na master e hotfix branches diretamente na master (depois sendo levadas para develop também). Esse processo garante um controle de qualidade eficiente, permitindo revisões de código antes da integração.

O uso de Pull Requests com GitFlow melhora a colaboração e evita erros, já que cada alteração passa por uma revisão antes de ser incorporada ao projeto. Além disso, práticas como testes automatizados podem ser aplicadas nos PRs para garantir a estabilidade do código antes da sua fusão.

# Versionamento semântico

​O Versionamento Semântico é um sistema que atribui números de versão a softwares de forma a indicar claramente o tipo e a importância das mudanças realizadas. Cada versão é representada por três números no formato MAJOR.MINOR.PATCH, onde: 
- MAJOR: Incrementado quando há alterações incompatíveis na API.
- MINOR: Incrementado ao adicionar funcionalidades compatíveis com versões anteriores.
- PATCH: Incrementado ao corrigir falhas mantendo a compatibilidade com versões anteriores.

Além disso, é possível adicionar rótulos para pré-lançamento (por exemplo, -alpha, -beta) e metadados de construção (por exemplo, +001) para fornecer informações adicionais sobre a versão. Esse sistema facilita a comunicação entre desenvolvedores e usuários, indicando claramente o impacto das mudanças realizadas no software.