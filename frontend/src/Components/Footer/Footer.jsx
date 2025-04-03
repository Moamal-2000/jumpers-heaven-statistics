import Link from "next/link";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Footer.module.scss";

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
          </div>

          <div className={s.rightSide}>
            <nav className={s.navigation}>
              <h3>Navigation</h3>

              <div className={s.links}>
                <Link href="/">
                  <SvgIcon name="home" />
                  <span>Home</span>
                </Link>
                <Link href="/maps">
                  <SvgIcon name="home" />
                  <span>Maps</span>
                </Link>
                <Link href="/players">
                  <SvgIcon name="home" />
                  <span>Players</span>
                </Link>
                <Link href="/about">
                  <SvgIcon name="home" />
                  <span>About</span>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
