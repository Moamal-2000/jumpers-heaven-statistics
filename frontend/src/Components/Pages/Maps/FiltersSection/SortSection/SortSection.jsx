import CustomSelectMenu from "@/Components/Shared/SelectMenus/CustomSelectMenu/CustomSelectMenu";
import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./SortSection.module.scss";
import SortView from "./SortView/SortView";

const SortSection = ({ setPaginationNumber }) => {
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

        <CustomSelectMenu />
      </div>

      <SortView setPaginationNumber={setPaginationNumber} />
    </section>
  );
};

export default SortSection;
