import SvgIcon from "@/Components/Shared/SvgIcon";
import { COD_2_COLORS } from "@/Data/staticData";

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

export function getColoredName(name) {
  const colorParts = name.split(/\^(?=\d)/);
  const colorNumbers = colorParts
    .slice(1)
    .map((part) => part.charAt(0))
    .filter(Boolean);

  return colorParts.map((part, index) => {
    if (index === 0 || !colorNumbers[index - 1]) return part;

    const colorNumber = colorNumbers[index - 1];
    const text = part.slice(1);
    const color = COD_2_COLORS[colorNumber];

    return (
      <span className={color} key={index}>
        {text}
      </span>
    );
  });
}

export function getMaxFinishTimesFrom(bestPlayer) {
  const maxFinishTimes = Math.max(...Object.values(bestPlayer.top_list));
  return maxFinishTimes;
}

export function createQueryString(name, value, searchParams, router, pathname) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  router.push(`${pathname}?${params.toString()}`);
}

export function removeQueryString(queryName, searchParams, router, pathname) {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(queryName);
  router.push(`${pathname}?${params.toString()}`);
}
