import React from "react";

export default function Loading() {
  return (
    <section className="px-5 pt-36 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Header skeleton */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-6 w-28 animate-pulse rounded-full bg-white/8" />
          <div className="h-12 w-full max-w-lg animate-pulse rounded-xl bg-white/8" />
          <div className="h-4 w-full max-w-md animate-pulse rounded bg-white/5" />
        </div>

        {/* Filter skeleton */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-28 animate-pulse rounded-full bg-white/6"
            />
          ))}
        </div>

        {/* Card skeleton */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="card-surface overflow-hidden rounded-2xl"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-16/10 animate-pulse bg-white/6" />
              <div className="flex flex-col gap-3 p-5">
                <div className="h-5 w-2/3 animate-pulse rounded bg-white/8" />
                <div className="h-3 w-full animate-pulse rounded bg-white/5" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-white/5" />
                <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-4">
                  <div className="h-5 w-16 animate-pulse rounded bg-white/8" />
                  <div className="h-8 w-28 animate-pulse rounded-full bg-white/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only" role="status">
        Loading courses…
      </span>
    </section>
  );
}
