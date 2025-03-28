import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import s from "./Pagination.module.scss";

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / PAGINATION_ITEMS_PER_PAGE);

  return <div className={s.pagination}></div>;
};

export default Pagination;
