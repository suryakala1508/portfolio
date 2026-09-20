import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./BrandIcons";
import type { SocialLink } from "../../types";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
};

interface SocialIconsProps {
  socials: SocialLink[];
  className?: string;
}

export default function SocialIcons({ socials, className }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {socials.map(({ label, href, icon }) => {
        const Icon = iconMap[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="icon-btn flex size-10 items-center justify-center rounded-lg border border-subtle transition-all hover:-translate-y-0.5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <Icon width={17} height={17} />
          </a>
        );
      })}
    </div>
  );
}
