import s from "./LeaderboardHeader.module.scss";

const LeaderboardHeader = () => {
  return (
    <header className={s.header}>
      <h3>Top Players</h3>
      {/* <Pagination /> */}
    </header>
  );
};

export default LeaderboardHeader;
