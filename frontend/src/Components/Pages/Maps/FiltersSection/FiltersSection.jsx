import SvgIcon from "@/Components/Shared/SvgIcon";
import { MAPS_FILTERS_DATA } from "@/Data/filters";
import FilterGroup from "./FilterGroup/FilterGroup";
import s from "./FiltersSection.module.scss";

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

      <div className={s.sortControls}>
        <div className={s.sortWrapper}>
          <label htmlFor="sort-by" className={s.label}>
            Sort by:
            <div className={s.tooltip}>
              <div className={s.icon}>
                <SvgIcon name="questionMark" />
              </div>

              <p className={s.tooltipText}>
                Choose how to order the displayed maps
              </p>
            </div>
          </label>

          {/* <CustomSelectMenu /> */}
        </div>

        <div className={s.sortViewWrapper}>
          <button type="button">
            <span>
              <SvgIcon name="window" />
            </span>
          </button>

          <button type="button">
            <span>
              <SvgIcon name="list" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiltersSection;
