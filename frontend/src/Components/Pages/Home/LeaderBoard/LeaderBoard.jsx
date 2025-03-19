import s from "./LeaderBoard.module.scss";
import LeaderBoardTBody from "./LeaderBoardTBody/LeaderBoardTBody";

const LeaderBoard = ({ leaderboardData }) => {
  return (
    <table className={s.leaderBoard}>
      <thead>
        <tr>
          <th className={s.rank}>Rank</th>
          <th className={s.player}>Player</th>
          <th className={s.score}>Total score</th>
          <th className={s.tops}>Tops 1-10</th>
        </tr>
      </thead>

      <LeaderBoardTBody leaderboardData={leaderboardData} />
    </table>
  );
};

export default LeaderBoard;
