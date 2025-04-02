import SvgIcon from "../../SvgIcon";
import s from "./ScrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
  return (
    <button type="button" className={s.button}>
      <SvgIcon name="right-arrow" />
    </button>
  );
};

export default ScrollToTopBtn;
