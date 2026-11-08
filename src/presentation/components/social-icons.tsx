import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function GitHubIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {
  return <FaGithub className={className} aria-hidden={ariaHidden} />;
}

export function LinkedInIcon({ className, "aria-hidden": ariaHidden = true }: IconProps) {
  return <FaLinkedinIn className={className} aria-hidden={ariaHidden} />;
}
