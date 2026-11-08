/**
 * Tokens de marca — fuente única para Tailwind (globals.css) y componentes.
 * Fase 2 refinará glassmorphism y sombras.
 */
export const brandColors = {
  background: "#050816",
  primary: "#4F46E5",
  secondary: "#06B6D4",
  accent: "#A855F7",
  success: "#10B981",
  white: "#FFFFFF",
  gray: "#94A3B8",
} as const;

export const brandFonts = {
  sans: "var(--font-inter)",
  heading: "var(--font-space-grotesk)",
} as const;
