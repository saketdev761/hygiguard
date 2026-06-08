/**
 * Badge Component
 */

import React from "react";
import { cn } from "@/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  children: React.ReactNode;
}

const variants = {
  primary: "bg-primary bg-opacity-10 text-primary",
  secondary: "bg-secondary bg-opacity-10 text-secondary",
  success: "bg-success bg-opacity-10 text-success",
  warning: "bg-warning bg-opacity-10 text-warning",
  danger: "bg-danger bg-opacity-10 text-danger",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "px-3 py-1 rounded-full text-sm font-semibold",
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
