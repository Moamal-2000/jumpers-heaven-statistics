"use client";

import SvgIcon from "../../SvgIcon";
import s from "./SearchInput.module.scss";

const SearchInput = ({ placeholder }) => {
  return (
    <form className={s.input} onClick={focusOnInput}>
      <button type="submit" className={s.searchButton}>
        <SvgIcon name="search" />
      </button>

      <input
        type="text"
        placeholder={placeholder}
        name="search-player"
        role="search"
      />
    </form>
  );
};

export default SearchInput;

function focusOnInput(event) {
  const inputEle = event.currentTarget.querySelector("input");
  const isFocused = document.activeElement === inputEle;

  if (isFocused) return;
  inputEle?.focus();
}
