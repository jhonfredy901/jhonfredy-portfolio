import { siteConfig } from "@/config/site";
import type { GitHubProfileSnapshot } from "@/domain/types";

/**
 * Cliente GitHub API — implementación completa en Fase 4.
 * Static export: las llamadas se harán en build-time o desde el cliente según diseño final.
 */
export async function fetchGitHubProfile(
  username: string,
): Promise<GitHubProfileSnapshot | null> {
  if (!username) {
    return null;
  }

  // Fase 4: GET https://api.github.com/users/{username}/repos
  void username;
  return null;
}

export function resolveGitHubUsername(): string {
  return (
    process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() ||
    siteConfig.githubUsername ||
    ""
  );
}
