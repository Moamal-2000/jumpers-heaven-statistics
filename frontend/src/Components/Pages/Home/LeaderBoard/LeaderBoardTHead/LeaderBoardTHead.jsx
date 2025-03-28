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
        <th className={s.rating} data-sortable>
          <span>Rating</span>
        </th>
        <th className={s.maps} data-sortable>
          <span>Maps</span>
        </th>
        <th className={s.score} data-sortable>
          <span>Points</span>
        </th>
        <th className={s.tops} data-sortable>
          <span>
            {isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10"}
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default LeaderBoardTHead;
