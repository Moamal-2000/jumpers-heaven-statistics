"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { isMobile } from "@/Functions/validation";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  const { isMobileNavActive } = useSelector((s) => s.global);
  const dispatch = useDispatch();
  const iconName = isMobileNavActive ? "xMark" : "hamburger";
  const title = `${isMobileNavActive ? "Close" : "Open"} navigation menu`;
  const isMobileDevice = isMobile();
  const moveClass = isMobileNavActive ? s.move : "";
  const mobileClass = isMobileDevice ? s.mobile : "";

  function handleToggleMenu() {
    dispatch(
      updateGlobalState({ key: "isMobileNavActive", value: !isMobileNavActive })
    );

    dispatch(
      updateGlobalState({
        key: "isGlobalOverlayActive",
        value: !isMobileNavActive,
      })
    );
  }

  return (
    <button
      type="button"
      className={`${moveClass} ${s.mobileNavBtn} ${mobileClass}`}
      onClick={handleToggleMenu}
      title={title}
    >
      <SvgIcon name={iconName} />
    </button>
  );
};

export default MobileNavBtn;
