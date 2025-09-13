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
  if (!name) return '';
  
  // Split by color codes but keep the color codes
  const parts = name.split(/(\^\d)/);
  const elements = [];
  
  parts.forEach((part, index) => {
    // If it's a color code (starts with ^ followed by a digit)
    if (part.match(/^\^\d$/)) {
      return; // Skip color codes, we'll handle them in the next part
    }
    
    // If it's text and the previous part was a color code
    if (index > 0 && parts[index - 1] && parts[index - 1].match(/^\^\d$/)) {
      const colorCode = parts[index - 1].charAt(1); // Get the digit after ^
      const color = COD_2_COLORS[colorCode];
      
      elements.push(
        <span className={color} key={index}>
          {part}
        </span>
      );
    } else if (part) {
      // If it's text without a preceding color code, add as is
      elements.push(part);
    }
  });
  
  return elements.length === 1 ? elements[0] : elements;
}
