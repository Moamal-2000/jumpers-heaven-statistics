import SvgIcon from "@/Components/Shared/SvgIcon";
import s from "./LeaderBoardLoading.module.scss";

const LeaderBoardLoading = () => {
  return (
    <tr className={s.loader} data-loader>
      <td>
        <SvgIcon name="animated-spinner" />
        <b className={s.title}>Loading leaderboard...</b>
        <p className={s.description}>Fetching the latest leaderboard</p>
      </td>
    </tr>
  );
};

export default LeaderBoardLoading;
