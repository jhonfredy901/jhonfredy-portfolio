import { Badge } from "@/components/ui/badge";
import { isPlaceholder } from "@/lib/placeholders";

export function SkillChip({ label }: { label: string }) {
  return (
    <Badge variant={isPlaceholder(label) ? "placeholder" : "outline"}>
      {label}
    </Badge>
  );
}
