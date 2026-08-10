"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Teachers from "./Teachers";

export default function Instructors() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/8">
      <WavyBackground
        containerClassName="relative h-[34rem] w-full"
        className="w-full px-5"
        backgroundFill="#06060a"
        waveOpacity={0.28}
        blur={16}
      >
        {/* Scrim keeps the copy legible where it crosses the waves. */}
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-white/8 bg-ink/70 px-8 py-10 text-center backdrop-blur-md sm:px-12">
          <p className="eyebrow">The faculty</p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold sm:text-5xl">
            Our instructors
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Performers, session players and producers who teach because they
            enjoy it — not because the touring stopped.
          </p>

          <div className="mt-10">
            <Teachers />
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
