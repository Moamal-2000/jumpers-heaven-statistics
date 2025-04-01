"use client";

import { createQueryString, removeQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./FilterButton.module.scss";

export function FilterButton({ text, queryName, urlQuery, defaultUrlQuery }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const fixedUrlQuery = urlQuery ? urlQuery : defaultUrlQuery;
  const activeClass = fixedUrlQuery === text?.toLowerCase() ? s.active : "";

  const ariaLabel = activeClass
    ? `The leaderboard currently filtered by ${text}`
    : `Filter the leaderboard by ${text}`;

  function setQueryFilter() {
    const filterNoun = text?.toLowerCase();
    const isDefaultUrlQuery = filterNoun === defaultUrlQuery;

    if (isDefaultUrlQuery) {
      removeQueryString(queryName, searchParams, router, pathname);
      return;
    }

    createQueryString(queryName, filterNoun, searchParams, router, pathname);
  }

  return (
    <button
      type="button"
      className={`${s.button} ${activeClass}`}
      onClick={setQueryFilter}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
export default FilterButton;
