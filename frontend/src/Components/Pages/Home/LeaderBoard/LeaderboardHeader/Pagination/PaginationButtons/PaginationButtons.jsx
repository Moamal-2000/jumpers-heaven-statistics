"use client";

import { createQueryString } from "@/Functions/utils";
import { shouldRenderPaginationBtn } from "@/Functions/validation";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./PaginationButtons.module.scss";

const PaginationButtons = ({ numberOfPages }) => {
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

  return paginationButtons?.map((_, index) => {
    const currentPage = +activePagination || 1;
    const shouldRender = shouldRenderPaginationBtn(
      numberOfPages,
      index,
      currentPage
    );

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
  });
};

export default PaginationButtons;
