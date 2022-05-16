# Docker

Nesta página colocaremos alguns exemplos de uso do Docker e Docker Componse, para as turmas do curso de Sistemas de Informação.

Há várias maneiras de realizar o deploy de uma aplicação, a maneira mais simples atualmente é utilizando Docker.
A seguir teremos alguns exemplos de arquivos Dockerfile e do docker-compose para implantação de aplicações em várias linguagens.

## Deploy utilizando Docker e Python

A seguir apresentamos um exemplo de arquivo `Dockerfile` para a criação da imagem da nossa aplicação Python com Django:

```docker
# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim-buster

EXPOSE 8001
ENV PORT=8001

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

LABEL description="Run Project"

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

WORKDIR /code
ADD . /code

# Creates a non-root user and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN useradd appuser && chown -R appuser /code
USER appuser

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "telessaude.wsgi"]
```
