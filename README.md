# Portfolio — Jhon Fredy Hernández Castro

Aplicación web de portfolio y CV profesional con **Next.js 15**, **TypeScript**, **Tailwind CSS** y export estático (GitHub Pages / Vercel).

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run clean   # si ves errores 500 o manifests corruptos
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si el puerto está ocupado, detén procesos anteriores o usa el puerto que indique la consola.

## Build y export

```bash
npm run build   # genera la carpeta out/ (sitio estático)
npm run export  # alias de build
```

Para **GitHub Pages** con Project Pages, define `NEXT_PUBLIC_BASE_PATH` (nombre del repo) antes del build.

## Scripts útiles

| Script        | Descripción                          |
|---------------|--------------------------------------|
| `npm run lint` | ESLint                              |
| `npm run format` | Prettier                          |
| `npm run dev:turbo` | Dev con Turbopack (opcional)   |

## Arquitectura

Ver `docs/ARCHITECTURE.md` y `docs/DESIGN.md`.

Datos del perfil: `src/data/profile/`. Edita contenido sin tocar la UI.

## Fases del proyecto

1. Arquitectura — ✅  
2. Diseño UI — ✅  
3. Componentes y pulido — ✅  
4. GitHub API — pendiente  
5. SEO avanzado — pendiente  
6. Optimización — pendiente
