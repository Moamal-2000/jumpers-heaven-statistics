"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./LastSeenFilters.module.scss";

const LastSeenFilters = () => {
  const searchParams = useSearchParams();
  const lastSeenUrlQuery = searchParams.get("last-seen");

  return (
    <div className={s.filters}>
      {LAST_SEEN_FILTERS_DATA.map(({ text, id }) => (
        <FilterButton
          key={id}
          text={text}
          queryName="last-seen"
          urlQuery={lastSeenUrlQuery}
          defaultUrlQuery="all time"
        />
      ))}
    </div>
  );
};

export default LastSeenFilters;

const LAST_SEEN_FILTERS_DATA = [
  {
    text: "All time",
    id: 1,
  },
  {
    text: "This Month",
    id: 2,
  },
  {
    text: "This Week",
    id: 3,
  },
  {
    text: "Today",
    id: 4,
  },
];
