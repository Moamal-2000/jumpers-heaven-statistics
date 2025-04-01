"use client";

import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderBoardTHead.module.scss";

const LeaderBoardTHead = () => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const leaderboardType = searchParams.get("leaderboard");
  const isSkilledLeaderboard = leaderboardType === "skilled";

  function reverseLeaderboard() {
    dispatch(
      updateGlobalState({
        key: "isLeaderboardReversed",
        value: !isLeaderboardReversed,
      })
    );
  }

  return (
    <thead className={s.thead}>
      <tr>
        <th
          className={s.rank}
          data-sortable
          tabIndex="0"
          aria-label={`Sort leaderboard by rank ${
            isLeaderboardReversed ? "descending" : "ascending"
          }`}
          onClick={reverseLeaderboard}
        >
          <span>Rank</span>
        </th>
        <th className={s.player}>Player</th>
        <th className={s.rating}>Rating</th>
        <th className={s.score}>Points</th>
        <th className={s.tops}>
          {isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10"}
        </th>
      </tr>
    </thead>
  );
};

export default LeaderBoardTHead;
