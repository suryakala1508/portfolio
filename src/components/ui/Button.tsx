import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
}

const base =
  "btn-press inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-primary shadow-sm hover:shadow-md",
  secondary: "btn-secondary border",
  ghost: "px-1 py-1 link-underline",
};

/** Shared CTA/link button. Blue = primary/filled, emerald = secondary/outline, per the accent role split. */
export default function Button({ children, variant = "primary", icon, className, style, ...props }: ButtonProps) {
  const variantStyle = variant === "ghost" ? { color: "var(--color-text-secondary)" } : undefined;

  return (
    <a style={{ ...variantStyle, ...style }} className={`${base} ${variants[variant]} ${className ?? ""}`} {...props}>
      {children}
      {icon}
    </a>
  );
}
