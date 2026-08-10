"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const COURSE_LINKS = [
  {
    href: "/courses/AllCourses",
    label: "All Courses",
    description: "Browse the full catalogue",
  },
  {
    href: "/courses/Beginner",
    label: "Beginner",
    description: "Start from your first note",
  },
  {
    href: "/courses/Intermediate",
    label: "Intermediate",
    description: "Build real technique",
  },
  {
    href: "/courses/Advanced",
    label: "Advanced",
    description: "Refine and perform",
  },
];

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-white/10 bg-ink/80 shadow-xl shadow-black/40 backdrop-blur-xl"
            : "border-white/5 bg-white/[0.03] backdrop-blur-md"
        )}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Harmonia home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-brand-strong to-brand-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M9 18V6l10-2v12"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6.5" cy="18" r="2.5" fill="white" />
              <circle cx="16.5" cy="16" r="2.5" fill="white" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Harmonia
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex w-56 flex-col">
                <HoveredLink href="/" description="Back to the start">
                  Overview
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Courses">
              <div className="flex w-64 flex-col">
                {COURSE_LINKS.map((link) => (
                  <HoveredLink
                    key={link.href}
                    href={link.href}
                    description={link.description}
                  >
                    {link.label}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex w-56 flex-col">
                <HoveredLink href="/about-us" description="Who we are">
                  Our story
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex w-56 flex-col">
                <HoveredLink href="/contact-us" description="Talk to us">
                  Get in touch
                </HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/courses/AllCourses"
          className="hidden shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95 md:block"
        >
          Browse courses
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/80 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile panel */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-2 backdrop-blur-xl md:hidden"
        >
          {[
            { href: "/", label: "Home" },
            ...COURSE_LINKS,
            { href: "/about-us", label: "About Us" },
            { href: "/contact-us", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
