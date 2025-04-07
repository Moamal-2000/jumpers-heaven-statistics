import Link from "next/link";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Footer.module.scss";
import FooterMenusButtons from "./FooterMenusButtons/FooterMenusButtons";
import FooterNav from "./FooterNav/FooterNav";
import FooterStats from "./FooterStats/FooterStats";
import FooterContent from "./FooterContent/FooterContent";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.line} />
      <div className="container">
        <FooterContent />
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
        <FooterStats />
      </div>
    </footer>
  );
};

export default Footer;
