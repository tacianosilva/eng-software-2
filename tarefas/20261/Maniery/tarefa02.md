# Tarefa 02 - Teste de Unidade

Nome: Laety Batista  
GitHub: Maniery  
Email: laety.maniery.119@ufrn.edu.br

Repositório do Projeto: https://github.com/suelitonx/chaves_es2

## Testes de Software (Foco em Testes de Unidade)

Testes de software são técnicas utilizadas para verificar se um sistema funciona corretamente conforme os requisitos especificados.

Os testes de unidade são responsáveis por validar pequenas partes do sistema de forma isolada, como funções ou métodos. Eles garantem que cada unidade do código funcione corretamente, facilitando a identificação de erros logo no início do desenvolvimento.

## Linguagem e Stack

O projeto foi desenvolvido utilizando a linguagem JavaScript, com Node.js no backend. Também foi utilizado o framework Express para criação de APIs.

## Framework de Testes

O framework escolhido foi o Jest.

O Jest é uma ferramenta de testes em JavaScript que permite criar testes unitários de forma simples e eficiente. Ele oferece suporte a mocks, testes assíncronos e cobertura de código.

Link: https://jestjs.io/

## IDE Utilizada

A IDE utilizada foi o Visual Studio Code.

Ela possui ferramentas integradas de debug, como breakpoints, inspeção de variáveis e execução passo a passo, facilitando a identificação de erros no código.

## Tutorial CRUD com Testes

Tutorial: https://www.youtube.com/watch?v=example

O tutorial apresenta a construção de um CRUD completo utilizando Node.js, incluindo a implementação de testes unitários para validar as operações.

## Mock Objects

Mock Objects são objetos simulados utilizados em testes de unidade para imitar o comportamento de dependências reais.

Eles permitem testar partes do sistema de forma isolada, sem depender de banco de dados ou APIs externas.

## Descrição do Projeto

O projeto consiste em um sistema de locação de chaves de salas.

Foi implementado um CRUD para gerenciamento de setores, onde cada setor está vinculado a um local.

As operações disponíveis são:

- Inserir setor (cadastrar um novo setor associado a um local)
- Atualizar setor (alterar nome ou local)
- Deletar setor (remover setor, respeitando regras de negócio)
- Consultar setores (listar setores cadastrados)

Regra de negócio importante:
Um setor só pode ser excluído se não houver chaves vinculadas a ele.

## Testes de Unidade

Foram implementados testes de unidade para cada operação do CRUD de setores.

Os testes cobrem:

- Criação de setor e verificação na listagem
- Atualização de dados do setor
- Exclusão de setor respeitando regras de negócio
- Listagem de setores

Foram utilizados Mock Objects para simular dependências como acesso ao banco de dados.

A experiência de implementação foi importante para entender como testar funcionalidades de forma isolada, garantindo maior confiabilidade no sistema.

Link dos testes: https://github.com/suelitonx/chaves_es2/issues/2