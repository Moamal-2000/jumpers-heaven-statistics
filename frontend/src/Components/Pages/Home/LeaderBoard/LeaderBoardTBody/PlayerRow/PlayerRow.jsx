import { getColoredName, getModifiedRank } from "@/Functions/utils";
import Image from "next/image";
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
      <td className={s.rank} data-type="player-stats-rank">
        {modifiedRank}
      </td>

      <td className={s.player} data-type="player-stats-name">
        <span className={s.playerCountry}>
          <Image
            width="32"
            height="32"
            src={`/countryFlags/${country.toLowerCase()}.svg`}
            alt={`country flag ${country}`}
            title={country}
            onError={(event) => (event.target.src = "/country-placeholder.svg")}
          />
        </span>
        <span onClick={handlePlayerClick}>{modifiedPlayerName}</span>
      </td>

      <td className={s.rating}>{(+rating * 0.1).toFixed(2)}</td>

      <td className={s.score} data-type="player-stats-score">
        {score}
      </td>

      <td className={s.tops} data-type="player-stats-tops">
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
