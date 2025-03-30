"use client";

import { fetchLeaderboard } from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const { leaderboard } = useSelector((s) => s.leaderboard);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    dispatch(fetchLeaderboard(paramsObject));
  }, [searchParams]);

  return (
    <div className={s.leaderboardWrapper}>
      <LeaderboardHeader leaderboardData={leaderboardData} />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead />
        <LeaderBoardTBody leaderboardData={leaderboard} mapsCount={mapsCount} />
      </table>
    </div>
  );
};

export default LeaderBoard;
