import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import s from "./MainNav.module.scss";

const MainNav = () => {
  return (
    <nav className={s.mainNav}>
      {NAV_LINKS_DATA.map(({ name, href, id }) => (
        <Link key={id} href={href}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
