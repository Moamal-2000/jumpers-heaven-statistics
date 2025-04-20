import { MAPS_FILTERS_DATA } from "@/Data/filters";
import FilterGroup from "./FilterGroup/FilterGroup";
import s from "./FiltersSection.module.scss";
import SortSection from "./SortSection/SortSection";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <div className={s.filtersCard}>
        {MAPS_FILTERS_DATA.map(
          ({ label, queryName, defaultUrlQuery, filtersData, tooltipText }) => (
            <FilterGroup
              key={queryName}
              {...{
                label,
                queryName,
                defaultUrlQuery,
                filtersData,
                tooltipText,
              }}
            />
          )
        )}
      </div>

      <SortSection />
    </section>
  );
};

export default FiltersSection;
