"use client";

import { getIsLastPagination, paginateData } from "@/Functions/utils";
import useInfiniteScroll from "@/Hooks/App/useInfiniteScroll";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { updateRoutesCompletedState } from "@/Redux/slices/routesCompletedSlice";
import { fetchRoutesCompleted } from "@/Redux/thunks/routesCompletedThunk";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./RoutesCompleted.module.scss";
import RoutesCompletedHeader from "./RoutesCompletedHeader/RoutesCompletedHeader";
import RoutesCompletedTBody from "./RoutesCompletedTBody/RoutesCompletedTBody";
import RoutesCompletedTHead from "./RoutesCompletedTHead/RoutesCompletedTHead";

const RoutesCompleted = () => {
  const { leaderboardData, leaderboardScroll, allDataDisplayed, loading, error } = useSelector(
    (s) => s.routesCompleted
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

  const [lastPlayerRef, paginationNumber, setPaginationNumber] =
    useInfiniteScroll(leaderboardData, isLeaderboardReversed);

  function addDataOnScroll() {
    const paginationLeaderboardData = paginateData(
      leaderboardData,
      paginationNumber
    );
    const value = leaderboardScroll.concat(paginationLeaderboardData);

    dispatch(updateRoutesCompletedState({ key: "leaderboardScroll", value }));
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


    if (shouldShowMoreData) {
      addDataOnScroll();
    }
  }

  function getLeaderboardData() {
    dispatch(fetchRoutesCompleted(paramsObject));
    setPaginationNumber(1);
  }

  useEffect(() => {
    getLeaderboardData();
    // Ensure leaderboard is expanded for Routes Completed view
    if (!isLeaderboardExpanded) {
      dispatch(updateGlobalState({ key: "isLeaderboardExpanded", value: true }));
    }
  }, [searchParams, tryFetchAgain]);

  useEffect(() => {
    checkAndLoadMoreData();
  }, [paginationNumber]);

  return (
    <div className={`${s.leaderboardWrapper} ${collapseClass}`}>
      <RoutesCompletedHeader
        paginationNumber={paginationNumber}
        setPaginationNumber={setPaginationNumber}
      />

      <table className={s.leaderBoard}>
        <RoutesCompletedTHead />
        <RoutesCompletedTBody
          leaderboardData={leaderboardScroll}
          lastPlayerRef={lastPlayerRef}
        />
      </table>
    </div>
  );
};

export default RoutesCompleted;
