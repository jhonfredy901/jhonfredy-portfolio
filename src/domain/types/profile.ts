import type { Certification } from "./certification";
import type { ContactInfo } from "./contact";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Project } from "./project";
import type { SkillCategory } from "./skill";

export type ProfileHero = {
  fullName: string;
  role: string;
  specialties: string[];
  location: string;
  totalExperienceLabel: string;
  photo: {
    src: string;
    alt: string;
  };
  cvDownloadUrl: string;
};

export type ProfilePersonal = {
  life: string;
  values: string;
  hobbies: string;
};

export type ProfileAbout = {
  headline: string;
  professionalSummary: string[];
  leadershipHighlights: string[];
  personal: ProfilePersonal;
  designPhilosophy: string;
};

export type TechStackItem = {
  name: string;
  category: string;
};

export type Profile = {
  hero: ProfileHero;
  about: ProfileAbout;
  experience: Experience[];
  skills: SkillCategory[];
  techStack: TechStackItem[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  contact: ContactInfo;
};
