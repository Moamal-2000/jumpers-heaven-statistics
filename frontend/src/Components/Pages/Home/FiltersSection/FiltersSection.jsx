"use client";

import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import s from "./FiltersSection.module.scss";
import FpsFilters from "./FpsFilters/FpsFilters";
import LastSeenFilters from "./LastSeenFilters/LastSeenFilters";
import LeaderBoardFilters from "./LeaderBoardFilters/LeaderBoardFilters";
import PlayerStatusFilters from "./PlayerStatusFilters/PlayerStatusFilters";
import RegionFilters from "./RegionFilters/RegionFilters";

const FiltersSection = () => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   const paramsSession = sessionStorage.getItem("homeSearchParams") || "{}";
  //   console.log("paramsSession", paramsSession);
  //   const paramsSessionObject = JSON.parse(paramsSession);
  //   const isEmptyParamsSession = isEmptyObj(paramsSessionObject);
  //   const urlParams = new URLSearchParams(paramsSessionObject);

  //   if (!isEmptyParamsSession) {
  //     // router.push(`${pathname}/${urlParams.toString()}`, {
  //     //   scroll: false,
  //     // });
  //     return;
  //   }

  //   const paramsObject = Object.fromEntries(searchParams.entries());
  //   const paramsObjectString = JSON.stringify(paramsObject);

  //   sessionStorage.setItem("homeSearchParams", paramsObjectString);
  // }, [searchParams]);

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
];
