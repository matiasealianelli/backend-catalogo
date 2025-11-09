# 🧰 Catálogo de Repuestos de Autos

### Trabajo Práctico Integrador – Backend UTN (Turno Noche)

Este proyecto implementa el backend de un sistema de gestión de **repuestos de autos**, desarrollado como parte del **Trabajo Práctico Integrador** del curso de **Backend Web (UTN)**.  
El objetivo es aplicar los conocimientos adquiridos en **Node.js**, **Express** y **MongoDB**, construyendo una **API RESTful completa** con operaciones CRUD para usuarios, productos (repuestos) y categorías.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** – entorno de ejecución de JavaScript.
- **Express** – framework para la creación de la API REST.
- **MongoDB** – base de datos NoSQL.
- **Mongoose** – ODM para modelar los datos.
- **bcrypt** – para encriptación de contraseñas.
- **dotenv** – para gestión de variables de entorno.

---

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/matiasealianelli/backend-catalogo.git
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido de ejemplo:

   ```env
   PORT = 3000
   MONGODB_URI = mongodb://127.0.0.1:27017
   DB = db_proyecto_montford
   ```

4. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

5. **Ejecutar en modo producción**
   ```bash
   npm start
   ```

El servidor se ejecutará en el puerto indicado en el archivo `.env` o en el **3001** por defecto.

---

## 📡 Endpoints Disponibles

### 🧑‍💼 Usuario

| Método     | Endpoint               | Descripción                                       |
| ---------- | ---------------------- | ------------------------------------------------- |
| **GET**    | `/api/user/`           | Obtiene todos los usuarios                        |
| **POST**   | `/api/user/create`     | Crea un nuevo usuario (con contraseña encriptada) |
| **POST**   | `/api/user/login`      | Valida usuario y contraseña                       |
| **PATCH**  | `/api/user/update/:id` | Actualiza los datos de un usuario                 |
| **DELETE** | `/api/user/delete/:id` | Elimina un usuario                                |

---

### 🗂️ Categoría

| Método     | Endpoint                   | Descripción                       |
| ---------- | -------------------------- | --------------------------------- |
| **GET**    | `/api/category/`           | Obtiene todas las categorías      |
| **POST**   | `/api/category/create`     | Crea una nueva categoría          |
| **PATCH**  | `/api/category/update/:id` | Actualiza una categoría existente |
| **DELETE** | `/api/category/delete/:id` | Elimina una categoría             |

---

### ⚙️ Producto (Repuesto)

| Método     | Endpoint                  | Descripción                     |
| ---------- | ------------------------- | ------------------------------- |
| **GET**    | `/api/product/`           | Obtiene todos los productos     |
| **POST**   | `/api/product/create`     | Crea un nuevo producto          |
| **PATCH**  | `/api/product/update/:id` | Actualiza un producto existente |
| **DELETE** | `/api/product/delete/:id` | Elimina un producto             |

--- 

## 🧱 Ejemplos de Datos Mock (JSON)

### ➕ Crear Usuario

```json
POST /api/user/create
{
  "name": "Matías",
  "lastName": "Alianelli",
  "email": "admin@example.com",
  "password": "123456789"
}
```

### 🔑 Login

```json
POST /api/user/login
{
  "email": "admin@example.com",
  "password": "123456789"
}
```

### ➕ Crear Categoría

```json
POST /api/category/create
{
  "name": "Filtros de aceite",
  "description": "Categoría de filtros de aceite para motor"
}
```

### ➕ Crear Producto

```json
POST /api/product/create
{
  "name": "Filtro de aceite",
  "description": "Filtro de aceite para Ford Ka Fly Viral 1.6 Rocam Zetec 2011",
  "stock": 5,
  "category": "<ID de la categoría correspondiente>"
}
```

---

## 🧠 Detalles Técnicos

- Las contraseñas se encriptan automáticamente con **bcrypt** antes de guardarse en la base de datos.
- El login **no utiliza JWT**, solo valida las credenciales del usuario.
- La conexión a la base de datos se realiza de forma **local**, en `mongodb://localhost`, utilizando el puerto configurado en `.env`.

---


## 🧩 Estructura del Proyecto

```
proyecto-catalogo-repuestos/
├── index.js
├── package.json
├── .env
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── userModel.js
    │   ├── categoryModel.js
    │   └── productModel.js
    ├── controllers/
    │   ├── userController.js
    │   ├── categoryController.js
    │   └── productController.js
    ├── services/
    │   ├── userService.js
    │   ├── categoryService.js
    │   └── productService.js
    └── routes/
        ├── userRoute.js
        ├── categoryRoute.js
        └── productRoute.js
```



---

## 🧩 Posibles Mejoras y Extensiones Futuras

- 🔗 **Integrar el Frontend (React)** para mostrar y administrar repuestos desde una interfaz visual.
- 🔒 Implementar **autenticación JWT** para proteger rutas y sesiones.
- ☁️ **Integrar AWS** (por ejemplo S3) para almacenar información sensible e imágenes, mejorando el rendimiento y la profesionalidad del renderizado.
- 🛒 Agregar **carrito de compras** y sistema de pedidos.
- ⚙️ Crear un **panel de administración** para gestionar productos, categorías y usuarios.
- ☁️ Migrar la base de datos a **MongoDB Atlas** para despliegue en la nube.
- 📱 Añadir endpoints para búsquedas y filtrado avanzado de productos.

---

## 👨‍💻 Autor

**Matías Alianelli**  
Curso Backend Web – UTN (Turno Noche)  
Octubre / Noviembre 2025

---
