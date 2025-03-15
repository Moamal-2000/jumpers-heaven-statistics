import Link from "next/link";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Header.module.scss";
import MainNav from "./MainNav/MainNav";

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        <SvgIcon name="trophy" />
        <h1>JumpersHeaven</h1>
      </Link>

      <MainNav />
    </header>
  );
};

export default Header;
