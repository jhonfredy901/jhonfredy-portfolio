"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Mail, MapPin, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Profile } from "@/domain/types";
import { withAssetPath } from "@/lib/asset-path";
import { isPlaceholder } from "@/lib/placeholders";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/presentation/components/social-icons";

type HeroContentProps = {
  hero: Profile["hero"];
  contact: Profile["contact"];
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroContent({ hero, contact }: HeroContentProps) {
  const reduceMotion = useReducedMotion();
  const showCvDownload = !isPlaceholder(hero.cvDownloadUrl);
  const motionProps = reduceMotion
    ? {}
    : { variants: stagger, initial: "hidden" as const, animate: "show" as const };

  return (
    <motion.div
      className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
      {...motionProps}
    >
      <motion.div
        variants={reduceMotion ? undefined : fadeUp}
        className="max-w-2xl"
      >
        <Badge
          variant="secondary"
          className="mb-6 gap-1.5 px-3 py-1.5 text-sm"
        >
          <Sparkles className="size-4" aria-hidden />
          Portfolio profesional
        </Badge>

        <h1
          id="hero-heading"
          className="font-heading text-[2.125rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
        >
          <span className="hero-title-gradient block">{hero.fullName}</span>
        </h1>

        <p className="mt-5 text-2xl font-medium leading-snug text-secondary sm:text-3xl md:text-[2rem]">
          {hero.role}
        </p>

        <p className="mt-4 flex flex-wrap items-center gap-2 text-base leading-relaxed text-foreground/85 md:text-lg">
          <MapPin className="size-5 shrink-0 text-secondary" aria-hidden />
          <span>
            {hero.location} · {hero.totalExperienceLabel}
          </span>
        </p>

        <motion.div
          className="mt-8 flex flex-wrap gap-2.5"
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          {hero.specialties.map((item) => (
            <motion.div key={item} variants={reduceMotion ? undefined : fadeUp}>
              <Badge
                variant="outline"
                className="border-border/80 px-3 py-1 text-sm text-foreground/90"
              >
                {item}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          {showCvDownload ? (
            <Link
              href={hero.cvDownloadUrl}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-12 px-5 text-base",
              )}
              download
            >
              Descargar CV
            </Link>
          ) : null}
          <HeroActionLink
            href={contact.githubUrl}
            variant="outline"
            reduceMotion={!!reduceMotion}
          >
            <GitHubIcon className="size-4" />
            GitHub
          </HeroActionLink>
          <HeroActionLink
            href={contact.linkedInUrl}
            variant="outline"
            reduceMotion={!!reduceMotion}
            external
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </HeroActionLink>
          <HeroActionLink href="#contact" variant="secondary" reduceMotion={!!reduceMotion}>
            <Mail className="size-4" aria-hidden />
            Contacto
          </HeroActionLink>
        </motion.div>
      </motion.div>

      <motion.div
        variants={reduceMotion ? undefined : fadeUp}
        className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end"
      >
        <motion.div
          className="relative"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div
            className="hero-photo-glow glass-card relative rounded-3xl p-3"
            aria-hidden
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/50 via-secondary/25 to-accent/40 opacity-90" />
            <div className="relative overflow-hidden rounded-[1.35rem] bg-background ring-1 ring-white/10">
              <Image
                src={withAssetPath(hero.photo.src)}
                alt={hero.photo.alt}
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HeroActionLink({
  href,
  variant,
  children,
  reduceMotion,
  external,
}: {
  href: string;
  variant: "default" | "outline" | "secondary";
  children: React.ReactNode;
  reduceMotion: boolean;
  external?: boolean;
}) {
  const className = cn(
    buttonVariants({ variant, size: "lg" }),
    "h-12 px-5 text-base",
    !reduceMotion && "transition-transform hover:scale-[1.03] active:scale-[0.98]",
  );

  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
