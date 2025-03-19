import s from "./TopStatBar.module.scss";

const topStatColors = ["#ffd700", "#c0c0c0", "#cd7f32"];

const TopStatBar = ({ top, times, mapsCount, maxFinishTimes }) => {
  const statsBarStyles = {
    backgroundColor: topStatColors[top - 1],
    height: `${(times / maxFinishTimes) * 100}%`,
    opacity: 0.8,
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
