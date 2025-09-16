"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import useInfiniteScroll from "@/Hooks/App/useInfiniteScroll";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
import { fetchLeaderboard } from "@/Redux/thunks/leaderboardThunk";
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
  const {
    tryFetchAgain,
    isLeaderboardReversed,
    isLeaderboardExpanded,
    pageVisits,
  } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const collapseClass = isLeaderboardExpanded ? "" : s.collapse;

  const leaderboardType = searchParams.get("leaderboard");
  const isRoutesCompleted = leaderboardType === "routescompleted";
  const leaderboardClasses = `${s.leaderBoard} ${
    isRoutesCompleted ? s.routesCompleted : ""
  }`;

  const [lastPlayerRef, paginationNumber, setPaginationNumber] =
    useInfiniteScroll(leaderboardData, isLeaderboardReversed);

  function addDataOnScroll() {
    const paginationLeaderboardData = paginateData(
      leaderboardData,
      paginationNumber
    );
    const value = leaderboardScroll.concat(paginationLeaderboardData);

    dispatch(updateLeaderboardState({ key: "leaderboardScroll", value }));
  }

  function checkAndLoadMoreData() {
    const isLastPagination = getIsLastPagination(
      leaderboardData,
      paginationNumber
    );

    // In this case the handleShowAll() is activated already
    const isSameArrayReference = leaderboardScroll === leaderboardData;

    const lastVisitedPage = pageVisits?.[pageVisits.length - 1];
    const cameFromDifferentPage =
      lastVisitedPage !== "/leaderboards" && lastVisitedPage !== undefined;

    const shouldShowMoreData =
      !isLastPagination &&
      !isSameArrayReference &&
      !allDataDisplayed &&
      isLeaderboardExpanded &&
      !cameFromDifferentPage;

    if (shouldShowMoreData) addDataOnScroll();
  }

  function getLeaderboardData() {
    dispatch(fetchLeaderboard(paramsObject));
    setPaginationNumber(1);
  }

  useEffect(() => {
    getLeaderboardData();
  }, [searchParams, tryFetchAgain]);

  useEffect(() => {
    checkAndLoadMoreData();
  }, [paginationNumber]);

  return (
    <div className={`${s.leaderboardWrapper} ${collapseClass}`}>
      <LeaderboardHeader
        paginationNumber={paginationNumber}
        setPaginationNumber={setPaginationNumber}
      />

      <table className={leaderboardClasses}>
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
