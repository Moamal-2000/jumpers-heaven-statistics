import FilterSection from "./FilterSection/FilterSection";
import s from "./FiltersSection.module.scss";
import SortSection from "./SortSection/SortSection";

const FiltersSection = () => {
  return (
    <div className={s.filtersSection}>
      <FilterSection />
      <SortSection />
    </div>
  );
};

export default FiltersSection;
