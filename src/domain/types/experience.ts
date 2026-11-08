export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location?: string;
  employmentType?: string;
  isCurrent?: boolean;
  highlights: string[];
  achievements: string[];
  technologies: string[];
};
