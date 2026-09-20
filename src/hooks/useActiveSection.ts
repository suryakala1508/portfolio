import { useEffect, useState } from "react";

interface Link {
  href: string;
}

/** Tracks which section (by #hash id) is currently in view, for nav highlighting and the side rail. */
export function useActiveSection(links: Link[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  return active;
}
