# Fase 2 — Sistema de diseño UI

## Principios

- **Fondo** `#050816` con orbes de color suaves (sin animación compleja).
- **Glassmorphism** en cards (`.glass-card`).
- **Tipografía**: Inter (cuerpo), Space Grotesk (títulos).
- **Jerarquía**: `SectionHeader` (eyebrow + título + descripción) en cada bloque.
- **Accesibilidad**: navegación por anclas, focus visible, contraste AA, `sr-only` donde aplica.

## Layout

- `SiteHeader` sticky con blur al scroll; menú móvil.
- Contenedor `section-container` (max-width 6xl).
- Ritmo vertical `section-padding` (16/24).

## Componentes reutilizables

| Componente | Uso |
|------------|-----|
| `Card` / `Badge` / `Button` | Primitivos UI |
| `SectionHeader` | Encabezados de sección |
| `SkillChip` | Skills con estilo placeholder |
| `MediaFrame` | Imágenes o fallback de proyecto |

## Secciones

`hero` → `contact` según `src/config/navigation.ts`.

## Fase 3 — Implementación (completada)

- `MotionReveal` y `StaggerGrid` (Framer Motion) con `prefers-reduced-motion`
- Hover sutil en cards, botón «Volver arriba»
- Grids responsivos en proyectos (1 / 2 / 3 columnas)
- Timeline de experiencia con entrada progresiva al scroll
