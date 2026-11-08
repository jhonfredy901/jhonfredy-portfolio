export type AcademicPublication = {
  title: string;
  journal: string;
  journalUrl?: string;
  articleUrl: string;
  documentUrl?: string;
};

export type Education = {
  id: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  field?: string;
  period?: string;
  highlights?: string[];
  publications?: AcademicPublication[];
};
