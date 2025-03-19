import { jhApis } from "@/Api/jumpersHeaven";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import s from "./page.module.scss";

export default async function Home() {
  const speedRunLeaderboardReq = await fetch(
    jhApis({ fps: 125, limit: 20 }).speedRunLeaderboard,
    { next: { revalidate: 120 } }
  );

  const mapsCountReq = await fetch(jhApis({}).mapsCount, {
    next: { revalidate: 120 },
  });

  if (!speedRunLeaderboardReq.ok)
    throw new Error("Failed to fetch speedrun leaderboard data");

  const speedRunLeaderboardData = await speedRunLeaderboardReq.json();
  const mapsCountRes = await mapsCountReq.json();

  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
        <LeaderBoard
          leaderboardData={speedRunLeaderboardData}
          mapsCount={mapsCountRes?.count}
        />
      </main>
    </div>
  );
}
