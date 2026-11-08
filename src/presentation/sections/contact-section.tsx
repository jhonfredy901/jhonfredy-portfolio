import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/presentation/components/social-icons";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContactInfo } from "@/domain/types";
import { MotionReveal } from "@/presentation/components/motion-reveal";
import { SectionHeader } from "@/presentation/components/section-header";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  contact: ContactInfo;
};

const channels = [
  { key: "email", icon: Mail, label: "Correo" },
  { key: "linkedInUrl", icon: LinkedInIcon, label: "LinkedIn" },
  { key: "githubUrl", icon: GitHubIcon, label: "GitHub" },
  { key: "whatsAppUrl", icon: MessageCircle, label: "WhatsApp" },
] as const;

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding border-t border-border/50">
      <div className="section-container">
        <MotionReveal>
          <SectionHeader
            eyebrow="Hablemos"
            title="Contacto"
            description="Disponible para conversar sobre liderazgo técnico, productos escalables y colaboración."
            align="center"
          />
        </MotionReveal>

        <MotionReveal delay={0.08}>
        <Card className="mx-auto max-w-3xl">
          <CardHeader className="text-center">
            <CardTitle>¿Construimos algo juntos?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ key, icon: Icon, label }) => {
                const href = contact[key];
                if (!href) return null;
                const isEmail = key === "email";

                return (
                  <Link
                    key={key}
                    href={isEmail ? `mailto:${href}` : href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-auto justify-start gap-3 px-4 py-4",
                    )}
                  >
                    <Icon className="size-5 shrink-0 text-secondary" aria-hidden />
                    <span className="text-left">
                      <span className="block text-xs text-muted-foreground">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-foreground">
                        {isEmail ? href : label}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
        </MotionReveal>
      </div>
    </section>
  );
}
