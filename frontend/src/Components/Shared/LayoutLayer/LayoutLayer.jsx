"use client";

import { useSelector } from "react-redux";
import s from "./LayoutLayer.module.scss";

const LayoutLayer = ({ children }) => {
  const { isNotFoundPage } = useSelector((s) => s.global);
  const v2Class = isNotFoundPage ? s.v2 : "";

  return <div className={`${s.websiteLayer} ${v2Class}`}>{children}</div>;
};

export default LayoutLayer;
