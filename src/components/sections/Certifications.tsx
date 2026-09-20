import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Achievements"
      title="Recognition & milestones"
      description="Independent learning and recognition earned outside the core curriculum."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="flex h-full items-start gap-4">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
              >
                <Award size={16} />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                  {item.issuer}
                </p>
                {item.detail && (
                  <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {item.detail}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
