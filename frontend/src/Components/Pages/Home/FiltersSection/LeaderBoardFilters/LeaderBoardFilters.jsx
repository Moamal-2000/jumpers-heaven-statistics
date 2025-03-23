import s from "./LeaderBoardFilters.module.scss";

const LeaderBoardFilters = () => {
  return (
    <div className={s.filters}>
      {LEADERBOARD_FILTERS_DATA.map(({ text, id }) => (
        <button type="button" key={id}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default LeaderBoardFilters;

const LEADERBOARD_FILTERS_DATA = [
  {
    text: "All",
    id: 1,
  },
  {
    text: "Speedrun",
    id: 2,
  },
  {
    text: "Skilled",
    id: 3,
  },
];
