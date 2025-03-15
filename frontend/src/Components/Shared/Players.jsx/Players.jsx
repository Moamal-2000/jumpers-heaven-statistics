import s from "./Players.module.scss";

const names = ["Un^8Real^3.^8JumperZ^3/^8claay"];

const colorsBasedOnNumbers = {
  1: "red",
  2: "green",
  3: "yellow",
  4: "blue",
  5: "cyan",
  6: "magenta",
  7: "white",
  8: "gray",
  9: "gray",
  0: "black",
};

const Players = () => {
  return (
    <ul className={s.players}>
      {names.map((name, index) => (
        <li key={index}>{getColoredName(name)}</li>
      ))}
    </ul>
  );
};

export default Players;

function getColoredName(name) {
  const colorParts = name.split(/\^(?=\d)/);
  const colorNumbers = colorParts
    .slice(1)
    .map((part) => part.charAt(0))
    .filter(Boolean);

  return colorParts.map((part, index) => {
    if (index === 0 || !colorNumbers[index - 1]) return part;

    const colorNumber = colorNumbers[index - 1];
    const text = part.slice(1);
    const color = colorsBasedOnNumbers[colorNumber];

    return (
      <span className={s[color]} key={index}>
        {text}
      </span>
    );
  });
}
