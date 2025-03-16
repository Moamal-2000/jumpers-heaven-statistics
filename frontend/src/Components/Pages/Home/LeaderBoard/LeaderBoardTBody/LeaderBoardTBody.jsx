"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import {
  getColoredName,
  getModifiedRank,
  getModifiedTops,
} from "@/Functions/utils";
import { useRouter } from "next/navigation";
import s from "./LeaderBoardTBody.module.scss";

const LeaderBoardTBody = ({ leaderboardData }) => {
  const router = useRouter();

  return (
    <tbody className={s.tbody}>
      {Object.values(leaderboardData)?.map(
        ({ player_name, score, top_list, player_id }, index) => {
          const modifiedRank = getModifiedRank(index + 1);
          const modifiedTops = getModifiedTops(top_list);
          const modifiedPlayerName = getColoredName(player_name);

          return (
            <tr
              key={player_id}
              onClick={() => navigateToPlayerPage(router, player_id)}
            >
              <td className={s.rank}>{modifiedRank}</td>
              <td className={s.player}>{modifiedPlayerName}</td>
              <td className={s.score}>{score}</td>
              <td className={s.tops}>{modifiedTops}</td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default LeaderBoardTBody;
