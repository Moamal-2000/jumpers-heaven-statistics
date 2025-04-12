"use client";

import { useEffect, useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./ScrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTopHalf, setIsAtTopHalf] = useState(true);

  const buttonClass = `${s.button} ${isVisible ? s.active : ""} ${
    isAtTopHalf ? s.reverse : ""
  }`;

  const scrollToPosition = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const isAtTop = window.scrollY < pageHeight / 2;

    window.scrollTo({
      top: isAtTop ? pageHeight : 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;

      setIsAtTopHalf(window.scrollY < pageHeight / 2);
      setIsVisible(window.scrollY > 1600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button type="button" className={buttonClass} onClick={scrollToPosition}>
      <SvgIcon name="right-arrow" />
    </button>
  );
};

export default ScrollToTopBtn;
