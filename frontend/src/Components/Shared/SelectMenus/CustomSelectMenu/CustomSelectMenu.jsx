"use client";

import { SORT_MAPS_OPTIONS } from "@/Data/staticData";
import useEventListener from "@/Hooks/Helper/useEventListener";
import { useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./CustomSelectMenu.module.scss";

const CustomSelectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleClass = isOpen ? `${s.visible}` : "";

  function handleClick() {
    setIsOpen(true);
  }

  useEventListener(document, "click", () => setIsOpen(false));

  return (
    <div className={`${s.selectMenu} ${visibleClass}`}>
      <button type="button" className={s.selectButton} onClick={handleClick}>
        <span>Newest First</span>
        <SvgIcon name="solidArrow" />
      </button>

      <ul className={s.optionsList}>
        {SORT_MAPS_OPTIONS.map(({ label, value, id }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelectMenu;
