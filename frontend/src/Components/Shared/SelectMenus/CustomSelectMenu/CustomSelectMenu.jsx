"use client";

import { SORT_MAPS_OPTIONS } from "@/Data/staticData";
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./CustomSelectMenu.module.scss";

const CustomSelectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const visibleClass = isOpen ? `${s.visible}` : "";

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleClickOutside(event) {
    const isSelectMenu = menuRef.current.contains(event.target);
    const isOption = event.target.closest(`.${s.optionsList}`);
    const shouldCloseMenu = (menuRef.current && !isSelectMenu) || isOption;

    if (shouldCloseMenu) setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className={`${s.selectMenu} ${visibleClass}`}>
      <button type="button" className={s.selectButton} onClick={handleClick}>
        <span>Newest First</span>
        <SvgIcon name="solidArrow" />
      </button>

      <ul className={s.optionsList} data-type="sort-maps-options">
        {SORT_MAPS_OPTIONS.map(({ label, value, id }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelectMenu;
