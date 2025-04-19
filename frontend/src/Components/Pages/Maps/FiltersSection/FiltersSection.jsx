import { MAPS_FILTERS_DATA } from "@/Data/filters";
import FilterGroup from "./FilterGroup/FilterGroup";
import s from "./FiltersSection.module.scss";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      {MAPS_FILTERS_DATA.map(
        ({ label, queryName, defaultUrlQuery, filtersData, tooltipText }) => (
          <FilterGroup
            key={queryName}
            {...{ label, queryName, defaultUrlQuery, filtersData, tooltipText }}
          />
        )
      )}
    </section>
  );
};

export default FiltersSection;
