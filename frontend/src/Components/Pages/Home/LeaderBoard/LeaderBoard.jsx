"use client";

import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const { leaderboard } = useSelector((s) => s.global);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (leaderboard.length !== 0) return;

  //   dispatch(fetchLeaderboard());
  // }, []);

  return (
    <div className={s.leaderboardWrapper}>
      <LeaderboardHeader leaderboardData={leaderboardData} />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead />

        <LeaderBoardTBody
          leaderboardData={leaderboardData}
          mapsCount={mapsCount}
        />
      </table>
    </div>
  );
};

export default LeaderBoard;
