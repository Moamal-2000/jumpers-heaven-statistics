"use client";

import ExpandButton from "./ExpandButton";
import s from "./LeaderboardHeaderBtns.module.scss";
import ShowAllButton from "./ShowAllButton";

const LeaderboardHeaderBtns = ({ setPaginationNumber }) => {
  return (
    <div className={s.buttons}>
      <ExpandButton />
      <ShowAllButton setPaginationNumber={setPaginationNumber} />
    </div>
  );
};

export default LeaderboardHeaderBtns;
