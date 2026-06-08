/**
 * Heading Component
 */

import React from "react";
import { cn } from "@/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "heading1" | "heading2" | "heading3";
  children: React.ReactNode;
}

const variants = {
  display: "text-4xl md:text-5xl lg:text-6xl font-bold",
  heading1: "text-3xl md:text-4xl font-bold",
  heading2: "text-2xl md:text-3xl font-bold",
  heading3: "text-xl md:text-2xl font-bold",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Component = "h2",
      variant = "heading1",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn("text-text-primary", variants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";
