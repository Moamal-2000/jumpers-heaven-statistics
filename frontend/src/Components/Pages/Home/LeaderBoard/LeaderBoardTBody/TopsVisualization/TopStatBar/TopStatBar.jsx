import { TOP_STATS_COLOR } from "@/Data/staticData";
import s from "./TopStatBar.module.scss";

const TopStatBar = ({
  top,
  times,
  mapsCount,
  maxFinishTimes,
  isSkilledLeaderboard,
}) => {
  const tooltipText = isSkilledLeaderboard
    ? `Earned ${times} score from difficulty ${top}`
    : `${times} times in position #${top}`;

  const statBarColor = isSkilledLeaderboard
    ? TOP_STATS_COLOR[9 - top]
    : TOP_STATS_COLOR[top - 1];

  const statsBarStyles = {
    backgroundColor: statBarColor,
    height: `${(times / maxFinishTimes) * 100}%`,
  };

  return (
    <div className={s.statBarWrapper}>
      <p className={s.toolTip}>{tooltipText}</p>

      <span className={s.top}>#{top}</span>
      <span className={s.times}>{times}</span>

      <div className={s.statBar} style={statsBarStyles} />
    </div>
  );
};

export default TopStatBar;
