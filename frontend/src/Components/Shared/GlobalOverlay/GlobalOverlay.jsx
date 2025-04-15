"use client";

import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isGlobalOverlayActive, isMobileNavActive } = useSelector(
    (s) => s.global
  );
  const dispatch = useDispatch();
  const activeClass = isGlobalOverlayActive ? s.active : "";

  function handleOverlayClick() {
    if (!isGlobalOverlayActive) return;

    if (isMobileNavActive)
      dispatch(updateGlobalState({ key: "isMobileNavActive", value: false }));

    dispatch(updateGlobalState({ key: "isGlobalOverlayActive", value: false }));
  }

  return (
    <div
      className={`${s.overlay} ${activeClass}`}
      onClick={handleOverlayClick}
    />
  );
};

export default GlobalOverlay;
