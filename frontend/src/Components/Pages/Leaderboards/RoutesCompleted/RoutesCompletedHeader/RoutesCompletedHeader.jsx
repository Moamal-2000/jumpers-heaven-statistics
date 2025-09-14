"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateRoutesCompletedState } from "@/Redux/slices/routesCompletedSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./RoutesCompletedHeader.module.scss";
import RoutesCompletedHeaderBtns from "./RoutesCompletedHeaderBtns/RoutesCompletedHeaderBtns";

const RoutesCompletedHeader = ({ paginationNumber, setPaginationNumber }) => {
  const { leaderboardData, leaderboardScroll, totalMaps } = useSelector(
    (s) => s.routesCompleted
  );
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const isLastSeenLeader = !!searchParams.get("last-seen");
  const leaderboardTitle = isLastSeenLeader
    ? "Last Seen Players"
    : "Top Players";

  function updateAllDataDisplayedStatus() {
    const lastLeaderboardPagination = Math.ceil(
      leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
    );
    const isLastPagination = paginationNumber >= lastLeaderboardPagination;

    dispatch(
      updateRoutesCompletedState({
        key: "allDataDisplayed",
        value: isLastPagination,
      })
    );
  }

  useEffect(() => {
    updateAllDataDisplayedStatus();
  }, [leaderboardScroll]);

  const totalPlayers = leaderboardData?.length || 0;
  const displayedPlayers = leaderboardScroll?.length || 0;

  return (
    <header className={s.header}>
      <div className={s.titleSection}>
        <h3 className={s.title}>{leaderboardTitle}</h3>
        <p className={s.subtitle}>
          Showing {displayedPlayers} of {totalPlayers} players • {totalMaps} total maps available
        </p>
      </div>
      <RoutesCompletedHeaderBtns setPaginationNumber={setPaginationNumber} />
    </header>
  );
};

export default RoutesCompletedHeader;
