---

name: hero-development

description: Construye y mantiene el Hero cinematográfico de Coco Tree Service siguiendo su narrativa, arquitectura, sistema visual y sistema de movimiento.

---

# Hero Development Skill

## Purpose 

Desarrollar el Hero principal de Coco Tree Service.

El Hero debe funcionar como una experiencia cinematográfica que introduce al usuario desde la naturaleza hacia la actividad profesional de Coco Tree Service.

La secuencia conceptual es:

FOREST

   ↓

DISCOVERY

   ↓

CAMERA MOVEMENT

   ↓

REVEAL

   ↓

TREE SERVICE ACTIVITY

   ↓

INTRODUCTION

El Hero debe comunicar:

- profesionalismo;
- confianza;
- seguridad;
- conexión con la naturaleza;
- capacidad técnica;
- identidad premium.

---

# 1. Source of Truth

Antes de modificar el Hero revisar:

- `motion-design.mdc`
- `architecture.mdc`
- `design-system.mdc`
- `project.mdc`
- Master Development Specification
- documentación específica del Hero.

No cambiar la arquitectura general del proyecto para implementar el Hero.

---



# 2. Hero Architecture

La estructura existente es:

components/

└── sections/

```
└── Hero/

    ├── Hero.tsx

    ├── HeroBackground.tsx

    ├── HeroContent.tsx

    ├── HeroCTA.tsx

    └── ScrollIndicator.tsx
```

La lógica de animación estará separada:

animations/

└── heroAnimations.ts

No convertir `Hero.tsx` en un archivo monolítico.

---



# 3. Hero Structure

El Hero debe contener conceptualmente:

Hero

│

├── Background

│

├── Depth Layers

│   ├── Background

│   ├── Midground

│   └── Foreground

│

├── Content

│   ├── Eyebrow / Label

│   ├── H1

│   ├── Supporting text

│   └── CTA

│

├── Navigation

│

└── Scroll Indicator

Los elementos exactos deben respetar el Master Development Specification.

---



# 4. Initial Production Without Final Assets

La primera versión debe construirse sin esperar las fotografías o videos definitivos.

Utilizar placeholders estructurados.

Los placeholders deben representar:

- hero background
- hero midground
- hero foreground
- content
- CTA

Debe ser posible sustituir `placeholder` por:

- `hero-forest-desktop.webp`
- `hero-forest-mobile.webp`

sin reescribir las animaciones.

No construir la lógica alrededor de un archivo específico.

---



# 5. Hero Scene 1 — Forest

Estado inicial:

Forest + Depth + Minimal content

La escena debe sentirse:

- amplia;
- profunda;
- tranquila;
- cinematográfica.

El contenido debe tener suficiente contraste.

No colocar demasiados elementos visuales.

---



# 6. Hero Scene 2 — Discovery

Al desplazarse:

Scroll

   ↓

Camera movement

   ↓

Forest layers move

   ↓

Environment opens

El movimiento debe utilizar principalmente:

- `scale`;
- `yyPercent`;
- `xxPercent`;
- parallax;
- `opacity`;
- `clip-path` cuando sea necesario.

La sensación de cámara debe conseguirse mediante el movimiento coordinado de las capas.

---



# 7. Camera Simulation

La cámara será simulada mediante transforms.

Ejemplo conceptual:

- **Background:** small movement
- **Midground:** medium movement
- **Foreground:** larger movement
- **Main scene:** scale increase

El scale puede utilizarse para crear:

- zoom in;
- zoom out;
- aproximación;
- sensación de avance.

No utilizar una única imagen escalada si la escena requiere profundidad.

---



# 8. Depth System

El Hero debe utilizar capas cuando el asset lo permita.

Conceptualmente:

- **Layer 1:** Background
- **Layer 2:** Trees / environment
- **Layer 3:** Foreground vegetation
- **Layer 4:** Content

Cada capa puede tener diferente:

- `scale`;
- `x`;
- `y`;
- `opacity`;
- movement speed.

No es obligatorio crear capas artificiales si los assets disponibles no lo justifican.

---



# 9. Hero Timeline

La secuencia debe poder representarse mediante una timeline.

Conceptualmente:

Hero Intro

```
↓
```

Background reveal

```
↓
```

Foreground reveal

```
↓
```

Text reveal

```
↓
```

CTA reveal

```
↓
```

Scroll-driven scene

```
↓
```

Environmental transition

No ejecutar todas las animaciones simultáneamente.

Utilizar overlaps intencionales cuando mejoren la sensación cinematográfica.

---



# 10. Text Animation

El texto principal debe aparecer de forma controlada.

Orden preferido:

Eyebrow

```
↓
```

H1

```
↓
```

Supporting text

```
↓
```

CTA

El H1 tiene prioridad visual.

No utilizar animaciones excesivamente complejas que dificulten la lectura.

---



# 11. CTA

El CTA principal debe ser visible y funcional desde el inicio.

El CTA puede utilizar:

- reveal;
- hover;
- arrow movement;
- subtle scale;
- color transition.

No ocultar el CTA durante largos periodos.

El CTA debe seguir siendo usable aunque las animaciones estén desactivadas.

---



# 12. Scroll Indicator

El indicador debe comunicar que la experiencia continúa.

Puede utilizar:

- `opacity`;
- vertical movement;
- subtle loop.

Debe ser discreto.

No debe competir con el H1 o CTA.

---



# 13. Transition to Introduction

El final del Hero debe conducir visualmente hacia Introduction.

Evitar una transición abrupta:

Hero → hard cut → white section

Preferir una transición donde:

Hero scene

```
↓
```

visual movement

```
↓
```

section reveal

```
↓
```

Introduction

La transición debe respetar la narrativa:

Nature → Activity → Professional service

---



# 14. Hero Video

Si posteriormente se utiliza video, la ruta `public/videos/hero/` puede contener:

- `hero-forest-desktop.mp4`
- `hero-forest-mobile.mp4`

con `poster` y `fallback`.

El video no debe bloquear la carga inicial. Debe:

- ser muted cuando sea background video;
- utilizar autoplay solamente cuando corresponda;
- utilizar loop cuando corresponda;
- tener poster;
- tener fallback;
- respetar reduced motion;
- evitar descargar innecesariamente recursos pesados en mobile.

---



# 15. Responsive Hero

Desktop puede utilizar:

- mayor profundidad;
- mayor scale;
- más capas;
- parallax;
- camera movement;
- transiciones complejas.

Mobile debe priorizar:

- legibilidad;
- estabilidad;
- menor cantidad de movimiento;
- menor cantidad de capas;
- menor consumo de recursos.

El Hero debe conservar la narrativa aunque la versión mobile sea simplificada.

---



# 16. Mobile Asset Strategy

Si existen assets diferentes para mobile `desktop asset` vs `mobile asset`), la selección debe hacerse de forma eficiente.

No cargar simultáneamente dos videos pesados cuando solamente uno será utilizado.

El sistema debe evitar que el navegador descargue recursos innecesarios.

---



# 17. Hero Height

El Hero debe utilizar una altura que permita la experiencia completa sin provocar problemas de viewport.

No asumir que `height: 100vh;` es siempre correcto.

Considerar:

- mobile browser UI;
- contenido;
- CTA;
- safe areas;
- responsive viewport.

---



# 18. Performance

El Hero es la sección visualmente más compleja. Por ello:

- limitar cantidad de elementos animados;
- utilizar transforms;
- utilizar opacity;
- evitar layout animation;
- optimizar imágenes;
- optimizar video;
- evitar múltiples RAF;
- utilizar una arquitectura GSAP controlada;
- evitar animaciones innecesarias.

El Hero debe ser impresionante sin convertirse en el principal cuello de botella de la página.

---



# 19. Accessibility

Debe existir:

- H1 real;
- contenido textual real;
- CTA accesible;
- navegación accesible;
- contraste suficiente;
- keyboard navigation;
- reduced motion.

Las animaciones nunca deben ser necesarias para comprender el contenido.

---



# 20. Development Order

Construir el Hero en este orden:

1. HTML / React structure
2. Layout
3. Placeholder assets
4. Typography
5. CTA
6. Static visual composition
7. GSAP initialization
8. Intro timeline
9. ScrollTrigger
10. Camera simulation
11. Parallax
12. Scene transition
13. Responsive motion
14. Reduced motion
15. Performance optimization
16. Final asset integration

No comenzar por efectos complejos antes de que la estructura estática sea correcta.

---



# 21. Asset Replacement

Cuando lleguen las fotografías definitivas `placeholder` → `real asset`), la estructura de componentes y la lógica de animación deben permanecer estables siempre que las dimensiones y función del asset sean compatibles.

Si el nuevo asset requiere modificar la composición, ajustar el layout y no reconstruir innecesariamente todo el sistema.

---



# 22. Final Validation

Antes de considerar el Hero terminado comprobar:

- Desktop / Tablet / Mobile
- Initial load / Scroll / Hover / Reduced motion
- Placeholder assets / Real assets
- Fast connection / Slow connection
- Keyboard / Screen reader basics

También comprobar que `Hero.tsx` no haya acumulado lógica que debería permanecer en:

- `HeroBackground.tsx`
- `HeroContent.tsx`
- `HeroCTA.tsx`
- `ScrollIndicator.tsx`
- `heroAnimations.ts`

