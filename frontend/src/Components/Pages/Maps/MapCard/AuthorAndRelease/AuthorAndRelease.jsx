import { formateReleaseDate } from "@/Functions/utils";
import Image from "next/image";
import s from "./AuthorAndRelease.module.scss";

const AuthorAndRelease = ({ Difficulty, Author, Released }) => {
  const difficulty = Math.ceil(Difficulty?.["125"]?.Difficulty) || 0;
  const fixedDiff = difficulty < 0 ? 0 : difficulty;

  return (
    <div className={s.authorAndRelease}>
      <div className={s.authorWrapper}>
        <div className={s.countryFlag}>
          <Image
            sizes="42.8px"
            src={`/difficultiesIcons/diff-${fixedDiff}.png`}
            alt={`Difficulty ${fixedDiff}`}
            fill={true}
          />
        </div>
        <span className={s.authorName}>{Author}</span>
      </div>

      <div className={s.releaseBox}>
        <div className={s.title}>Released</div>
        <p className={s.date}>{formateReleaseDate(Released)}</p>
      </div>
    </div>
  );
};

export default AuthorAndRelease;
