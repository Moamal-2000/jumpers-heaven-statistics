import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./SpinnerLoader.module.scss";

const SpinnerLoader = ({ title, description, type }) => {
  if (type === "table")
    return (
      <tr className={s.loader} data-loader>
        <td>
          <SvgIcon name="animated-spinner" />
          <b className={s.title}>{title}</b>
          <p className={s.description}>{description}</p>
        </td>
      </tr>
    );

  return (
    <div className={s.loader} data-loader>
      <SvgIcon name="animated-spinner" />
      <b className={s.title}>{title}</b>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default SpinnerLoader;
