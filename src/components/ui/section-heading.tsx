"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-text-primary/60 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "gold-line mt-8 w-24",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
