export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode";
}

export interface Profile {
  name: string;
  role: string;
  /** Short phrases that rotate after "Building..." in the hero, e.g. "AI apps". */
  rotatingSkills: string[];
  location: string;
  email: string;
  phone: string;
  summary: string;
  bio: string;
  resumeUrl: string;
  /** Short "what I'm building/learning right now" line — keeps the site feeling live, not static. */
  currentlyLearning: string;
  socials: SocialLink[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  /** One-line role/type shown under the name, e.g. "AI Interview Practice Platform". */
  tagline: string;
  /** 1-2 sentence summary shown on the card — kept short, it's clamped to 3 lines regardless. */
  description: string;
  /** Longer bullet detail — not rendered on the compact card today, kept for future reuse (e.g. a project detail view). */
  points: string[];
  tags: string[];
  githubUrl: string;
  /** Live/deployed URL. Leave undefined if there isn't one — the "Live Demo" button is hidden and Source Code becomes the primary action. */
  demoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  /** One-line "how I actually used it" — evidence instead of a bare keyword. */
  note?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  detail?: string;
}
