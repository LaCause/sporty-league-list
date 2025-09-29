import { Suspense } from "react";
import { LeagueListContainer } from "./components/League/LeagueListContainer/LeagueListContainer";
import LeagueListSkeleton from "./components/League/LeagueListSkeleton/LeagueListSkeleton";
import { formatLeagueListParams } from "./lib/leagues";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;
  const formattedParams = formatLeagueListParams(params);

  return (
    <main>
      <Suspense fallback={<LeagueListSkeleton />}>
        <LeagueListContainer params={formattedParams} />
      </Suspense>
    </main>
  );
}
