"use client";

import CopyRights from "@/Components/Footer/CopyRights/CopyRights";
import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const currentPage = usePathname();
  const { isMobileNavActive } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const activeClass = isMobileNavActive ? s.active : "";

  useEffect(() => {
    document.body.classList.toggle("noScroll", isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    <nav className={`${s.mobileNav} ${activeClass}`}>
      <p className={s.title}>Main Navigation</p>

      <ul className={s.links}>
        {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => {
          const isCurrentPage = currentPage === href;
          const activeClass = isCurrentPage ? s.active : "";

          function handleLinkClick() {
            if (isCurrentPage) return;

            dispatch(
              updateGlobalState({ key: "isMobileNavActive", value: false })
            );

            dispatch(
              updateGlobalState({ key: "isGlobalOverlayActive", value: false })
            );
          }

          return (
            <li key={id}>
              <Link
                href={href}
                className={`${s.link} ${activeClass}`}
                onClick={handleLinkClick}
              >
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
