export const PLACEHOLDER_MARKER = "[Pendiente — dato no público en LinkedIn]";

export function placeholder(label: string): string {
  return `${PLACEHOLDER_MARKER} ${label}`;
}

export function isPlaceholder(value: string): boolean {
  return value.startsWith(PLACEHOLDER_MARKER);
}
