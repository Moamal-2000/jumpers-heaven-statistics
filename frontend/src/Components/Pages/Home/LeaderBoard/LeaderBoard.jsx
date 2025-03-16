import { GLOBAL_LEADERBOARD } from "@/Data/staticData";
import s from "./LeaderBoard.module.scss";

const LeaderBoard = () => {
  return (
    <table className={s.leaderBoard}>
      <thead>
        <tr>
          <th className={s.rank}>Rank</th>
          <th className={s.player}>Player</th>
          <th className={s.score}>Score</th>
          <th className={s.tops}>Tops 1-10</th>
        </tr>
      </thead>

      <tbody>
        {GLOBAL_LEADERBOARD.map(({ rank, player, score, tops, id }) => (
          <tr key={id}>
            <td className={s.rank}>{rank}</td>
            <td className={s.player}>{player}</td>
            <td className={s.score}>{score}</td>
            <td className={s.tops}>{tops}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderBoard;
