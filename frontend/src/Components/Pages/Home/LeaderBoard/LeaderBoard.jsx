"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const [isReverseTable, setIsReverseTable] = useState(false);
  const searchParams = useSearchParams();
  const leaderboardType = searchParams.get("leaderboard");
  const isSkilledLeaderboard = leaderboardType === "skilled";

  function toggleReverseTable() {
    setIsReverseTable((prevState) => !prevState);
  }

  return (
    <table className={s.leaderBoard}>
      <thead>
        <tr onClick={toggleReverseTable}>
          <th className={s.rank}>Rank</th>
          <th className={s.player}>Player</th>
          <th className={s.score}>Total score</th>
          <th className={s.tops}>
            {isSkilledLeaderboard ? "points difficulty" : "Tops 1-10"}
          </th>
        </tr>
      </thead>

      <Suspense>
        <LeaderBoardTBody
          leaderboardData={leaderboardData}
          mapsCount={mapsCount}
          isReverseTable={isReverseTable}
          isSkilledLeaderboard={isSkilledLeaderboard}
        />
      </Suspense>
    </table>
  );
};

export default LeaderBoard;
