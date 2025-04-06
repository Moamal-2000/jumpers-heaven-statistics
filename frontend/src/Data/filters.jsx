import PlayerStatusFilters from "@/Components/Pages/Home/FiltersSection/PlayerStatusFilters/PlayerStatusFilters";

export const FILTERS_COMPONENTS_DATA = [
  {
    title: "Leaderboard Type",
    queryName: "leaderboard",
    defaultUrlQuery: "speedrun",
    filtersData: [
      { text: "Speedrun", id: 1 },
      { text: "Skilled", id: 2 },
      { text: "Defrag", id: 3 },
      { text: "Surf", id: 4 },
    ],
    id: 1,
  },
  {
    title: "FPS Status",
    queryName: "fps",
    defaultUrlQuery: "125",
    filtersData: [
      { text: "43", id: 1 },
      { text: "76", id: 2 },
      { text: "125", id: 3 },
      { text: "250", id: 4 },
      { text: "333", id: 5 },
    ],
    id: 2,
  },
  {
    title: "Players Region",
    queryName: "Region",
    defaultUrlQuery: "global",
    filtersData: [
      { text: "Global", id: 1 },
      { text: "North America", id: 2 },
      { text: "Europe", id: 3 },
      { text: "Asia", id: 4 },
      { text: "Oceania", id: 5 },
      { text: "South America", id: 6 },
      { text: "Africa", id: 7 },
    ],
    id: 3,
  },
  {
    title: "Last Seen",
    queryName: "last-seen",
    defaultUrlQuery: "All time",
    filtersData: [
      { text: "All time", id: 1 },
      { text: "Today", id: 2 },
      { text: "This Week", id: 3 },
      { text: "This Month", id: 4 },
      { text: "Long Time", id: 5 },
    ],
    id: 4,
  },
  {
    title: "Player Status",
    filtersComponent: <PlayerStatusFilters />,
    id: 5,
  },
];
