"use client";

import {
  createQueryString,
  getStarsText,
  removeQueryString,
} from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./FilterButtons.module.scss";

const FilterButtons = ({ filtersData, queryName, defaultUrlQuery }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlQuery = searchParams.get(queryName);

  function handleClick(queryValue) {
    const isDefaultQuery = queryValue === defaultUrlQuery;

    if (isDefaultQuery) {
      removeQueryString(queryName, searchParams, router, pathname);
      return;
    }

    createQueryString(queryName, queryValue, searchParams, router, pathname);
  }

  return (
    <div className={s.filterButtons}>
      {filtersData?.map(({ text, queryValue, id }) => {
        const isNumber = !Number.isNaN(+text);
        const modifiedText = isNumber ? getStarsText(text) : text;
        const currentValue = urlQuery || defaultUrlQuery;

        const isActive = isNumber
          ? +currentValue === +text
          : currentValue === queryValue;

        return (
          <button
            type="button"
            key={id}
            onClick={() => handleClick(queryValue)}
            className={isActive ? s.active : ""}
          >
            {modifiedText}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
