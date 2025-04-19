export const LEADERBOARDS_FILTERS_DATA = [
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
      { text: "Global", queryValue: "Global", id: 1 },
      {
        text: "NA",
        queryValue: "North America",
        toolTip: "North America",
        id: 2,
      },
      { text: "EU", queryValue: "Europe", toolTip: "Europe", id: 3 },
      { text: "AS", queryValue: "Asia", toolTip: "Asia", id: 4 },
      { text: "OC", queryValue: "Oceania", toolTip: "Oceania", id: 5 },
      {
        text: "SA",
        queryValue: "South America",
        toolTip: "South America",
        id: 6,
      },
      { text: "AF", queryValue: "Africa", toolTip: "Africa", id: 7 },
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
];

export const MAPS_FILTERS_DATA = [
  {
    title: "Map Type",
    queryName: "map-type",
    defaultUrlQuery: "all",
    filtersData: ["all", "jump", "defrag", "surf"],
    tooltipText: "Filter maps by their gameplay type",
    id: 1,
  },
  {
    title: "Required Difficulty",
    queryName: "map-difficulty",
    defaultUrlQuery: "125 difficulty",
    filtersData: [
      "43 difficulty",
      "76 difficulty",
      "125 difficulty",
      "250 difficulty",
      "333 difficulty",
    ],
    tooltipText: "Filter maps by their required difficulty",
    id: 2,
  },
  {
    title: "Rating",
    queryName: "map-rating",
    defaultUrlQuery: "all",
    filtersData: ["all", 1, 2, 3, 4, 5],
    tooltipText: "Filter maps by their rating",
    id: 3,
  },
];
