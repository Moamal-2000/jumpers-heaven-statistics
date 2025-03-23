"use client";

import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./LeaderBoardFilters.module.scss";

const LeaderBoardFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const leaderboardUrlQuery = searchParams.get("leaderboard");

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
      {LEADERBOARD_FILTERS_DATA.map(({ text, id }) => {
        const fixedUrlQuery = leaderboardUrlQuery ? leaderboardUrlQuery : "all";
        const activeClass =
          fixedUrlQuery === text.toLowerCase() ? s.active : "";

        return (
          <button
            type="button"
            key={id}
            onClick={() => setQueryFilter(text)}
            className={activeClass}
          >
            {text}
          </button>
        );
      })}
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
