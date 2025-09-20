import { getCodServers } from "@/Functions/utils";
import s from "./AllServers.module.scss";
import GameType from "./GameType/GameType";
import SkeletonCard from "./SkeletonCard/SkeletonCard";

const AllServers = ({ servers, loading, error }) => {
  const groupedServers = getCodServers(servers)
  const gameTypes = Object.keys(groupedServers);

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
  ));
};

export default AllServers;
