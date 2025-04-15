import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  return (
    <button type="button" className={s.mobileNavBtn}>
      <SvgIcon name="hamburger" />
    </button>
  );
};

export default MobileNavBtn;
