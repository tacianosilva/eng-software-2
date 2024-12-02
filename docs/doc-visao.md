# Documento de Visão

Documento construído a partido do **Modelo BSI - Doc 001 - Documento de Visão** que pode ser encontrado no
link: https://docs.google.com/document/d/1DPBcyGHgflmz5RDsZQ2X8KVBPoEF5PdAz9BBNFyLa6A/edit?usp=sharing

## Descrição do Projeto

Descrever de forma geral o projeto.

## Equipe e Definição de Papéis

Membro     |     Papel   |   E-mail   |
---------  | ----------- | ---------- |
Taciano    | Cliente Professor  | taciano@bsi.ufrn.br
Sandra     | Cliente (Diretora) | sandra@ceres.ufrn.br
Zé         | Analista, Testador | ze@silva.com
Maria      | Gerente, Desenvolvedor | maria@silva.com

### Matriz de Competências

Membro     |     Competências   |
---------  | ----------- |
Taciano    | Desenvolvedor Java, Junit, Eclipse, JSP, JSF, Hibernate, Matemática, Latex, etc |
Sandra     | Gestão, Geográfa |
Zé         | Desenvolvedor Java, Astrofísico |
Maria      | Gestão, Desenvolvedor Java, Pesquisadora em Engenharia de Software |

## Perfis dos Usuários

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

Perfil                                 | Descrição   |
---------                              | ----------- |
Administrador | Este usuário realiza os cadastros base e pode realizar qualquer função.
Docente | Este usuário pode verificar seu horário, e acessar turmas, estruturas curriculares, lista de alunos nas turmas, cadastrar enquetes e ver resultados, etc
Discente | Este usuário pode verificar o plano de aulas (horários), demosntrar interesse em uma turma, e acessar turmas, a estrutura do curso, responder enquetes, etc.

## Lista de Requisitos Funcionais

### Entidade Centro - US01 - Manter Centro
Um centro representa uma unidade administrativa da Universidade. Um centro tem código, nome, sigla, endereço e site.

Requisito                     | Descrição   | Ator |
---------                     | ----------- | ---------- |
RF01.01 - Inserir Centro      | Insere novo centro informando: código, nome, sigla, endereço e site. | Administrador |
RF01.02 - Listar Centros      | Listagem dos centros utilizando filtros nos atributos: código, nome, sigla, endereço e site. | Administrador, Docente, Discente |
RF01.03 - Atualizar Centro    | Atualiza um centro informando: nome, sigla, endereço e site. | Administrador |
RF01.04 - Deletar Centro      | Deleta um centro informando o código. | Administrador |

---

### Entidade Departamento - US02 - Manter Departamento
Um departamento tem código, nome, sigla, endereço e o centro ao qual pertence.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF02.01 - Inserir Departamento | Insere novo departamento informando: código, nome, sigla, endereço e centro. | Administrador |
RF02.02 - Listar Departamentos | Listagem de departamentos utilizando filtros nos atributos: código, nome, sigla, endereço e centro. | Administrador |
RF02.03 - Atualizar Departamento | Atualiza um departamento informando: nome, sigla, endereço e centro. | Administrador |
RF02.04 - Deletar Departamento | Deleta um departamento informando o código. | Administrador |

---

### Entidade Sala - US03 - Manter Sala
Uma sala tem um número, um nome, capacidade, tamanho, bloco e o centro ao qual pertence.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF03.01 - Inserir Sala         | Insere nova sala informando: número, nome, capacidade, tamanho, bloco e centro. | Administrador |
RF03.02 - Listar Salas         | Listagem de salas utilizando filtros nos atributos: número, nome, capacidade, tamanho, bloco e centro. | Administrador |
RF03.03 - Atualizar Sala       | Atualiza uma sala informando: nome, capacidade, tamanho, bloco e centro. | Administrador |
RF03.04 - Deletar Sala         | Deleta uma sala informando o número. | Administrador |

---

### Entidade Componente Curricular - RF004 - Manter Componente Curricular
Um componente curricular é de um tipo de componente. Ele tem: código, nome, ementa, departamento, carga horária, modalidade, equivalências, requisitos com outros componentes e data de criação.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF04.01 - Inserir Componente   | Insere novo componente curricular informando: código, nome, ementa, departamento, carga horária, modalidade, equivalências, requisitos e data de criação. | Administrador |
RF04.02 - Listar Componentes   | Listagem de componentes curriculares utilizando filtros nos atributos: código, nome, ementa, departamento, carga horária, modalidade e data de criação. | Administrador |
RF04.03 - Atualizar Componente | Atualiza um componente curricular informando: nome, ementa, departamento, carga horária, modalidade, equivalências e requisitos. | Administrador |
RF04.04 - Deletar Componente   | Deleta um componente curricular informando o código. | Administrador |

---

### Entidade Horário de Aula - RF005 - Manter Horário de Aula
Um horário tem: dia da semana, turno, ordem (identificador), hora de início e hora de final.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF05.01 - Inserir Horário      | Insere novo horário informando: dia da semana, turno, ordem, hora de início e hora de final. | Administrador |
RF05.02 - Listar Horários      | Listagem de horários utilizando filtros nos atributos: dia da semana, turno, ordem, hora de início e hora de final. | Administrador |
RF05.03 - Atualizar Horário    | Atualiza um horário informando: dia da semana, turno, ordem, hora de início e hora de final. | Administrador |
RF05.04 - Deletar Horário      | Deleta um horário informando a ordem. | Administrador |

---

### Entidade Professor - RF006 - Manter Professor
Um professor tem: matrícula, nome, e-mail, telefone e o departamento.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF06.01 - Inserir Professor    | Insere novo professor informando: matrícula, nome, e-mail, telefone e departamento. | Administrador |
RF06.02 - Listar Professores   | Listagem de professores utilizando filtros nos atributos: matrícula, nome, e-mail, telefone e departamento. | Administrador |
RF06.03 - Atualizar Professor  | Atualiza um professor informando: nome, e-mail, telefone e departamento. | Administrador |
RF06.04 - Deletar Professor    | Deleta um professor informando a matrícula. | Administrador |

---

### Entidade Turma - RF007 - Manter Turma
Uma turma tem: código, professores, salas e horários. É de um componente curricular e pode ter mais de um professor, uma ou mais salas e vários horários de aulas.

Requisito                     | Descrição   | Ator                      |
---------                     | ----------- | ----------                |
RF07.01 - Inserir Turma        | Insere nova turma informando: código, componente curricular, professores, salas e horários. | Chefes, Coordenadores |
RF07.02 - Listar Turmas         | Listagem de turmas utilizando filtros nos atributos: código, componente curricular, professores, salas e horários. | Chefes, Coordenadores |
RF07.03 - Atualizar Turma      | Atualiza uma turma informando: professores, salas e horários. | Chefes, Coordenadores |
RF07.04 - Deletar Turma        | Deleta uma turma informando o código. | Chefes, Coordenadores |

---

### Entidade Usuário - US08 - Manter Usuário
Um usuário tem: nome, e-mail, senha e pode pertencer a um ou mais grupos.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF08.01 - Inserir Usuário      | Insere novo usuário informando: nome, e-mail, senha e grupos. | Administrador |
RF08.02 - Listar Usuários      | Listagem de usuários utilizando filtros nos atributos: nome, e-mail e grupos. | Administrador |
RF08.03 - Atualizar Usuário    | Atualiza um usuário informando: nome, e-mail, senha e grupos. | Administrador |
RF08.04 - Deletar Usuário      | Deleta um usuário informando o e-mail. | Administrador |
RF08.05 - Login do Usuário     | Realiza login informando e-mail e senha. | Usuário |
RF08.06 - Logout do Usuário    | Realiza logout encerrando a sessão do usuário. | Usuário |

---

### Entidade Grupo - US09 - Manter Grupo
Um grupo define permissões atribuídas a um conjunto de usuários. Ele tem: nome e permissões.

Requisito                     | Descrição   | Ator           |
---------                     | ----------- | ----------     |
RF09.01 - Inserir Grupo        | Insere novo grupo informando: nome e permissões. | Administrador |
RF09.02 - Listar Grupos        | Listagem de grupos utilizando filtros nos atributos: nome e permissões. | Administrador |
RF09.03 - Atualizar Grupo      | Atualiza um grupo informando: nome e permissões. | Administrador |
RF09.04 - Deletar Grupo        | Deleta um grupo informando o nome. | Administrador |

---

### Modelo Conceitual

Abaixo apresentamos o modelo conceitual usando o **YUML**.

 ![Modelo UML](yuml/monitoria-modelo.png)

O código que gera o diagrama está [Aqui!](yuml/monitoria-yuml.md). O detalhamento dos modelos conceitual e de dados do projeto estão no [Documento de Modelos](doc-modelos.md).

#### Descrição das Entidades

## Lista de Requisitos Não-Funcionais

Requisito                                 | Descrição   |
---------                                 | ----------- |
RNF001 - Deve ser acessível via navegador | Deve abrir perfeitamento no Firefox e no Chrome. |
RNF002 - Consultas deve ser eficiente | O sistema deve executar as consultas em milessegundos |
RNF003 - Log e histórico de acesso e funções | Deve manter um log de todos os acessos e das funções executadas pelo usuário |

## Riscos

Tabela com o mapeamento dos riscos do projeto, as possíveis soluções e os responsáveis.

Data | Risco | Prioridade | Responsável | Status | Providência/Solução |
------ | ------ | ------ | ------ | ------ | ------ |
10/03/2018 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta | Todos | Vigente | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
10/03/2018 | Ausência por qualquer motivo do cliente | Média | Gerente | Vigente | Planejar o cronograma tendo em base a agenda do cliente |
10/03/2018 | Divisão de tarefas mal sucedida | Baixa | Gerente | Vigente | Acompanhar de perto o desenvolvimento de cada membro da equipe |
10/03/2018 | Implementação de protótipo com as tecnologias | Alto | Todos | Resolvido | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema |

### Referências
