import { jhApis } from "@/Api/jumpersHeaven";
import Introduction from "@/Components/Pages/Home/Introduction/Introduction";
import LeaderBoard from "@/Components/Pages/Home/LeaderBoard/LeaderBoard";
import s from "./page.module.scss";

export default async function Home() {
  const speedRunLeaderboardReq = await fetch(
    jhApis({ fps: 125, limit: 20 }).speedRunLeaderboard,
    { next: { revalidate: 120 } }
  );

  const speedRunLeaderboardData = await speedRunLeaderboardReq.json();

  return (
    <div className="container">
      <main className={s.home}>
        <Introduction />
        <LeaderBoard leaderboardData={speedRunLeaderboardData} />
      </main>
    </div>
  );
}
