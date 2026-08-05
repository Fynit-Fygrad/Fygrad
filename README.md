# FyGrad

**Science, published.**
FyGrad es una plataforma moderna orientada a la investigación y la ciencia, construida con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) en tu sistema.

## 🛠 Instalación y Configuración

Sigue estos pasos para correr el proyecto de forma local en tu computadora:

1. **Clona el repositorio** o descarga el código.
2. **Abre una terminal** en la raíz del proyecto (la carpeta donde se encuentra este archivo `README.md`).
3. **Instala las dependencias** ejecutando el siguiente comando:
   ```sh
   npm install
   ```

## 💻 Entorno de Desarrollo

Para iniciar el servidor local y visualizar la web mientras trabajas:

```sh
npm run dev
```
Esto iniciará el servidor de desarrollo de Astro. Abre tu navegador y dirígete a `http://localhost:4321`. Cualquier cambio que guardes en el código se reflejará instantáneamente en el navegador.

## 🏗 Construcción para Producción

Cuando estés listo para subir tu web a internet (producción):

```sh
npm run build
```
Esto generará los archivos estáticos hiper-optimizados de tu sitio dentro de la carpeta `dist/`. Esos son los archivos que subirás a tu servidor, hosting o servicio en la nube (como Vercel, Netlify, GitHub Pages, etc.).

También puedes previsualizar cómo quedó tu build de producción de manera local con:
```sh
npm run preview
```

## 📁 Estructura del Proyecto

```text
/
├── public/       # Archivos estáticos como imágenes, íconos y videos (Ej. /assets/Video de fondo.mp4)
├── src/
│   ├── components/ # Componentes reutilizables (Navbar, Footer, Hero, etc.)
│   ├── layouts/    # Plantillas base (Layout.astro)
│   ├── pages/      # Vistas de la aplicación. Astro enruta automáticamente cada .astro aquí
│   │   ├── index.astro       # Landing Page
│   │   ├── nosotros.astro    # Página de Nosotros
│   │   └── proyectos/        # Rutas dinámicas de detalle (Ej. [slug].astro)
│   └── data/       # Bases de datos y configuraciones estáticas (Ej. projects.ts)
└── package.json    # Dependencias y scripts de Node.js
```
