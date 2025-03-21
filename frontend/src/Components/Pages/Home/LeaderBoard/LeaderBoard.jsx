"use client";

import { useState } from "react";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const [isReverseTable, setIsReverseTable] = useState(false);

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
          <th className={s.tops}>Tops 1-10</th>
        </tr>
      </thead>

      <LeaderBoardTBody
        leaderboardData={leaderboardData}
        mapsCount={mapsCount}
        isReverseTable={isReverseTable}
      />
    </table>
  );
};

export default LeaderBoard;
