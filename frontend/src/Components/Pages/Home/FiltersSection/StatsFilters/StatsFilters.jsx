"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./StatsFilters.module.scss";

const StatsFilters = () => {
  const searchParams = useSearchParams();
  const statusUrlQuery = searchParams.get("status");

  return (
    <div className={s.filters}>
      {STATUS_FILTERS_DATA.map(({ text, id }) => (
        <FilterButton
          defaultUrlQuery="ranks"
          queryName="status"
          key={id}
          text={text}
          urlQuery={statusUrlQuery}
        />
      ))}
    </div>
  );
};

export default StatsFilters;

const STATUS_FILTERS_DATA = [
  {
    text: "Ranks",
    id: 1,
  },
  {
    text: "Maps",
    id: 2,
  },
];
