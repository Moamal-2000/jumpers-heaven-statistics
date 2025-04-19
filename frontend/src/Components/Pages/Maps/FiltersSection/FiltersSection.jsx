import { MAPS_FILTERS_DATA } from "@/Data/filters";
import { Suspense } from "react";
import FilterGroup from "./FilterGroup/FilterGroup";
import s from "./FiltersSection.module.scss";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      {MAPS_FILTERS_DATA.map(
        ({ label, queryName, defaultUrlQuery, filtersData, tooltipText }) => (
          <Suspense>
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
          </Suspense>
        )
      )}
    </section>
  );
};

export default FiltersSection;
