"use client";

import { useSearchParams } from "next/navigation";
import s from "./LeaderBoardTHead.module.scss";
import RankTableHeader from "./RankTableHeader/RankTableHeader";

const LeaderBoardTHead = () => {
  const searchParams = useSearchParams();
  const leaderboardType = searchParams.get("leaderboard");
  const isSkilledLeaderboard = leaderboardType === "skilled";
  const isRoutesCompletedLeaderboard = leaderboardType === "routescompleted";
  const scoreText = isRoutesCompletedLeaderboard
    ? "Completed routes"
    : "Points";

  return (
    <thead className={s.thead}>
      <tr>
        <RankTableHeader text="Rank" />
        <th className={s.player}>Player</th>
        <th className={s.rating}>Rating</th>
        <th className={s.score}>{scoreText}</th>

        {!isRoutesCompletedLeaderboard && (
          <th className={s.tops}>
            {isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10"}
          </th>
        )}
      </tr>
    </thead>
  );
};

export default LeaderBoardTHead;
