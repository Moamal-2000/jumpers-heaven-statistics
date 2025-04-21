import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./LegendLabel.module.scss";

const LegendLabel = ({ label, tooltipText }) => {
  return (
    <legend className={s.label} data-label={label}>
      {label}
      <div className={s.tooltip}>
        <div className={s.icon}>
          <SvgIcon name="questionMark" />
        </div>

        <p className={s.tooltipText}>{tooltipText}</p>
      </div>
    </legend>
  );
};

export default LegendLabel;
