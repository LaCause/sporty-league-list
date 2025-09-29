"use server";

import { BadgeDTO } from "@/app/contexts/LeagueProvider/LeagueProvider.model";
import { getFirstBadge } from "@/app/lib/leagues";

export const getBadgesByLeague = async (
  id: string
): Promise<BadgeDTO | null> => {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${id}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) throw new Error("Cannot get badges by league from api");
  const badges = await res.json();

  return getFirstBadge(badges?.seasons);
};
