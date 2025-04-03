import CountryImage from "@/Components/Shared/CountryImage";
import { getColoredName, getModifiedRank } from "@/Functions/utils";
import TopsVisualization from "../TopsVisualization/TopsVisualization";
import s from "./PlayerRow.module.scss";

const PlayerRow = ({
  playerData,
  mapsCount,
  leaderboardData,
  lastPlayerRef,
  handlePlayerClick,
}) => {
  const { player_name, country, rating, score, top_list, rank } = playerData;
  const modifiedRank = getModifiedRank(rank);
  const modifiedPlayerName = getColoredName(player_name);

  return (
    <tr
      className={s.playerRow}
      ref={lastPlayerRef}
      data-type="player-stats-row"
    >
      <td className={s.rank} data-type="player-stats-rank" data-text="Rank">
        {modifiedRank}
      </td>

      <td className={s.player} data-type="player-stats-name" data-text="Player">
        <span className={s.playerCountry}>
          <CountryImage country={country} />
        </span>
        <span onClick={handlePlayerClick}>{modifiedPlayerName}</span>
      </td>

      <td className={s.rating} data-text="Rating">
        {(+rating * 0.1).toFixed(2)}
      </td>

      <td className={s.score} data-type="player-stats-score" data-text="Points">
        {score}
      </td>

      <td
        className={s.tops}
        data-type="player-stats-tops"
        data-text="Tops 1-10"
      >
        <TopsVisualization
          topsList={top_list}
          mapsCount={mapsCount}
          leaderboardData={leaderboardData}
        />
      </td>
    </tr>
  );
};

export default PlayerRow;
