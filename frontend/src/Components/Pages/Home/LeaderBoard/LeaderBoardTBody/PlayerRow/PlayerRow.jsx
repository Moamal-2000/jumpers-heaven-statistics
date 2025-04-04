import { getModifiedRank } from "@/Functions/utils";
import { useSearchParams } from "next/navigation";
import TopsVisualization from "../TopsVisualization/TopsVisualization";
import PlayerNameCell from "./PlayerNameCell/PlayerNameCell";
import s from "./PlayerRow.module.scss";

const PlayerRow = ({
  playerData,
  mapsCount,
  leaderboardData,
  lastPlayerRef,
}) => {
  const { player_name, country, rating, score, top_list, rank, countryName } =
    playerData;
  const modifiedRank = getModifiedRank(rank);
  const searchParams = useSearchParams();
  const isSkilledLeaderboard = searchParams.get("leaderboard") === "skilled";

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
        country={country}
        countryName={countryName}
      />

      <td className={s.rating} data-text="Rating">
        {(+rating * 0.1).toFixed(2)}
      </td>

      <td className={s.score} data-type="player-stats-score" data-text="Points">
        {score}
      </td>

      <td
        className={s.tops}
        data-type="player-stats-tops"
        data-text={`${
          isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10"
        }`}
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
