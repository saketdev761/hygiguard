/**
 * Text Component
 */

import React from "react";
import { cn } from "@/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "caption" | "small";
  children: React.ReactNode;
}

const variants = {
  body: "text-base leading-relaxed text-text-secondary",
  caption: "text-sm text-text-secondary",
  small: "text-xs text-text-secondary",
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "body", className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(variants[variant], className)} {...props}>
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";
