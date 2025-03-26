"use client";

import { useState } from "react";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const [isReverseTable, setIsReverseTable] = useState(false);

  return (
    <table className={s.leaderBoard}>
      <LeaderBoardTHead setIsReverseTable={setIsReverseTable} />

      <LeaderBoardTBody
        leaderboardData={leaderboardData}
        mapsCount={mapsCount}
        isReverseTable={isReverseTable}
      />
    </table>
  );
};

export default LeaderBoard;
