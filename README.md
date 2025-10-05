# E-commerce Project

Este es un proyecto de e-commerce construido con Strapi como backend y PostgreSQL como base de datos, todo containerizado con Docker.

## 📋 Prerrequisitos

Asegúrate de tener instalado:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Git](https://git-scm.com/)

## 🚀 Cómo iniciar el proyecto

### 1. Iniciar Docker Desktop

Antes que nada, **abre Docker Desktop** desde tu escritorio y asegúrate de que esté ejecutándose correctamente.

### 2. Clonar el repositorio (si no lo has hecho)

```bash
git clone <url-del-repositorio>
cd ecommerce
```

### 3. Configurar variables de entorno

El archivo `.env` ya está configurado con:

```
POSTGRES_USER=strapi
POSTGRES_PASSWORD=strapi
POSTGRES_DB=strapi
```

### 4. Iniciar los servicios de Docker

```bash
# Construir e iniciar los contenedores
docker compose up -d


# Para ver los logs (opcional)
docker compose logs -f
```

Esto iniciará:

- **PostgreSQL** en el puerto `5432`
- **Adminer** (interfaz de base de datos) en el puerto `8080`

### 5. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 6. Iniciar Strapi en modo desarrollo

```bash
# Desde la carpeta backend
npm run develop
```

## 🌐 Acceso a los servicios

Una vez que todo esté ejecutándose:

- **Strapi Admin Panel**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api
- **Adminer (Base de datos)**: http://localhost:8080
- **PostgreSQL**: localhost:5432

### Credenciales para Adminer:

- **Sistema**: PostgreSQL
- **Servidor**: db (nombre del servicio en Docker)
- **Usuario**: strapi
- **Contraseña**: strapi
- **Base de datos**: strapi

## 📁 Estructura del proyecto

```
ecommerce/
├── docker-compose.yml      # Configuración de Docker
├── .env                   # Variables de entorno
├── backend/               # Aplicación Strapi
│   ├── package.json
│   ├── config/           # Configuración de Strapi
│   ├── database/         # Migraciones
│   ├── src/              # Código fuente
│   └── public/           # Archivos estáticos
└── README.md             # Este archivo
```

## 🛠️ Comandos útiles

### Docker

```bash
# Iniciar contenedores
docker-compose up -d

# Detener contenedores
docker-compose down

# Ver logs
docker-compose logs -f

# Reiniciar contenedores
docker-compose restart

# Ver estado de contenedores
docker-compose ps
```
# hobbies-ecomm
