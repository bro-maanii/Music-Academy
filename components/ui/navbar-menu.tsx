"use client";
import React from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 14,
  stiffness: 140,
  restDelta: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isOpen = active === item && !!children;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup={children ? "true" : undefined}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
          active === item
            ? "text-white"
            : "text-white/65 hover:text-white"
        )}
      >
        {item}
        {children && (
          <svg
            viewBox="0 0 12 12"
            aria-hidden="true"
            className={cn(
              "h-2.5 w-2.5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          >
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute left-1/2 top-[calc(100%+0.5rem)] -translate-x-1/2 pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={transition}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface-2/95 shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              <div className="w-max p-2">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      aria-label="Primary"
      className="flex items-center gap-0.5"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  description,
  ...rest
}: React.ComponentProps<typeof Link> & { description?: string }) => {
  return (
    <Link
      {...rest}
      className="group flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors duration-200 hover:bg-white/[0.06]"
    >
      <span className="text-sm font-medium text-white/85 transition-colors group-hover:text-white">
        {children}
      </span>
      {description && (
        <span className="text-xs text-white/45">{description}</span>
      )}
    </Link>
  );
};
