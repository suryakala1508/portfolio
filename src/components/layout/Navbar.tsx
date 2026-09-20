import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../../data/portfolio";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "backdrop-blur-md" : ""}`}
      style={{
        borderColor: scrolled ? "var(--color-border)" : "transparent",
        background: scrolled ? "var(--color-bg-translucent)" : "transparent",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg font-bold" style={{ color: "var(--color-text)" }}>
          SB<span style={{ color: "var(--color-accent)" }}>.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "" : "link-underline"}`}
                  style={{ color: isActive ? "var(--color-accent)" : "var(--color-text-secondary)" }}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="icon-btn flex size-9 items-center justify-center rounded-lg border border-subtle hover:bg-[var(--color-surface-hover)]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary hidden rounded-lg px-5 py-2 text-sm font-semibold shadow-sm transition-colors hover:shadow-md lg:inline-flex"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="icon-btn flex size-9 items-center justify-center rounded-lg border border-subtle lg:hidden"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-subtle lg:hidden"
            style={{ background: "var(--color-bg)" }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-subtle px-6 py-3 text-sm font-medium"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
