import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./FilterGroup.module.scss";

const FilterGroup = () => {
  return (
    <fieldset className={s.filterGroup}>
      <legend className={s.label}>
        Map Type
        <div className={s.tooltip}>
          <div className={s.icon}>
            <SvgIcon name="questionMark" />
          </div>

          <p className={s.tooltipText}>Filter maps by their gameplay type</p>
        </div>
      </legend>

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
