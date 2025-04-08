"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderboardHeader.module.scss";

const LeaderboardHeader = ({ paginationNumber, setPaginationNumber }) => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const {
    leaderboardData,
    leaderboardScroll,
    firstChunkLeaderboard,
    allDataDisplayed,
    loading,
    error,
  } = useSelector((s) => s.leaderboard);
  const { isLeaderboardExpanded } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const isLastSeenLeader = !!searchParams.get("last-seen");
  const leaderboardTitle = isLastSeenLeader
    ? "Last Seen Players"
    : "Top Players";
  const isLeaderboardUnavailable =
    loading || error || leaderboardData.length === 0;

  function handleShowAllBtn() {
    if (allDataDisplayed) {
      handleShowLess();
      return;
    }

    handleShowAll();
  }

  function handleShowAll() {
    if (leaderboardData?.length <= 0) return;

    const lastLeaderboardPagination = Math.ceil(
      leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
    );

    dispatch(
      updateLeaderboardState({
        key: "leaderboardScroll",
        value: leaderboardData,
      })
    );

    setPaginationNumber(lastLeaderboardPagination);
  }

  function handleShowLess() {
    if (leaderboardData?.length <= 0) return;

    dispatch(
      updateLeaderboardState({
        key: "leaderboardScroll",
        value: firstChunkLeaderboard,
      })
    );

    setPaginationNumber(1);
  }

  function handleExpandBtn() {
    dispatch(
      updateGlobalState({
        key: "isLeaderboardExpanded",
        value: !isLeaderboardExpanded,
      })
    );
  }

  useEffect(() => {
    const lastLeaderboardPagination = Math.ceil(
      leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
    );
    const isLastPagination = paginationNumber >= lastLeaderboardPagination;

    dispatch(
      updateLeaderboardState({
        key: "allDataDisplayed",
        value: isLastPagination,
      })
    );
  }, [leaderboardScroll]);

  useEffect(() => {
    const isSameArrayReference = leaderboardScroll === leaderboardData;
    if (!isSameArrayReference) handleShowAll();
  }, [isLeaderboardReversed]);

  return (
    <header className={s.header}>
      <h3>{leaderboardTitle}</h3>

      <div className={s.buttons}>
        <button
          type="button"
          className={s.expandBtn}
          onClick={handleExpandBtn}
          disabled={isLeaderboardUnavailable}
        >
          {isLeaderboardExpanded ? "Minimize" : "Maximize"}
        </button>

        <button
          type="button"
          className={s.showAllBtn}
          onClick={handleShowAllBtn}
          disabled={isLeaderboardUnavailable}
        >
          {allDataDisplayed ? "Show Less" : "Show All"}
        </button>
      </div>
    </header>
  );
};

export default LeaderboardHeader;
