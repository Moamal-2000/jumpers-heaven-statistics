import Link from "next/link";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Footer.module.scss";
import FooterMenusButtons from "./FooterMenusButtons/FooterMenusButtons";
import FooterNav from "./FooterNav/FooterNav";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.line} />
      <div className="container">
        <section className={s.wrapper}>
          <div className={s.leftSide}>
            <Link href="/" className={s.logo}>
              <SvgIcon name="trophy" />
              <span>JumpersHeaven</span>
            </Link>

            <p className={s.description}>
              The premier competitive platform tracking records, stats, and
              building community for jumping game enthusiasts. Supporting
              Defrag, Surf, Speedrun, and other movement-based game modes across
              multiple titles
            </p>

            <FooterMenusButtons />
          </div>

          <div className={s.rightSide}>
            <FooterNav />
          </div>
        </section>

        <hr className={s.sectionsLine} />

        <section className={s.statistics}>
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
      </div>
    </footer>
  );
};

export default Footer;
