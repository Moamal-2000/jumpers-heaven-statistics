"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderboardHeader.module.scss";
import LeaderboardHeaderBtns from "./LeaderboardHeaderBtns/LeaderboardHeaderBtns";

const LeaderboardHeader = ({ paginationNumber, setPaginationNumber }) => {
  const { leaderboardData, leaderboardScroll } = useSelector(
    (s) => s.leaderboard
  );
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const isLastSeenLeader = !!searchParams.get("last-seen");
  const leaderboardTitle = isLastSeenLeader
    ? "Last Seen Players"
    : "Top Players";

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

  return (
    <header className={s.header}>
      <h3>{leaderboardTitle}</h3>
      <LeaderboardHeaderBtns setPaginationNumber={setPaginationNumber} />
    </header>
  );
};

export default LeaderboardHeader;
