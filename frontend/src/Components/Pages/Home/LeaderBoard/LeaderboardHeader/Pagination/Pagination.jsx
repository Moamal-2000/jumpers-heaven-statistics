"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
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

  return (
    <div className={s.pagination}>
      <button type="button" className={s.arrowButton}>
        ←
      </button>

      {paginationButtons.map((_, index) => {
        const isActiveButton = +activePagination === index + 1;
        const isFirstButton = index + 1 === 1;
        const shouldBeActive =
          isActiveButton || (isFirstButton && !activePagination);
        const activeClass = shouldBeActive ? s.active : "";

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

      <button type="button" className={s.arrowButton}>
        →
      </button>
    </div>
  );
};

export default Pagination;
