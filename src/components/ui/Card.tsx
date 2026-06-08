/**
 * Card Component
 */

import React from "react";
import { cn } from "@/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface border border-border rounded-lg p-6 shadow-sm transition-all duration-200",
          hover && "hover:shadow-lg hover:-translate-y-1",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
