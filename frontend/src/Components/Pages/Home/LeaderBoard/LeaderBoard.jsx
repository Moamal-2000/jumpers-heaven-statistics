"use client";

import { paginateData } from "@/Functions/utils";
import { fetchLeaderboard } from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";

const LeaderBoard = ({ mapsCount }) => {
  const { leaderboardData } = useSelector((s) => s.leaderboard);
  const { tryFetchAgain } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const leaderboardType = searchParams.get("leaderboard") || "speedrun";

  const paginationNumber = paramsObject?.["leaderboard-pagination"] || 1;
  const paginationLeaderboardData = paginateData(
    leaderboardData,
    paginationNumber
  );

  useEffect(() => {
    dispatch(fetchLeaderboard(paramsObject));
  }, [leaderboardType, tryFetchAgain]);

  return (
    <div className={s.leaderboardWrapper}>
      <LeaderboardHeader />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead />
        <LeaderBoardTBody
          leaderboardData={paginationLeaderboardData}
          mapsCount={mapsCount}
        />
      </table>
    </div>
  );
};

export default LeaderBoard;
