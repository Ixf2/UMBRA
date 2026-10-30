# UMBRA

Proyecto interdisciplinario con React, Vite y React Router. Preparación de la entrega de Inicio y navegación: portada en modo oscuro, interfaces, formularios de prueba, accesibilidad y mensajes al usuario.

**Estado actual:** las últimas ediciones de `App.jsx` y del mapa de navegación dejan activas únicamente Inicio y Login. Las demás interfaces permanecen preparadas en sus archivos, pendientes de reconectar si forman parte del alcance de esta entrega.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir la dirección que indique Vite. Para verificar:

```bash
npm test
npm run build
```

## Cómo se conecta

`index.html` proporciona `#root`. `src/main.jsx` carga los estilos globales y monta `App` dentro de `BrowserRouter`. `src/App.jsx` compone la cabecera y la navegación, configura las rutas y abre las fichas en un diálogo.

- `src/pages/`: interfaces de cada ruta.
- `src/components/`: componentes reutilizables, formularios, feedback y diálogos.
- `src/data/`: personajes de ejemplo y mapa de navegación.
- `src/hooks/`: preferencias de accesibilidad.
- `src/utils/`: validación de formularios.
- `src/index.css`: tipografías y estilos globales.
- `src/App.css`: composición, modo oscuro y estilos de interfaz.
- `public/`: imágenes, fuentes locales y licencias.

## Alcance de esta entrega

Sin endpoints, autenticación real ni CRUD. Los formularios validan campos de prueba y explican el resultado; no envían ni guardan credenciales, cuentas o personajes. Solo las preferencias de accesibilidad se guardan en el navegador. La biblioteca usa los datos de ejemplo de `characters.js`.

Las rutas activas son Inicio y Login. Se han preparado además Biblioteca, Inspiración, Perfil, Crear personaje, Registro, Ayuda, Accesibilidad y una página 404. Actualmente no están conectadas al enrutador y los botones de Crear personaje y Ver todos están desactivados.

## Rúbrica y seguimiento

- [Repositorio](https://github.com/Ixf2/UMBRAJoanaRamirez)
- Tablero de GitHub Projects.

Las imágenes son recursos generados para el proyecto; los prompts están en [public/images/ASSETS.md](public/images/ASSETS.md). Las licencias de las fuentes están en `public/fonts/`.

## Publicación futura

Esta tarea prepara el proyecto local. Al publicar con `BrowserRouter`, configurar el alojamiento para que las rutas de la aplicación devuelvan `index.html`. La aplicación mostrará su interfaz 404 cuando la ruta no exista. Vite ya permite comprobar estas rutas durante el desarrollo.
