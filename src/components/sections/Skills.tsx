import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Grouped by domain, from language fundamentals to LLM and RAG engineering."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
          >
            <Card>
              <h3 className="label mb-4" style={{ color: "var(--color-text)" }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill.name} note={skill.note}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
