"use client";

import { createQueryString, removeQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import s from "./CustomLabeledCheckbox.module.scss";

const CustomLabeledCheckbox = ({ name, queryName }) => {
  const [isChecked, setIsChecked] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange() {
    setIsChecked((prevValue) => !prevValue);

    if (isChecked) {
      removeQueryString(queryName, searchParams, router, pathname);
      return;
    }

    createQueryString(queryName, !isChecked, searchParams, router, pathname);
  }

  return (
    <div className={s.customCheckbox} aria-checked={isChecked} role="switch">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomLabeledCheckbox;
