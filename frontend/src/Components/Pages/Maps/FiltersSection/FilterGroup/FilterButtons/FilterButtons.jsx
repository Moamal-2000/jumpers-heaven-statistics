import { getStarsText } from "@/Functions/utils";
import s from "./FilterButtons.module.scss";

const FilterButtons = ({ filtersData, queryName, defaultUrlQuery }) => {
  return (
    <div className={s.filterButtons}>
      {filtersData?.map(({ text, queryValue, id }) => {
        const isNumber = !Number.isNaN(+text);
        const modifiedText = isNumber ? getStarsText(text) : text;

        return (
          <button type="button" key={id}>
            {modifiedText}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
