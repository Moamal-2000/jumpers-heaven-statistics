"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import useInfiniteScroll from "@/Hooks/App/useInfiniteScroll";
import {
  fetchLeaderboard,
  updateLeaderboardState,
} from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoard.module.scss";
import LeaderboardHeader from "./LeaderboardHeader/LeaderboardHeader";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";
import LeaderBoardTHead from "./LeaderBoardTHead/LeaderBoardTHead";

const LeaderBoard = () => {
  const { leaderboardData, leaderboardScroll, allDataDisplayed } = useSelector(
    (s) => s.leaderboard
  );
  const { tryFetchAgain, isLeaderboardReversed, isLeaderboardExpanded } =
    useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const leaderboardType = searchParams.get("leaderboard") || "speedrun";
  const fpsType = searchParams.get("fps") || "125";
  const lastSeenType = searchParams.get("last-seen") || "All time";
  const regionFilter = searchParams.get("region") || "Global";
  const collapseClass = isLeaderboardExpanded ? "" : s.collapse;

  const {
    paginationNumber,
    setPaginationNumber,
    lastElementRef: lastPlayerRef,
  } = useInfiniteScroll(leaderboardData, isLeaderboardReversed);

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

  function checkAndLoadMoreData() {
    const isLastPagination = getIsLastPagination(
      leaderboardData,
      paginationNumber
    );

    // In this case the handleShowAll() is activated already
    const isSameArrayReference = leaderboardScroll === leaderboardData;

    const shouldShowMoreData =
      !isLastPagination &&
      !isSameArrayReference &&
      !allDataDisplayed &&
      isLeaderboardExpanded;

    if (shouldShowMoreData) addDataOnScroll();
  }

  function getLeaderboardData() {
    dispatch(fetchLeaderboard(paramsObject));
    setPaginationNumber(1);
  }

  useEffect(() => {
    getLeaderboardData();
  }, [leaderboardType, fpsType, lastSeenType, regionFilter, tryFetchAgain]);

  useEffect(() => {
    checkAndLoadMoreData();
  }, [paginationNumber]);

  return (
    <div className={`${s.leaderboardWrapper} ${collapseClass}`}>
      <LeaderboardHeader
        paginationNumber={paginationNumber}
        setPaginationNumber={setPaginationNumber}
      />

      <table className={s.leaderBoard}>
        <LeaderBoardTHead />
        <LeaderBoardTBody
          leaderboardData={leaderboardScroll}
          lastPlayerRef={lastPlayerRef}
        />
      </table>
    </div>
  );
};

export default LeaderBoard;
