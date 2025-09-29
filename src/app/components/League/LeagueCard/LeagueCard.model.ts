import { LeagueDTO } from "../../../contexts/LeagueProvider/LeagueProvider.model";

export interface LeagueCardProps extends React.HTMLAttributes<HTMLDivElement> {
  league: LeagueDTO;
  badge?: string;
  onCardClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    league: LeagueDTO
  ) => void;
}
