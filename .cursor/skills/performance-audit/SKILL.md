---

name: performance-audit

description: Audita el rendimiento de Coco Tree Service después de implementar componentes, animaciones, imágenes, video o nuevas funcionalidades.

---

# Performance Audit Skill 

## Purpose 

Evaluar el rendimiento técnico de la Landing Page de Coco Tree Service sin sacrificar la experiencia visual.

El objetivo es detectar problemas causados por:

- React;
- rendering;
- GSAP;
- ScrollTrigger;
- Lenis;
- imágenes;
- video;
- JavaScript;
- layout;
- assets;
- animaciones;
- responsive behavior.

---

# 1. Source of Truth

El audit debe respetar:

- `architecture.mdc`
- `design-system.mdc`
- `motion-design.mdc`
- `project.mdc`
- Master Development Specification.

No modificar arquitectura simplemente para obtener una mejora marginal de rendimiento.

Las optimizaciones deben mantener la intención visual.

---



# 2. Audit Trigger

Ejecutar esta skill después de:

- implementar una nueva sección;
- implementar una animación compleja;
- añadir video;
- añadir una galería;
- añadir muchas imágenes;
- modificar el Hero;
- integrar assets reales;
- realizar cambios importantes de JavaScript;
- preparar una versión para producción.

---



# 3. First Principle

Antes de optimizar identificar primero el problema.

No realizar optimizaciones especulativas.

Proceso:

Measure

   ↓

Identify bottleneck

   ↓

Determine cause

   ↓

Optimize

   ↓

Measure again

No asumir que una técnica es lenta sin comprobar su impacto.

---



# 4. React Performance

Revisar:

- unnecessary re-renders;
- excessive client components;
- duplicated state;
- unnecessary effects;
- large component trees;
- expensive calculations during render.

Verificar que Server Components permanezcan Server Components cuando no necesiten interactividad.

Evitar convertir `page.tsx` en Client Component sin necesidad.

---



# 5. Client Boundaries

Revisar cada "use client".

Preguntar:

¿Necesita realmente browser APIs?

¿Necesita state?

¿Necesita event handlers?

¿Necesita GSAP?

¿Necesita ScrollTrigger?

Si la respuesta es no, no debería ser Client Component.

Mantener los límites Client lo más pequeños posible.

---



# 6. GSAP Audit

Revisar:

- cantidad de timelines;
- cantidad de ScrollTriggers;
- animaciones duplicadas;
- triggers innecesarios;
- RAF loops;
- event listeners;
- cleanup;
- animations on mount;
- animations running continuously.

Detectar timelines que puedan agruparse.

Detectar ScrollTriggers creados repetidamente.

---



# 7. ScrollTrigger Audit

Para cada ScrollTrigger comprobar:

- Trigger exists
- Start is intentional
- End is intentional
- Scrub is necessary
- Pin is necessary
- Cleanup exists
- Responsive behavior exists

No utilizar `scrub` si una animación normal resuelve el problema.

No utilizar `pin` si no existe una razón narrativa o estructural.

---



# 8. Lenis Audit

Debe existir una única integración global.

Comprobar:

- Single Lenis instance
- Single RAF strategy
- ScrollTrigger synchronization
- Proper cleanup
- No duplicated scroll systems

No permitir:

Lenis + custom smooth scroll + manual scroll loop

simultáneamente.

---



# 9. Animation Properties

Priorizar animaciones de:

- `transform`
- `opacity`

Revisar animaciones de:

- `top`
- `left`
- `width`
- `height`
- `margin`
- `padding`

Si producen layout recalculation innecesario, reemplazarlas por transforms cuando sea visualmente equivalente.

---



# 10. Layout Stability

Revisar:

- imágenes sin dimensiones;
- videos sin espacio reservado;
- fonts causing layout shifts;
- dynamically inserted elements;
- expanding content;
- animations that alter layout.

Evitar que un asset cargado posteriormente mueva el contenido de la página.

Especialmente revisar:

- Hero
- Gallery
- Services
- Video
- Images

---



# 11. Image Audit

Para cada imagen importante revisar:

- Format
- Dimensions
- Compression
- Loading strategy
- Priority
- Responsive sizing
- Aspect ratio
- Alt text

Preferir formatos modernos cuando sean compatibles.

No cargar imágenes enormes cuando el tamaño de renderizado es pequeño.

Utilizar `next/image` cuando corresponda.

No cargar todas las imágenes de una galería al mismo nivel de prioridad.

---



# 12. Hero Image Audit

El Hero tiene prioridad especial.

Revisar:

- Hero image
- Hero poster
- Hero video
- Mobile assets
- Desktop assets
- Initial payload

El recurso principal debe ser optimizado cuidadosamente porque afecta directamente la percepción de velocidad.

Evitar cargar simultáneamente:

desktop video + mobile video + large fallback image

si el navegador solamente necesita uno de ellos.

---



# 13. Video Audit

Para cada video:

- Format
- Resolution
- Bitrate
- Duration
- Poster
- Autoplay
- Muted
- Loop
- Preload
- Mobile behavior

Los background videos deben evitar audio automático.

No utilizar videos innecesariamente grandes.

Cuando el video no sea necesario inmediatamente, evitar cargarlo con prioridad máxima.

---



# 14. Lazy Loading

Aplicar lazy loading cuando el recurso:

- no está en el viewport inicial;
- es pesado;
- pertenece a una sección inferior;
- no es necesario para el primer render.

No aplicar lazy loading indiscriminadamente al contenido crítico.

El Hero y contenido above-the-fold deben tratarse de forma diferente al contenido inferior.

---



# 15. JavaScript Audit

Buscar:

- dependencias innecesarias;
- código duplicado;
- imports excesivos;
- librerías no utilizadas;
- lógica ejecutándose durante cada frame;
- listeners innecesarios;
- cálculos repetitivos.

No añadir librerías para resolver problemas que pueden resolverse con las tecnologías existentes.

---



# 16. Per-Frame Work

Todo código ejecutado continuamente durante scroll o animation frame debe ser revisado cuidadosamente.

Preguntar:

¿Es necesario cada frame?

¿Puede ejecutarse solamente cuando cambia algo?

¿Puede GSAP manejarlo?

¿Puede CSS manejarlo?

¿Puede reducirse la frecuencia?

Evitar realizar:

- DOM queries repetidas;
- layout measurements repetidas;
- cálculos pesados;
- React state updates

en cada frame sin necesidad.

---



# 17. DOM Complexity

Revisar especialmente:

- Hero
- Services
- Gallery

No crear cientos de elementos únicamente para conseguir un efecto visual.

Preferir una estructura visual eficiente.

Si un efecto puede lograrse con 1 element, no utilizar 20 elements sin una razón visual clara.

---



# 18. CSS Audit

Buscar:

- reglas duplicadas;
- valores inconsistentes;
- estilos innecesarios;
- animaciones CSS duplicadas;
- selectors excesivamente complejos;
- estilos que contradicen Tailwind/design tokens.

No crear archivos CSS adicionales sin necesidad.

---



# 19. Mobile Performance

Mobile debe recibir una revisión independiente.

Comprobar:

- CPU usage
- Scroll smoothness
- Animation complexity
- Video behavior
- Image payload
- Touch interaction
- Memory
- Layout stability

No asumir que una animación que funciona perfectamente en desktop funcionará igual en mobile.

---



# 20. Reduced Motion Audit

Comprobar que `prefers-reduced-motion` reduzca correctamente:

- parallax;
- camera movement;
- large transforms;
- continuous animations;
- unnecessary reveals.

La página debe seguir siendo funcional.

---



# 21. Accessibility Performance

Verificar:

- keyboard navigation;
- focus visibility;
- readable content;
- semantic HTML;
- contrast;
- reduced motion;
- interactive controls.

Una optimización no puede eliminar una característica necesaria de accesibilidad.

---



# 22. Asset Naming and Organization

Revisar que los assets mantengan:

public/

├── images/

│   ├── hero/

│   ├── services/

│   ├── gallery/

│   └── process/

│

├── videos/

│   └── hero/

│

├── icons/

└── logo/

Los nombres deben ser descriptivos.

Evitar:

- `final.jpg`
- `new.jpg`
- `test.jpg`
- `image1.jpg`
- `IMG_3827.jpg`

cuando el asset ya tiene una función conocida.

---



# 23. Performance Regression

Después de optimizar:

Before

   ↓

Change

   ↓

After

Comparar nuevamente.

No considerar una optimización válida solamente porque el código parece más limpio.

Debe existir una mejora observable o una reducción razonable de complejidad.

---



# 24. Severity Classification

Clasificar problemas como:

- **Critical:** Problemas que afectan directamente funcionalidad, carga inicial, estabilidad, interacción o crashes.
- **High:** Problemas importantes que afectan scroll, animation smoothness, mobile, large assets o excessive JavaScript.
- **Medium:** Problemas que pueden afectar rendimiento bajo determinadas condiciones.
- **Low:** Mejoras menores sin impacto significativo.

No invertir tiempo excesivo en problemas Low mientras existan problemas Critical o High.

---



# 25. Audit Workflow

Ejecutar:

1. Inspect architecture
2. Inspect recent changes
3. Inspect client boundaries
4. Inspect GSAP
5. Inspect ScrollTrigger
6. Inspect Lenis
7. Inspect images
8. Inspect video
9. Inspect layout stability
10. Inspect responsive behavior
11. Inspect accessibility
12. Identify bottlenecks
13. Apply targeted optimizations
14. Re-test
15. Report remaining issues

---



# 26. Do Not Over-Optimize

No sacrificar:

- visual quality;
- narrative;
- usability;
- accessibility;
- maintainability

por una optimización insignificante.

La prioridad es:

Correctness

```
↓
```

User Experience

```
↓
```

Performance

```
↓
```

Micro-optimization

---



# 27. Final Audit Report

Cuando termine el audit, informar de forma estructurada:

PERFORMANCE AUDIT

Critical:

- ...

High:

- ...

Medium:

- ...

Low:

- ...

Optimizations applied:

- ...

Remaining risks:

- ...

Recommended next measurement:

- ...

No afirmar que el sitio está "optimizado" sin haber identificado y revisado los principales puntos de riesgo.

---



# 28. Final Rule

El objetivo no es hacer el código más complejo para hacerlo "más rápido".

El objetivo es:

Less unnecessary work

- 

Efficient rendering

- 

Efficient assets

- 

Controlled animation

- 

Stable layout

- 

Responsive behavior

=

High-quality performance