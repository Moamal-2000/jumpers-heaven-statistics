import s from "./TopStatBar.module.scss";

const topStatColors = ["#ffd700", "#c0c0c0", "#cd7f32"];
const jumpersHeavenMapCount = 560;

const TopStatBar = ({ top, times }) => {
  const statsBarStyles = {
    backgroundColor: topStatColors[top - 1],
    opacity: 0.8,
    height: "640px",
  };

  return (
    <div className={s.statBarWrapper}>
      <p className={s.toolTip}>
        {times} times in position {top}
      </p>

      <span className={s.top}>#{top}</span>
      <span className={s.times}>{times}</span>

      <div className={s.statBar} style={statsBarStyles} />
    </div>
  );
};

export default TopStatBar;
