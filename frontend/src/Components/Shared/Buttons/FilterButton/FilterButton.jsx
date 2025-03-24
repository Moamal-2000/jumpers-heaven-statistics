"use client";

import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./FilterButton.module.scss";

export function FilterButton({ text, queryName, urlQuery, defaultUrlQuery }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const fixedUrlQuery = urlQuery ? urlQuery : defaultUrlQuery;
  const activeClass = fixedUrlQuery === text.toLowerCase() ? s.active : "";

  function setQueryFilter() {
    createQueryString(
      queryName,
      text.toLowerCase(),
      searchParams,
      router,
      pathname
    );
  }

  return (
    <button
      type="button"
      className={`${s.button} ${activeClass}`}
      onClick={setQueryFilter}
    >
      {text}
    </button>
  );
}
export default FilterButton;
