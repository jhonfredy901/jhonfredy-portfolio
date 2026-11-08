import Link from "next/link";
import { ExternalLink, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education } from "@/domain/types";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { StaggerGrid, StaggerItem } from "@/presentation/components/stagger-grid";
import { SectionHeader } from "@/presentation/components/section-header";

type EducationSectionProps = {
  items: Education[];
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="education" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Formación"
            title="Educación"
            description="Base académica en ingeniería y especialización en tecnología informática."
          />
        </MotionReveal>

        <StaggerGrid className="grid gap-6 md:grid-cols-2">
          {items.map((edu) => (
            <StaggerItem key={edu.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-start gap-2 text-lg">
                  <GraduationCap
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    {edu.degree}
                    {edu.field ? (
                      <span className="block text-sm font-normal text-muted-foreground">
                        {edu.field}
                      </span>
                    ) : null}
                  </span>
                </CardTitle>
                <p className="text-sm font-medium">
                  {edu.institutionUrl ? (
                    <Link
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {edu.institution}
                    </Link>
                  ) : (
                    edu.institution
                  )}
                </p>
                {edu.period ? (
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-4">
                {edu.highlights?.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
                {edu.publications?.map((pub) => (
                  <div
                    key={pub.articleUrl}
                    className="rounded-xl border border-border/70 bg-muted/20 p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                      Publicación
                    </p>
                    <p className="mt-1 font-heading text-sm font-semibold text-foreground">
                      {pub.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pub.journal}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Link
                        href={pub.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Artículo <ExternalLink className="size-3.5" />
                      </Link>
                      {pub.documentUrl ? (
                        <Link
                          href={pub.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-secondary hover:underline"
                        >
                          PDF / vista completa <ExternalLink className="size-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
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
