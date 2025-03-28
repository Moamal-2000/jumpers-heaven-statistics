import s from "./LeaderboardHeader.module.scss";
import Pagination from "./Pagination/Pagination";

const LeaderboardHeader = ({ leaderboardData }) => {
  return (
    <header className={s.header}>
      <h3>Top Players</h3>
      <Pagination data={leaderboardData} />
    </header>
  );
};

export default LeaderboardHeader;
