# Código do Modelo do Sistema para a Monitoria

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