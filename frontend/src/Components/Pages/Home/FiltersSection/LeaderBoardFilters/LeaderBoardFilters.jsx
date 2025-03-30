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
          defaultUrlQuery="speedrun"
        />
      ))}
    </div>
  );
};

export default LeaderBoardFilters;

const LEADERBOARD_FILTERS_DATA = [
  {
    text: "Speedrun",
    id: 1,
  },
  {
    text: "Skilled",
    id: 2,
  },
  {
    text: "Defrag",
    id: 3,
  },
  {
    text: "Surf",
    id: 4,
  },
];
