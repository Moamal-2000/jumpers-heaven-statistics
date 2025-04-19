import s from "./FilterGroup.module.scss";

const FilterGroup = () => {
  return (
    <fieldset className={s.filterGroup}>
      <legend className={s.label}>Map Type</legend>

      <div className={s.filterButtons}>
        <button type="button">Speedrun</button>
        <button type="button">Skilled</button>
        <button type="button">Defrag</button>
        <button type="button">Surf</button>
      </div>
    </fieldset>
  );
};

export default FilterGroup;
