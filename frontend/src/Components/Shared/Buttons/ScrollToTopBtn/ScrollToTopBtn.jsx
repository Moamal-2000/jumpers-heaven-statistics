"use client";

import { useEffect, useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./ScrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
  const [displayButton, setDisplayButton] = useState(false);
  const activeClass = displayButton ? s.active : "";

  useEffect(() => {
    const handleScroll = () => {
      setDisplayButton(window.scrollY > 1600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      className={`${s.button} ${activeClass}`}
      onClick={handleClick}
    >
      <SvgIcon name="right-arrow" />
    </button>
  );
};

export default ScrollToTopBtn;
