export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "cloud"
  | "databases"
  | "architecture"
  | "devops"
  | "testing"
  | "ai"
  | "soft";

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  items: string[];
};
