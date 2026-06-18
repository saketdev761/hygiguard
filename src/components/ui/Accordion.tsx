/**
 * Accordion Component
 */

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem = ({
  title,
  content,
  isOpen = false,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-surface hover:bg-background transition-colors text-left font-semibold text-primary"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background text-secondary border-t border-border">
          {content}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
};
