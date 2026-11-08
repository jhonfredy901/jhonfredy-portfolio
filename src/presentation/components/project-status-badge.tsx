import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/domain/types";

const labels: Record<ProjectStatus, string> = {
  lanzado: "Lanzado",
  "en-desarrollo": "En desarrollo",
  "en-produccion": "En producción",
};

const variants: Record<
  ProjectStatus,
  "secondary" | "accent" | "default"
> = {
  lanzado: "default",
  "en-desarrollo": "accent",
  "en-produccion": "secondary",
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}
