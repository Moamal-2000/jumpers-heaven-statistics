"use client";

import useEventListener from "@/Hooks/Helper/useEventListener";
import { useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./ScrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
  const [displayButton, setDisplayButton] = useState(false);
  const activeClass = displayButton ? s.active : "";

  useEventListener(
    document,
    "scroll",
    () => {
      const shouldShowTheButton = window.scrollY > 1600;
      setDisplayButton(shouldShowTheButton);
    },
    []
  );

  return (
    <button type="button" className={`${s.button} ${activeClass}`}>
      <SvgIcon name="right-arrow" />
    </button>
  );
};

export default ScrollToTopBtn;
