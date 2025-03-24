import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import s from "./FiltersSection.module.scss";
import FpsFilters from "./FpsFilters/FpsFilters";
import LastSeenFilters from "./LastSeenFilters/LastSeenFilters";
import LeaderBoardFilters from "./LeaderBoardFilters/LeaderBoardFilters";
import PlayerStatusFilters from "./PlayerStatusFilters/PlayerStatusFilters";
import RegionFilters from "./RegionFilters/RegionFilters";
import StatsFilters from "./StatsFilters/StatsFilters";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      {FILTERS_COMPONENTS_DATA.map(({ title, filtersComponent, id }) => (
        <FilterCard key={id} title={title}>
          {filtersComponent}
        </FilterCard>
      ))}
    </section>
  );
};

export default FiltersSection;

const FILTERS_COMPONENTS_DATA = [
  {
    title: "Leaderboard Type",
    filtersComponent: <LeaderBoardFilters />,
    id: 1,
  },
  {
    title: "FPS Status",
    filtersComponent: <FpsFilters />,
    id: 2,
  },
  {
    title: "Players Region",
    filtersComponent: <RegionFilters />,
    id: 3,
  },
  {
    title: "Last seen",
    filtersComponent: <LastSeenFilters />,
    id: 4,
  },
  {
    title: "Player Status",
    filtersComponent: <PlayerStatusFilters />,
    id: 5,
  },
  {
    title: "Stats Filter",
    filtersComponent: <StatsFilters />,
    id: 6,
  },
];
