"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import s from "./Pagination.module.scss";

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / PAGINATION_ITEMS_PER_PAGE);
  const paginationButtons = Array(numberOfPages).fill();

  return (
    <div className={s.pagination}>
      <button type="button" className={s.arrowButton}>
        ←
      </button>

      {paginationButtons.map((_, index) => {
        const activeClass = index === 0 ? s.active : "";

        return (
          <button
            type="button"
            key={index}
            className={`${s.numberButton} ${activeClass}`}
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
