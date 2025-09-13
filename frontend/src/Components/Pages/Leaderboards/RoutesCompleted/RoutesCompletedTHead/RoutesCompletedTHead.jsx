"use client";

import s from "./RoutesCompletedTHead.module.scss";

const RoutesCompletedTHead = () => {
  return (
    <thead className={s.thead}>
      <tr>
        <th className={s.rank}>Rank</th>
        <th className={s.player}>Player</th>
        <th className={s.completionRate}>Completion %</th>
        <th className={s.completed}>Completed</th>
      </tr>
    </thead>
  );
};

export default RoutesCompletedTHead;
