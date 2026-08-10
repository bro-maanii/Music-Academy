"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // Track the container's own scroll only. Passing `target: ref` as well made
  // the progress measure the scroller's *client* box against itself, so it
  // never spanned a clean 0→1 and the final card was unreachable.
  const { scrollYProgress } = useScroll({ container: ref });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Spread breakpoints across the full range so the last card lands on 1.
    const cardsBreakpoints = content.map((_, index) =>
      cardLength === 1 ? 0 : index / (cardLength - 1)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface">
      {/* Progress rail */}
      <div className="absolute left-0 top-0 z-20 h-1 w-full bg-white/5">
        <motion.div
          className="h-full bg-linear-to-r from-brand-strong to-brand-2"
          animate={{ width: `${((activeCard + 1) / cardLength) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div
        ref={ref}
        className="flex h-[30rem] justify-center gap-10 overflow-y-auto overscroll-contain p-8 md:p-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          // Fades copy in and out at the container edges so the clipped text
          // reads as intentional rather than broken.
          maskImage:
            "linear-gradient(to bottom, transparent 0, #000 6%, #000 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, #000 6%, #000 84%, transparent 100%)",
        }}
      >
        {/* Scrolling copy */}
        <div className="relative flex w-full max-w-xl shrink-0 items-start">
          <div className="w-full">
            {content.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div key={item.title + index} className="my-24 first:mt-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-7 w-7 place-items-center rounded-full border text-xs font-semibold transition-colors duration-300",
                        isActive
                          ? "border-brand/40 bg-brand/15 text-brand"
                          : "border-white/10 text-white/30"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <motion.h3
                      animate={{ opacity: isActive ? 1 : 0.35 }}
                      transition={{ duration: 0.3 }}
                      className="font-display text-2xl font-semibold text-white"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0.25 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70"
                  >
                    {item.description}
                  </motion.p>
                </div>
              );
            })}
            {/* Tail space so the final item can reach the active zone */}
            <div className="h-56" />
          </div>
        </div>

        {/* Sticky media panel */}
        <div
          className={cn(
            "sticky top-2 hidden h-[22rem] w-[26rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-surface-2 lg:block",
            contentClassName
          )}
        >
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              animate={{ opacity: activeCard === index ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
              aria-hidden={activeCard !== index}
            >
              {item.content ?? null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
