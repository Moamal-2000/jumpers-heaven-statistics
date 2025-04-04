"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./FooterNav.module.scss";

const FooterNav = () => {
  const currentPage = usePathname();

  return (
    <nav className={s.navigation}>
      <h3>Navigation</h3>

      <div className={s.links}>
        {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => (
          <Link
            key={id}
            href={href}
            className={currentPage === href ? s.active : ""}
          >
            <SvgIcon name={iconName} />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FooterNav;
