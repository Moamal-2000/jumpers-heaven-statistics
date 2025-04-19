import FilterGroup from "./FilterGroup/FilterGroup";
import s from "./FiltersSection.module.scss";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <FilterGroup />
    </section>
  );
};

export default FiltersSection;
