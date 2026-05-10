from rest_framework import viewsets
from .models import Evento
from .serializers import EventoSerializer


class EventoViewSet(viewsets.ModelViewSet):

    queryset = Evento.objects.all()

    serializer_class = EventoSerializer