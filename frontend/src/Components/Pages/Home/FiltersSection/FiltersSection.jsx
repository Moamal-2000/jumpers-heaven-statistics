import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import s from "./FiltersSection.module.scss";
import FpsFilters from "./FpsFilters/FpsFilters";
import LeaderBoardFilters from "./LeaderBoardFilters/LeaderBoardFilters";
import RegionFilters from "./RegionFilters/RegionFilters";
import LastSeenFilters from "./LastSeenFilters/LastSeenFilters";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <FilterCard title="Leaderboard Type">
        <LeaderBoardFilters />
      </FilterCard>
      <FilterCard title="FPS Status">
        <FpsFilters />
      </FilterCard>
      <FilterCard title="Players Region">
        <RegionFilters />
      </FilterCard>
      <FilterCard title="Last seen">
        <LastSeenFilters />
      </FilterCard>
      <FilterCard title="Player Status"></FilterCard>
      <FilterCard title="Stats Filter"></FilterCard>
    </section>
  );
};

export default FiltersSection;
