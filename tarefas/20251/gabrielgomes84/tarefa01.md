# Tarefa 01 - Git e GitHub com Markdown

**Nome:** Gabriel Gomes Dos Santos 
**Usuário do GitHub:** gabrielgomes84  
**E-mail:** gabriel.gomes.710@ufrn.edu.br


## Informações do Projeto

**Título do Projeto:** Sistema de Controle de Estoque para Ótica  
**Descrição:** O sistema de controle de estoque para ótica tem como objetivo otimizar a gestão do estoque, controlando a entrada e saída de produtos (armações, lentes, óculos de sol). Oferece:

- Controle em tempo real do estoque  
- Registro de vendas e transações  
- Relatórios detalhados  
- Acesso seguro por perfil de usuário  
- Interface intuitiva  

### **Equipe**  

| Membro          | Papel            | E-mail                          |
|----------------|----------------|--------------------------------|
| Cayo César     | Analista        | cayo.lopes.129@ufrn.edu.br    |
| Gabriel Gomes  | Analista        | gabriel.gomes.710@ufrn.edu.br |
| Gustavo Douglas | Líder Técnico  | gustavo.cruz.133@ufrn.edu.br  |
| Joyce Oliveira | Analista        | joyce.santos.709@ufrn.edu.br  |
| Taciano Silva  | Cliente/Professor | tacianosilva@gmail.com        |
| Arthur         | Cliente         | stegelemon.com.br@gmail.com   |

**Repositório do Projeto:** [SGO-EngII](https://github.com/Joyce8900/SGO-EngII)


## **Linguagem de Programação**
A linguagem escolhida para o desenvolvimento do aplicativo foi Python, devido à sua sintaxe relativamente simples e intuitiva. Além disso, todos os membros do grupo possuem experiência prévia utilizando Python, o que facilita a colaboração e o desenvolvimento eficiente do projeto.

## **Framework Utilizado**
Para o desenvolvimento do sistema, utilizaremos o framework Django, que oferece uma estrutura robusta e escalável para a construção de aplicações web. Django fornece uma arquitetura baseada no padrão MVC (Model-View-Controller), facilitando a organização do código e a manutenção do projeto.

## **IDE**
## IDE Utilizada

O projeto será desenvolvido utilizando a IDE **Visual Studio Code (VS Code)**.  
Essa IDE possui as seguintes ferramentas integradas que auxiliam no desenvolvimento:  

- **Debug:** Suporte a breakpoints, inspeção de variáveis e execução passo a passo.  
- **Controle de versão:** Integração com Git, permitindo commits, push, pull e gerenciamento de branches diretamente na interface.  
- **Outras funcionalidades:** Suporte a extensões, terminal integrado e autocompletar inteligente.  


## **Tutorial de CRUD na Tecnologia Escolhida**

Durante o desenvolvimento do projeto, utilizaremos um CRUD (Create, Read, Update, Delete) para manipulação de dados.  
Encontramos um tutorial útil para essa implementação:
**Título do tutorial:** Seu primeiro CRUD com DJANGO
**Link:** https://www.youtube.com/watch?v=ZXli2MJyRyk
**Descrição:**  O primeiro passo para criar um crud é modelar a tabela em que a gente vai manipular e atualizar os dados ali dentro, ou seja, trabalhar dentro das models onde a gente vai criar essa tabela do banco. e para criar uma tabela em django a gente utiliza uma classe. Exemplo: classe aluno. e essa classe a gente vai herdar de models.model para que o django reconheça que essa classe deve ser uma tabela no banco de dados. E depois disso a gente define os campos necessários, ex: nome = models.CharField(max_lenght=255)
email = models.EmailField().
Utilizar também o __str__ pra exibir o nome do aluno quando a  gente printar a classe. e pra criar a tabela precisa rodar 2 comandos: migrate e makemigrations. primeiro o makemigrations pra pegar todas as migrações e atualizações que precisam ser feitas no banco. e depois rodar o migrate pra efitivar tudo isso no banco de dados. Checar no banco de dados se a tabela foi criada.

depois de criar a tabela, agora a gente parte pra parte do usuário preencher os dados. o primeiro passo é renderizar um formulário, ou seja, um html onde o usuário vai poder digitar as informações. no django a gente cria isso usando uma função com return render(), que recebe a request, o nome do template (tipo 'criar_aluno.html') e um contexto com o formulário. esse template tem que ficar dentro do app, numa pasta chamada templates, e aí dentro dela criar o arquivo criar_aluno.html.

depois disso, dá pra seguir criando as outras partes do crud: uma view pra listar os alunos cadastrados, outra pra editar os dados, e outra pra deletar. cada uma dessas funcionalidades vai ter sua própria rota no urls.py, apontando pra sua respectiva view. a listagem vai usar o Aluno.objects.all() pra buscar os dados, a edição vai usar get_object_or_404() pra carregar os dados certos e depois atualizar com o form, e o delete vai confirmar e apagar com o método delete(). fazendo tudo isso, o crud já fica completo e funcionando com banco, formulários e telas prontas.

## Branches e Pull Requests no GitHub com GitFlow

No desenvolvimento colaborativo, utilizamos o GitFlow para organizar o fluxo de trabalho no Git.  
O GitFlow define as seguintes branches principais:  
- **`main`**: Contém a versão estável do projeto.  
- **`develop`**: Branch onde novas funcionalidades são integradas antes de serem mescladas na `main`.  

Além disso, temos branches auxiliares:  
- **`feature/nome-da-funcionalidade`**: Usada para desenvolver novas funcionalidades.  
- **`release/x.y.z`**: Criada para preparar um novo lançamento do projeto.  
- **`hotfix/nome-da-correção`**: Usada para corrigir bugs críticos diretamente na `main`.  

No GitHub, um **Pull Request (PR)** é utilizado para propor a integração de mudanças de uma branch para outra.  
O fluxo típico de trabalho com GitFlow é:  
1. Criar uma nova branch `feature/nova-funcionalidade`.  
2. Desenvolver e testar a funcionalidade.  
3. Criar um Pull Request para `develop`.  
4. Após aprovação, a branch é mesclada e excluída.  