export type ProjectStatus = "en-produccion" | "lanzado" | "en-desarrollo";

export type Project = {
  id: string;
  title: string;
  description: string;
  status?: ProjectStatus;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
};
