import SvgIcon from "@/Components/Shared/SvgIcon";

export function getModifiedRank(rank) {
  const isTop1 = rank === 1;
  const isTop3 = rank <= 3;

  if (!(isTop1 || isTop3)) return rank;

  return isTop1 ? <SvgIcon name="trophy" /> : <MedalIcon rank={rank} />;
}

export function MedalIcon({ rank }) {
  const medalType = `${rank === 2 ? "silver" : "bronze"}-medal`;
  return <SvgIcon name={medalType} />;
}
