"use client";

import { createQueryString } from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import s from "./CustomCheckbox.module.scss";

const CustomCheckbox = ({ name, queryName }) => {
  const [isChecked, setIsChecked] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange() {
    setIsChecked((prevValue) => !prevValue);
    const createdQuery = createQueryString(queryName, !isChecked, searchParams);

    router.push(`${pathname}?${createdQuery}`);
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

export default CustomCheckbox;
