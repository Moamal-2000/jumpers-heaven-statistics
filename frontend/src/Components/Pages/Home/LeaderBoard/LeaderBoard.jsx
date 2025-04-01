"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import {
  fetchLeaderboard,
  updateLeaderboardState,
} from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";

const LeaderBoard = ({ mapsCount }) => {
  const { leaderboardData, leaderboardScroll } = useSelector(
    (s) => s.leaderboard
  );
  const { tryFetchAgain, isLeaderboardReversed } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const leaderboardType = searchParams.get("leaderboard") || "speedrun";
  const fpsType = searchParams.get("fps") || "125";

  const [paginationNumber, setPaginationNumber] = useState(1);
  const observer = useRef();

  const lastPlayerRef = useCallback((node) => {
    if (isLeaderboardReversed) return;
    const isLastPagination = getIsLastPagination(
      leaderboardData,
      paginationNumber
    );

    if (isLastPagination) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting)
        setPaginationNumber((prevValue) => prevValue + 1);
    });

    if (node) observer.current.observe(node);
  });

  function addDataOnScroll() {
    const paginationLeaderboardData = paginateData(
      leaderboardData,
      paginationNumber
    );

    dispatch(
      updateLeaderboardState({
        key: "leaderboardScroll",
        value: [...leaderboardScroll, ...paginationLeaderboardData],
      })
    );
  }

  useEffect(() => {
    dispatch(fetchLeaderboard(paramsObject));
    setPaginationNumber(1);
  }, [leaderboardType, fpsType, tryFetchAgain]);

  useEffect(() => {
    const isLastPagination = getIsLastPagination(
      leaderboardData,
      paginationNumber
    );

    // In this case the handleShowAll() is activated already
    const isSameArrayReference = leaderboardScroll === leaderboardData;

    if (!isLastPagination && !isSameArrayReference) addDataOnScroll();
  }, [paginationNumber]);

  return (
    <div className={s.leaderboardWrapper}>
      <LeaderboardHeader setPaginationNumber={setPaginationNumber} />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead />
        <LeaderBoardTBody
          leaderboardData={leaderboardScroll}
          mapsCount={mapsCount}
          lastPlayerRef={lastPlayerRef}
        />
      </table>
    </div>
  );
};

export default LeaderBoard;
