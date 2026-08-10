import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ask about enrolment, course levels or anything else — the Harmonia team usually replies within one working day.",
};

const DETAILS = [
  {
    label: "Email",
    value: "hello@harmonia.academy",
    href: "mailto:hello@harmonia.academy",
  },
  { label: "Phone", value: "+1 (555) 014-8820", href: "tel:+15550148820" },
  { label: "Hours", value: "Mon–Fri, 9am–6pm" },
];

const inputClasses =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors duration-200 focus:border-brand/50 focus:bg-white/[0.06] focus:outline-none";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(34,211,238,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-24">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Questions about a course, your level, or enrolment? Send us a note
            and we will usually come back within one working day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Details */}
          <aside className="card-surface flex flex-col gap-6 rounded-2xl p-7 lg:col-span-2">
            {DETAILS.map((detail) => (
              <div key={detail.label}>
                <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-1.5 block text-sm text-white/85 transition-colors hover:text-brand-2"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-sm text-white/85">{detail.value}</p>
                )}
              </div>
            ))}

            <div className="mt-auto border-t border-white/8 pt-6">
              <p className="text-sm leading-relaxed text-white/50">
                Not sure which level to pick? Tell us what you have played and
                for how long — we will point you at the right course.
              </p>
            </div>
          </aside>

          {/* Form */}
          <form className="card-surface rounded-2xl p-7 lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jordan Reyes"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="interest"
                className="text-sm font-medium text-white/80"
              >
                I&apos;m interested in
              </label>
              <select
                id="interest"
                name="interest"
                defaultValue="Beginner"
                className={inputClasses}
              >
                <option>Beginner courses</option>
                <option>Intermediate courses</option>
                <option>Advanced courses</option>
                <option>Free webinars</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-white/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us what you play and what you'd like to work on…"
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:px-8"
            >
              Send message
            </button>

            <p className="mt-4 text-xs text-white/35">
              This form is a front-end demo — it is not wired to a backend yet.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
