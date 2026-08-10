import React from "react";
import Link from "next/link";

const NAV_GROUPS = [
  {
    heading: "Courses",
    links: [
      { label: "All courses", href: "/courses/AllCourses" },
      { label: "Beginner", href: "/courses/Beginner" },
      { label: "Intermediate", href: "/courses/Intermediate" },
      { label: "Advanced", href: "/courses/Advanced" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Our instructors", href: "/about-us" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help centre", href: "/contact-us" },
      { label: "Enrolment", href: "/contact-us" },
      { label: "Refunds", href: "/contact-us" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3">
            <Link href="/" className="flex items-center gap-2.5">
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
              <span className="font-display text-lg font-semibold text-white">
                Harmonia
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              An online music academy for people who want to play properly.
              Structured courses, working musicians, and feedback on what you
              actually record.
            </p>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/55 transition-colors duration-200 hover:border-white/25 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {NAV_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-xs font-semibold tracking-widest text-white/85 uppercase">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} Harmonia Music Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact-us"
              className="text-xs text-white/40 transition-colors hover:text-white/75"
            >
              Privacy
            </Link>
            <Link
              href="/contact-us"
              className="text-xs text-white/40 transition-colors hover:text-white/75"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
