import Link from "next/link";

import { GitHubIcon } from "@/presentation/components/social-icons";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { SectionHeader } from "@/presentation/components/section-header";

export function GitHubSection() {
  return (
    <section id="github" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Código abierto"
            title="GitHub"
            description="Repositorios y lenguajes destacados — integración con la API pública en Fase 4."
          />
        </MotionReveal>

        <MotionReveal delay={0.06}>
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            <CardHeader className="border-b border-border/50 lg:border-b-0 lg:border-r">
              <CardTitle className="flex items-center gap-2">
                <GitHubIcon className="size-5" />
                @{siteConfig.githubUsername}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4 py-8">
              <p className="text-sm text-muted-foreground">
                Aquí se listarán repositorios, lenguajes más usados y proyectos
                destacados consumiendo la API de GitHub.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default" })}
                >
                  <GitHubIcon className="size-4" />
                  Ver perfil
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
        </MotionReveal>
      </div>
    </section>
  );
}
