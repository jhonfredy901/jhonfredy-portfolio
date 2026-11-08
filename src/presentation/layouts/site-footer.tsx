import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/presentation/components/social-icons";

import { siteConfig } from "@/config/site";
import { getProfile } from "@/data";

export function SiteFooter() {
  const { contact } = getProfile();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="section-container section-padding flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold">
            {siteConfig.author.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteConfig.author.role} · {siteConfig.author.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={contact.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </Link>
          <Link
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {year} {siteConfig.author.name}.
      </div>
    </footer>
  );
}
