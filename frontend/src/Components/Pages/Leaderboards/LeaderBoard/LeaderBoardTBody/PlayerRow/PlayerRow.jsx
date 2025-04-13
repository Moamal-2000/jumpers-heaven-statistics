import { getModifiedRank } from "@/Functions/components";
import PlayerNameCell from "./PlayerNameCell/PlayerNameCell";
import s from "./PlayerRow.module.scss";
import TopsCell from "./TopsCell/TopsCell";

const PlayerRow = ({ playerData, leaderboardData, lastPlayerRef }) => {
  const { Rating, Score, TopList, Rank } = playerData;
  const modifiedRank = getModifiedRank(Rank);

  return (
    <tr
      className={s.playerRow}
      ref={lastPlayerRef}
      data-type="player-stats-row"
    >
      <td className={s.rank} data-type="player-stats-rank" data-text="Rank">
        {modifiedRank}
      </td>

      <PlayerNameCell playerData={playerData} />

      <td className={s.rating} data-text="Rating">
        {(+Rating * 0.1).toFixed(2)}
      </td>

      <td className={s.score} data-type="player-stats-score" data-text="Points">
        {Score}
      </td>

      <TopsCell topList={TopList} leaderboardData={leaderboardData} />
    </tr>
  );
};

export default PlayerRow;
