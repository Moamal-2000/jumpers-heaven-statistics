import s from "./AllServers.module.scss";
import GameType from "./GameType/GameType";
import SkeletonCard from "./SkeletonCard/SkeletonCard";

const AllServers = ({ servers, loading, error }) => {
  const groupedServers = servers.reduce((groups, server) => {
    const gameType = server.game_type;
    if (!groups[gameType]) {
      groups[gameType] = [];
    }
    groups[gameType].push(server);
    return groups;
  }, {});

  // Sort game types: COD2 first, then COD4
  const gameTypes = Object.keys(groupedServers).sort((a, b) => {
    if (a === "COD2" && b !== "COD2") return -1;
    if (a !== "COD2" && b === "COD2") return 1;
    return 0;
  });

  if (loading) {
    return (
      <div className={s.serversGrid}>
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.errorContainer}>
        <h3>Server Status Unavailable</h3>
        <p>{error}</p>
      </div>
    );
  }

  return gameTypes.map((gameType) => (
    <GameType
      key={gameType}
      gameType={gameType}
      groupedServers={groupedServers}
    />
  ))
};

export default AllServers;
