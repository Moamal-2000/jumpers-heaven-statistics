import { WEBSITE_NAME } from "@/Data/constants";
import Link from "next/link";
import SvgIcon from "../SvgIcon";
import s from "./WebsiteLogo.module.scss";

const WebsiteLogo = () => {
  return (
    <Link href="/" className={s.logo}>
      <SvgIcon name="jumpersHeaven" />
      <span>{WEBSITE_NAME}</span>
    </Link>
  );
};

export default WebsiteLogo;
