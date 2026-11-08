import type { TechStackItem } from "@/domain/types";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/presentation/components/stagger-grid";
import { SectionHeader } from "@/presentation/components/section-header";

type StackSectionProps = {
  items: TechStackItem[];
};

export function StackSection({ items }: StackSectionProps) {
  const grouped = items.reduce<Record<string, TechStackItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section id="stack" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Tecnología"
            title="Stack tecnológico"
            description="Herramientas y plataformas con las que construyo soluciones end-to-end."
          />
        </MotionReveal>

        <StaggerGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([category, tools]) => (
            <StaggerItem key={category}>
            <div aria-label={category}>
              <p className="font-heading mb-3 text-sm font-medium text-secondary">
                {category}
              </p>
              <div className="glass-card rounded-2xl p-4">
                <div role="list" className="flex flex-wrap">
                  {tools.map((tool, index) => (
                    <Badge
                      key={`${category}-${index}-${tool.name}`}
                      variant="outline"
                      className="m-1"
                      role="listitem"
                    >
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
