import SvgIcon from "../../SvgIcon";
import s from "./CustomSelectMenu.module.scss";

const CustomSelectMenu = () => {
  return (
    <div className={s.selectMenu}>
      <button type="button" className={s.selectButton}>
        <span>Newest First</span>
        <SvgIcon name="solidArrow" />
      </button>

      <ul className={s.optionsList}>
        <li>Newest First</li>
        <li>Oldest First</li>
        <li>Name (A-Z)</li>
      </ul>
    </div>
  );
};

export default CustomSelectMenu;
