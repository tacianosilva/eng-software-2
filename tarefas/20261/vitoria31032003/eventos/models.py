from django.db import models


class Evento(models.Model):

    TIPOS_EVENTO = [
        ('Palestra', 'Palestra'),
        ('Oficina', 'Oficina'),
        ('Mini Curso', 'Mini Curso'),
        ('Mesa Redonda', 'Mesa Redonda'),
    ]

    STATUS_EVENTO = [
        ('Rascunho', 'Rascunho'),
        ('Inscrições Abertas', 'Inscrições Abertas'),
        ('Encerrado', 'Encerrado'),
    ]

    titulo = models.CharField(max_length=255)

    tipo_evento = models.CharField(
        max_length=30,
        choices=TIPOS_EVENTO
    )

    data_inicio = models.DateTimeField()

    data_termino = models.DateTimeField()

    local = models.CharField(max_length=255)

    vagas = models.IntegerField()

    carga_horaria = models.IntegerField()

    responsavel = models.CharField(max_length=255)

    status = models.CharField(
        max_length=30,
        choices=STATUS_EVENTO,
        default='Rascunho'
    )

    def __str__(self):
        return self.titulo