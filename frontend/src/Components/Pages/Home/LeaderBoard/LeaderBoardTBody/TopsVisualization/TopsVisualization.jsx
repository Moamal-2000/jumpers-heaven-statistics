import { getMaxFinishTimesFrom } from "@/Functions/utils";
import TopStatBar from "./TopStatBar/TopStatBar";
import s from "./TopsVisualization.module.scss";

const TopsVisualization = ({ topsList, mapsCount, leaderboardData }) => {
  const maxFinishTimes = getMaxFinishTimesFrom(leaderboardData[0]);
  const topsEntries = Object.entries(topsList);

  return (
    <div className={s.tops}>
      {topsEntries.map((topStat, index) => (
        <TopStatBar
          top={topStat[0]}
          times={topStat[1]}
          mapsCount={mapsCount}
          maxFinishTimes={maxFinishTimes}
          key={`stat-bar-${index}`}
        />
      ))}
    </div>
  );
};

export default TopsVisualization;
