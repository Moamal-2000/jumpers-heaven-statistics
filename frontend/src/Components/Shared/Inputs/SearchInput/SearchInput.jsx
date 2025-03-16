import SvgIcon from "../../SvgIcon";
import s from "./SearchInput.module.scss";

const SearchInput = ({ placeholder }) => {
  return (
    <div className={s.input}>
      <SvgIcon name="search" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchInput;
