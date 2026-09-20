interface BadgeProps {
  children: string;
  /** Optional "how I actually used it" evidence, shown as a native tooltip on hover/focus. */
  note?: string;
}

/** Small mono tech-tag chip with a faint blue tint — the only place monospace is used besides section metadata. */
export default function Badge({ children, note }: BadgeProps) {
  return (
    <span
      title={note}
      tabIndex={note ? 0 : undefined}
      className="inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors"
      style={{
        color: "var(--color-text-secondary)",
        background: "var(--color-tag-bg)",
        borderColor: "var(--color-tag-border)",
        cursor: note ? "help" : undefined,
      }}
    >
      {children}
    </span>
  );
}
