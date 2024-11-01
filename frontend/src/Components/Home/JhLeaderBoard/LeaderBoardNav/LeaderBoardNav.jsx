import { capitalize, getFpsNoun } from "src/Functions/helper";
import s from "./LeaderBoardNav.module.scss";

const LeaderBoardNav = ({ navLinks, activeLink, setActiveLink }) => {
  return (
    <nav className={s.leaderBoardNav}>
      {navLinks.map((link, index) => {
        const linkName = getFpsNoun(link);
        const ActiveLinkName = getFpsNoun(activeLink);
        const activeClass = linkName === ActiveLinkName ? s.active : "";

        return (
          <button
            type="button"
            key={index}
            className={activeClass}
            onClick={() => setActiveLink(link)}
          >
            {capitalize(linkName)}
          </button>
        );
      })}
    </nav>
  );
};
export default LeaderBoardNav;
