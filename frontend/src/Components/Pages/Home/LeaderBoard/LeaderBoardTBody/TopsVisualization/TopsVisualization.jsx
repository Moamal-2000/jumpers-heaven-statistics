"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { getMaxFinishTimesFrom } from "@/Functions/utils";
import { useState } from "react";
import TopStatBar from "./TopStatBar/TopStatBar";
import s from "./TopsVisualization.module.scss";

const TopsVisualization = ({ topsList, mapsCount, leaderboardData }) => {
  const [showMoreStats, setShowMoreStats] = useState(false);
  const activeClass = showMoreStats ? s.active : "";
  const maxFinishTimes = getMaxFinishTimesFrom(leaderboardData[0]);
  const topsEntries = Object.entries(topsList);

  function handleExpandTopsStat() {
    setShowMoreStats((prevValue) => !prevValue);
  }

  return (
    <div className={s.tops}>
      {topsEntries.map((topStat, index) => {
        if (!showMoreStats && index >= 3) return;

        return (
          <TopStatBar
            top={topStat[0]}
            times={topStat[1]}
            mapsCount={mapsCount}
            maxFinishTimes={maxFinishTimes}
            key={`stat-bar-${index}`}
          />
        );
      })}

      <button
        type="button"
        onClick={handleExpandTopsStat}
        className={`${s.expandButton} ${activeClass}`}
      >
        <SvgIcon name="right-arrow" />
      </button>
    </div>
  );
};

export default TopsVisualization;
