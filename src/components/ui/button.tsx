import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-widest uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-luxury-gold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-luxury-gold text-primary-black hover:bg-soft-gold hover:shadow-[0_8px_32px_rgba(201,168,106,0.25)]",
        outline:
          "border border-luxury-gold/40 text-luxury-gold bg-transparent hover:border-luxury-gold hover:bg-luxury-gold/5",
        ghost:
          "text-luxury-gold hover:bg-luxury-gold/10",
        ivory:
          "bg-ivory text-primary-black hover:bg-soft-gold",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
