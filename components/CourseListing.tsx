import React from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { cn } from "@/lib/utils";
import type { ICourse } from "@/lib/courses";

const FILTERS = [
  { href: "/courses/AllCourses", label: "All" },
  { href: "/courses/Beginner", label: "Beginner" },
  { href: "/courses/Intermediate", label: "Intermediate" },
  { href: "/courses/Advanced", label: "Advanced" },
];

export function CourseListing({
  eyebrow,
  title,
  description,
  courses,
  activeHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  courses: ICourse[];
  activeHref: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-36 pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(124,58,237,0.16),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            {description}
          </p>
        </div>

        {/* Level filter */}
        <nav
          aria-label="Filter courses by level"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {FILTERS.map((filter) => {
            const isActive = filter.href === activeHref;
            return (
              <Link
                key={filter.href}
                href={filter.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "border-white bg-white text-ink"
                    : "border-white/12 bg-white/[0.03] text-white/65 hover:border-white/30 hover:text-white"
                )}
              >
                {filter.label}
              </Link>
            );
          })}
        </nav>

        {/* Count */}
        <p className="mt-8 text-center text-sm text-white/40">
          Showing {courses.length}{" "}
          {courses.length === 1 ? "course" : "courses"}
        </p>

        {/* Grid */}
        {courses.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} priority={i < 3} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-white/50">
            No courses at this level just yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}

export default CourseListing;
