import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillCategory } from "@/domain/types";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/presentation/components/stagger-grid";
import { SectionHeader } from "@/presentation/components/section-header";
import { SkillChip } from "@/presentation/components/skill-chip";

type SkillsSectionProps = {
  items: SkillCategory[];
};

export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Competencias"
            title="Skills"
            description="Capacidades técnicas y humanas agrupadas por dominio."
          />
        </MotionReveal>

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((category) => (
            <StaggerItem key={category.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{category.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <SkillChip
                    key={`${category.id}-${index}-${item}`}
                    label={item}
                  />
                ))}
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
