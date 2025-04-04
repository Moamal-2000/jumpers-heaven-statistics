import CountryImage from "@/Components/Shared/CountryImage";
import { getColoredName, getModifiedRank } from "@/Functions/utils";
import { useSearchParams } from "next/navigation";
import TopsVisualization from "../TopsVisualization/TopsVisualization";
import s from "./PlayerRow.module.scss";

const PlayerRow = ({
  playerData,
  mapsCount,
  leaderboardData,
  lastPlayerRef,
  handlePlayerClick,
}) => {
  const { player_name, country, rating, score, top_list, rank, countryName } =
    playerData;
  const modifiedRank = getModifiedRank(rank);
  const modifiedPlayerName = getColoredName(player_name);
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

      <td className={s.player} data-type="player-stats-name" data-text="Player">
        <span
          className={s.playerCountry}
          style={{
            borderColor:
              rank === 1
                ? "#ffc107"
                : rank === 2
                ? "#c0c0c0"
                : rank === 3
                ? "#cd7f32"
                : "",
          }}
        >
          <CountryImage country={country} countryName={countryName} />
        </span>
        <span className={s.playerName} onClick={handlePlayerClick}>
          {modifiedPlayerName}
        </span>
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
