"use client";

import ExpandButton from "./ExpandButton";
import s from "./RoutesCompletedHeaderBtns.module.scss";
import ShowAllButton from "./ShowAllButton";

const RoutesCompletedHeaderBtns = ({ setPaginationNumber }) => {
  return (
    <div className={s.buttons}>
      <ExpandButton />
      <ShowAllButton setPaginationNumber={setPaginationNumber} />
    </div>
  );
};

export default RoutesCompletedHeaderBtns;
