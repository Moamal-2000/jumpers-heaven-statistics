import SvgIcon from "@/Components/Shared/SvgIcon";
import { GLOBAL_LEADERBOARD } from "@/Data/staticData";
import s from "./LeaderBoardTBody.module.scss";

const LeaderBoardTBody = ({ leaderboardData }) => {
  return (
    <tbody className={s.tbody}>
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
  );
};

export default LeaderBoardTBody;
