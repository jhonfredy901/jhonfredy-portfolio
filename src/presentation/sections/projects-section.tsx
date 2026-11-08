import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/domain/types";
import { isPlaceholder } from "@/lib/placeholders";
import { MediaFrame } from "@/presentation/components/media-frame";
import { ProjectStatusBadge } from "@/presentation/components/project-status-badge";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import {
  StaggerGrid,
  StaggerItem,
} from "@/presentation/components/stagger-grid";
import { SectionHeader } from "@/presentation/components/section-header";

type ProjectsSectionProps = {
  items: Project[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Portafolio"
            title="Proyectos"
            description="Productos propios y para clientes: móvil, web corporativa, gestión empresarial y sistemas en producción desde hace años."
          />
        </MotionReveal>

        <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <StaggerItem key={project.id}>
            <Card className="flex h-full flex-col overflow-hidden">
              <CardHeader className="pb-4">
                <MediaFrame
                  src={project.image.src}
                  alt={project.image.alt}
                  className="mb-4 aspect-video rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">
                    {project.title}
                  </CardTitle>
                  {project.status ? (
                    <ProjectStatusBadge status={project.status} />
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={`${project.id}-tech-${index}-${tech}`}
                      variant={isPlaceholder(tech) ? "placeholder" : "muted"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  {project.repositoryUrl ? (
                    <Link
                      href={project.repositoryUrl}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositorio <ExternalLink className="size-3.5" />
                    </Link>
                  ) : null}
                  {project.demoUrl && !isPlaceholder(project.demoUrl) ? (
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1 text-sm text-secondary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo <ExternalLink className="size-3.5" />
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
