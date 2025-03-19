import { TOP_STATS_COLOR } from "@/Data/staticData";
import s from "./TopStatBar.module.scss";

const TopStatBar = ({ top, times, mapsCount, maxFinishTimes }) => {
  const statsBarStyles = {
    backgroundColor: TOP_STATS_COLOR[top - 1],
    height: `${(times / maxFinishTimes) * 100}%`,
  };

  return (
    <div className={s.statBarWrapper}>
      <p className={s.toolTip}>
        {times} times in position #{top}
      </p>

      <span className={s.top}>#{top}</span>
      <span className={s.times}>{times}</span>

      <div className={s.statBar} style={statsBarStyles} />
    </div>
  );
};

export default TopStatBar;
