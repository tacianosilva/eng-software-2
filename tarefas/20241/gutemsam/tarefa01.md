# tarefa 01 - gitHub com Marketdown
# Projeto: TechCell-Pro

## informações pessoais
- Nome: Samuel Gutemberg Pereira
- Usuário do Github: [Gutemsam](https://github.com/gutemsam)
- Email: <thesam0606@gmail.com>
  
### Sobre o Projeto

**Título do Projeto:** TechCell-Pro

**Descrição:** Será um projeto web de gerenciamento de assistência técnica, que será desenvolvido na disciplina de Engenharia de Software II, do curso de Sistema de Informação UFRN.

**Equipe:** Fabio Fabricio, Flávio Glaydson, Gabriel José, Laian Kevin, Samuel Gutemberg.
**Repositório:** [Link do Repositório] (https://github.com/flaviogui/TechCell-Pro)

## Linguagem de Programação

Será utilizado python para o back-end e javascript no front-end. Meu dominio em ambas é o básico/intermediário através de projetos que fiz ao longo do curso.

## Framework

Para o front-end será utilizado o framework vue, já no back-end será utilizado o framework Django. Nos projetos que eu realizei não cheguei a ver Vue, mas devido sua fama de ser mais simples, o grupo decidiu por adota-la em nosso projeto, visando um maior entendimento.

## IDE 
A IDE utilizada será o VsCode. Ele possui ferramentas de debug integradas, que permitem inspecionar variáveis, definir pontos de interrupção e executar código passo a passo, além de uma integração nativa com Git, facilitando o controle de versão e a colaboração em projetos de software. Através de uma interface amigável e do suporte a uma vasta gama de extensões, o VSCode oferece uma solução completa, tornando o processo de codificação, teste e gerenciamento de mudanças mais eficiente e acessível.

## Tutorial para CRUD

buscando um tutorial de como realizar um CRUD (Create, Read, Update, Delete) usando a tecnologia escolhida para o projeto.
*Tutorial:* [Django 4 CRUD completo es 30 minutos](https://youtu.be/GGBzMpIAgz4?si=3uraYG1RGkkogVAa) **Descrição:É um video bem completo sobre Django feito pelo youtuber Gregory Pacheco no qual ele realiza alguns exemplos durante ao longo do video.


## Branches e Pull requests

o contexto do Git e GitHub, as branches são ramificações do código-fonte que permitem trabalhar em funcionalidades ou correções isoladamente. O GitFlow é um modelo de fluxo de trabalho que define padrões para o uso de branches:

develop: Branch de desenvolvimento contínua.
feature: Branch para desenvolver novas funcionalidades.
release: Branch para preparar uma versão para lançamento.
hotfix: Branch para correção de bugs críticos em produção.
As Pull Requests (Merge Requests) são solicitações para mesclar uma branch (por exemplo, uma feature) na branch develop ou master. Elas permitem revisão de código e discussão antes da fusão.

## Versionamento Semântico
O Versionamento Semântico é uma convenção para atribuir significado aos números de versão de um software. Segue o formato MAJOR.MINOR.PATCH, onde:

MAJOR: Mudanças incompatíveis na API.
MINOR: Adição de funcionalidades compatíveis com versões anteriores.
PATCH: Correções de bugs compatíveis com versões anteriores.

## Conventional Commits
Conventional Commits é uma convenção para mensagens de commits em projetos de desenvolvimento de software. Ela estabelece um formato padronizado para as mensagens de commit, tornando-as mais legíveis e úteis para humanos e ferramentas automatizadas. Principais pontos:

Formato da Mensagem de Commit: Deve seguir o padrão <tipo>[escopo opcional]: <descrição> [corpo opcional] [rodapé(s) opcional(is)].
Exemplo: feat: adiciona funcionalidade de login.
Tipos de Commit: Incluem fix para correções, feat para novas funcionalidades e BREAKING CHANGE para alterações que quebram a compatibilidade da API.
Escopo (opcional): Fornece informações contextuais adicionais ao tipo do commit.
Rodapés (opcional): Podem conter informações adicionais, como BREAKING CHANGE ou outras notas relevantes.
Benefícios: Facilita a geração automática de changelogs, comunica a intenção das alterações e correlaciona-se com o versionamento semântico.
Em resumo, Conventional Commits simplifica e padroniza as mensagens de commit, tornando o histórico do repositório mais claro e permitindo automações com base nas mensagens de commit. É uma prática recomendada para equipes de desenvolvimento.


## Testes de Software com Foco em Testes de Unidade

### Testes de Unidade

Testes de Unidade são uma prática essencial no desenvolvimento de software que envolve a verificação de partes isoladas do código, chamadas unidades, para garantir que funcionem corretamente. O objetivo principal é validar que cada unidade de código funcione conforme o esperado. Isso ajuda a identificar e corrigir erros precocemente no ciclo de desenvolvimento, facilitando a manutenção e evolução do software. Testes de unidade são geralmente automatizados e escritos pelos próprios desenvolvedores, proporcionando um feedback rápido sobre a integridade do código.

### Linguagem de Programação e Stack para o Projeto

Para o desenvolvimento do projeto da disciplina, utilizaremos a linguagem de programação **Python**. A stack escolhida inclui:

- **Framework Web**: Django
- **Banco de Dados**: SQLite (por padrão com Django, mas pode ser substituído por PostgreSQL, MySQL, etc.)
- **Servidor de Desenvolvimento**: Django Development Server
- **Ferramentas de Teste**: pytest, unittest
