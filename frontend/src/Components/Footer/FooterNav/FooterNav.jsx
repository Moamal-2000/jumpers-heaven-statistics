import SvgIcon from "@/Components/Shared/SvgIcon";
import Link from "next/link";
import s from "./FooterNav.module.scss";

const FooterNav = () => {
  return (
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
  );
};

export default FooterNav;
