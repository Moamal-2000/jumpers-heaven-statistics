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
          defaultUrlQuery="mix"
        />
      ))}
    </div>
  );
};

export default FpsFilters;

const FPS_FILTERS_DATA = [
  {
    text: "Mix",
    id: 1,
  },
  {
    text: "43",
    id: 2,
  },
  {
    text: "76",
    id: 3,
  },
  {
    text: "125",
    id: 4,
  },
  {
    text: "250",
    id: 5,
  },
  {
    text: "333",
    id: 6,
  },
];
