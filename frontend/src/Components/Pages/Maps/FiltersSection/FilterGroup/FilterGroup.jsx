import SvgIcon from "@/Components/Shared/SvgIcon";
import { getStarsText } from "@/Functions/utils";
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

      <div className={s.filterButtons}>
        {filtersData?.map(({ text, queryValue, id }) => {
          const isNumber = !Number.isNaN(+text);
          const modifiedText = isNumber ? getStarsText(text) : text;

          return (
            <button type="button" key={id}>
              {modifiedText}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
};

export default FilterGroup;
