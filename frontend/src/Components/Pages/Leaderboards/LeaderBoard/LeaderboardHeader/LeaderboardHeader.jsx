"use client";

import {
  PAGINATION_ITEMS_PER_PAGE,
  TOTAL_MAPS_PLACEHOLDER,
} from "@/Data/constants";
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
  const statistics = useSelector((s) => s.global.statistics);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const isLastSeenLeader = !!searchParams.get("last-seen");

  const leaderboardTitle = isLastSeenLeader
    ? "Last Seen Players"
    : "Top Players";
  const totalPlayers = leaderboardData?.length || 0;
  const displayedPlayers = leaderboardScroll?.length || 0;

  const totalMaps = statistics?.mapsCount || TOTAL_MAPS_PLACEHOLDER;

  function updateAllDataDisplayedStatus() {
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
  }

  useEffect(() => {
    updateAllDataDisplayedStatus();
  }, [leaderboardScroll]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h3>{leaderboardTitle}</h3>
        <p>
          Showing <span>{displayedPlayers}</span> of <span>{totalPlayers}</span>{" "}
          players • <span>{totalMaps}</span> total maps available
        </p>
      </div>

      <LeaderboardHeaderBtns setPaginationNumber={setPaginationNumber} />
    </header>
  );
};

export default LeaderboardHeader;
