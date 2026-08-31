# Portfolio — Alan Andrés Díaz De Jesús

Portfolio personal para solicitar una pasantía en el área de informática.
Sitio estático construido desde cero, sin frameworks, pensado para publicarse
gratis en GitHub Pages.

## Qué es

Una página de una sola vista (`index.html`) con las secciones:

- Inicio / presentación
- Sobre mí
- Tecnologías y habilidades
- Proyectos (base de datos SQL Server, página web, aplicación en C#, ejercicios en Python)
- Formación
- Contacto
- Footer

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** puro (variables CSS, Grid y Flexbox, sin frameworks)
- **JavaScript vanilla** (menú móvil y animaciones de aparición al hacer scroll)
- Tipografías de Google Fonts: **Space Grotesk** (títulos) e **Inter** (texto)

No se usa React, Vue, Bootstrap, Tailwind ni ninguna dependencia externa además
de las fuentes.

## Estructura de archivos

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/          → capturas de los proyectos (placeholders en .svg)
│   └── documents/        → aquí va tu CV en PDF
└── README.md
```

## Cómo ejecutarlo localmente

No necesita instalación ni servidor. Basta con abrir `index.html` en el
navegador (doble clic, o clic derecho → "Abrir con" → tu navegador).

## Cómo modificarlo

- **Textos**: edita directamente `index.html`. Todo lo que debes reemplazar
  está marcado como `[EDITAR: ...]`.
- **Colores y tipografía**: al inicio de `style.css` hay una sección de
  variables (`:root { ... }`) donde puedes cambiar el color de acento, los
  fondos y las fuentes desde un solo lugar.
- **Imágenes de proyectos**: reemplaza los archivos `assets/images/proyecto-01.svg`,
  `proyecto-02.svg`, etc. por tus propias capturas. Puedes usar `.jpg` o `.png`;
  solo actualiza la extensión en el atributo `src` de cada `<img>` en `index.html`.
- **CV**: coloca tu PDF en `assets/documents/CV-Alan-Andres.pdf` (ese nombre
  exacto, o cambia la ruta en el botón "Descargar CV" dentro de `index.html`).

## Cómo publicarlo en GitHub Pages

Ver la guía paso a paso completa en la conversación donde se generó este
proyecto, o resumidamente:

1. Crea un repositorio en GitHub (por ejemplo `portfolio`).
2. Sube estos archivos al repositorio.
3. Ve a **Settings → Pages**, selecciona la rama `main` y la carpeta `/root`.
4. Guarda. GitHub te dará un enlace público del tipo:
   `https://tu-usuario.github.io/portfolio/`

## Licencia

Uso personal — Alan Andrés Díaz De Jesús, 2026.
