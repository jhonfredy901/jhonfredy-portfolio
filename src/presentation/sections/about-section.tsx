import type { ProfileAbout } from "@/domain/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { SectionHeader } from "@/presentation/components/section-header";
import { Gamepad2, Heart, Home, Lightbulb, Palette, Sparkles } from "lucide-react";

type AboutSectionProps = {
  about: ProfileAbout;
};

const personalBlocks = [
  { key: "life" as const, title: "Vida", icon: Home },
  { key: "values" as const, title: "Valores", icon: Heart },
  { key: "hobbies" as const, title: "Gustos y aficiones", icon: Gamepad2 },
];

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
        <SectionHeader
          eyebrow="Perfil"
          title="Sobre mí"
          description={about.headline}
        />
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="size-5 text-secondary" aria-hidden />
                Trayectoria profesional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {about.professionalSummary.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experiencia clave</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {about.leadershipHighlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-5 text-accent" aria-hidden />
                Vida, valores y aficiones
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
              {personalBlocks.map(({ key, title, icon: Icon }) => (
                <div
                  key={key}
                  className="rounded-xl border border-border/60 bg-muted/10 p-4"
                >
                  <h3 className="font-heading mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Icon className="size-4 text-secondary" aria-hidden />
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {about.personal[key]}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-5 text-primary" aria-hidden />
                Diseño centrado en el usuario
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>{about.designPhilosophy}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
