import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Small mono index shown in the top-right corner, e.g. "01" — used on project cards. */
  index?: string;
}

/** Flat card: solid surface, 1px border, blue->green top strip, emerald glow on hover. */
export default function Card({ children, className, index }: CardProps) {
  return (
    <div className={`card p-6 ${className ?? ""}`}>
      {index && (
        <span className="card-index" aria-hidden="true">
          {index}
        </span>
      )}
      {children}
    </div>
  );
}
