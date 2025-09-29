"use client";

import React, { useCallback, useState, useTransition } from "react";
import { LeagueCard } from "../LeagueCard/LeagueCard";
import { useLeague } from "@/app/contexts/LeagueProvider/LeagueProvider";
import { LeagueDTO } from "@/app/contexts/LeagueProvider/LeagueProvider.model";
import { getBadgesByLeague } from "@/app/actions/league";

const LeagueListComponent = () => {
  const { filteredLeagues } = useLeague();
  const [, startTransition] = useTransition();
  const [badges, setBadges] = useState<Record<string, string>>({});

  const handleClickCard = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>, league: LeagueDTO) => {
      e.preventDefault();

      startTransition(async () => {
        try {
          if (badges[league.idLeague]) return;
          const res = await getBadgesByLeague(league.idLeague);
          if (!res?.strBadge) return;

          setBadges((prev) => {
            if (prev[league.idLeague]) return prev;
            const next = { ...prev, [league.idLeague]: res.strBadge };
            return next;
          });
        } catch (err) {
          console.error("Cannot load badges : ", err);
        }
      });
    },
    [badges]
  );

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
      {filteredLeagues.map((league) => (
        <li key={league.idLeague}>
          <LeagueCard
            league={league}
            badge={badges[league.idLeague]}
            onCardClick={handleClickCard}
          />
        </li>
      ))}
    </ul>
  );
};

export const LeagueList = React.memo(LeagueListComponent);
