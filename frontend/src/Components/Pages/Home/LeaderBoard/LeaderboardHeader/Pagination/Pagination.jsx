import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import s from "./Pagination.module.scss";

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / PAGINATION_ITEMS_PER_PAGE);

  return (
    <div className={s.pagination}>
      <button type="button" className={s.arrowButton}>
        ←
      </button>

      <button type="button" className={s.numberButton}>
        1
      </button>

      <button type="button" className={s.numberButton}>
        2
      </button>

      <button type="button" className={s.numberButton}>
        3
      </button>

      <button type="button" className={s.arrowButton}>
        →
      </button>
    </div>
  );
};

export default Pagination;
