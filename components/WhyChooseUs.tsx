"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image, { type StaticImageData } from "next/image";
// Panels are all photographic on purpose: the flat illustrations
// (SaxophoneBasics.jpg) and white product shots (BassGuitar.webp) in
// public/Image look broken against the dark panel background.
import p1 from "@/public/Image/ViolinTechniques.jpg";
import p2 from "@/public/Image/BassGuitarFundamentals.jpg";
import p3 from "@/public/Image/MusicMarketingStrategies.jpg";
import p4 from "@/public/Image/ElectronicMusicProduction.jpg";

const Panel = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <div className="relative h-full w-full">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="26rem"
      className="object-cover"
      placeholder="blur"
    />
    <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
  </div>
);

const aboutUs = [
  {
    title: "Taught by working musicians",
    description:
      "Every instructor still performs, records or produces for a living. You learn the technique that holds up on a stage and in a session, not just the version that looks tidy on paper — and you get the context behind why it works.",
    content: <Panel src={p1} alt="An instructor playing the violin" />,
  },
  {
    title: "A curriculum that connects",
    description:
      "Theory, technique and production are taught as one subject rather than three unrelated ones. Each week builds on the last, so by the end of a course you can hear exactly why the early exercises mattered.",
    content: (
      <Panel src={p2} alt="Hands forming a chord on a guitar fretboard" />
    ),
  },
  {
    title: "Learn on your own schedule",
    description:
      "Courses run four to eight weeks and every lesson stays available afterwards. Practise at six in the morning or eleven at night — the material, exercises and feedback threads do not expire when the term does.",
    content: (
      <Panel src={p3} alt="A musician working on a laptop with headphones on" />
    ),
  },
  {
    title: "Feedback, not just video",
    description:
      "Submit a recording and get specific notes back — intonation, timing, mix balance. A community of other students works through the same material alongside you, so progress is something you can compare and discuss.",
    content: (
      <Panel
        src={p4}
        alt="Studio microphone in front of a mixing desk and audio meters"
      />
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Why Harmonia</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-bold sm:text-5xl">
            Built for people who actually want to play
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Four things we care about more than anything else on the syllabus.
          </p>
        </div>

        <div className="mt-14">
          <StickyScroll content={aboutUs} />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
