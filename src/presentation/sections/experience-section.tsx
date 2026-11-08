import Link from "next/link";
import { Briefcase } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/domain/types";
import { isPlaceholder } from "@/lib/placeholders";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { SectionHeader } from "@/presentation/components/section-header";
import { SkillChip } from "@/presentation/components/skill-chip";

type ExperienceSectionProps = {
  items: Experience[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Trayectoria"
            title="Experiencia"
            description="Línea de tiempo profesional: liderazgo técnico, productos en producción y formación."
          />
        </MotionReveal>

        <ol className="relative ml-3 space-y-8 border-l border-border pl-8 md:ml-6 md:pl-10">
          {items.map((job, index) => (
            <li key={job.id} className="relative">
              <MotionReveal delay={index * 0.04}>
              <span className="absolute -left-[calc(2rem+1px)] top-8 flex size-8 items-center justify-center rounded-full border border-primary/50 bg-background text-primary md:-left-[calc(2.75rem+1px)]">
                <Briefcase className="size-4" aria-hidden />
              </span>

              <Card className={job.isCurrent ? "ring-1 ring-primary/40" : undefined}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="text-xl">{job.role}</CardTitle>
                    {job.isCurrent ? (
                      <Badge variant="secondary">Actual</Badge>
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {job.companyUrl ? (
                      <Link
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        {job.company}
                      </Link>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                    {job.employmentType ? ` · ${job.employmentType}` : ""}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gray"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {job.achievements.some((a) => !isPlaceholder(a)) ? (
                    <div>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-secondary">
                        Logros
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.achievements
                          .filter((a) => !isPlaceholder(a))
                          .map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, index) => (
                        <SkillChip
                          key={`${job.id}-tech-${index}-${tech}`}
                          label={tech}
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
              </MotionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
