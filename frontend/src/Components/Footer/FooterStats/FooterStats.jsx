import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./FooterStats.module.scss";

const FooterStats = () => {
  return (
    <section className={s.statsSection}>
      <div className={s.dateWrapper}>
        <div className={s.iconHolder}>
          <SvgIcon name="timer" />
        </div>

        <div className={s.info}>
          <p className={s.title}>Leaderboard last updated:</p>
          <p className={s.date}>April 2, 2025 at 08:45 GMT</p>
        </div>
      </div>

      <div className={s.statsWrapper}>
        <div className={s.stat}>
          <b className={s.number}>42,761</b>
          <span className={s.title}>Players</span>
        </div>

        <div className={s.stat}>
          <b className={s.number}>359</b>
          <span className={s.title}>Maps</span>
        </div>

        <div className={s.stat}>
          <b className={s.number}>183,409</b>
          <span className={s.title}>Records</span>
        </div>
      </div>
    </section>
  );
};

export default FooterStats;
