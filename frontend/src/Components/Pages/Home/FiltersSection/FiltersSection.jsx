"use client";

import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import FilterButtons from "./FilterButtons/FilterButtons";
import s from "./FiltersSection.module.scss";
import PlayerStatusFilters from "./PlayerStatusFilters/PlayerStatusFilters";

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
      {FILTERS_COMPONENTS_DATA.map(
        ({
          title,
          queryName,
          defaultUrlQuery,
          filtersData,
          id,
          filtersComponent,
        }) => {
          if (filtersComponent)
            return (
              <FilterCard key={id} title={title}>
                {filtersComponent}
              </FilterCard>
            );

          return (
            <FilterCard key={id} title={title}>
              <FilterButtons
                queryName={queryName.toLowerCase()}
                defaultUrlQuery={defaultUrlQuery.toLowerCase()}
                filtersData={filtersData}
              />
            </FilterCard>
          );
        }
      )}
    </section>
  );
};

export default FiltersSection;

const FILTERS_COMPONENTS_DATA = [
  {
    title: "Leaderboard Type",
    queryName: "leaderboard",
    defaultUrlQuery: "speedrun",
    filtersData: [
      {
        text: "Speedrun",
        id: 1,
      },
      {
        text: "Skilled",
        id: 2,
      },
      {
        text: "Defrag",
        id: 3,
      },
      {
        text: "Surf",
        id: 4,
      },
    ],
    id: 1,
  },
  {
    title: "FPS Status",
    queryName: "fps",
    defaultUrlQuery: "125",
    filtersData: [
      {
        text: "43",
        id: 1,
      },
      {
        text: "76",
        id: 2,
      },
      {
        text: "125",
        id: 3,
      },
      {
        text: "250",
        id: 4,
      },
      {
        text: "333",
        id: 5,
      },
      {
        text: "Mix",
        id: 6,
      },
    ],
    id: 2,
  },
  {
    title: "Players Region",
    queryName: "Region",
    defaultUrlQuery: "global",
    filtersData: [
      {
        text: "Global",
        id: 1,
      },
      {
        text: "NA",
        id: 2,
      },
      {
        text: "EU",
        id: 3,
      },
      {
        text: "ASIA",
        id: 4,
      },
      {
        text: "OCE",
        id: 5,
      },
    ],
    id: 3,
  },
  {
    title: "Last seen",
    queryName: "last-seen",
    defaultUrlQuery: "All time",
    filtersData: [
      {
        text: "All time",
        id: 1,
      },
      {
        text: "This Month",
        id: 2,
      },
      {
        text: "This Week",
        id: 3,
      },
      {
        text: "Today",
        id: 4,
      },
    ],
    id: 4,
  },
  {
    title: "Player Status",
    filtersComponent: <PlayerStatusFilters />,
    id: 5,
  },
];
