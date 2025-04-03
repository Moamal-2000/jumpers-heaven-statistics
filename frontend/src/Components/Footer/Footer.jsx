import Link from "next/link";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.line} />

      <div className={s.wrapper}>
        <div className={s.leftSide}>
          <Link href="/" className={s.logo}>
            <SvgIcon name="trophy" />
            <span>JumpersHeaven</span>
          </Link>

          <p className={s.description}>
            The premier competitive platform tracking records, stats, and
            building community for jumping game enthusiasts. Supporting Defrag,
            Surf, Speedrun, and other movement-based game modes across multiple
            titles
          </p>
        </div>

        <div className={s.rightSide}>
          <nav className={s.navigation}>
            <h3>Navigation</h3>

            <div className={s.links}>
              <Link href="/">Home</Link>
              <Link href="/maps">Maps</Link>
              <Link href="/players">Players</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
