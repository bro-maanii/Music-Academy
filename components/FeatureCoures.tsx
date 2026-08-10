import React from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { featuredCourses } from "@/lib/courses";

function FeatureCoures() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/8 bg-surface py-24">
      {/* Subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(34,211,238,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Featured</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl">
            Start with our most popular courses
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Hand-picked programmes covering voice, strings, woodwind and
            songwriting — each one built around weekly practice you can actually
            keep up with.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} priority={i < 3} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/courses/AllCourses"
            className="group flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
          >
            View all courses
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureCoures;
