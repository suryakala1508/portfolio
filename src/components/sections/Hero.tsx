import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../../data/portfolio";
import { useTypewriter } from "../../hooks/useTypewriter";
import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";

// Staggered letter-reveal for the name — the site's signature moment.
const letterContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } },
};
const letter: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const rotatingWord = useTypewriter(profile.rotatingSkills);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden border-b border-subtle pt-24">
      {/* Faint dotted texture, scoped to the hero only, so the page doesn't open on a blank void. */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-subtle px-4 py-1.5 text-xs font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span className="size-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
          Open to entry-level AI / Full-Stack roles
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-lg font-medium sm:text-xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Hi, I'm
        </motion.p>

        {/* Large fluid gradient headline, animated in letter by letter. */}
        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="hero-name max-w-4xl"
          aria-label={profile.name}
        >
          {profile.name.split(" ").flatMap((word, wi, words) => {
            // Each word is its own non-breaking unit (so the line only ever wraps
            // *between* words, never mid-letter) while still animating letter by letter.
            // The gradient is applied per-word (not to the whole h1) so that on
            // narrow screens — where the name wraps and each line is narrower than
            // the h1's own box — every line still sweeps its own full blue->green
            // range instead of the green half landing on empty space to its right.
            const wordSpan = (
              <span key={`word-${wi}`} className="gradient-text inline-block whitespace-nowrap">
                {[...word].map((char, ci) => (
                  <motion.span key={ci} variants={letter} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            );
            return wi < words.length - 1 ? [wordSpan, " "] : [wordSpan];
          })}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-5 flex h-8 items-center font-display text-lg font-medium sm:text-xl"
          style={{ color: "var(--color-text)" }}
        >
          Building&nbsp;<span style={{ color: "var(--color-accent)" }}>{rotatingWord}</span>
          <span className="ml-1 h-6 w-0.5 animate-pulse" style={{ background: "var(--color-emerald)" }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 max-w-[65ch] text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" icon={<ArrowRight size={16} />}>
            View Projects
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" download icon={<Download size={16} />}>
            Download Resume
          </Button>
          <Button href="#contact" variant="ghost" icon={<Mail size={16} />}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
        >
          <SocialIcons socials={profile.socials} />
        </motion.div>
      </div>
    </section>
  );
}
