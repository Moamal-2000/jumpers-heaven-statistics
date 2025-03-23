"use client";

import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./LeaderBoardFilters.module.scss";

const LeaderBoardFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function setQueryFilter(filterQuery) {
    const createdQuery = createQueryString(
      "leaderboard",
      filterQuery.toLowerCase(),
      searchParams
    );

    router.push(`${pathname}?${createdQuery}`);
  }

  return (
    <div className={s.filters}>
      {LEADERBOARD_FILTERS_DATA.map(({ text, id }) => (
        <button type="button" key={id} onClick={() => setQueryFilter(text)}>
          {text}
        </button>
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
