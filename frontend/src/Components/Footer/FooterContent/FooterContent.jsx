import SvgIcon from "@/Components/Shared/SvgIcon";
import { WEBSITE_NAME } from "@/Data/constants";
import Link from "next/link";
import FooterNav from "../FooterNav/FooterNav";
import s from "./FooterContent.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";

const FooterContent = () => {
  return (
    <section className={s.contentSection}>
      <div className={s.leftSide}>
        <Link href="/" className={s.logo}>
          <SvgIcon name="trophy" />
          <span>{WEBSITE_NAME}</span>
        </Link>

        <p className={s.description}>
          The premier competitive platform tracking records, stats, and building
          community for jumping game enthusiasts. Supporting Defrag, Surf,
          Speedrun, and other movement-based game modes across multiple titles
        </p>
      </div>
      <FooterNav />
      <SocialMedia />
    </section>
  );
};

export default FooterContent;
