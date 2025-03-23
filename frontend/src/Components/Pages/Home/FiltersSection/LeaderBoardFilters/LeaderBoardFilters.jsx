"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./LeaderBoardFilters.module.scss";

const LeaderBoardFilters = () => {
  const searchParams = useSearchParams();
  const leaderboardUrlQuery = searchParams.get("leaderboard");

  return (
    <div className={s.filters}>
      {LEADERBOARD_FILTERS_DATA.map(({ text, id }) => (
        <FilterButton
          key={id}
          text={text}
          queryName="leaderboard"
          urlQuery={leaderboardUrlQuery}
          defaultUrlQuery="all"
        />
      ))}
    </div>
  );
};

export default LeaderBoardFilters;

const LEADERBOARD_FILTERS_DATA = [
  {
    text: "All",
    id: 1,
  },
  {
    text: "Speedrun",
    id: 2,
  },
  {
    text: "Skilled",
    id: 3,
  },
];
