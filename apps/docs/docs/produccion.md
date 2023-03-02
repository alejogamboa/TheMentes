---
title: Despliegue en producción
---

# Instalación

## Requerimientos

Para hacer la Instalación del `The Mentes` se debe tener los siguientes requerimientos:

- Poseer un sistema operativo Linux (Ubuntu 20.04 LTS)
- Tener instalado Docker y Docker Compose
- Tener abiertos los puertos 80 y 443 para el frontend y 3000 para el backend de la API
- Tener instalado NGINX como proxy inverso

## Pasos para la instalación

1. Clonar el repositorio de GitHub

```bash
git clone url del repositorio
```

2. Entrar a la carpeta del repositorio

```bash
cd the-mentes
```

3. Crear el archivo .env y configurar las variables de entorno

```bash
touch .env
```

4. Asignar las variables de entorno en el archivo .env

```bash
# SETTINGS DOCKER

# FRONTEND
FRONTEND_EXPOSE_PORT = 8080

# ADMIN
ADMIN_EXPOSE_PORT = 8081

# DOCS PORT EXPOSE
DOCS_EXPOSE_PORT = 8082

# API BACKEND
API_EXPOSE_PORT = 3000

# POSTGRES DATABASE

DB_EXPOSE_PORT = 5432
DB_NAME = the_mentes
DB_USER = root
DB_PASSWORD = root

# for development
# DB_HOST = localhost

# for production
DB_HOST = db_host

```

5. ejecutar el comando para crear las imagenes de docker

```bash
docker compose build --no-cache -m 2g
```

6. Ejecutar el comando para iniciar los contenedores

```bash
docker compose up -d
```

7. Configurar NGINX

```bash
server {
    listen 80;
    server_name sigarcloud.com;
    return 301 https://$server_name$request_uri;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /admin/ {
        proxy_pass http://localhost:8081/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /docs/ {
        proxy_pass http://localhost:8082/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }


}
```

8. Reiniciar NGINX

```bash
sudo systemctl restart nginx
```

10. comprobar que todo este funcionando

```bash
docker ps
```

