import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./SortSection.module.scss";

const SortSection = () => {
  return (
    <section className={s.sortSection}>
      <div className={s.sortWrapper}>
        <label htmlFor="sort-by" className={s.label}>
          Sort by:
          <div className={s.tooltip}>
            <div className={s.icon}>
              <SvgIcon name="questionMark" />
            </div>

            <p className={s.tooltipText}>
              Choose how to order the displayed maps
            </p>
          </div>
        </label>

        {/* <CustomSelectMenu /> */}
      </div>

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
    </section>
  );
};

export default SortSection;
