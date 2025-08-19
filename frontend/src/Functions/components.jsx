import SvgIcon from "@/Components/Shared/SvgIcon";
import { COD_2_COLORS } from "@/Data/staticData";

export function getModifiedRank(rank) {
  const isTop1 = rank === 1;
  const isTop3 = rank <= 3;
  const isBelowTop3 = !(isTop1 || isTop3);

  if (isBelowTop3) return `#${rank}`;

  return isTop1 ? <SvgIcon name="trophy" /> : <MedalIcon rank={rank} />;
}

export function MedalIcon({ rank }) {
  const medalType = `${rank === 2 ? "silver" : "bronze"}-medal`;
  return <SvgIcon name={medalType} />;
}

export function getColoredName(name) {
  const colorParts = name.split(/\^(?=\d)/);
  const colorNumbers = colorParts.slice(1).map((part) => part.charAt(0));

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
