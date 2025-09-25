# 🏴‍☠️ Búsqueda del Tesoro - Juego Personalizado

Un juego interactivo de búsqueda de tesoro personalizado para tu fiesta de cumpleaños, creado con HTML5, TypeScript y SCSS.

## 🎮 Cómo Jugar

1. **Abre `index.html`** en tu navegador web
2. **Ingresa tu nombre** de aventurero
3. **Completa los 4 desafíos** respondiendo preguntas sobre ti
4. **Gana piezas del mapa** por cada desafío completado
5. **Descubre la ubicación** de tu fiesta de cumpleaños al completar todos los desafíos

## 🛠️ Personalización

### Cambiar las Preguntas y Respuestas

Edita el archivo `script.js` y modifica la sección `challenges`:

```javascript
this.challenges = [
  {
    id: 1,
    title: "🎵 Tu Canción Favorita",
    description: "¿Cuál es tu género musical favorito?",
    type: 'question',
    completed: false,
    question: "¿Qué tipo de música prefieres escuchar?",
    options: ["Rock", "Pop", "Reggaeton", "Clásica", "Electrónica"],
    correctAnswer: 0, // Cambia este número (0-4) según tu respuesta
    hint: "Piensa en lo que más te relaja o energiza"
  },
  // ... más desafíos
];
```

### Cambiar la Ubicación Final

Modifica la variable `finalLocation` en `script.js`:

```javascript
this.finalLocation = "🏠 Tu Dirección Real - Calle Principal #123, Tu Ciudad";
```

### Personalizar Colores y Estilo

Edita el archivo `styles.scss` y modifica las variables de color:

```scss
$primary-color: #8B4513; // Marrón madera
$secondary-color: #DAA520; // Dorado
$accent-color: #FF6347; // Rojo coral
$background-color: #F5F5DC; // Beige
```

## 📁 Estructura del Proyecto

```
Game/
├── index.html          # Página principal
├── styles.css          # Estilos compilados
├── styles.scss         # Archivo SCSS original
├── script.js           # JavaScript compilado
├── script.ts           # TypeScript original
└── README.md           # Este archivo
```

## 🎯 Características

- ✅ **Interfaz Responsiva**: Funciona en móviles y escritorio
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales
- ✅ **Progreso Visual**: Mapa del tesoro que se completa gradualmente
- ✅ **Sistema de Pistas**: Cada pregunta incluye una pista
- ✅ **Mensajes de Feedback**: Notificaciones de éxito y error
- ✅ **Fácil Personalización**: Modifica preguntas, respuestas y ubicación

## 🚀 Cómo Ejecutar

1. Abre `index.html` en cualquier navegador moderno
2. ¡Disfruta tu aventura personalizada!

## 💡 Ideas para Personalizar

- **Preguntas sobre tu vida**: Añade preguntas sobre tu infancia, familia, amigos
- **Fotos**: Incluye imágenes que tengas que identificar
- **Minijuegos**: Añade rompecabezas o juegos de memoria
- **Música**: Agrega sonidos de fondo temáticos
- **Temas**: Cambia el tema visual (piratas, exploradores, detectives, etc.)

¡Que disfrutes tu fiesta de cumpleaños! 🎉

