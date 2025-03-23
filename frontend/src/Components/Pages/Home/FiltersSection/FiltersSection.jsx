import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import s from "./FiltersSection.module.scss";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <FilterCard title="Leaderboard Type"></FilterCard>
      <FilterCard title="FPS Status"></FilterCard>
      <FilterCard title="Players Region"></FilterCard>
      <FilterCard title="Last seen"></FilterCard>
      <FilterCard title="Player Status"></FilterCard>
      <FilterCard title="Stats Filter"></FilterCard>
    </section>
  );
};

export default FiltersSection;
