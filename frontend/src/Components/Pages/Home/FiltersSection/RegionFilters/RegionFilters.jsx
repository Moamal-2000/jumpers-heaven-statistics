"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./RegionFilters.module.scss";

const RegionFilters = () => {
  const searchParams = useSearchParams();
  const fpsUrlQuery = searchParams.get("region");

  return (
    <div className={s.filters}>
      {REGION_FILTERS_DATA.map(({ text, id }) => (
        <FilterButton
          key={id}
          text={text}
          queryName="region"
          urlQuery={fpsUrlQuery}
          defaultUrlQuery="global"
        />
      ))}
    </div>
  );
};

export default RegionFilters;

const REGION_FILTERS_DATA = [
  {
    text: "Global",
    id: 1,
  },
  {
    text: "NA",
    id: 2,
  },
  {
    text: "EU",
    id: 3,
  },
  {
    text: "ASIA",
    id: 4,
  },
  {
    text: "OCE",
    id: 5,
  },
];
