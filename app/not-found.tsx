import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 py-32 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_30%,rgba(124,58,237,0.16),transparent_70%)]" />

      <div className="relative">
        <p className="font-display text-7xl font-bold text-white/15 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/55">
          The link may be out of date, or the page may have moved. The course
          catalogue is a good place to pick things back up.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Back home
          </Link>
          <Link
            href="/courses/AllCourses"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/35 hover:text-white"
          >
            Browse courses
          </Link>
        </div>
      </div>
    </section>
  );
}
