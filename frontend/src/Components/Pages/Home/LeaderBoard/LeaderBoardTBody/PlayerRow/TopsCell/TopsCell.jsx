"use client";

import { useSearchParams } from "next/navigation";
import TopsVisualization from "../../TopsVisualization/TopsVisualization";
import s from "./TopsCell.module.scss";

const TopsCell = ({ topList, leaderboardData }) => {
  const searchParams = useSearchParams();
  const isSkilledLeaderboard = searchParams.get("leaderboard") === "skilled";
  const dataText = isSkilledLeaderboard ? "Points per difficulty" : "Tops 1-10";

  return (
    <td className={s.tops} data-type="player-stats-tops" data-text={dataText}>
      <TopsVisualization topsList={topList} leaderboardData={leaderboardData} />
    </td>
  );
};

export default TopsCell;
