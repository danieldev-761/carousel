# 🎞️ Carrusel de Imágenes (Auto + Manual)

Este proyecto es un carrusel de imágenes hecho con HTML, CSS y JavaScript.
Permite cambiar imágenes automáticamente y también manualmente con botones.

---

## Características

* Cambio automático cada 4 segundos
* Botones para avanzar y retroceder
* Diseño responsive (pantalla completa)
* Texto superpuesto sobre las imágenes
* Funciona con cualquier número de imágenes
* Transición suave entre slides

---

## Tecnologías usadas

* HTML5
* CSS3 (Flexbox + animaciones)
* JavaScript (DOM básico)

---

##  Estructura del proyecto

```id="f2k39d"
/project
│── index.html
│── style.css
│── script.js
```

---

##  Cómo usar

1. Descarga o clona el proyecto
2. Abre `index.html` en tu navegador
3. Disfruta el carrusel 🎉

---

##  Cómo funciona

* Las imágenes están en un contenedor horizontal (`flex`)
* Se usa `transform: translateX()` para moverlas
* JavaScript controla el índice de la imagen actual
* El carrusel es infinito (loop)

---

## 🔧 Personalización

### Cambiar imágenes

Solo agrega o elimina `<img>` dentro de:

```html id="9g1k2x"
<div class="slides">
```

---

### Cambiar velocidad

En `script.js`:

```javascript id="0ab2xz"
setInterval(siguiente, 4000);
```

cambia `4000` por otro valor (milisegundos)

---

### Cambiar texto

Edita el contenido dentro de:

```html id="k92mqp"
<div class="text">
```

---

## Notas importantes

* Se usa `flex-shrink: 0` para evitar que las imágenes se deformen
* Las imágenes usan `object-fit: cover` para adaptarse al tamaño
* El carrusel funciona con cualquier cantidad de imágenes

---

## Mejoras futuras

* Indicadores (puntos abajo)
* Pausar al pasar el mouse
* Soporte para swipe en móvil
* Animaciones más avanzadas

---

## Autor

Proyecto desarrollado por [Daniel Echeverría]

---
