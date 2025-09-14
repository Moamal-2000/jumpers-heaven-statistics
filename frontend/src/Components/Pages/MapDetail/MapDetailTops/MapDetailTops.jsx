import s from "./MapDetailTops.module.scss";
import { getColoredName } from "@/Functions/components";
import { useRouter } from "next/navigation";

const MapDetailTops = ({ topsData, selectedFps, loading, loadingMore, hasMore, loadMoreRef, showingAll, onShowAll, allData }) => {
  const router = useRouter();
  
  if (loading) {
    return (
      <div className={s.topsCard}>
        <div className={s.cardHeader}>
          <h2>Top Runs {selectedFps === "All" ? "(All FPS)" : `(${selectedFps} FPS)`}</h2>
        </div>
        <div className={s.loading}>
          <div className={s.spinner}></div>
          <span>Loading top runs...</span>
        </div>
      </div>
    );
  }

  if (!topsData || topsData.length === 0) {
    return (
      <div className={s.topsCard}>
        <div className={s.cardHeader}>
          <h2>Top Runs {selectedFps === "All" ? "(All FPS)" : `(${selectedFps} FPS)`}</h2>
        </div>
        <div className={s.noData}>
          <p>No runs available for {selectedFps} FPS</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.topsCard}>
      <div className={s.cardHeader}>
        <h2>Top Runs {selectedFps === "All" ? "(All FPS)" : `(${selectedFps} FPS)`}</h2>
        <div className={s.headerActions}>
          <span className={s.totalRuns}>
            {selectedFps === "All" ? "Combined runs" : `${topsData[0]?.totalNr || 0} total runs`}
          </span>
          {!showingAll && allData && allData.length > topsData.length && (
            <button 
              className={s.showAllButton}
              onClick={onShowAll}
            >
              Show All ({allData.length})
            </button>
          )}
        </div>
      </div>
      
      <div className={s.topsList}>
        {topsData.map((run, index) => (
          <div 
            key={`${run.run_id}-${index}`} 
            className={s.topRun}
            onClick={() => router.push(`/player/${run.player_id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className={s.rank}>
              #{index + 1}
            </div>
            
            <div className={s.playerInfo}>
              <div className={s.playerName}>
                <span>{getColoredName(run.playername)}</span>
                {selectedFps === "All" && run.fps && (
                  <span className={s.fpsDisplay}>
                    {run.fps} FPS
                  </span>
                )}
              </div>
              <div className={s.runDetails}>
                <span className={s.time}>{run.time_played_string}</span>
                <span className={s.separator}>•</span>
                <span className={s.date}>
                  {new Date(run.time_created).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className={s.stats}>
              <div className={s.stat}>
                <span className={s.statLabel}>Loads</span>
                <span className={s.statValue}>{run.load_count}</span>
              </div>
              <div className={s.stat}>
                <span className={s.statLabel}>Saves</span>
                <span className={s.statValue}>{run.save_count}</span>
              </div>
              {run.nadejumps > 0 && (
                <div className={s.stat}>
                  <span className={s.statLabel}>Nade Jumps</span>
                  <span className={s.statValue}>{run.nadejumps}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {hasMore && (
        <div ref={loadMoreRef} className={s.loadMoreContainer}>
          {loadingMore ? (
            <div className={s.loadingIndicator}>
              <div className={s.spinner}></div>
              <span>Loading more runs...</span>
            </div>
          ) : (
            <div className={s.scrollHint}>
              <span>Scroll down to load more runs</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapDetailTops;
