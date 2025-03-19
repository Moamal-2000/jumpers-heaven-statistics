import s from "./TopStatBar.module.scss";

const TopStatBar = ({ top, times }) => {
  const statColors = ["#ffd700", "#c0c0c0", "#cd7f32"];

  return (
    <div className={s.statBarWrapper}>
      <p className={s.toolTip}>
        {times} times in position {top}
      </p>

      <div
        className={s.statBar}
        style={{ backgroundColor: statColors[top - 1] }}
      >
        <span className={s.top}>#{top}</span>
        <span className={s.times}>{times}</span>
      </div>
    </div>
  );
};

export default TopStatBar;
