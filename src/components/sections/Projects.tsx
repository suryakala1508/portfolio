import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { projects } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { GithubIcon } from "../ui/BrandIcons";

const MAX_VISIBLE_TAGS = 5;

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A mix of AI-native systems and full-stack applications — from RAG pipelines to real-time chat."
      tone="alt"
    >
      {/* 1 col mobile / 2 cols tablet / 3 cols desktop. `items-stretch` + h-full on
          each card makes every card in a row match the tallest one automatically —
          combined with the capped, clamped content below, all cards end up the
          same size regardless of how much text a given project has. */}
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
          const hiddenTagCount = project.tags.length - visibleTags.length;

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="h-full"
            >
              <Card index={String(i + 1).padStart(2, "0")} className="flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-2 pr-8">
                  <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span
                      className="flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                      style={{ background: "var(--color-emerald-soft)", color: "var(--color-emerald)" }}
                    >
                      <Sparkles size={10} /> Featured
                    </span>
                  )}
                </div>
                <p className="mt-1 truncate text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                  {project.tagline}
                </p>

                {/* flex-1 absorbs the leftover space so the tag row and buttons
                    below always end up flush with the card's bottom edge. */}
                <p className="mt-3 flex-1 text-sm leading-relaxed line-clamp-3" style={{ color: "var(--color-text-secondary)" }}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  {hiddenTagCount > 0 && <Badge>{`+${hiddenTagCount} more`}</Badge>}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-subtle pt-5">
                  {project.demoUrl && (
                    <Button href={project.demoUrl} target="_blank" rel="noreferrer" variant="primary" icon={<ExternalLink size={15} />}>
                      Live Demo
                    </Button>
                  )}
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant={project.demoUrl ? "secondary" : "primary"}
                    icon={<GithubIcon width={15} height={15} />}
                  >
                    Source Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
