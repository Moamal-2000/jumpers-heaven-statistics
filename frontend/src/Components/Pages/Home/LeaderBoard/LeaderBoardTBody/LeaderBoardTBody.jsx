import { GLOBAL_LEADERBOARD } from "@/Data/staticData";
import { getModifiedRank } from "@/Functions/utils";
import s from "./LeaderBoardTBody.module.scss";

const LeaderBoardTBody = ({ leaderboardData }) => {
  return (
    <tbody className={s.tbody}>
      {GLOBAL_LEADERBOARD.map(({ rank, player, score, tops, id }) => {
        const modifiedRank = getModifiedRank(rank);

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
  );
};

export default LeaderBoardTBody;
