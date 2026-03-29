# Tarefa 01 - Git e GitHub com Markdown

- Matheus Diniz Fernandes
- [matheusdnf](/https://github.com/Matheusdnf?tab=repositories/)
- matheusdiniz870@gmail.com

## Especificações Sobre o Projeto

### Titulo

Caderneta Virtual de Vendas (CVV)

### Descrição

O projeto _Caderneta Virtual de Vendas (CVV)_ é um sistema de gerenciamento desenvolvido para um pequeno comércio que comercializa produtos domésticos da marca Tupperware. Seu objetivo é automatizar processos que antes eram realizados manualmente, aproveitando as vantagens de um software para melhorar a eficiência e reduzir erros. A proprietária enfrentava dificuldades no controle de pagamentos, especialmente no que se refere a clientes com dívidas pendentes. O sistema irá armazenar os dados cadastrais dos clientes, informações sobre os produtos à venda e o histórico de vendas. Ele também permitirá o acompanhamento detalhado dos pagamentos, com a identificação de clientes adimplentes, inadimplentes e com parcelas em aberto. Além disso, o software incluirá relatórios periódicos sobre os produtos mais vendidos, os devedores e o status de quitação das dívidas, proporcionando um controle mais eficaz do fluxo financeiro do comércio.

## Equipe

1. Emanuel Alves de Medeiros
2. Gabriel Azevedo de Araújo
3. Juan Vitório Dutra de Araújo
4. Marlison Soares da Silva
5. Matheus Diniz Fernandes
6. Maxsuel Gadelha Oliveira da Silva

## Repositório

https://github.com/Lleusxam/caderneta-virtual

## Django

É um framework web em Python focado em produtividade, modularização, segurança e escalabilidade. Para isso, oferece diversas funcionalidades prontas que agilizam o desenvolvimento, como um painel de administração, sistema de autenticação, ORM e proteções de segurança embutidas. Seu sistema de apps independentes funciona como módulos reutilizáveis, permitindo um desenvolvimento simultâneo e extensível de funcionalidades. Além disso, sua arquitetura baseada em MVT é intuitiva e facilita a organização do código.

## Experiência da equipe

Quatro dos seis integrantes têm experiência com Django, e, somado aos benefícios de modularização e produtividade do framework, isso torna sua escolha altamente justificável. Além disso, os outros dois integrantes demonstraram interesse em estudar a ferramenta, reforçando ainda mais a viabilidade da decisão.

# IDE

O Visual Studio Code foi escolhido para ser o ambiente de desenvolvimento. Apesar de não ser uma IDE propriamente dita, é um editor de código altamente extensível que pode funcionar como uma IDE por meio de suas extensões. Para depuração, o VSCode conta com um debugger integrado, permitindo a execução passo a passo do código, inspeção de variáveis e definição de pontos de interrupção. Além disso, possui suporte nativo ao Git, oferecendo uma interface mais amigável para o controle básico de versionamento.

# Tutorial Crud

[link Tutorial](https://youtu.be/Q2tEqNfgIXM?si=8m9gCEgmVseMsXoA)

resumidamente o vídeo ensina passo a passo de como criar e estruturar um CRUD em jungle, as peculiaridades e cuidados que devem se ter em sua criação, integrado juntamente a criação de api utilzando um banco não relacional. além da arquitetura do próprio django.

# Branches e Pull Request

### Branches:

Branches são utilizadas para criar versões isoladas de um mesmo código, permitindo que várias pessoas implementem diferentes funcionalidades (features) a partir de uma base comum, sem depender das mudanças de outras partes do projeto. Isso garante que o trabalho de cada desenvolvedor não afete o código principal. Existem diferentes tipos de branches, como:

    Main: Onde se encontra o código principal, a base de tudo,geralmente a versão estável e em produção.

    Feature: Branch destinada à implementação de novas funcionalidades do sistema.

    Release: Branches criadas para a liberação e integração das novas funcionalidades com o código principal.

### Pull Request (PR) ou Merge Request (MR):

Pull Request (ou Merge Request) é a fase de integração de tudo aquilo que foi produzido em uma branch para o código principal. Eles são usados para revisar e unir as alterações feitas em outras branches com o branch principal do projeto, garantindo controle de versionamento,revisão do código e a qualidade do código,usados para garantir que as alterações estejam bem implementadas e não quebrem funcionalidades existentes. O uso do GitFlow com PRs facilita a gestão de versões e a colaboração entre equipes, mantendo o código estável e bem estruturado durante o desenvolvimento e os lançamentos.

# Versionamento Semântico

A principal motivação para a criação do Versionamento Semântico foi evitar o caos que a falta de controle de dependências pode gerar, levando a problemas complexos e dificuldades no gerenciamento do código. Esse problema pode ser comparado aos princípios de Low Coupling (baixo acoplamento) e High Cohesion (alta coesão), que visam facilitar a manutenção e a escalabilidade do software. O Versionamento Semântico utiliza a estrutura MAJOR.MINOR.PATCH para indicar o tipo de mudanças em um software. O número MAJOR é incrementado quando há mudanças incompatíveis com versões anteriores, o MINOR quando novas funcionalidades são adicionadas de forma compatível e o PATCH para correções de bugs ou ajustes que não afetam a compatibilidade. Esse sistema melhora a comunicação sobre as atualizações, permitindo que desenvolvedores e usuários compreendam rapidamente o impacto de cada versão e a relação entre elas.

# Conventional Commits

O **Conventional Commits** é uma abordagem para padronizar os tipos de commits realizados em um projeto. Utilizando convenções como

- **feat** (nova funcionalidade)
- **docs** (documentação)
- **style** (estilo de código)
- **refactor** (refatoração)
- **fix** (correção de bugs)

Entre outros padrões, essa prática torna mais intuitivo o tipo de alteração feita, além de facilitar a leitura e compreensão das mensagens de commit. Isso torna o processo de versionamento de código mais eficiente e organizado, pois a comunicação sobre as mudanças fica clara e estruturada. Há um repostiório que deixa isso bastante intuitivo e prático sendo este -> [repositório](https://github.com/iuricode/padroes-de-commits.git).
