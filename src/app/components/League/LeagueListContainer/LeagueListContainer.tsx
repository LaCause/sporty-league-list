import { getAllLeagues } from "@/app/lib/leagues";
import { LeagueList } from "../LeagueList/LeagueList";
import { LeagueFilters } from "../LeagueFilters/LeagueFilters";
import { LeagueProvider } from "@/app/contexts/LeagueProvider/LeagueProvider";
import { sleep } from "@/app/utils";

export type LeagueListContainerParams = {
  category: string;
  searchValue: string;
};

type LeagueListContainerProps = {
  params: LeagueListContainerParams | null;
};

export const LeagueListContainer = async ({
  params,
}: LeagueListContainerProps) => {
  // I add this utils for see the skeleton, you can delete
  await sleep(1000);

  const leagues = await getAllLeagues();
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6 py-6 md:py-10">
      <LeagueProvider
        ssrLeagues={leagues}
        initialCategory={params?.category}
        initialSearchValue={params?.searchValue}
      >
        <div className="flex flex-col gap-6">
          <LeagueFilters />
          <div className="rounded-lg border border-foreground/10 bg-background p-3 md:p-4">
            <LeagueList />
          </div>
        </div>
      </LeagueProvider>
    </section>
  );
};
