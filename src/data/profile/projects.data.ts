import type { Project } from "@/domain/types";
import { placeholder } from "@/lib/placeholders";

export const projectItems: Project[] = [
  {
    id: "mundial-2026-app",
    title: "Mundial 2026 — App móvil",
    description:
      "App multiplataforma (iOS, Android y Web) para seguir la Copa Mundial FIFA 2026: partidos en tiempo real, calendario por días, tablas de posiciones, bracket eliminatorio, equipos favoritos, autenticación Google OAuth o email/contraseña y hora Colombia. Distribución inicial mediante APK a contactos cercanos.",
    status: "lanzado",
    image: {
      src: "/images/projects/mundial-2026.png",
      alt: "Documentación y vista del proyecto Mundial 2026",
    },
    technologies: [
      "Expo SDK 54",
      "React Native 0.81",
      "TypeScript",
      "Expo Router",
      "React Native Paper",
      "Zustand",
      "FastAPI",
      "MongoDB",
      "Motor",
      "JWT",
      "Google OAuth",
    ],
    repositoryUrl: "https://github.com/jhonfredy901/appmundial",
    demoUrl: undefined,
  },
  {
    id: "prac-gestion-electrica",
    title: "PRAC — Plataforma de gestión operativa",
    description:
      "Sistema en desarrollo para Ingeniería PRAC: inventario de activos, usuarios y roles (RBAC), hojas de vida de personal y vehículos, alertas por vencimientos, notificaciones, informes PDF/Excel/CSV, biblioteca digital y configuración general. Backend con Clean Architecture; frontend administrativo en Next.js.",
    status: "en-desarrollo",
    image: {
      src: placeholder("capturas del panel PRAC"),
      alt: "Panel del sistema de gestión PRAC",
    },
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "NestJS 10",
      "TypeORM",
      "MySQL",
      "JWT",
      "RBAC",
      "Swagger",
      "Docker",
      "AWS S3",
      "Playwright",
    ],
    demoUrl: undefined,
    repositoryUrl: undefined,
  },
  {
    id: "prac-sitio-web",
    title: "Sitio web corporativo — Ingeniería PRAC",
    description:
      "Página web institucional de PRAC (ingeniería y soluciones eléctricas), diseñada y desarrollada para presentar la empresa y sus servicios.",
    status: "en-produccion",
    image: {
      src: "/images/projects/prac-sitio-web.jpg",
      alt: "Captura del sitio web corporativo de Ingeniería PRAC",
    },
    technologies: [placeholder("stack del sitio institucional PRAC")],
    demoUrl: "https://www.ingenieriaprac.com.co/",
    repositoryUrl: undefined,
  },
  {
    id: "arriendos-app",
    title: "AppRentals — Gestión de arriendos",
    description:
      "Producto personal en construcción (aún no funcional en producción), orientado a Play Store: propiedades, contratos, reportes, recordatorios de pago y reparto de servicios públicos entre inquilinos. Monorepo con app móvil Expo y API NestJS.",
    status: "en-desarrollo",
    image: {
      src: "/images/projects/apprentals-frontend.png",
      alt: "Stack y documentación del frontend AppRentals",
    },
    technologies: [
      "Expo",
      "React Native",
      "Expo Router",
      "TypeScript",
      "React Native Paper",
      "Supabase Auth",
      "TanStack Query",
      "Zod",
      "react-hook-form",
      "NestJS",
      "Prisma",
      "Supabase Postgres",
    ],
    repositoryUrl: "https://github.com/jhonfredy901/apprentals-api",
    demoUrl: undefined,
  },
  {
    id: "calibracion-standalone",
    title: "Sistema de certificados de calibración",
    description:
      "Aplicación standalone para un centro de diagnóstico automotor: gestión de certificados de calibración. Desarrollada de forma integral en Java EE, con reportes generados en JasperReports; permanece en funcionamiento.",
    status: "en-produccion",
    image: {
      src: placeholder("captura del sistema de calibración"),
      alt: "Interfaz del sistema de certificados de calibración",
    },
    technologies: ["Java EE", "JasperReports", "SQL Server"],
    demoUrl: undefined,
    repositoryUrl: undefined,
  },
  {
    id: "andiautos-gestion",
    title: "Gestión académica y administrativa — centro de enseñanza",
    description:
      "Sistema para matrículas, pagos, certificados y evaluaciones de un centro de enseñanza automovilística. En uso actual.",
    status: "en-produccion",
    image: {
      src: placeholder("captura del sistema de gestión ANDIAUTOS"),
      alt: "Vista del sistema de gestión académica",
    },
    technologies: ["VB.NET", "SQL Server", "Reportes"],
    demoUrl: undefined,
    repositoryUrl: undefined,
  },
  {
    id: "agendamiento-multisede",
    title: "Agendamiento e inscripciones multi-sede",
    description:
      "Plataforma web de agendamiento para inscripciones al curso de conducción en distintas sedes de un centro de enseñanza automovilística. Backend en microservicios Java y frontend en Angular.",
    status: "en-produccion",
    image: {
      src: placeholder("captura del sistema de agendamiento web"),
      alt: "Sistema web de agendamiento e inscripciones",
    },
    technologies: ["Java", "Microservicios", "Angular"],
    demoUrl: undefined,
    repositoryUrl: undefined,
  },
];
