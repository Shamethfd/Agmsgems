import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em]",
        variant === "default" && "bg-dark-navy text-luxury-gold border border-luxury-gold/20",
        variant === "gold" && "bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30",
        variant === "outline" && "border border-luxury-gold/30 text-text-primary/70",
        className
      )}
      {...props}
    />
  );
}
