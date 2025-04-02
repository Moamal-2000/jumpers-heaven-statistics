"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
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
  } = useSelector((s) => s.leaderboard);
  const dispatch = useDispatch();

  function handleClick() {
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
      <h3>Top Players</h3>
      <button type="button" className={s.showAllBtn} onClick={handleClick}>
        {allDataDisplayed ? "Show Less" : "Show All"}
      </button>
    </header>
  );
};

export default LeaderboardHeader;
