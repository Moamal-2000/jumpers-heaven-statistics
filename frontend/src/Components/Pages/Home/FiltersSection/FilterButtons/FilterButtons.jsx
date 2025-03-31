"use client";

import FilterButton from "@/Components/Shared/Buttons/FilterButton/FilterButton";
import { useSearchParams } from "next/navigation";
import s from "./FilterButtons.module.scss";

const FilterButtons = ({ filtersData, queryName, defaultUrlQuery }) => {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get(queryName);

  return (
    <div className={s.filters}>
      {filtersData.map(({ text, id }) => (
        <FilterButton
          key={id}
          text={text}
          queryName={queryName}
          urlQuery={urlQuery}
          defaultUrlQuery={defaultUrlQuery}
        />
      ))}
    </div>
  );
};

export default FilterButtons;
