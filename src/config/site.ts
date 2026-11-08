import { placeholder } from "@/lib/placeholders";

export const siteConfig = {
  name: "Jhon Fredy Hernández Castro",
  title: "Portfolio | Jhon Fredy Hernández Castro",
  description:
    "Ingeniero de Sistemas y Computación | Magíster en Tecnología Informática | Senior Java Developer | AI-Driven Software Engineer.",
  url: process.env.NEXT_PUBLIC_SITE_URL || placeholder("URL pública del sitio"),
  locale: "es_CO",
  linkedInUrl:
    "https://www.linkedin.com/in/jhon-fredy-hernández-castro-546a1465",
  githubUrl: "https://github.com/jhonfredy901",
  githubUsername: "jhonfredy901",
  author: {
    name: "Jhon Fredy Hernández Castro",
    location: "Tunja, Boyacá, Colombia",
    role: "Senior Software Engineer IT",
  },
  contact: {
    email: "fredyhc234@hotmail.com",
    whatsAppE164: "+573133068304",
    whatsAppUrl: "https://wa.me/573133068304",
  },
  source: {
    profile: "LinkedIn público",
    fetchedNote:
      "Experiencia y formación desde LinkedIn; contacto y sobre mí proporcionados por el titular.",
  },
} as const;
