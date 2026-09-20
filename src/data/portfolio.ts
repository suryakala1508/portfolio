import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  Profile,
  Project,
  SkillGroup,
} from "../types";

/**
 * Single source of truth for all editable portfolio content.
 * Update names, copy, links, and tags here — components just render this data.
 */

/**
 * Contact form email delivery (see Contact.tsx), powered by EmailJS — this is
 * what lets the branded HTML template (emailjs-template.html) be used instead
 * of a plain notification. No backend to host; setup:
 *   1. Sign up free at https://emailjs.com
 *   2. Email Services -> Add New Service -> connect your Gmail (beesettisuryakala@gmail.com)
 *      -> copy its Service ID
 *   3. Email Templates -> Create Template -> switch to the "Code Editor" (</>) view
 *      -> paste in the contents of emailjs-template.html (project root)
 *      -> in the template's Settings tab set To Email to beesettisuryakala@gmail.com
 *         and Reply To to {{from_email}} -> copy the Template ID
 *   4. Account -> General -> copy your Public Key
 *   5. Paste all three values below.
 */
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};

export const profile: Profile = {
  name: "Suryakala Beesetti",
  role: "Full-Stack Developer building AI-powered applications end-to-end",
  // Rotates after "Building..." in the hero — keep entries short (2-3 words).
  rotatingSkills: ["AI apps", "FastAPI backends", "LangGraph workflows", "React frontends"],
  location: "Kakinada, Andhra Pradesh, India",
  email: "beesettisuryakala@gmail.com",
  phone: "+91 7981484399",
  summary:
    "Full-stack developer building AI-powered apps from FastAPI + PostgreSQL backends to LangGraph agent workflows and React frontends.",
  bio:
    "I build production-style AI applications end-to-end — designing RAG pipelines with vector embeddings, integrating LLMs with structured, schema-validated outputs, and shipping JWT-secured REST APIs behind fast, type-safe React frontends. I'm a strong problem solver (500+ LeetCode problems solved) and a fast learner who thrives in ownership-driven Agile teams, comfortable moving from database schema to UI polish in the same day.",
  // TODO: keep this current — it's shown as a small "now" strip in the About section.
  currentlyLearning:
    "Currently going deeper on LLM-agent evaluation methods and multi-agent orchestration patterns beyond single-graph LangGraph flows.",
  // Swap in your actual resume PDF: drop the file in /public and point this at it, e.g. "/resume.pdf"
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/suryakala1508", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/suryakala-beesetti-a4844434a/", icon: "linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/u/suryakala06/", icon: "leetcode" },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Product Development Intern",
    company: "Plexis Private Limited",
    period: "May 2026 — Present",
    points: [
      "Build and ship product features end-to-end using the MERN stack in a cross-functional Agile team.",
      "Write technical docs and run test cycles across the dev lifecycle; iterate on features from QA and stakeholder feedback.",
      "Partner with designers and senior engineers to turn product requirements into implemented, tested features.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "AI Study Companion",
    tagline: "AI-Powered Learning Platform",
    description:
      "A RAG-based AI tutor that answers questions grounded in a learner's own uploaded documents, and auto-generates quizzes, flashcards, and concept maps from them.",
    points: [
      "Document upload and processing pipeline that chunks course material and generates embeddings for PostgreSQL + pgvector similarity search.",
      "RAG-based AI Tutor delivering grounded, context-aware answers from a learner's own uploaded documents.",
      "AI-generated quizzes, flashcards, and concept maps, with concept-level mastery tracking, growth analytics, and personalized learning recommendations.",
      "End-to-end ownership: React + TypeScript frontend, FastAPI backend, database integration, authentication, background processing, analytics, and deployment.",
    ],
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Background Processing",
      "Authentication",
      "Analytics",
    ],
    githubUrl: "https://github.com/suryakala1508/ai_tutor",
    // TODO: add demoUrl once this is deployed, e.g. "https://ai-study-companion.vercel.app"
    featured: true,
  },
  {
    name: "IntervueX",
    tagline: "AI Interview Practice Platform",
    description:
      "Adaptive AI mock-interview platform powered by a LangGraph agent, with multi-provider LLM routing and resume-grounded, schema-validated scoring.",
    points: [
      "LangGraph agent workflow (state, nodes, conditional edges) running adaptive multi-turn mock interviews that adjust difficulty from live responses.",
      "Async FastAPI backend with SQLAlchemy 2.0, PostgreSQL + pgvector, and Alembic migrations storing resume/skill embeddings for profile-grounded question generation.",
      "Multi-provider LLM routing (Groq, Anthropic Claude, offline fallback) with Pydantic-validated structured JSON outputs for reliable scoring.",
      "JWT auth and pypdf resume parsing; React 19 + Vite + Tailwind 4 frontend with Recharts dashboards.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy 2.0",
      "Alembic",
      "LangGraph",
      "Groq",
      "Anthropic Claude",
      "Pydantic",
      "JWT",
      "React 19",
      "Recharts",
    ],
    githubUrl: "https://github.com/suryakala1508/IntervueX",
    // TODO: add demoUrl once this is deployed, e.g. "https://intervuex.vercel.app"
    featured: true,
  },
  {
    name: "RepoPilot",
    tagline: "GitHub Repository Q&A Engine",
    description:
      "A RAG pipeline that ingests any public GitHub repo, generates local embeddings, and answers questions grounded in the actual codebase via pgvector search.",
    points: [
      "RAG pipeline: ingests any public GitHub repo (GitPython), chunks source files, generates local embeddings via Sentence-Transformers (no external embedding API).",
      "Vector similarity search on PostgreSQL + pgvector (Supabase) via asyncpg, powering a grounded Q&A endpoint on Groq's LLM, hardened with Tenacity retries.",
      "Versioned async FastAPI backend + type-safe React 19 + TypeScript frontend; tested with Pytest, pytest-asyncio, and an HTTPX ASGI client.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "pgvector",
      "asyncpg",
      "GitPython",
      "Sentence-Transformers",
      "Groq",
      "Tenacity",
      "React 19",
      "TypeScript",
    ],
    githubUrl: "https://github.com/suryakala1508/RepoPilot",
    // TODO: add demoUrl once this is deployed, e.g. "https://repopilot.vercel.app"
    featured: true,
  },
  {
    name: "ChatSphere",
    tagline: "Real-Time Chat Application",
    description:
      "A real-time chat app with private and group messaging, live presence, media sharing, and voice calls on top of Socket.io and MongoDB.",
    points: [
      "Real-time private and group messaging over Socket.io WebSockets, with live online/offline presence indicators.",
      "Persistent chat history stored in MongoDB, so conversations survive reconnects and page reloads.",
      "Image and media sharing, an emoji picker, and voice-call integration for richer conversations.",
      "JWT-authenticated Node.js + Express backend, tracking concurrent socket connections via an in-memory Map.",
    ],
    tags: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
    githubUrl: "https://github.com/suryakala1508/ChatSphere",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "SQL" },
      { name: "C" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "AI / LLM Engineering",
    skills: [
      {
        name: "LLM Integration (Groq, Anthropic Claude)",
        note: "Multi-provider routing with automatic fallback in IntervueX's scoring pipeline.",
      },
      { name: "LangChain" },
      {
        name: "LangGraph",
        note: "Modeled adaptive interviews as a stateful agent graph with conditional edges in IntervueX.",
      },
      { name: "Prompt Engineering" },
      {
        name: "Structured Outputs (Pydantic, JSON Schema)",
        note: "Every LLM response is schema-validated before it reaches scoring or the UI.",
      },
      { name: "Tool/Function Calling" },
      { name: "LLM Evaluation" },
    ],
  },
  {
    category: "RAG & Vector Search",
    skills: [
      { name: "RAG", note: "Built grounded Q&A over user documents and whole GitHub repos, not just chat." },
      { name: "Embeddings" },
      { name: "Sentence-Transformers", note: "Local embedding generation in RepoPilot — no external embedding API cost or latency." },
      { name: "pgvector", note: "Similarity search backing three different RAG systems across my projects." },
      { name: "Semantic Search" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", note: "Async services with SQLAlchemy 2.0 + Alembic migrations in IntervueX and RepoPilot." },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Socket.io", note: "Real-time presence + messaging with concurrent connection tracking in ChatSphere." },
      { name: "REST" },
      { name: "JWT", note: "Auth on every backend I've shipped — FastAPI and Express alike." },
      { name: "RBAC" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "pgvector" },
      { name: "SQLAlchemy 2.0" },
      { name: "MongoDB", note: "Persistent chat history and presence state for ChatSphere." },
      { name: "Mongoose" },
      { name: "SQLite" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS 4" },
      { name: "React Router" },
      { name: "Recharts", note: "Interview-score dashboards in IntervueX." },
    ],
  },
  {
    category: "DevOps & Testing",
    skills: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Pytest" },
      { name: "pytest-asyncio", note: "Async endpoint tests over an HTTPX ASGI client in RepoPilot." },
      { name: "Vitest" },
      { name: "React Testing Library" },
      { name: "Postman" },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "RGUKT IIIT Srikakulam",
    period: "2023 — 2027",
    detail: "CGPA 8.9 / 10",
  },
  {
    degree: "Pre-University Course",
    institution: "RGUKT Srikakulam",
    period: "2021 — 2023",
    detail: "CGPA 9.7 / 10",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "NPTEL Elite: Foundations of Deep Learning",
    issuer: "IISc Bangalore · 78%",
    detail: "Jan – Apr 2026",
  },
  {
    title: "NPTEL Elite: Object-Oriented System Development with UML, Java & Patterns",
    issuer: "IIT Kharagpur · 72%",
    detail: "Jan – Apr 2026",
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    detail: "May 2025",
  },
  {
    title: "24-Hour Hackathon Prototyping",
    issuer: "RGUKT Technical Fest",
    detail: "Rapid full-stack/AI prototypes shipped under 24-hour deadlines",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
