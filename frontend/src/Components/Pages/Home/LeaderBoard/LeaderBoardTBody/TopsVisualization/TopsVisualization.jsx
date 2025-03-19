import TopStatBar from "./TopStatBar/TopStatBar";
import s from "./TopsVisualization.module.scss";

const TopsVisualization = ({ topsList }) => {
  const topsEntries = Object.entries(topsList);

  return (
    <div className={s.tops}>
      {topsEntries.map((topStat, index) => (
        <TopStatBar
          top={topStat[0]}
          times={topStat[1]}
          key={`stat-bar-${index}`}
        />
      ))}
    </div>
  );
};

export default TopsVisualization;
