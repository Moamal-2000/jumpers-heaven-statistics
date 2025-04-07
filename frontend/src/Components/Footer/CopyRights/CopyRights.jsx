import { WEBSITE_NAME } from "@/Data/constants";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
    <p className={s.copyRight}>
      © 2025 <span>{WEBSITE_NAME}</span>. All rights reserved.
    </p>
  );
};

export default CopyRights;
