import CustomCheckbox from "@/Components/Shared/Checkboxes/CustomCheckbox/CustomCheckbox";
import s from "./PlayerStatusFilters.module.scss";

const PlayerStatusFilters = () => {
  return (
    <div className={s.filters}>
      <CustomCheckbox />
    </div>
  );
};

export default PlayerStatusFilters;
