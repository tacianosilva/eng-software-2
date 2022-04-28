# Diagrama de Classes usando YUML

Abaixo apresentamos o modelo conceitual usando o **YUML**.

 ![Modelo UML](monitoria-modelo.png)

## Código do Modelo do Sistema para a Monitoria

O código que gera o diagrama é apresentado abaixo.
```
[HorarioAula]
[Monitor]
[Discente]
[Docente]
[Turma|horarios]<>-*>[HorarioAula]
[Turma]<>-docentes*>[Docente]
[Turma]<>-discentes*>[Discente]
[Turma]<>-monitores*>[Monitor]
[Atendimento]++-*>[HorarioAula]
[Atendimento]<>-turma>[Turma]
[Atendimento]++-monitor*>[Monitor]
[Atendimento]<>-discente>[Discente]
[Atendimento|horarios]-[note: atendimentos individuais?{bg:wheat}]
```
