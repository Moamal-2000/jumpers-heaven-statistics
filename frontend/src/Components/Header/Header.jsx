"use client";

import { useSelector } from "react-redux";
import WebsiteLogo from "../Shared/WebsiteLogo/WebsiteLogo";
import s from "./Header.module.scss";
import MainNav from "./MainNav/MainNav";
import MobileNavBtn from "./MobileNavBtn/MobileNavBtn";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  const { isNotFoundPage } = useSelector((s) => s.global);
  const v2Class = isNotFoundPage ? s.v2 : "";

  return (
    <header className={`${s.header} ${v2Class}`}>
      <div className="container" data-container>
        <WebsiteLogo />
        <MainNav />
        <MobileNavBtn />
        <MobileNavMenu />
      </div>
    </header>
  );
};

export default Header;
