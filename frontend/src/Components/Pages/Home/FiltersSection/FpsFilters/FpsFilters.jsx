"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./FpsFilters.module.scss";

const FpsFilters = () => {
  const searchParams = useSearchParams();
  const fpsUrlQuery = searchParams.get("fps");

  return (
    <div className={s.filters}>
      {FPS_FILTERS_DATA.map(({ text, id }) => (
        <FilterButton
          key={id}
          text={text}
          queryName="fps"
          urlQuery={fpsUrlQuery}
          defaultUrlQuery="125"
        />
      ))}
    </div>
  );
};

export default FpsFilters;

const FPS_FILTERS_DATA = [
  {
    text: "43",
    id: 1,
  },
  {
    text: "76",
    id: 2,
  },
  {
    text: "125",
    id: 3,
  },
  {
    text: "250",
    id: 4,
  },
  {
    text: "333",
    id: 5,
  },
  {
    text: "Mix",
    id: 6,
  },
];
