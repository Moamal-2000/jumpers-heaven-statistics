import { formateReleaseDate } from "@/Functions/utils";
import s from "./AuthorAndRelease.module.scss";

const AuthorAndRelease = ({ author, released }) => {
  return (
    <div className={s.authorAndRelease}>
      <div className={s.authorWrapper}>
        <span className={s.authorName}>Map by: {author}</span>
      </div>

      <div className={s.releaseBox}>
        <div className={s.title}>Released</div>
        <p className={s.date}>{formateReleaseDate(released)}</p>
      </div>
    </div>
  );
};

export default AuthorAndRelease;
