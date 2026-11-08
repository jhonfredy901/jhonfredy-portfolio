import type { Profile } from "@/domain/types";
import { placeholder } from "@/lib/placeholders";
import { siteConfig } from "@/config/site";

import { educationItems } from "./education.data";
import { experienceItems } from "./experience.data";
import { projectItems } from "./projects.data";
import { skillCategories, techStackItems } from "./skills.data";

/**
 * LinkedIn público + información proporcionada por el titular.
 * Usar `placeholder()` solo donde falte dato verificable.
 */
export const profileData: Profile = {
  hero: {
    fullName: siteConfig.author.name,
    role: "Senior Software Engineer IT",
    specialties: [
      "Senior Java Developer",
      "AI-Driven Software Engineer",
      "Ingeniero de Sistemas y Computación",
      "Magíster en Tecnología Informática",
    ],
    location: siteConfig.author.location,
    totalExperienceLabel: "13+ años de experiencia",
    photo: {
      src: "/images/jhon-fredy-hernandez.jpg",
      alt: `Fotografía profesional de ${siteConfig.author.name}`,
    },
    cvDownloadUrl: placeholder("enlace de descarga del CV"),
  },
  about: {
    headline:
      "Ingeniero de Sistemas y Computación | Magíster en Tecnología Informática | Senior Java Developer | AI-Driven Software Engineer",
    professionalSummary: [
      "Ingeniero de sistemas y computación con sólida experiencia en diseño, desarrollo y liderazgo de soluciones tecnológicas end-to-end, actualmente enfocado en la construcción de productos escalables en entornos de alto rendimiento.",
      "Cuento con experiencia liderando iniciativas de desarrollo desde la conceptualización hasta la entrega continua, trabajando de la mano con equipos de Producto, Negocio y UX/UI para definir soluciones de alto impacto alineadas a objetivos estratégicos.",
      "He sido instructor y profesor de informática, compartiendo conocimiento para el crecimiento y el entendimiento de otros profesionales a nivel técnico y tecnológico.",
      "En los últimos proyectos he integrado herramientas de inteligencia artificial y desarrollo asistido, optimizando la productividad y calidad del software mediante el uso de plataformas como GitHub Copilot, Cursor, Claude Code, Gemini y Codex. He aplicado enfoques modernos como Software Driven Development (SDD) y desarrollo en entornos agénticos para automatización de tareas, generación de código y aceleración de ciclos de entrega.",
      "Experiencia en bases de datos relacionales y NoSQL (Oracle, PostgreSQL, MySQL, SQL Server, MongoDB), así como en administración de servidores Linux y Windows.",
      "Me enfoco en generar soluciones eficientes, escalables y de alto impacto, integrando prácticas modernas de ingeniería de software con el potencial de la inteligencia artificial.",
    ],
    leadershipHighlights: [
      "Liderazgo técnico y gestión ágil (Scrum, Kanban)",
      "Definición y ejecución de planes de trabajo y roadmap técnico",
      "Implementación de pipelines de Integración y Despliegue Continuo (CI/CD)",
      "Diseño y ejecución de estrategias de pruebas (QA)",
      "Entrega continua de funcionalidades (continuous delivery)",
      "Versionamiento de código con GitHub",
      "Docencia e instructura en informática: compartir conocimiento para el crecimiento de otros profesionales",
      "Liderazgo de proyectos de investigación con publicación en revistas indexadas a nivel nacional",
    ],
    personal: {
      life: "Soy padre de dos hijos, uno de 3 años y otro de 11; estoy casado. Procuro pasar tiempo de calidad con mi familia y compartir buenos momentos con las personas más cercanas.",
      values:
        "Me considero una persona en quien confiar: comprometido y responsable. Soy organizado y creo en el aprendizaje continuo como una habilidad que no pasa de moda y que me permite seguir creciendo.",
      hobbies:
        "Me gusta el fútbol y suelo practicarlo en mis ratos libres. Disfruto los videojuegos; llevo años siendo fanático de la saga HALO.",
    },
    designPhilosophy:
      "Antes de pensar en código, me pongo en el lugar de quien va a usar la pantalla. Me importan los colores porque orientan y transmiten confianza; me importa la funcionalidad porque cada clic debe tener sentido. Mi regla es sencilla: si yo entrara sin manual, ¿entendería en segundos qué hace esto y cómo avanzar? Si la respuesta es sí, estoy en el camino correcto; si no, toca simplificar hasta que lo sea.",
  },
  experience: experienceItems,
  skills: skillCategories,
  techStack: techStackItems,
  projects: projectItems,
  education: educationItems,
  certifications: [
    {
      id: "certidevops-2021",
      name: "DevOps Essentials Professional Certificate",
      issuer: "CertiProf",
      issuerUrl: "https://www.linkedin.com/company/certiprof",
      issuedAt: "May 2021",
      credentialId: "JLPTPDKHSS-HHQWQHCV-YBQQJDSDWJ",
    },
    {
      id: "scrum-master-2021",
      name: "Scrum Master Professional Certificate",
      issuer: "CertiProf",
      issuerUrl: "https://www.linkedin.com/company/certiprof",
      issuedAt: "Feb 2021",
      credentialId: "FLCPCCWJDT-DJHLRJGD-WHNNHDWKZD",
      credentialUrl:
        "https://www.youracclaim.com/badges/bbeaec67-80fa-4496-8c36-c74ba4b54053",
    },
    {
      id: "efset-2021",
      name: "Certificate English Level",
      issuer: "EF Standard English Test (EF SET)",
      issuerUrl: "https://www.linkedin.com/company/efset",
      issuedAt: "Ene 2021",
      credentialUrl: "https://efset.org/cert/bMbgJs",
    },
    {
      id: "platzi-git-2020",
      name: "Curso profesional de Git y GitHub",
      issuer: "Platzi",
      issuerUrl: "https://www.linkedin.com/school/platzi-inc",
      issuedAt: "Dic 2020",
      credentialId: "17a77241-f760-490e-ba93-839e245e75e3",
      credentialUrl:
        "https://platzi.com/@jhon-fredy-hernandez-castro/curso/1194-git-appsco/diploma/detalle/",
    },
    {
      id: "lifelong-2020",
      name: "Lifelong Learning",
      issuer: "CertiProf",
      issuerUrl: "https://www.linkedin.com/company/certiprof",
      issuedAt: "Ago 2020",
      credentialUrl:
        "https://www.youracclaim.com/badges/8a86b4c6-49d0-4284-a92f-5f8a48b58b02",
    },
    {
      id: "scrum-foundation-2020",
      name: "Scrum Foundation Professional Certificate",
      issuer: "CertiProf",
      issuedAt: "Jul 2020",
      credentialId: "FLCWBWDPWT-SDGDGQRD-WHFTFDQWFN",
    },
    {
      id: "platzi-remote-2020",
      name: "Trabajo remoto o teletrabajo",
      issuer: "Platzi",
      issuerUrl: "https://www.linkedin.com/school/platzi-inc",
      issuedAt: "May 2020",
      credentialUrl:
        "https://platzi.com/@jhon-fredy-hernandez-castro",
    },
  ],
  contact: {
    email: siteConfig.contact.email,
    linkedInUrl: siteConfig.linkedInUrl,
    githubUrl: siteConfig.githubUrl,
    whatsAppUrl: siteConfig.contact.whatsAppUrl,
  },
};
