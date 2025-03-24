import { jhApis } from "@/Api/jumpersHeaven";
import FiltersSection from "@/Components/Pages/Home/FiltersSection/FiltersSection";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import s from "./page.module.scss";

export default async function Home() {
  const leaderboardReq = await fetch(jhApis({ limit: 20 }).skilledLeaderboard);
  const mapsCountReq = await fetch(jhApis({}).mapsCount);

  const speedRunLeaderboardData = await leaderboardReq.json();
  const mapsCountRes = await mapsCountReq.json();

  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
        <FiltersSection />
        <LeaderBoard
          leaderboardData={speedRunLeaderboardData}
          mapsCount={mapsCountRes?.count}
        />
      </main>
    </div>
  );
}
