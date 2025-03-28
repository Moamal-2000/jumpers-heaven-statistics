"use client";

import {
  PAGINATION_DISPLAY_LIMIT,
  PAGINATION_ITEMS_PER_PAGE,
} from "@/Data/constants";
import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./Pagination.module.scss";

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / PAGINATION_ITEMS_PER_PAGE);
  const paginationButtons = Array(numberOfPages).fill();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activePagination = searchParams.get("leaderboard-pagination");

  function changePage(pageNumber) {
    createQueryString(
      "leaderboard-pagination",
      pageNumber,
      searchParams,
      router,
      pathname
    );
  }

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

      {paginationButtons.map((_, index) => {
        const currentPage = +activePagination || 1;
        const last3Buttons = [
          numberOfPages,
          numberOfPages - 1,
          numberOfPages - 2,
        ];

        const isOneOfTheLastButtons = last3Buttons.includes(index + 1);
        const shouldAlwaysShowLastThree = currentPage >= numberOfPages - 2;

        const startPage = Math.max(
          1,
          currentPage - Math.floor(PAGINATION_DISPLAY_LIMIT / 2)
        );
        const endPage = Math.min(
          numberOfPages,
          startPage + PAGINATION_DISPLAY_LIMIT - 1
        );

        const isInRange = index + 1 >= startPage && index + 1 <= endPage;
        const shouldRender =
          isInRange || (shouldAlwaysShowLastThree && isOneOfTheLastButtons);

        if (!shouldRender) return;

        const isActiveButton = currentPage === index + 1;
        const activeClass = isActiveButton ? s.active : "";

        return (
          <button
            type="button"
            key={index}
            className={`${s.numberButton} ${activeClass}`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}

      <button type="button" className={s.arrowButton} onClick={nextPage}>
        →
      </button>
    </div>
  );
};

export default Pagination;
