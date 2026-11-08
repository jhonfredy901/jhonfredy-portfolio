# Portfolio — Jhon Fredy Hernández Castro

Sitio de portfolio y CV con **Next.js**, **TypeScript**, **Tailwind CSS** y export estático (GitHub Pages / Vercel).

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si aparecen errores de manifests, ejecuta `npm run clean` y vuelve a iniciar el servidor.

## Build

```bash
npm run build
```

Genera la carpeta `out/` para despliegue estático. En **GitHub Pages** (Project Pages), define `NEXT_PUBLIC_BASE_PATH` con el nombre del repositorio antes del build.

## Contenido

Los datos del perfil están en `src/data/profile/`. La estructura del proyecto se documenta en `docs/ARCHITECTURE.md` y `docs/DESIGN.md`.
