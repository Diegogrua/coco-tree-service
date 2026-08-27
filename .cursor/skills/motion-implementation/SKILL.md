---

name: motion-implementation

description: Implementa el sistema de Motion Design de Coco Tree Service usando GSAP, ScrollTrigger, Lenis y React, siguiendo estrictamente las especificaciones del proyecto.

---

# Motion Implementation Skill

## Purpose

Implementar las animaciones e interacciones de Coco Tree Service a partir de las especificaciones definidas en el proyecto.

Esta skill convierte una especificación visual de movimiento en una implementación técnica utilizando:

- GSAP
- GSAP ScrollTrigger
- Lenis
- React
- Next.js
- CSS transforms
- CSS clip-path
- CSS masks cuando sean necesarias

La implementación debe priorizar:

1. narrativa visual;
2. fluidez;
3. control mediante scroll;
4. rendimiento;
5. responsive behavior;
6. accesibilidad;
7. mantenimiento del código.

No crear animaciones simplemente porque sean técnicamente posibles. Cada animación debe tener una función visual o narrativa.

---



# 1. Source of Truth

Antes de implementar cualquier animación, revisar:

- `motion-design.mdc`
- `architecture.mdc`
- `design-system.mdc`
- `project.mdc`
- Master Development Specification
- especificación de la sección correspondiente

Las reglas existentes del proyecto tienen prioridad sobre esta skill.

No modificar la arquitectura del proyecto para resolver una animación sin una necesidad técnica clara.

No crear nuevas tecnologías, librerías o patrones arquitectónicos si no están contemplados en el proyecto.

---



# 2. Animation Architecture

Las animaciones deben mantenerse separadas de la estructura visual.

Preferir:

Component

```
↓
```

Animation logic

```
↓
```

GSAP / ScrollTrigger

En lugar de mezclar grandes cantidades de lógica GSAP dentro del JSX.

Utilizar la estructura existente:

animations/

├── heroAnimations.ts

├── scrollAnimations.ts

├── parallax.ts

└── reveal.ts

Las funciones de animación deben ser reutilizables cuando exista un patrón repetido.

No crear una función genérica cuando solamente existe un caso único y la abstracción empeora la legibilidad.

---



# 3. GSAP Initialization

GSAP debe inicializarse únicamente en componentes Client cuando exista interacción con:

- DOM;
- window;
- document;
- ScrollTrigger;
- Lenis;
- viewport;
- eventos del navegador.

No convertir componentes Server en Client innecesariamente.

Mantener los límites Server/Client definidos por la arquitectura existente.

Cuando sea apropiado, utilizar `@gsap/react` y `useGSAP` para manejar el ciclo de vida de las animaciones React.

Las animaciones deben limpiarse correctamente cuando el componente se desmonta.

---



# 4. ScrollTrigger

Utilizar ScrollTrigger para:

- scroll reveal;
- parallax;
- pinning;
- scrub;
- section transitions;
- progress;
- image movement;
- text animation;
- camera simulation.

No utilizar listeners manuales de scroll cuando ScrollTrigger pueda resolver correctamente la interacción.

Cada ScrollTrigger debe tener:

- trigger claramente definido;
- start explícito;
- end explícito cuando sea necesario;
- comportamiento responsive cuando corresponda;
- cleanup.

Evitar crear cientos de triggers independientes cuando una timeline pueda coordinar varios elementos.

---



# 5. Lenis

Lenis será utilizado para proporcionar smooth scrolling.

El sistema de scroll debe mantener una integración consistente entre:

Lenis

   ↓

requestAnimationFrame

   ↓

GSAP

   ↓

ScrollTrigger

No crear múltiples instancias de Lenis.

No crear múltiples RAF loops independientes.

La inicialización debe realizarse una sola vez en el nivel apropiado de la aplicación.

La integración debe permitir que ScrollTrigger reciba correctamente las actualizaciones del scroll.

No implementar smooth scrolling manual adicional.

---



# 6. GSAP Timelines

Cuando varios elementos formen parte de una misma secuencia narrativa, utilizar una timeline.

Ejemplo conceptual:

Scene

 ├── background

 ├── foreground

 ├── text

 ├── CTA

 └── transition

La timeline debe permitir controlar:

- orden;
- duración;
- overlap;
- easing;
- sincronización.

Preferir:

timeline

```
.from(...)

.to(...)

.to(...)
```

cuando exista una secuencia relacionada.

No crear múltiples animaciones independientes para elementos que forman parte de una misma escena sin necesidad.

---



# 7. Scroll Scrub

Utilizar scrub cuando el movimiento deba estar directamente relacionado con la posición del scroll.

Adecuado para:

- cámara;
- zoom;
- parallax;
- profundidad;
- desplazamiento de imágenes;
- transformación de escenas;
- reveal progresivo.

Evitar scrub para microinteracciones simples que no necesitan depender del scroll.

El movimiento debe sentirse controlado y natural.

No utilizar valores de scrub excesivamente altos que produzcan una sensación de retraso artificial.

---



# 8. Camera Simulation

La sensación de movimiento de cámara se simulará principalmente mediante transformaciones.

Las técnicas principales serán:

- `scale`;
- `x`;
- `y`;
- `xPercent`;
- `yPercent`;
- parallax entre capas;
- movimiento relativo entre foreground, midground y background.

Para zoom/camera movement:

scale + position + layer movement

Utilizar `scale` como técnica principal para simular acercamiento o alejamiento de cámara cuando sea apropiado.

No mover únicamente una imagen si el objetivo visual es crear profundidad.

Combinar diferentes velocidades entre capas:

- Background → movimiento mínimo
- Midground → movimiento medio
- Foreground → movimiento mayor

La intensidad debe permanecer sutil.

---



# 9. Transform Strategy

Priorizar propiedades que puedan ser animadas eficientemente mediante transformaciones:

- `transform`;
- `opacity`.

Preferir `transform` y `opacity` sobre animar constantemente `top`, `left`, `width`, `height`, `margin` o `padding`.

No producir layout thrashing.

Cuando sea posible, utilizar `x`, `y`, `scale`, `rotation`, `scaleX`, `scaleY` en lugar de modificar propiedades de layout.

---



# 10. Parallax

El parallax debe utilizar diferencias de movimiento entre elementos.

Ejemplo:

- Background: `y` small movement
- Trees: `y` medium movement
- Foreground: `y` larger movement

No aplicar la misma velocidad a todos los elementos.

El objetivo es generar profundidad.

El parallax debe detenerse, reducirse o simplificarse cuando:

- el viewport sea pequeño;
- el dispositivo tenga poca capacidad;
- reduced motion esté activo.

---



# 11. Reveal Animations

Los reveals pueden utilizar:

- `opacity`;
- `translate`;
- `scale`;
- `clip-path`;
- masking.

Patrón preferido:

initial state

```
  ↓
```

trigger enters viewport

```
  ↓
```

animation

```
  ↓
```

stable final state

No utilizar animaciones infinitas para elementos de contenido.

Los reveals deben ejecutarse de manera consistente en toda la página.

---



# 12. Mask / Clip-Path

Utilizar `clip-path` o máscaras cuando la transición visual lo justifique.

Casos adecuados:

- apertura de imágenes;
- transición entre escenas;
- reveal del Hero;
- transición de fotografías;
- section transitions.

No utilizar máscaras solamente como decoración.

Las formas deben ser simples y compatibles con responsive layouts.

---



# 13. Text Animation

El sistema de texto puede utilizar:

- character reveal;
- word reveal;
- line reveal;
- `opacity`;
- `translate`;
- `clip-path`.

Preferir animación por palabras o líneas para textos normales.

Utilizar character animation únicamente cuando tenga una función visual clara.

No animar simultáneamente cada letra de grandes bloques de texto.

Los textos deben permanecer accesibles y semánticamente correctos.

No reemplazar contenido textual real por imágenes o canvas únicamente para conseguir una animación.

---



# 14. Hover Interactions

Los hover effects se utilizarán principalmente en:

- buttons;
- service cards;
- gallery items;
- navigation;
- interactive elements.

Deben ser:

- rápidos;
- sutiles;
- reversibles;
- consistentes.

No utilizar grandes desplazamientos ni efectos que dificulten la lectura.

En dispositivos sin hover, debe existir una alternativa funcional.

---



# 15. Magnetic Buttons

Los magnetic buttons pueden utilizarse únicamente en elementos donde aporten valor.

La interacción debe:

- detectar la posición relativa del cursor;
- aplicar un desplazamiento limitado;
- regresar suavemente al estado original;
- limpiarse correctamente.

No permitir desplazamientos excesivos.

No utilizar magnetic effects en mobile.

---



# 16. Responsive Motion

Las animaciones no deben asumir que desktop y mobile son iguales.

Utilizar GSAP responsive configuration cuando sea necesario.

Desktop puede utilizar:

- parallax;
- camera movement;
- múltiples capas;
- horizontal movement;
- pinning.

Mobile debe priorizar:

- menor distancia;
- menor cantidad de capas;
- menor escala;
- menor duración;
- menor complejidad.

No eliminar arbitrariamente una animación sin considerar su función narrativa.

---



# 17. Placeholder Assets

La implementación inicial debe funcionar sin las fotografías y videos definitivos.

Utilizar placeholders con:

- dimensiones conocidas;
- aspect ratio correcto;
- estructura equivalente;
- nombres temporales claros.

Las animaciones deben estar vinculadas al contenedor o elemento estructural y no depender de características específicas de una fotografía que todavía no existe.

Ejemplo:

Hero

 ├── background container

 ├── foreground container

 ├── content

 └── CTA

Los assets definitivos deben poder reemplazarse posteriormente sin reconstruir la lógica de animación.

No utilizar temporalmente imágenes con dimensiones completamente diferentes a las previstas si eso puede ocultar problemas de layout.

---



# 18. Loading States

Las animaciones no deben depender de que todos los assets estén completamente cargados para que la página sea funcional.

Cuando un asset sea necesario para una transición específica:

- esperar su disponibilidad cuando sea técnicamente necesario;
- evitar bloquear toda la página innecesariamente;
- utilizar poster/fallback;
- mantener dimensiones reservadas.

---



# 19. Reduced Motion

Respetar `prefers-reduced-motion`.

Cuando esté activo:

- reducir parallax;
- eliminar movimientos de cámara complejos;
- reducir scrub;
- evitar animaciones innecesarias;
- mantener reveals simples;
- preservar contenido y funcionalidad.

Reduced motion no debe eliminar contenido.

---



# 20. Cleanup

Toda animación debe poder destruirse correctamente.

Al desmontar componentes:

- matar timelines;
- eliminar ScrollTriggers asociados;
- eliminar event listeners;
- detener RAFs creados localmente;
- destruir instancias locales cuando corresponda.

Nunca dejar animaciones activas después de desmontar una sección.

---



# 21. Performance

Antes de agregar una animación preguntar:

1. ¿Es necesaria?
2. ¿Puede hacerse con `transformopacity`?
3. ¿Puede utilizar una timeline existente?
4. ¿Necesita realmente ScrollTrigger?
5. ¿Necesita realmente scrub?
6. ¿Necesita realmente parallax?

Evitar:

- loops innecesarios;
- múltiples RAF;
- listeners de scroll redundantes;
- animaciones de layout;
- cientos de elementos animándose simultáneamente;
- efectos permanentes sin propósito.

La calidad visual no debe obtenerse sacrificando rendimiento.

---



# 22. Implementation Workflow

Para cada animación:

- **Step 1:** Leer la especificación visual.
- **Step 2:** Identificar trigger, elementos, estado inicial, estado final, duración, easing, relación con scroll y responsive behavior.
- **Step 3:** Elegir la técnica (GSAP, ScrollTrigger, Timeline, scrub, parallax, clip-path, transform, opacity).
- **Step 4:** Implementar primero desktop.
- **Step 5:** Implementar responsive behavior.
- **Step 6:** Implementar reduced motion.
- **Step 7:** Verificar cleanup.
- **Step 8:** Revisar performance.
- **Step 9:** Verificar que la animación no haya alterado la arquitectura.

---



# 23. Code Quality

No crear:

- componentes gigantes;
- funciones de animación gigantes;
- código GSAP duplicado;
- valores mágicos repetidos;
- triggers sin nombre o propósito;
- animaciones imposibles de mantener.

Los valores específicos deben mantenerse cerca de la animación correspondiente o centralizarse cuando sean realmente compartidos.

Los nombres deben describir la intención `heroTimeline`, `heroCamera`, `heroParallax`, `servicesReveal`, `galleryReveal`). Evitar nombres ambiguos como `animation1` o `effect`.

---



# 24. Final Rule

La implementación debe responder siempre a:

Narrative

```
↓
```

Interaction

```
↓
```

Motion

```
↓
```

Technology

Nunca:

Technology

```
↓
```

Random Effect

```
↓
```

Visual Noise

GSAP, ScrollTrigger y Lenis son herramientas para implementar el diseño. No son el objetivo del diseño.