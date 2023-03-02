---
title: Entorno de desarrollo
---

---

# Desarrollo

## Requerimientos

Para hacer el desarrollo del `The Mentes` se debe tener los siguientes requerimientos:

- Tener instalado NodeJS
- Tener instalado Docker y Docker Compose
- Usar un editor de texto como VSCode (Recomendado)
- Tener instalado Yarn

## Pasos para el desarrollo

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

4. Asignar las variables de entorno


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
DB_HOST = localhost

# for production
# DB_HOST = db_host

```

5. Ejecutar el comando para iniciar el contenedor de la base de datos

```bash
yarn db:up
```

Para detener el contenedor de la base de datos ejecutar el siguiente comando:

```bash
yarn db:down
```

6. Instalar las dependencias del proyecto

```bash
yarn install
```

7. Ejecutar el comando para iniciar el proyecto

```bash
yarn dev
```

8. Instalar en el Visual Studio Code las siguientes extensiones:

- Volar
- ESLint
- Prettier - Code formatter
- Monorepo Workspace




