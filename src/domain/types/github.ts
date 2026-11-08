export type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
  fork: boolean;
  topics?: string[];
};

export type GitHubProfileSnapshot = {
  username: string;
  publicRepos: number;
  repositories: GitHubRepository[];
  languages: { language: string; count: number }[];
  highlighted: GitHubRepository[];
};
