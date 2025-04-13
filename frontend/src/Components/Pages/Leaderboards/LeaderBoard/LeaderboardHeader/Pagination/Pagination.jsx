"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./Pagination.module.scss";
import PaginationButtons from "./PaginationButtons/PaginationButtons";

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / PAGINATION_ITEMS_PER_PAGE);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activePagination = searchParams.get("leaderboard-pagination");

  function previousPage() {
    if (+activePagination === 1) return;

    createQueryString(
      "leaderboard-pagination",
      +activePagination - 1,
      searchParams,
      router,
      pathname
    );
  }

  function nextPage() {
    if (+activePagination === numberOfPages) return;

    createQueryString(
      "leaderboard-pagination",
      +activePagination + 1,
      searchParams,
      router,
      pathname
    );
  }

  return (
    <div className={s.pagination}>
      <button type="button" className={s.arrowButton} onClick={previousPage}>
        ←
      </button>

      <PaginationButtons numberOfPages={numberOfPages} />

      <button type="button" className={s.arrowButton} onClick={nextPage}>
        →
      </button>
    </div>
  );
};

export default Pagination;
