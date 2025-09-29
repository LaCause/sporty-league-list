import { LeagueListContainerParams } from "@/app/components/League/LeagueListContainer/LeagueListContainer";
import {
  BadgeDTO,
  LeagueDTO,
} from "@/app/contexts/LeagueProvider/LeagueProvider.model";

export const getAllLeagues = async (): Promise<LeagueDTO[]> => {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`,
    {
      next: {
        revalidate: 32000,
        tags: ["leagues"],
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch all leagues");
  const { leagues } = await res.json();

  return leagues;
};

export const formatLeagueListParams = (
  params: Record<string, string>
): LeagueListContainerParams | null => {
  if (!params.category && !params.keyword) return null;
  return {
    category: params.category,
    searchValue: params.searchValue,
  };
};

export const getFirstBadge = (badges: BadgeDTO[]) =>
  badges && badges.length ? badges[0] : null;
