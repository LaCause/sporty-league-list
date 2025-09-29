"use client";
import React from "react";

type Props = {
  count?: number;
  className?: string;
};

export default function LeagueListSkeleton({
  count = 8,
  className = "",
}: Props) {
  return (
    <div role="status" aria-label="Chargement des ligues" className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-6 md:py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
          {Array.from({ length: count }).map((_, i) => (
            <li key={i}>
              <article
                className="relative h-full min-h-56 overflow-hidden rounded-xl bg-primary-container text-on-primary-container ring-1 ring-primary/20 shadow-sm p-4 flex flex-col justify-between animate-pulse"
                aria-hidden
              >
                <header>
                  <div className="h-5 w-3/4 rounded-md bg-on-primary-container/20 shimmer" />
                  <div className="mt-2 h-4 w-24 rounded-md bg-on-primary-container/15 shimmer" />
                </header>

                <div className="mt-4 h-4 w-1/2 rounded-md bg-on-primary-container/15 shimmer" />

                <span className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/10" />
              </article>
            </li>
          ))}
        </ul>

        <span className="sr-only">Chargement...</span>

        <style jsx>{`
          .shimmer {
            position: relative;
            overflow: hidden;
          }
          .shimmer::after {
            content: "";
            position: absolute;
            inset: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            animation: shimmer 1.2s ease-in-out infinite;
          }
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
