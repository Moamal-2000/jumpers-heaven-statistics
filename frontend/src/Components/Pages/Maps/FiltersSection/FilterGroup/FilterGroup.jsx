import SvgIcon from "@/Components/Shared/SvgIcon";
import FilterButtons from "./FilterButtons/FilterButtons";
import s from "./FilterGroup.module.scss";

const FilterGroup = ({
  label,
  queryName,
  defaultUrlQuery,
  filtersData,
  tooltipText,
}) => {
  return (
    <fieldset className={s.filterGroup}>
      <legend className={s.label}>
        {label}
        <div className={s.tooltip}>
          <div className={s.icon}>
            <SvgIcon name="questionMark" />
          </div>

          <p className={s.tooltipText}>{tooltipText}</p>
        </div>
      </legend>

      <FilterButtons
        filtersData={filtersData}
        queryName={queryName}
        defaultUrlQuery={defaultUrlQuery}
      />
    </fieldset>
  );
};

export default FilterGroup;
