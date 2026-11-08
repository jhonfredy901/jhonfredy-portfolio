import type { Profile } from "@/domain/types";

import { HeroContent } from "./hero-content";

type HeroSectionProps = {
  hero: Profile["hero"];
  contact: Profile["contact"];
};

export function HeroSection({ hero, contact }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-container relative min-h-[88vh] section-padding pb-20 pt-24 md:min-h-[90vh] md:pt-32 lg:flex lg:items-center"
      aria-labelledby="hero-heading"
    >
      <HeroContent hero={hero} contact={contact} />
    </section>
  );
}
