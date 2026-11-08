import { getProfile } from "@/data";
import { BackgroundGlow } from "@/presentation/layouts/background-glow";
import { SiteFooter } from "@/presentation/layouts/site-footer";
import { SiteHeader } from "@/presentation/layouts/site-header";
import { AboutSection } from "@/presentation/sections/about-section";
import { CertificationsSection } from "@/presentation/sections/certifications-section";
import { ContactSection } from "@/presentation/sections/contact-section";
import { EducationSection } from "@/presentation/sections/education-section";
import { ExperienceSection } from "@/presentation/sections/experience-section";
import { GitHubSection } from "@/presentation/sections/github-section";
import { HeroSection } from "@/presentation/sections/hero-section";
import { ProjectsSection } from "@/presentation/sections/projects-section";
import { SkillsSection } from "@/presentation/sections/skills-section";
import { StackSection } from "@/presentation/sections/stack-section";
import { BackToTop } from "@/presentation/components/back-to-top";

export function HomePage() {
  const profile = getProfile();

  return (
    <>
      <BackgroundGlow />
      <SiteHeader />
      <main id="main-content">
        <HeroSection hero={profile.hero} contact={profile.contact} />
        <AboutSection about={profile.about} />
        <ExperienceSection items={profile.experience} />
        <SkillsSection items={profile.skills} />
        <StackSection items={profile.techStack} />
        <ProjectsSection items={profile.projects} />
        <GitHubSection />
        <EducationSection items={profile.education} />
        <CertificationsSection items={profile.certifications} />
        <ContactSection contact={profile.contact} />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
