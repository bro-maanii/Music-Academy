import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const STATS = [
  { value: "10", label: "Structured courses" },
  { value: "5", label: "Working musicians" },
  { value: "4–8", label: "Weeks per course" },
  { value: "100%", label: "Learn at your pace" },
];

function HeroSection() {
  return (
    <section className="relative flex min-h-[46rem] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 text-center">
      {/* Backdrop */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#a78bfa"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.04]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <p className="eyebrow animate-rise">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
          Enrolling now · Spring term
        </p>

        <h1
          className="animate-rise mt-7 font-display text-5xl leading-[1.05] font-bold sm:text-6xl md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-gradient">Master the art</span>
          <br />
          <span className="text-white">of music</span>
        </h1>

        <p
          className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Structured courses in performance, production and theory — taught by
          musicians who still work in the industry. Start from your first note
          or refine a technique you have practised for years.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <Link href="/courses/AllCourses" aria-label="Explore courses">
            <Button
              as="span"
              borderRadius="1.75rem"
              containerClassName="block h-14 w-52"
              className="border-white/10 bg-surface-2 font-semibold text-white"
            >
              Explore courses
            </Button>
          </Link>

          <Link
            href="/about-us"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-white/25 hover:text-white"
          >
            How it works
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Trust bar */}
        <dl
          className="animate-rise mt-16 grid w-full max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="font-display text-3xl font-semibold text-white">
                {stat.value}
              </dt>
              <dd className="text-xs tracking-wide text-white/45">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default HeroSection;
