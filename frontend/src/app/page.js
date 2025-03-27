import { jhApis } from "@/Api/jumpersHeaven";
import FiltersSection from "@/Components/Pages/Home/FiltersSection/FiltersSection";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import { Suspense } from "react";
import s from "./page.module.scss";

export default async function Home() {
  const skilledLeaderboardUrl = jhApis({ limit: 20 }).leaderboard
    .getSkilledLeaderboard;

  const [leaderboardData, mapsCount] = await Promise.all([
    (await fetch(skilledLeaderboardUrl)).json(),
    (await fetch(jhApis({}).map.getMapsCount)).json(),
  ]);

  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
        <FiltersSection />
        <Suspense>
          <LeaderBoard
            leaderboardData={leaderboardData}
            mapsCount={mapsCount?.count}
          />
        </Suspense>
      </main>
    </div>
  );
}
