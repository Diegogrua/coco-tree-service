---

name: section-development

description: Implementa las secciones de la Landing Page de Coco Tree Service respetando la arquitectura, los datos, componentes reutilizables, sistema visual y sistema de movimiento definidos por el proyecto.

---

# Section Development Skill

## Purpose 

Construir las secciones de la Landing Page de Coco Tree Service de forma modular, reutilizable, mantenible y consistente.

Secciones principales:

Hero

Introduction

Services

Process

Gallery

FAQ

CTA

Footer

La implementación debe respetar la arquitectura existente.

---

# 1. Source of Truth

Antes de implementar una sección revisar:

- `architecture.mdc`
- `design-system.mdc`
- `motion-design.mdc`
- `project.mdc`
- Master Development Specification
- documentación específica de la sección.

No crear una arquitectura alternativa.

---

# 2. Section Architecture

La estructura principal es:

components/

└── sections/

```
├── Hero/

├── Introduction/

├── Services/

├── Process/

├── Gallery/

├── FAQ/

├── CTA/

└── Footer/
```

Cada sección es responsable de su propia composición.

`page.tsx` únicamente orquesta:























No colocar la implementación completa de las secciones dentro de `page.tsx`.

---



# 3. Data Separation

El contenido debe mantenerse separado de la estructura visual.

Utilizar:

data/

├── services.ts

├── process.ts

├── gallery.ts

├── testimonials.ts

└── faq.ts

Ejemplo conceptual:

services.ts

```
 ↓
```

Services.tsx

```
 ↓
```

ServiceCard.tsx

No escribir grandes cantidades de contenido directamente dentro de JSX cuando ese contenido pertenece a un dataset.

---



# 4. Reusable Components

Utilizar los componentes existentes:

components/

├── ui/

│   ├── Button.tsx

│   ├── Icon.tsx

│   ├── Badge.tsx

│   └── Divider.tsx

│

├── cards/

│   ├── ServiceCard.tsx

│   ├── ProcessStep.tsx

│   ├── GalleryItem.tsx

│   └── Testimonial.tsx

│

└── forms/

```
├── EstimateForm.tsx

└── FormField.tsx
```

No duplicar componentes que ya existen.

---



# 5. Component Responsibility

Cada componente debe tener una responsabilidad clara.

- **Section:** composition
- **Card:** reusable visual unit
- **UI:** small reusable primitive
- **Data:** content
- **Animation:** movement

No permitir que un componente sea simultáneamente:

- dataset;
- layout;
- form validation;
- animation engine;
- global configuration.

---



# 6. Section Structure

Una sección puede seguir esta estructura conceptual:

Section

├── SectionHeader

├── SectionContent

├── Reusable components

└── Section interaction

No crear archivos adicionales si la sección no tiene suficiente complejidad para justificarlo.

La estructura debe crecer según la complejidad real.

---



# 7. Services

Services debe utilizar:

data/services.ts

```
    ↓
```

Services.tsx

```
    ↓
```

ServiceCard.tsx

Cada servicio debe compartir la misma estructura visual base.

La variación debe provenir de los datos, no de duplicar componentes.

Los cards pueden utilizar:

- fotografía;
- overlay;
- title;
- description;
- interaction indicator;
- hover;
- expansion;
- parallax.

La implementación debe respetar el Design System.

---



# 8. Process

Process debe utilizar:

data/process.ts

```
    ↓
```

Process.tsx

```
    ↓
```

ProcessStep.tsx

La sección debe comunicar una progresión.

Visualmente:

Step 01

   ↓

Step 02

   ↓

Step 03

   ↓

Step 04

El movimiento debe reforzar la progresión.

No utilizar animaciones excesivas.

---



# 9. Gallery

Gallery debe utilizar:

data/gallery.ts

```
    ↓
```

Gallery.tsx

```
    ↓
```

GalleryItem.tsx

Puede utilizar:

- image reveal;
- horizontal movement;
- parallax;
- hover;
- before/after.

La implementación debe funcionar inicialmente con placeholders.

Los assets reales podrán sustituirse posteriormente.

---



# 10. FAQ

FAQ debe priorizar:

- claridad;
- accesibilidad;
- rapidez;
- interacción sencilla.

El patrón principal será un accordion.

La interacción debe funcionar con:

- mouse;
- touch;
- keyboard.

La animación debe ser discreta.

No utilizar una animación compleja solamente para abrir/cerrar contenido.

---



# 11. CTA

CTA debe conducir al usuario hacia la acción principal.

Puede utilizar:

- reveal;
- subtle parallax;
- CTA hover;
- arrow animation;
- background movement.

El CTA debe permanecer funcional independientemente del estado de las animaciones.

---



# 12. Footer

Footer debe ser visualmente simple.

Debe contener la información definida por el proyecto.

No añadir efectos innecesarios.

El movimiento debe ser mínimo.

---



# 13. Responsive Layout

Cada sección debe diseñarse considerando:

- Desktop
- Tablet
- Mobile

No utilizar desktop como única fuente de verdad.

Verificar:

- typography;
- spacing;
- grid;
- cards;
- images;
- navigation;
- interactions;
- animations.

No resolver responsive solamente mediante ocultar contenido.

---



# 14. Responsive Motion

Las animaciones deben adaptarse al viewport.

Desktop puede utilizar:

- parallax;
- horizontal movement;
- hover;
- larger reveals.

Mobile debe utilizar:

- simplified reveal;
- smaller movement;
- touch-compatible interaction.

Hover-only functionality no puede ser necesaria para comprender o utilizar una sección.

---



# 15. Placeholder Assets

Durante la primera etapa:

- No final photography required.
- No final video required.

Utilizar placeholders con:

- correct aspect ratio;
- correct approximate dimensions;
- realistic content hierarchy.

La sección debe poder reemplazar los assets posteriormente.

No utilizar nombres temporales como:

- `final.jpg`
- `final2.jpg`
- `new.jpg`
- `image123.jpg`

Los assets reales deben seguir nombres descriptivos.

---



# 16. Images

Cuando se integren fotografías reales:

- respetar aspect ratio;
- evitar layout shift;
- utilizar optimización apropiada;
- utilizar `next/image` cuando corresponda;
- definir dimensiones o comportamiento de sizing;
- utilizar `alt` descriptivo cuando la imagen sea informativa;
- utilizar `alt` vacío cuando sea puramente decorativa.

No usar imágenes como sustituto de contenido textual importante.

---



# 17. Section Spacing

Utilizar el sistema de spacing del Design System.

Preferir valores consistentes basados en:

4 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128

No introducir valores arbitrarios sin necesidad.

La separación entre secciones debe crear ritmo visual.

---



# 18. Typography

Utilizar únicamente las familias y jerarquías definidas por el Design System.

No introducir nuevas fuentes para una sola sección.

Mantener:

- Display
- Heading
- Body
- Small
- Button

consistentes en toda la Landing.

---



# 19. Color

Utilizar únicamente los tokens definidos:

- Forest Green
- Dark Forest
- Off White
- White
- Safety Orange

No inventar colores nuevos para resolver una sección.

El naranja debe funcionar como acento y no convertirse accidentalmente en el color principal de la interfaz.

---



# 20. Animation Integration

Las animaciones de sección deben permanecer separadas del layout cuando la complejidad lo justifique.

Utilizar:

animations/

├── scrollAnimations.ts

├── parallax.ts

└── reveal.ts

No duplicar lógica GSAP entre múltiples secciones.

Si existe un patrón común, reutilizarlo.

Si una animación es exclusiva de una sección, mantenerla localizada.

---



# 21. Server / Client

Mantener Server Components por defecto.

Convertir una sección o componente en Client solamente cuando necesite:

- browser APIs;
- state interactivo;
- event handlers;
- GSAP;
- ScrollTrigger;
- Lenis interaction;
- otras funcionalidades strictly client-side.

No convertir toda la página en Client solamente porque una sección necesita animación.

---



# 22. Forms

Los formularios deben utilizar:

forms/

├── EstimateForm.tsx

└── FormField.tsx

La validación debe seguir las reglas existentes del proyecto.

No implementar validación duplicada dentro de cada campo.

No mezclar la lógica de validación con animaciones.

---



# 23. TypeScript

Utilizar los tipos definidos en:

types/index.ts

Los datos deben estar tipados.

Evitar:

`any`

sin una razón técnica.

Los componentes reutilizables deben recibir props explícitas.

---



# 24. Implementation Workflow

Para cada sección:

1. Read specification
2. Identify content
3. Identify data source
4. Build static structure
5. Connect data
6. Integrate reusable components
7. Apply Design System
8. Implement responsive layout
9. Implement interactions
10. Implement motion
11. Add placeholders
12. Test accessibility
13. Test performance
14. Replace assets when available

No comenzar por la animación.

Primero debe existir una estructura sólida.

---



# 25. Validation

Una sección se considera correctamente implementada cuando:

- Architecture ✓
- Data separation ✓
- Reusable components ✓
- Design System ✓
- Responsive ✓
- Accessibility ✓
- Motion ✓
- Performance ✓
- Placeholder compatibility ✓

No considerar terminada una sección únicamente porque "se ve bien".

---



# 26. Final Rule

Cada sección debe responder claramente:

What is displayed?

```
    ↓
```

Where does the content come from?

```
    ↓
```

Which components render it?

```
    ↓
```

How does it interact?

```
    ↓
```

How does it move?

```
    ↓
```

How does it behave on mobile?

```
    ↓
```

How does it perform?

La implementación debe permanecer simple hasta que la complejidad visual realmente la justifique.