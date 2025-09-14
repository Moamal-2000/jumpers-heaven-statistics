"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { updateRoutesCompletedState } from "@/Redux/slices/routesCompletedSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShowAllButton = ({ setPaginationNumber }) => {
  const {
    leaderboardData,
    leaderboardScroll,
    firstChunkLeaderboard,
    allDataDisplayed,
    loading,
    error,
  } = useSelector((s) => s.routesCompleted);
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const isLeaderboardUnavailable =
    loading || error || leaderboardData?.length === 0;
  const showAllBtnNoun =
    leaderboardData?.length === 0
      ? "Show All"
      : allDataDisplayed
      ? "Show Less"
      : "Show All";

  function handleShowAllBtn() {
    if (allDataDisplayed) {
      handleShowLess();
      return;
    }

    handleShowAll();
  }

  function handleShowAll() {
    if (leaderboardData?.length <= 0 || allDataDisplayed) return;

    const lastLeaderboardPagination = Math.ceil(
      leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
    );

    dispatch(
      updateRoutesCompletedState({
        key: "leaderboardScroll",
        value: leaderboardData,
      })
    );

    setPaginationNumber(lastLeaderboardPagination);
  }

  function handleShowLess() {
    if (leaderboardData?.length <= 0) return;

    dispatch(
      updateRoutesCompletedState({
        key: "leaderboardScroll",
        value: firstChunkLeaderboard,
      })
    );
    dispatch(updateGlobalState({ key: "isLeaderboardReversed", value: false }));

    setPaginationNumber(1);
  }

  useEffect(() => {
    const isSameArrayReference = leaderboardScroll === leaderboardData;
    if (!isSameArrayReference) handleShowAll();
  }, [isLeaderboardReversed]);

  return (
    <button
      type="button"
      onClick={handleShowAllBtn}
      disabled={isLeaderboardUnavailable}
    >
      {showAllBtnNoun}
    </button>
  );
};

export default ShowAllButton;
