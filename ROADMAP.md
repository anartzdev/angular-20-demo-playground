# Roadmap de actualización a Angular 20 para desarrolladores experimentados

## Nivel 1: Sólidas Bases de Angular Moderno (Angular 15+)

- **Proyectos de Práctica:**
  - **Mini-App de Notas (Standalone Components):** Crea una pequeña aplicación CRUD para gestionar notas.
    - **Objetivo:** Dominar los **Standalone Components**, el pilar de la arquitectura moderna.
    - **Tecnologías:** Standalone Components, `Input()`, `Output()`, `ChangeDetectionStrategy.OnPush`.
  - **Blog con Routing (Functional Guards & Interceptors):** Desarrolla un blog simple con autenticación básica.
    - **Objetivo:** Implementar los nuevos **Functional Guards y Functional Interceptors**.
    - **Tecnologías:** Standalone Router, Functional Guards (`canActivate`, `canDeactivate`), Functional Interceptors.

## Nivel 2: Productividad y Rendimiento (Angular 16+)

- **Proyectos de Práctica:**
  - **Galería de Imágenes con Lazy Loading:** Construye una galería con múltiples categorías.
    - **Objetivo:** Aplicar el **Lazy Loading con `loadComponent()`** para optimizar la carga.
    - **Tecnologías:** Standalone Router, Lazy Loading, `defer` (si aplica).
  - **Dashboard con APIs (RxJS Observables):** Crea un dashboard que consume datos de varias APIs.
    - **Objetivo:** Refrescar el uso de **RxJS (`pipe`, `map`, `filter`, `switchMap`)** en el nuevo contexto de Angular.
    - **Tecnologías:** `HttpClient`, RxJS, tipado estricto en los servicios.

---

## Nivel 3: El Futuro de Angular (Angular 17+)

- **Proyectos de Práctica:**
  - **Sitio Web con SSR y RSC (Server-Side Rendering & Reactivity):** Un sitio web con contenido estático pero con componentes interactivos.
    - **Objetivo:** Comprender la implementación de **Server-Side Rendering (SSR) e Hydration**, y la reactividad.
    - **Tecnologías:** Angular Universal, Hydration, Signals, `zone.js` (y cómo convive con Signals).
  - **Aplicación con Signals y Control Flow:** Una aplicación de lista de tareas o similar.
    - **Objetivo:** Adoptar el nuevo **Control Flow (`@for`, `@if`, `@switch`) y los Signals** como reemplazo de los observables.
    - **Tecnologías:** Signals, `@for`, `@if`, `@switch`, `@defer`.

---

## Nivel 4: Angular 20 y Más Allá

- **Proyectos de Práctica:**
  - **Web Components y Micro-Frontends:** Integra un componente de Angular en una app con otra tecnología.
    - **Objetivo:** Explorar las capacidades de Angular para crear **Web Components** y su integración en arquitecturas de **Micro-Frontends**.
    - **Tecnologías:** Angular Elements, Nx Monorepo (opcional).
  - **Aplicación con Features Experimentales:** Una app que utiliza las últimas funcionalidades.
    - **Objetivo:** Investigar las **características experimentales o beta** de Angular 20.
    - **Tecnologías:** Novedades de Angular 20 (según el momento del desarrollo).