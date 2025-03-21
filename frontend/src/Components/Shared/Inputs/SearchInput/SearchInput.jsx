"use client";

import SvgIcon from "../../SvgIcon";
import s from "./SearchInput.module.scss";

const SearchInput = ({ placeholder }) => {
  return (
    <div className={s.input} onClick={focusOnInput}>
      <SvgIcon name="search" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchInput;

function focusOnInput(event) {
  const inputEle = event.currentTarget.querySelector("input");
  const isFocused = document.activeElement === inputEle;

  if (isFocused) return;
  inputEle?.focus();
}
