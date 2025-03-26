import { jhApis } from "@/Api/jumpersHeaven";
import FiltersSection from "@/Components/Pages/Home/FiltersSection/FiltersSection";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import { Suspense } from "react";
import s from "./page.module.scss";

export default async function Home() {
  const [leaderboardData, mapsCount] = await Promise.all([
    (await fetch(jhApis({ limit: 20 }).skilledLeaderboard)).json(),
    (await fetch(jhApis({}).mapsCount)).json(),
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
