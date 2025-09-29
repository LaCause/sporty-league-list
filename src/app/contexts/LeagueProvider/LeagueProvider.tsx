"use client";

import {
  LeagueDTO,
  LeagueProviderInterface,
} from "@/app/contexts/LeagueProvider/LeagueProvider.model";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const LeagueContext = createContext<LeagueProviderInterface>({
  leagues: [],
  filteredLeagues: [],
  categories: [],
  searchValue: "",
});

export const useLeague = () => {
  const ctx = useContext(LeagueContext);
  if (!ctx) throw new Error("Cannot load league context");
  return ctx;
};

export const LeagueProvider = ({
  children,
  ssrLeagues,
  initialCategory,
  initialSearchValue,
}: {
  children: ReactNode;
  ssrLeagues: LeagueDTO[];
  initialCategory?: string;
  initialSearchValue?: string;
}) => {
  const [leagues, setLeagues] = useState<LeagueProviderInterface["leagues"]>(
    ssrLeagues ?? []
  );
  const [category, setCategory] = useState<string>(initialCategory ?? "");
  const [searchValue, setSearchValue] = useState<string>(
    initialSearchValue ?? ""
  );

  const filteredLeagues = useMemo(() => {
    const currentCategory = (category ?? "").toLowerCase().trim();
    const currentKeyword = (searchValue ?? "").toLowerCase().trim();

    const filtered = leagues.filter((league) => {
      const matchesCategory =
        !category || league.strSport?.toLowerCase() === currentCategory;

      const matchesSearchValue =
        !currentKeyword ||
        league.strLeague?.toLowerCase().includes(currentKeyword) ||
        league.strLeagueAlternate?.toLowerCase().includes(currentKeyword);

      return matchesCategory && matchesSearchValue;
    });

    return filtered;
  }, [leagues, searchValue, category]);

  const categories = useMemo(
    () => [...new Set(leagues.map((league) => league.strSport))],
    [leagues]
  );

  const value = useMemo(
    () => ({
      leagues,
      filteredLeagues,
      categories,
      searchValue,
      category,
      setSearchValue,
      setCategory,
      setLeagues,
    }),
    [leagues, categories, searchValue, category, filteredLeagues]
  );

  return (
    <LeagueContext.Provider value={value}>{children}</LeagueContext.Provider>
  );
};
