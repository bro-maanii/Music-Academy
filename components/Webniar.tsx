"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const webinars = [
  {
    title: "Music Production Masterclass",
    description:
      "Mixing, mastering and sound design walked through end to end on a real session file.",
    link: "https://example.com/masterclass",
    meta: "Live · 90 min",
    isFeatured: true,
  },
  {
    title: "Songwriting Techniques",
    description:
      "Turn a loose idea into a finished lyric and melody using a repeatable process.",
    link: "https://example.com/masterclass",
    meta: "Live · 60 min",
    isFeatured: false,
  },
  {
    title: "Live Performance Tips",
    description:
      "Stage presence, nerves and set pacing — with an interactive Q&A at the end.",
    link: "https://example.com/masterclass",
    meta: "Live · 60 min",
    isFeatured: true,
  },
  {
    title: "Music Marketing Strategies",
    description:
      "How to release, promote and grow an audience without a label behind you.",
    link: "https://example.com/masterclass",
    meta: "Live · 75 min",
    isFeatured: true,
  },
  {
    title: "Recording at Home",
    description:
      "Get a professional result out of an untreated room and a modest interface.",
    link: "https://example.com/masterclass",
    meta: "Live · 90 min",
    isFeatured: true,
  },
];

function Webniar() {
  const featured = webinars.filter((item) => item.isFeatured).slice(0, 4);

  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_50%_100%,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Free webinars</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl">
            Enhance your musical journey
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            One-off live sessions, open to everyone. No course enrolment needed
            — just turn up.
          </p>
        </div>

        <div className="mt-12">
          <HoverEffect
            items={featured.map(({ title, description, link, meta }) => ({
              title,
              description,
              link,
              meta,
            }))}
          />
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            Register for the next session
          </button>
        </div>
      </div>
    </section>
  );
}

export default Webniar;
