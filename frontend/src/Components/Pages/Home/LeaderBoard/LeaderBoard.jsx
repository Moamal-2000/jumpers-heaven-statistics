import SvgIcon from "@/Components/Shared/SvgIcon";
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
        {GLOBAL_LEADERBOARD.map(({ rank, player, score, tops, id }) => {
          const isTop1 = rank === 1;
          const isTop3 = rank <= 3;
          const modifiedRank = isTop1 ? (
            <SvgIcon name="trophy" />
          ) : isTop3 ? (
            <SvgIcon name={`${rank === 2 ? "silver" : "bronze"}-medal`} />
          ) : (
            rank
          );

          return (
            <tr key={id}>
              <td className={s.rank}>{modifiedRank}</td>
              <td className={s.player}>{player}</td>
              <td className={s.score}>{score}</td>
              <td className={s.tops}>{tops}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LeaderBoard;
