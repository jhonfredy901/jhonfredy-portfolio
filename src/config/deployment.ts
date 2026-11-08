export const deploymentTargets = {
  vercel: {
    id: "vercel",
    staticExport: false,
    notes: "Despliegue estándar Next.js; no requiere NEXT_PUBLIC_BASE_PATH.",
  },
  githubPages: {
    id: "github-pages",
    staticExport: true,
    outputDir: "out",
    notes:
      "Definir NEXT_PUBLIC_BASE_PATH con el nombre del repositorio si se usa Project Pages.",
  },
} as const;

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
}
