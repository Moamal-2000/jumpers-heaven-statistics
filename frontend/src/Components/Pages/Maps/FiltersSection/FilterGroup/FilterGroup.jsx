import SvgIcon from "@/Components/Shared/SvgIcon";
import FilterButtons from "./FilterButtons/FilterButtons";
import s from "./FilterGroup.module.scss";
import LegendLabel from "./LegendLabel/LegendLabel";

const FilterGroup = ({
  label,
  queryName,
  defaultUrlQuery,
  filtersData,
  tooltipText,
}) => {
  return (
    <fieldset className={s.filterGroup}>
      <LegendLabel />

      <FilterButtons
        filtersData={filtersData}
        queryName={queryName}
        defaultUrlQuery={defaultUrlQuery}
      />
    </fieldset>
  );
};

export default FilterGroup;
