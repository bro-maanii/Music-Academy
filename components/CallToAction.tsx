import React from "react";
import Link from "next/link";

function CallToAction() {
  return (
    <section className="px-5 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-surface px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(124,58,237,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.03]" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl">
            Your first lesson is closer than you think
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Pick a course, set aside a few hours a week, and start making
            something you are proud of.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/courses/AllCourses"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Browse courses
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/35 hover:text-white"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
