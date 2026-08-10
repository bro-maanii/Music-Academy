"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const animationDuration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  const animationDirection = direction === "left" ? "forwards" : "reverse";

  // The scroll keyframe translates by -50%, so the track needs exactly two
  // copies of the list. Rendering the duplicate set here rather than cloning
  // DOM nodes in an effect keeps it declarative and avoids the double-clone
  // that happens when React Strict Mode runs the effect twice.
  const marqueeItems = [...items, ...items];

  return (
    <div
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={
        {
          "--animation-duration": animationDuration,
          "--animation-direction": animationDirection,
        } as React.CSSProperties
      }
    >
      <ul
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {marqueeItems.map((item, idx) => (
          <li
            className="card-surface relative flex w-[340px] max-w-full shrink-0 flex-col rounded-2xl px-7 py-6 transition-colors duration-300 hover:border-white/20 md:w-[420px]"
            key={`${item.name}-${idx}`}
            aria-hidden={idx >= items.length}
          >
            <blockquote className="flex h-full flex-col">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-brand/50"
              >
                <path
                  fill="currentColor"
                  d="M9.5 5C6.5 6.5 4.5 9.5 4.5 13v6h6v-6h-3c0-2.5 1-4.2 3-5.3L9.5 5zm10 0c-3 1.5-5 4.5-5 8v6h6v-6h-3c0-2.5 1-4.2 3-5.3L19.5 5z"
                />
              </svg>

              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                {item.quote}
              </p>

              <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-4">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-strong to-brand-2 text-xs font-bold text-white"
                >
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span className="flex flex-col">
                  <cite className="text-sm font-medium text-white not-italic">
                    {item.name}
                  </cite>
                  <span className="text-xs text-white/45">{item.title}</span>
                </span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
