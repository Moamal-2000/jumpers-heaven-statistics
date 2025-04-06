import { getModifiedRank } from "@/Functions/components";
import PlayerNameCell from "./PlayerNameCell/PlayerNameCell";
import s from "./PlayerRow.module.scss";
import TopsCell from "./TopsCell/TopsCell";

const PlayerRow = ({ playerData, leaderboardData, lastPlayerRef }) => {
  const { player_name, country_code, country, rating, score, top_list, rank } =
    playerData;
  const modifiedRank = getModifiedRank(rank);

  return (
    <tr
      className={s.playerRow}
      ref={lastPlayerRef}
      data-type="player-stats-row"
    >
      <td className={s.rank} data-type="player-stats-rank" data-text="Rank">
        {modifiedRank}
      </td>

      <PlayerNameCell
        player={player_name}
        rank={rank}
        countryCode={country_code}
        countryName={country}
      />

      <td className={s.rating} data-text="Rating">
        {(+rating * 0.1).toFixed(2)}
      </td>

      <td className={s.score} data-type="player-stats-score" data-text="Points">
        {score}
      </td>

      <TopsCell topList={top_list} leaderboardData={leaderboardData} />
    </tr>
  );
};

export default PlayerRow;
