/**
 * Section Wrapper Component
 */

import React from "react";
import { cn } from "@/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, variant = "light", className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 md:py-24 lg:py-32",
          variant === "dark" && "bg-surface border-t border-b border-border",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
