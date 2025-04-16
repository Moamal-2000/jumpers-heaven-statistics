"use client";

import CopyRights from "@/Components/Footer/CopyRights/CopyRights";
import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const currentPage = usePathname();
  const { isMobileNavActive } = useSelector((s) => s.global);
  const activeClass = isMobileNavActive ? s.active : "";

  useEffect(() => {
    document.body.classList.toggle("noScroll", isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    <nav className={`${s.mobileNav} ${activeClass}`}>
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

      <div className={s.copyRights}>
        <CopyRights />
      </div>
    </nav>
  );
};

export default MobileNavMenu;
