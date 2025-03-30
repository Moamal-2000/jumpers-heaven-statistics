import s from "./LeaderBoardError.module.scss";

const LeaderBoardError = () => {
  return (
    <tr className={s.error} data-error>
      <td>
        <div className={s.errorIcon}></div>
        <b className={s.title}>Rankings Not Loading</b>
        <p className={s.description}>
          We're having trouble fetching the latest player rankings. Check your
          internet connection and tap retry.
        </p>
      </td>
    </tr>
  );
};

export default LeaderBoardError;
