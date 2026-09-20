import { motion } from "framer-motion";
import { Brain, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const highlights = [
  {
    icon: Brain,
    title: "RAG & Embeddings",
    text: "Design retrieval pipelines with vector embeddings for grounded, context-aware LLM responses.",
  },
  {
    icon: Sparkles,
    title: "Structured LLM Outputs",
    text: "Integrate LLMs with Pydantic/JSON-schema validation for reliable, production-ready responses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure REST APIs",
    text: "Ship JWT-secured, role-aware REST APIs on FastAPI and Node.js.",
  },
  {
    icon: Code2,
    title: "500+ LeetCode Problems",
    text: "Strong problem-solver with a habit of consistent, deliberate practice.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Building AI products, end to end"
      description="A quick snapshot of how I think about building software, and what I'm sharpening right now."
      tone="alt"
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3" delay={0.1}>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {profile.bio}
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--color-text-muted)" }}>
            {profile.location} · Fast learner in ownership-driven Agile teams.
          </p>

          <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: "var(--color-accent)" }} />
            <span>
              <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                Currently:
              </span>{" "}
              {profile.currentlyLearning}
            </span>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="h-full">
                <item.icon className="mb-3" size={20} style={{ color: "var(--color-accent)" }} />
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
