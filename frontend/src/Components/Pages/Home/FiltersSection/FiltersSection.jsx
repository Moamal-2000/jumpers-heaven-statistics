import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import s from "./FiltersSection.module.scss";
import FpsFilters from "./FpsFilters/FpsFilters";
import LastSeenFilters from "./LastSeenFilters/LastSeenFilters";
import LeaderBoardFilters from "./LeaderBoardFilters/LeaderBoardFilters";
import PlayerStatusFilters from "./PlayerStatusFilters/PlayerStatusFilters";
import RegionFilters from "./RegionFilters/RegionFilters";
import StatsFilters from "./StatsFilters/StatsFilters";
import { Suspense } from "react";

const FiltersSection = () => {
  return (
    <section className={s.filtersSection}>
      <FilterCard title="Leaderboard Type">
        <Suspense >
        <LeaderBoardFilters />
        </Suspense>
      </FilterCard>
{/* 
      <FilterCard title="FPS Status">
        <FpsFilters />
      </FilterCard>

      <FilterCard title="Players Region">
        <RegionFilters />
      </FilterCard>

      <FilterCard title="Last seen">
        <LastSeenFilters />
      </FilterCard>

      <FilterCard title="Player Status">
        <PlayerStatusFilters />
      </FilterCard>

      <FilterCard title="Stats Filter">
        <StatsFilters />
      </FilterCard> */}
    </section>
  );
};

export default FiltersSection;
