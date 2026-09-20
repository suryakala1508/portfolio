import { navLinks, profile } from "../../data/portfolio";
import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  return (
    // Contact (the last section) already draws its own bottom border via Section.tsx, so the footer doesn't add a second one.
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-bold" style={{ color: "var(--color-text)" }}>
            {profile.name}
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-underline text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <SocialIcons socials={profile.socials} />
      </div>
      <p className="pb-6 text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
        Built with React 19, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
