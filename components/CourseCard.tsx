import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice, levelStyles, type ICourse } from "@/lib/courses";

export function CourseCard({
  course,
  priority = false,
  className,
}: {
  course: ICourse;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50",
        className
      )}
    >
      {/* Media */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide backdrop-blur-md",
            levelStyles[course.level] ??
              "border-white/20 bg-white/10 text-white/80"
          )}
        >
          {course.level}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-snug font-semibold text-white">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/55">
          {course.description}
        </p>

        <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/45">
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Instructor</dt>
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                d="M8 8a3 3 0 100-6 3 3 0 000 6zM2.5 14a5.5 5.5 0 0111 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <dd className="text-white/65">{course.instructor}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Duration</dt>
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M8 4.5V8l2.5 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <dd>{course.duration}</dd>
          </div>
        </dl>

        {/* Footer pinned to the bottom so cards line up in a grid */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-4">
          <p className="font-display text-lg font-semibold text-white">
            {formatPrice(course.price)}
          </p>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-white/8 px-4 py-2 text-xs font-semibold text-white/85 transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            View course
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
