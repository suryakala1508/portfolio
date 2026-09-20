import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AlertCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { emailjsConfig, profile } from "../../data/portfolio";
import Section from "../ui/Section";
import Card from "../ui/Card";
import SocialIcons from "../ui/SocialIcons";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-subtle bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Sends via EmailJS using the branded template (emailjs-template.html), so the
  // message is emailed straight to profile.email — no backend to host.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: emailjsConfig.publicKey },
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Open to entry-level AI / Full-Stack roles, internships, and collaborations."
      tone="alt"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="flex h-full flex-col gap-6">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                <Mail size={16} />
              </span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                <Phone size={16} />
              </span>
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                <MapPin size={16} />
              </span>
              {profile.location}
            </div>
            <div className="mt-auto border-t border-subtle pt-6">
              <p className="label mb-3">Find me online</p>
              <SocialIcons socials={profile.socials} />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <Card>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass}
                    style={{ color: "var(--color-text)" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={fieldClass}
                    style={{ color: "var(--color-text)" }}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldClass} resize-none`}
                  style={{ color: "var(--color-text)" }}
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary inline-flex items-center justify-center gap-2 self-start rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      Sending... <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : status === "sent" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <span className="flex items-center gap-1.5 text-sm" style={{ color: "#ef4444" }}>
                    <AlertCircle size={16} /> Something went wrong — email me directly instead.
                  </span>
                )}
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
