import { Briefcase } from "lucide-react";
import { experience } from "../../data/portfolio";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="A brief history of hands-on, ownership-driven engineering work."
    >
      <ol className="relative border-l border-subtle pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="mb-10 last:mb-0">
            <li>
              <span
                className="absolute -left-[13px] flex size-6 items-center justify-center rounded-full"
                style={{ background: "var(--color-accent)", boxShadow: "0 0 0 4px var(--color-bg)" }}
              >
                <Briefcase size={12} color="#ffffff" />
              </span>
              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                    {job.role}
                  </h3>
                  <span className="label" style={{ color: "var(--color-accent)" }}>
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                  {job.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: "var(--color-text-muted)" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
