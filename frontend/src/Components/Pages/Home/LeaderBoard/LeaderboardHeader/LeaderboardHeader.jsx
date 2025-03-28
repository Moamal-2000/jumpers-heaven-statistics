import s from "./LeaderboardHeader.module.scss";
import Pagination from "./Pagination/Pagination";

const LeaderboardHeader = () => {
  return (
    <header className={s.header}>
      <h3>Top Players</h3>
      <Pagination />
    </header>
  );
};

export default LeaderboardHeader;
