import s from "./StatsFilters.module.scss";

const StatsFilters = () => {
  return <div className={s.filters}></div>;
};

export default StatsFilters;

const STATUS_FILTERS_DATA = [
  {
    text: "Maps",
    statNumber: "500+",
    id: 1,
  },
  {
    text: "Win Rate",
    statNumber: "60%",
    id: 2,
  },
  {
    text: "Points",
    statNumber: "2000+",
    id: 3,
  },
  {
    text: "Hours",
    statNumber: "100+",
    id: 4,
  },
];
