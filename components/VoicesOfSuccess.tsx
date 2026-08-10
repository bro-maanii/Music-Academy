"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

const testimonials = [
  {
    quote:
      "Six weeks in and I could finally hear what my teacher meant about breath support. The feedback on my recordings was specific enough to actually act on.",
    name: "Alice Johnson",
    title: "Vocal Training",
  },
  {
    quote:
      "I had tried three different apps before this and none of them stuck. Having a real structure — and someone listening to what I submitted — made the difference.",
    name: "Michael Brown",
    title: "Music Theory 101",
  },
  {
    quote:
      "The violin course is demanding in the best way. My intonation notes came back marked bar by bar, which no online course had ever done for me.",
    name: "Sophie Williams",
    title: "Violin Techniques",
  },
  {
    quote:
      "I write songs for a living now. The songwriting workshop is where I stopped waiting for inspiration and started working to a process.",
    name: "Chris Taylor",
    title: "Songwriting Workshop",
  },
  {
    quote:
      "Being able to practise at 11pm after work, then get notes back the next morning, is the only reason I finished a course at all.",
    name: "Jessica Miller",
    title: "Ukulele for Beginners",
  },
  {
    quote:
      "The production essentials course rebuilt how I approach a mix. I stopped guessing at EQ and started listening properly.",
    name: "Emily Davis",
    title: "Music Production Essentials",
  },
  {
    quote:
      "Genuinely skilled instructors who still play. That shows up in the small details they correct that a textbook would never mention.",
    name: "Michael Rodriguez",
    title: "Saxophone Basics",
  },
];

export default function VoicesOfSuccess() {
  return (
    <section className="relative flex min-h-[36rem] w-full flex-col items-center justify-center overflow-hidden border-y border-white/8 bg-ink py-24">
      <StarsBackground
        starDensity={0.0004}
        allStarsTwinkle={false}
        twinkleProbability={0.4}
      />
      <ShootingStars />

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center px-5 text-center">
          <p className="eyebrow">Student stories</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl">
            Voices of success
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            What people say after finishing a course with us.
          </p>
        </div>

        <div className="mt-14 w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
