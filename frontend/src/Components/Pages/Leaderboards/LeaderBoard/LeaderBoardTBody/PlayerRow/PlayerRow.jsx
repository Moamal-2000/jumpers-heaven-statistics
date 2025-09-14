"use client";

import { getModifiedRank } from "@/Functions/components";
import { useSearchParams } from "next/navigation";
import PlayerNameCell from "./PlayerNameCell/PlayerNameCell";
import s from "./PlayerRow.module.scss";
import TopsCell from "./TopsCell/TopsCell";

const PlayerRow = ({ playerData, leaderboardData, lastPlayerRef, index }) => {
  const { Rating, Score, TopList, Rank } = playerData;
  const modifiedRank = getModifiedRank(Rank);
  const ref = leaderboardData.length === index + 1 ? lastPlayerRef : null;
  const searchParams = useSearchParams();
  const isRoutesCompletedLeaderboard =
    searchParams.get("leaderboard") === "routescompleted";

  return (
    <tr className={s.playerRow} ref={ref} data-type="player-stats-row">
      <td className={s.rank} data-header="Rank">
        {modifiedRank}
      </td>

      <PlayerNameCell playerData={playerData} />

      <td className={s.rating} data-header="Rating">
        {(+Rating * 0.1).toFixed(2)}
      </td>

      <td className={s.score} data-header="Points">
        {Score}
      </td>

      {!isRoutesCompletedLeaderboard && (
        <TopsCell topList={TopList} leaderboardData={leaderboardData} />
      )}
    </tr>
  );
};

export default PlayerRow;
