import FilterSection from "./FilterSection/FilterSection";
import s from "./FiltersSection.module.scss";
import SortSection from "./SortSection/SortSection";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <FilterSection />
      <SortSection />
    </section>
  );
};

export default FiltersSection;
