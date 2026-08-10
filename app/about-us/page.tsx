import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Harmonia is an online music academy built around structured courses, working instructors and feedback on what you actually record.",
};

const OFFERINGS = [
  {
    title: "Structured programmes",
    body: "Four to eight week courses with a clear arc, not a loose playlist of videos.",
  },
  {
    title: "Instructors who still work",
    body: "Every teacher performs, records or produces professionally alongside teaching.",
  },
  {
    title: "Real feedback",
    body: "Submit recordings and get specific, bar-by-bar notes back — not a thumbs up.",
  },
  {
    title: "Every level covered",
    body: "From a first ukulele chord to advanced violin technique and electronic production.",
  },
  {
    title: "Flexible scheduling",
    body: "Lessons stay available after the term ends. Practise whenever it suits you.",
  },
  {
    title: "Honest pricing",
    body: "One price per course, listed up front. No subscriptions and no upsells.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(124,58,237,0.16),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-5 pt-36 pb-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">About us</p>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Music education, without the filler
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            We are a small group of performers and producers who got tired of
            watching people give up on an instrument because the material they
            were handed had no shape to it.
          </p>
        </div>

        {/* Mission */}
        <div className="card-surface mt-16 rounded-3xl p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold">Our mission</h2>
          <p className="mt-4 leading-relaxed text-white/65">
            To make serious music education available to anyone with an
            instrument and a few hours a week. That means structured courses
            that build on each other, instructors who can explain the
            <em className="text-white/80"> why </em>
            behind a technique, and honest feedback on the work you submit.
          </p>
          <p className="mt-4 leading-relaxed text-white/65">
            Our curriculum blends traditional technique with the tools people
            actually record on today, so what you learn holds up in a practice
            room and in a session.
          </p>
        </div>

        {/* What we offer */}
        <div className="mt-16">
          <h2 className="text-center font-display text-3xl font-semibold">
            What we offer
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {OFFERINGS.map((item) => (
              <div
                key={item.title}
                className="card-surface rounded-2xl p-6 transition-colors duration-300 hover:border-white/20"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/70">
            Book a trial lesson or ask us which course fits where you are right
            now. Let&apos;s make music together.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
