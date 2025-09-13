"use client";

import { useParams } from "next/navigation";
import PlayerProfile from "@/Components/Pages/PlayerProfile/PlayerProfile";

const PlayerId = () => {
  const params = useParams();
  const playerId = params.playerId;

  return (
    <main>
      <PlayerProfile playerId={playerId} />
    </main>
  );
};

export default PlayerId;
