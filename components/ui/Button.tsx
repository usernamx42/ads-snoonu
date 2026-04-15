type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red/90",
  secondary:
    "bg-white text-brand-red border border-brand-red/20 hover:border-brand-red/40",
  tertiary:
    "bg-off-black text-white hover:bg-off-black/90",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight min-h-[44px] transition-all cursor-pointer active:scale-[0.98] active:translate-y-px ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
