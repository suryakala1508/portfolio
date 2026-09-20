import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Alternates the section's background very slightly, so sections read as distinct bands down the page. */
  tone?: "base" | "alt";
  children: ReactNode;
  className?: string;
}

/** Consistent section shell: kicker label, heading, one-line subtitle, animated content. Used by every section for a uniform header pattern. */
export default function Section({ id, eyebrow, title, description, tone = "base", children, className }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-subtle"
      style={{ background: tone === "alt" ? "var(--color-bg-alt)" : "var(--color-bg)" }}
    >
      <div className={`relative mx-auto max-w-6xl px-6 py-20 sm:py-24 ${className ?? ""}`}>
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && <span className="kicker mb-3 block">{eyebrow}</span>}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--color-text)" }}>
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {description}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
