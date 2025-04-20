import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./SortView.module.scss";

const SortView = () => {
  return (
    <div className={s.sortViewWrapper}>
      <button type="button">
        <span>
          <SvgIcon name="window" />
        </span>
      </button>

      <button type="button">
        <span>
          <SvgIcon name="list" />
        </span>
      </button>
    </div>
  );
};

export default SortView;
