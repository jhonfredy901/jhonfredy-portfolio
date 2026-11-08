/** Prefija rutas de `public/` cuando el sitio se sirve bajo basePath (GitHub Pages). */
export function withAssetPath(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  if (!path.startsWith("/") || !base) {
    return path;
  }
  if (path === base || path.startsWith(`${base}/`)) {
    return path;
  }
  return `${base}${path}`;
}
