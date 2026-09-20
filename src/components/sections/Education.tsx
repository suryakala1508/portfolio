import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background"
      description="Formal training that grounds the practical, project-driven work above."
      tone="alt"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item, i) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Card className="h-full">
              <GraduationCap className="mb-3" size={20} style={{ color: "var(--color-accent)" }} />
              <h3 className="text-base font-semibold" style={{ color: "var(--color-text)" }}>
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                {item.institution}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-subtle pt-3 text-xs" style={{ color: "var(--color-text-muted)" }}>
                <span>{item.period}</span>
                <span className="font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                  {item.detail}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
