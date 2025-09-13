import SvgIcon from "@/Components/Shared/SvgIcon";
import CountryImage from "@/Components/Shared/Images/CountryImage/CountryImage";
import { getColoredName } from "@/Functions/components";
import Link from "next/link";
import s from "./Player.module.scss";

const PlayerCard = ({
  name,
  rank,
  avatar,
  totalPoints,
  mapsCompleted,
  bestTime,
  id,
  adminLevel,
  lastSeen,
  visitCount,
  country,
  level,
  joinDate,
  banned,
  adminSpeedrun,
  adminEmelie,
  xpSpeedrun,
  donated,
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const formatLastSeen = (lastSeen) => {
    if (!lastSeen) return "Unknown";
    try {
      const date = new Date(lastSeen);
      const now = new Date();
      const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return "Just now";
      if (diffInHours < 24) return `${diffInHours}h ago`;
      if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
      return date.toLocaleDateString();
    } catch {
      return lastSeen;
    }
  };

  return (
    <Link href={`/player/${id || rank}`} className={s.playerCard}>
      <div className={s.mainInfo}>
        <div className={s.avatar}>
          {country ? (
            <CountryImage countryCode={country} countryName={country} size={40} />
          ) : (
            <SvgIcon name="users" />
          )}
        </div>

        <div className={s.wrapper}>
          <h2>{getColoredName(name)}</h2>
          <div className={s.playerMeta}>
            <span className={s.playerId}>ID: {id}</span>
            {adminLevel > 0 && (
              <span className={s.adminLevel}>Admin Level {adminLevel}</span>
            )}
            {banned && (
              <span className={s.banned}>BANNED</span>
            )}
            {donated && (
              <span className={s.donator}>DONATOR</span>
            )}
          </div>
          
          <div className={s.simpleStats}>
            <span className={s.visitCount}>Visits: {visitCount.toLocaleString()}</span>
            <span className={s.lastSeen}>Last seen: {formatLastSeen(lastSeen)}</span>
          </div>
        </div>
      </div>


      <div className={s.clickHint}>
        <SvgIcon name="arrow-right" />
        <span>View Profile</span>
      </div>
    </Link>
  );
};

export default PlayerCard;

