"use client";

import { SORT_MAPS_OPTIONS } from "@/Data/staticData";
import {
  createQueryString,
  getSortByLabel,
  removeQueryString,
} from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../SvgIcon";
import s from "./CustomSelectMenu.module.scss";

const CustomSelectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlQuery = searchParams.get("sort-by");
  const [currentSortBy, setCurrentSortBy] = useState(getSortByLabel(urlQuery));
  const visibleClass = isOpen ? `${s.visible}` : "";

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleSelectOption(value, label) {
    const isDefault = value === "newest";

    if (isDefault) {
      setCurrentSortBy("Newest First");
      removeQueryString("sort-by", searchParams, router, pathname);
      return;
    }

    setCurrentSortBy(label);
    createQueryString("sort-by", value, searchParams, router, pathname);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      const isSelectMenu = menuRef.current.contains(event.target);
      const isOption = event.target.closest(`.${s.optionsList}`);
      const shouldCloseMenu = (menuRef.current && !isSelectMenu) || isOption;

      if (shouldCloseMenu) setIsOpen(false);
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className={`${s.selectMenu} ${visibleClass}`}>
      <button type="button" className={s.selectButton} onClick={handleClick}>
        <span>{currentSortBy}</span>
        <SvgIcon name="solidArrow" />
      </button>

      <ul className={s.optionsList} data-type="sort-maps-options">
        {SORT_MAPS_OPTIONS.map(({ label, value, id }) => {
          const activeClass = currentSortBy === label ? s.active : "";

          return (
            <li
              key={id}
              className={activeClass}
              onClick={() => handleSelectOption(value, label)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelectMenu;
