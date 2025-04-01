"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderboardHeader.module.scss";

const LeaderboardHeader = ({ setPaginationNumber }) => {
  const { leaderboardData } = useSelector((s) => s.leaderboard);
  const dispatch = useDispatch();

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

  return (
    <header className={s.header}>
      <h3>Top Players</h3>
      <button type="button" className={s.showAllBtn} onClick={handleShowAll}>
        Show All
      </button>
    </header>
  );
};

export default LeaderboardHeader;
