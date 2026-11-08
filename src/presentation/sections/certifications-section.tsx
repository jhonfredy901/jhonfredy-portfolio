import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Certification } from "@/domain/types";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { StaggerGrid, StaggerItem } from "@/presentation/components/stagger-grid";
import { SectionHeader } from "@/presentation/components/section-header";

type CertificationsSectionProps = {
  items: Certification[];
};

export function CertificationsSection({ items }: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="section-padding border-t border-border/50"
    >
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Credenciales"
            title="Certificaciones"
            description="Formación continua en DevOps, Scrum, idiomas y buenas prácticas."
          />
        </MotionReveal>

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert) => (
            <StaggerItem key={cert.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-start gap-2 text-base leading-snug">
                  <Award
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  {cert.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {cert.issuerUrl ? (
                    <Link
                      href={cert.issuerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                    >
                      {cert.issuer}
                    </Link>
                  ) : (
                    cert.issuer
                  )}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {cert.issuedAt ? (
                  <Badge variant="muted">{cert.issuedAt}</Badge>
                ) : null}
                {cert.credentialId ? (
                  <p className="text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                ) : null}
                {cert.credentialUrl ? (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Ver credencial <ExternalLink className="size-3.5" />
                  </Link>
                ) : null}
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
