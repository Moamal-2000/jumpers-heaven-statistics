import s from "./FilterCard.module.scss";

const FilterCard = ({ title, children }) => {
  return (
    <div className={s.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default FilterCard;
