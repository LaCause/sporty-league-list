"use client";

import React from "react";
import { cn } from "@/app/utils";
import { LeagueCardProps } from "./LeagueCard.model";
import Image from "next/image";

const LeagueCardComponent = ({
  league,
  className,
  badge,
  onCardClick,
  ...props
}: LeagueCardProps) => {
  const headingId = `league-${league.idLeague}-title`;
  const descId = `league-${league.idLeague}-desc`;
  const altId = `league-${league.idLeague}-alt`;

  return (
    <article
      aria-labelledby={headingId}
      aria-describedby={descId}
      onClick={(e) => onCardClick?.(e, league)}
      className={cn(
        "group relative h-full min-h-56 overflow-hidden rounded-xl bg-primary-container text-on-primary-container cursor-pointer hover:bg-primary/30 active:scale-90 transition-transform",
        "ring-1 ring-primary/20 shadow-sm transition-shadow duration-200 hover:shadow-md",
        "p-4 flex flex-col justify-between",
        className
      )}
      {...props}
    >
      <header>
        <h2 id={headingId} className="text-lg font-semibold tracking-tight">
          {league.strLeague}
        </h2>
        <p id={descId} className="mt-1 text-sm opacity-80">
          {league.strSport}
        </p>
      </header>

      <div className="h-20 w-20 max-h-32 relative text-center">
        {badge && (
          <Image
            fill
            className="object-contain object-center"
            src={badge}
            alt={`${badge}`}
          />
        )}
      </div>

      {league.strLeagueAlternate ? (
        <p id={altId} className="mt-4 text-sm opacity-70">
          Also known as: {league.strLeagueAlternate}
        </p>
      ) : (
        <p className="mt-4 text-sm opacity-60">No alternate name</p>
      )}

      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/10 transition-transform duration-200 group-hover:scale-110"
      />
    </article>
  );
};

const propsAreEqual = (prev: LeagueCardProps, next: LeagueCardProps) => {
  if (prev.className !== next.className) return false;
  if (prev.badge !== next.badge) return false;
  if (prev.onCardClick !== next.onCardClick) return false;

  const pl = prev.league;
  const nl = next.league;

  return (
    pl.idLeague === nl.idLeague &&
    pl.strLeague === nl.strLeague &&
    pl.strSport === nl.strSport &&
    pl.strLeagueAlternate === nl.strLeagueAlternate
  );
};

export const LeagueCard = React.memo(LeagueCardComponent, propsAreEqual);
