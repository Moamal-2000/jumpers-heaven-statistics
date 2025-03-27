"use client";

import { getMaxFinishTimesFrom } from "@/Functions/utils";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ExpandTopStatBtn from "./ExpandTopStatBtn/ExpandTopStatBtn";
import TopStatBar from "./TopStatBar/TopStatBar";
import s from "./TopsVisualization.module.scss";

let render = false;

const TopsVisualization = ({ topsList, mapsCount, leaderboardData }) => {
  const [showMoreStats, setShowMoreStats] = useState(false);
  const maxFinishTimes = getMaxFinishTimesFrom(leaderboardData[0]);
  const topsEntries = Object.entries(topsList);
  const searchParams = useSearchParams();
  const isSkilledLeaderboard = searchParams.get("leaderboard") === "skilled";
  const modifiedTopsEntries = isSkilledLeaderboard
    ? topsEntries.toReversed()
    : topsEntries;

  return (
    <div className={s.tops}>
      {modifiedTopsEntries.map((topStat, index) => {
        if (!showMoreStats && index >= 3) return;

        return (
          <TopStatBar
            top={topStat[0]}
            times={topStat[1]}
            mapsCount={mapsCount}
            maxFinishTimes={maxFinishTimes}
            isSkilledLeaderboard={isSkilledLeaderboard}
            key={`stat-bar-${index}`}
          />
        );
      })}

      <ExpandTopStatBtn
        showMoreStats={showMoreStats}
        setShowMoreStats={setShowMoreStats}
      />
    </div>
  );
};

export default TopsVisualization;
