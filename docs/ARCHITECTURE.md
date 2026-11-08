# Arquitectura — Portfolio Jhon Fredy Hernández Castro

## Capas (Clean Architecture — frontend)

```
src/
├── app/                    # Next.js App Router (rutas, layout, metadata)
├── config/                 # Constantes: sitio, navegación, tema, despliegue
├── domain/types/           # Contratos TypeScript (sin dependencias externas)
├── data/                   # Fuente de verdad del perfil (LinkedIn → TS)
├── infrastructure/         # Integraciones externas (GitHub API — Fase 4)
├── lib/                    # Utilidades transversales (cn, placeholders)
├── presentation/           # UI: pages, sections, layouts, components
├── components/ui/          # shadcn/ui (primitivos)
└── hooks/                  # Hooks compartidos
```

### Flujo de dependencias

`app` → `presentation` → `data` → `domain`  
`infrastructure` → `domain`  
`presentation` no importa `infrastructure` directamente en server components salvo en composición explícita (Fase 4).

## Despliegue

- **Vercel**: `npm run build` (sin `NEXT_PUBLIC_BASE_PATH`).
- **GitHub Pages**: `output: 'export'` → carpeta `out/`. Definir `NEXT_PUBLIC_BASE_PATH` si aplica.

## Datos

`src/data/profile/profile.data.ts` contiene información del perfil público de LinkedIn.  
Los campos sin fuente pública usan el prefijo `[Pendiente — dato no público en LinkedIn]`.
