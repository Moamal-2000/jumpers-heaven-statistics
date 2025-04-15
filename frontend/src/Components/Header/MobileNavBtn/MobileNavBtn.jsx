"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  const { isMobileNavActive } = useSelector((s) => s.global);
  const dispatch = useDispatch();

  function handleToggleMenu() {
    dispatch(
      updateGlobalState({ key: "isMobileNavActive", value: !isMobileNavActive })
    );
  }

  return (
    <button type="button" className={s.mobileNavBtn} onClick={handleToggleMenu}>
      <SvgIcon name="hamburger" />
    </button>
  );
};

export default MobileNavBtn;
