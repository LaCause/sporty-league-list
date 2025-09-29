export interface BadgeDTO {
  strSeason: string;
  strBadge: string;
}

export interface LeagueDTO {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
  strBadges?: BadgeDTO[];
}

export interface LeagueProviderInterface {
  leagues: LeagueDTO[];
  filteredLeagues: LeagueDTO[];
  categories: string[];
  searchValue?: string;
  category?: string;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
}
