import type { Education } from "@/domain/types";

export const educationItems: Education[] = [
  {
    id: "uptc-master",
    institution: "Universidad Pedagógica y Tecnológica de Colombia",
    institutionUrl: "https://www.linkedin.com/school/uptc",
    degree: "Magíster en Tecnología Informática",
    period: "Finalizado Ago 2025",
    highlights: [
      "Trabajo de grado con publicación en revista indexada.",
    ],
    publications: [
      {
        title:
          "Emerging Trends in Business Intelligence: A systemic Mapping Study",
        journal:
          "Tecnura — Universidad Distrital Francisco José de Caldas",
        journalUrl: "https://revistas.udistrital.edu.co/index.php/Tecnura",
        articleUrl:
          "https://revistas.udistrital.edu.co/index.php/Tecnura/article/view/22943",
        documentUrl:
          "https://revistas.udistrital.edu.co/index.php/Tecnura/article/view/22943/21549",
      },
    ],
  },
  {
    id: "uptc-engineer",
    institution: "Universidad Pedagógica y Tecnológica de Colombia",
    institutionUrl: "https://www.linkedin.com/school/uptc",
    degree: "Ingeniero de Sistemas y Computación",
    field: "Ingeniería de sistemas",
    period: "2008 — 2013",
  },
];
