import { Suspense } from "react";
import s from "./FilterCard.module.scss";

const FilterCard = ({ title, children }) => {
  return (
    <Suspense>
      <div className={s.card}>
        <h2>{title}</h2>
        {children}
      </div>
    </Suspense>
  );
};

export default FilterCard;
