"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
const testimonials = [
  {
    quote:
      "This platform transformed my guitar skills in just a few weeks! The lessons are easy to follow and fun.",
    name: "Alice Johnson",
    title: "Aspiring Guitarist",
  },
  {
    quote:
      "I never thought I could learn piano online, but this site proved me wrong. The instructors are top-notch!",
    name: "Michael Brown",
    title: "Beginner Pianist",
  },
  {
    quote:
      "Thanks to these courses, I can finally play my favorite songs on the violin. Highly recommended!",
    name: "Sophie Williams",
    title: "Violin Enthusiast",
  },
  {
    quote:
      "The vocal training exercises have done wonders for my singing. I feel more confident in my voice than ever before.",
    name: "Chris Taylor",
    title: "Aspiring Singer",
  },
  {
    quote:
      "I love how I can learn at my own pace. The tutorials are clear and the support from instructors is fantastic.",
    name: "Jessica Miller",
    title: "Self-Taught Musician",
  },
  {
    quote:
      "I learned so much about music at the Music Learning Academy. It's an amazing place!",
    name: "Emily Davis",
    title: "Student",
  },
  {
    quote:
      "The instructors at the Music Learning Academy are incredibly talented and passionate.",
    name: "Michael Rodriguez",
    title: "Musician",
  },
];

export default function VoicesOfSuccess() {
  return (
    <div className="h-[32rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div>
        <h2 className="relative text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Voices of Success
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          See what our students have to say about their experience with us.
          </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <ShootingStars/>
      <StarsBackground starDensity={0.002} allStarsTwinkle={false} twinkleProbability={0.2}  />
    </div>
  );
}
