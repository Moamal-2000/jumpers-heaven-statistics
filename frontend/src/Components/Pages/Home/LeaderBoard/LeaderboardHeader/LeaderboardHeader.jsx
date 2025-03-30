import { useSelector } from "react-redux";
import s from "./LeaderboardHeader.module.scss";
import Pagination from "./Pagination/Pagination";

const LeaderboardHeader = () => {
  const { leaderboardData } = useSelector((s) => s.leaderboard);

  return (
    <header className={s.header}>
      <h3>Top Players</h3>
      <Pagination data={leaderboardData} />
    </header>
  );
};

export default LeaderboardHeader;
