# Docker

Nesta página colocaremos alguns exemplos de uso do Docker e Docker Componse, para as turmas do curso de Sistemas de Informação.

Há várias maneiras de realizar o deploy de uma aplicação, a maneira mais simples atualmente é utilizando Docker.
A seguir teremos alguns exemplos de arquivos Dockerfile e do docker-compose para implantação de aplicações em várias linguagens.

## Deploy utilizando Docker e Python

A seguir apresentamos um exemplo de arquivo `Dockerfile` para a criação da imagem da nossa aplicação Python com Django:

```Dockerfile
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
A seguir apresentamos uma exemplo de docker-compose.yml para a aplicação Django. Neste `docker-compose`, além da execução do SGBD, também estamos executando o **pgAdmin**, cliente do SGBD, e a aplicação Django. A execução do pgAdmin poderia ser removida, pois é utilizada para administração do banco de dados, e não precisa estar no deploy da aplicação.

```yml
version: '3.8'

services:
  postgres:
    container_name: postgres-server
    image: postgres:latest
    volumes:
      - $HOME_DB/postgres/postgresql:/var/lib/postgresql
      - $HOME_DB/postgres/postgresql_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=postgres_db
      - POSTGRES_USER=postgres_user
      - POSTGRES_PASSWORD=password
    restart: always
    ports:
      - 5432:5432

  pgadmin:
    container_name: pgadmin-server
    image: dpage/pgadmin4:latest
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: pgadmin
    ports:
      - 5050:80
    depends_on:
      - postgres

  web:
    container_name: app-web
    image: nome-app
    build:
      context: .
      dockerfile: ./Dockerfile

    command: >
      sh -c  "python manage.py collectstatic --noinput
              python manage.py migrate --noinput
              python manage.py initadmin
              python manage.py initgroups
              python manage.py runserver 0.0.0.0:8001"
    volumes:
      - .:/code
    ports:
      - 8001:8001

networks:
  default:
    external: true
    name: labens-network
```
