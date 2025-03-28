"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const [isReverseTable, setIsReverseTable] = useState(false);
  const { leaderboard } = useSelector((s) => s.global);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (leaderboard.length !== 0) return;

  //   dispatch(fetchLeaderboard());
  // }, []);

  return (
    <div className={s.leaderboardWrapper}>
      <LeaderboardHeader />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead setIsReverseTable={setIsReverseTable} />

        <LeaderBoardTBody
          leaderboardData={leaderboardData}
          mapsCount={mapsCount}
          isReverseTable={isReverseTable}
        />
      </table>
    </div>
  );
};

export default LeaderBoard;
