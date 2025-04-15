import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  return (
    <nav className={s.mobileNav}>
      <p className={s.title}>Main Navigation</p>

      <ul className={s.links}>
        {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => (
          <li key={id}>
            <Link href={href} className={`${s.link}`}>
              <SvgIcon name={iconName} />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
