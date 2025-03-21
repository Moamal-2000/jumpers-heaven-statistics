import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./ExpandTopStatBtn.module.scss";

const ExpandTopStatBtn = ({ showMoreStats, setShowMoreStats }) => {
  const activeClass = showMoreStats ? s.active : "";

  function handleExpandTopsStat() {
    setShowMoreStats((prevValue) => !prevValue);
  }

  return (
    <button
      type="button"
      onClick={handleExpandTopsStat}
      className={`${s.expandButton} ${activeClass}`}
      aria-label="Expand stats bars"
    >
      <SvgIcon name="right-arrow" />
    </button>
  );
};

export default ExpandTopStatBtn;
