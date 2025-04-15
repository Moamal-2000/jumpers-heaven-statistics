"use client";

import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LayoutLayer.module.scss";

const LayoutLayer = ({ children }) => {
  const { isNotFoundPage, pageVisits } = useSelector((s) => s.global);
  const currentPage = usePathname();
  const dispatch = useDispatch();
  const v2Class = isNotFoundPage ? s.v2 : "";

  function watchPageVisits() {
    const pageVisitsClone = [...pageVisits];
    pageVisitsClone.push(currentPage);
    dispatch(updateGlobalState({ key: "pageVisits", value: pageVisitsClone }));
  }

  useEffect(() => {
    watchPageVisits();
  }, [currentPage]);

  return <div className={`${s.websiteLayer} ${v2Class}`}>{children}</div>;
};

export default LayoutLayer;
