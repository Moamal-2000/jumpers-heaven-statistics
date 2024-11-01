import { useState } from "react";
import { getSortedLeaderBoard } from "src/Functions/helper";
import s from "./JhLeaderBoardTable.module.scss";

const JhLeaderBoardTable = ({ data, keyName }) => {
  const [isListReversed, setIsListReversed] = useState(false);
  const leaderboardTitle =
    keyName === "0" ? "Mix" : keyName === "999" ? "All" : keyName;
  const sortedByScore = getSortedLeaderBoard(data);
  const reverseClass = isListReversed ? s.reverse : "";

  function toggleList() {
    setIsListReversed((prevState) => !prevState);
  }

  return (
    <div className={s.leaderboardWrapper}>
      <table className={s.leaderBoardTable}>
        <thead className={s.leaderBoardHead} onClick={toggleList}>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
            <th>Tops 1 - 10</th>
          </tr>
        </thead>

        <tbody className={`${s.leaderBoardBody} ${reverseClass}`}>
          {sortedByScore.map(({ Places, name, Score }, index) => {
            const places = Places.join(", ");
            const rank = index + 1;
            const rankNoun =
              rank === 1
                ? "1st"
                : rank === 2
                ? "2nd"
                : rank === 3
                ? "3rd"
                : rank;

            return (
              <tr key={`${name}-${index}`}>
                <td data-label="Rank">{rankNoun}</td>
                <td data-label="Player Name">{name}</td>
                <td data-label="Score">{Score}</td>
                <td data-label="Tops 1 - 10">
                  <span className={s.bracket}>[</span>
                  {places}
                  <span className={s.bracket}>]</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default JhLeaderBoardTable;
