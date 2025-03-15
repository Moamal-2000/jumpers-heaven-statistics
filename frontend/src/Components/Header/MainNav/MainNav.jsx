import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import s from "./MainNav.module.scss";

const MainNav = () => {
  return (
    <nav className={s.mainNav}>
      {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => (
        <Link key={id} href={href}>
          <SvgIcon name={iconName} />
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
