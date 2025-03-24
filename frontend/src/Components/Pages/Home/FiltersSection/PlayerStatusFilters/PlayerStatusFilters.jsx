import CustomLabeledCheckbox from "@/Components/Shared/Checkboxes/CustomLabeledCheckbox/CustomLabeledCheckbox";
import s from "./PlayerStatusFilters.module.scss";

const PlayerStatusFilters = () => {
  return (
    <div className={s.filters}>
      <CustomLabeledCheckbox
        name="detailed-stats-checkbox"
        labelText="Show Detailed Stats"
        queryName="detailed-stats"
      />
    </div>
  );
};

export default PlayerStatusFilters;
