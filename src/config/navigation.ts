export type NavSectionId =
  | "hero"
  | "about"
  | "experience"
  | "skills"
  | "stack"
  | "projects"
  | "github"
  | "education"
  | "certifications"
  | "contact";

export type NavItem = {
  id: NavSectionId;
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { id: "hero", label: "Inicio", href: "#hero" },
  { id: "about", label: "Sobre mí", href: "#about" },
  { id: "experience", label: "Experiencia", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "projects", label: "Proyectos", href: "#projects" },
  { id: "github", label: "GitHub", href: "#github" },
  { id: "education", label: "Educación", href: "#education" },
  { id: "certifications", label: "Certificaciones", href: "#certifications" },
  { id: "contact", label: "Contacto", href: "#contact" },
];
