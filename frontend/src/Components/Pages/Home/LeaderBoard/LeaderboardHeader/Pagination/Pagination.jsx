import s from "./Pagination.module.scss";

const dataPerPage = 5;

const Pagination = ({ data }) => {
  const numberOfPages = Math.ceil(data?.length / dataPerPage);

  return <div className={s.pagination}></div>;
};

export default Pagination;
