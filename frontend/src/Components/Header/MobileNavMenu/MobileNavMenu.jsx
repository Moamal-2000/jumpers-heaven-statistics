"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const currentPage = usePathname();

  return (
    <nav className={s.mobileNav}>
      <p className={s.title}>Main Navigation</p>

      <ul className={s.links}>
        {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => {
          const activeClass = currentPage === href ? s.active : "";

          return (
            <li key={id}>
              <Link href={href} className={`${s.link} ${activeClass}`}>
                <SvgIcon name={iconName} />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
