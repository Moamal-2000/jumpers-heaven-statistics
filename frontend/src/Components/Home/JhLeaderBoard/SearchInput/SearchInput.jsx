import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import leaderBoardData from "../../../../../../leaderboards.json";
import { getFpsNumber } from "src/Functions/helper";
import s from "./SearchInput.module.scss";

const SearchInput = ({ setLeaderBoard, activeFps }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inpValue, setInpValue] = useState(searchParams.get("player") || "");
  const searchTimerId = useRef();

  function handleOnChange(e) {
    clearTimeout(searchTimerId.current);

    const searchQuery = e?.target?.value;
    setInpValue(searchQuery);

    searchTimerId.current = setTimeout(() => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        player: searchQuery,
      });
      setLeaderBoard(getFilterLeaderBoard(searchQuery, activeFps));
    }, 200);
  }

  return (
    <form className={s.searchInputWrapper} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={inpValue}
        onChange={handleOnChange}
        placeholder="Search for player name"
      />
    </form>
  );
};
export default SearchInput;

export function getFilterLeaderBoard(searchQuery, activeFps) {
  activeFps = getFpsNumber(activeFps);

  const playersNames = Object.keys(leaderBoardData[activeFps]);
  const filteredPlayersNames = playersNames.filter((playerName) =>
    playerName.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const filteredCurrentFpsData = filteredPlayersNames.reduce(
    (acc, playerName) => {
      acc[playerName] = leaderBoardData[activeFps][playerName];
      return acc;
    },
    {}
  );

  return {
    ...leaderBoardData,
    [activeFps]: filteredCurrentFpsData,
  };
}
