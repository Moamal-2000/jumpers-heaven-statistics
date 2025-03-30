"use client";

import { useSearchParams } from "next/navigation";
import s from "./LeaderBoardTHead.module.scss";

const LeaderBoardTHead = () => {
  const searchParams = useSearchParams();
  const leaderboardType = searchParams.get("leaderboard");
  const isSkilledLeaderboard = leaderboardType === "skilled";

  return (
    <thead className={s.thead}>
      <tr>
        <th className={s.rank} data-sortable>
          <span>Rank</span>
        </th>
        <th className={s.player}>Player</th>
        <th className={s.rating}>Rating</th>
        <th className={s.score}>Points</th>
        <th className={s.tops}>
          {isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10"}
        </th>
      </tr>
    </thead>
  );
};

export default LeaderBoardTHead;
