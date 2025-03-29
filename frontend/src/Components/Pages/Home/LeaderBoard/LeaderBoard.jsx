"use client";

import { fetchLeaderboard } from "@/Redux/slices/globalSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";

const LeaderBoard = ({ leaderboardData, mapsCount }) => {
  const { leaderboard } = useSelector((s) => s.global);
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

// export function getUrlParamsObject(stringUrlParams) {
//   const object = {};
//   const queries = stringUrlParams.split("&");
//   const queryNames = queries.map((query) => query.split("=")[0]);
//   const queryValues = queries.map((query) => query.split("=")[1]);

//   queryNames.forEach(
//     (queryName, index) => (object[queryName] = queryValues[index])
//   );

//   console.log(object);
// }

// const stringUrlParams = "fps=76&leaderboard=speedrun&last-seen=this+month";

// getUrlParamsObject(stringUrlParams);
