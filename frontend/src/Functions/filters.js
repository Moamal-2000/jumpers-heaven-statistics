export function getFilterKeyFromDate(lastSeen) {
  const now = new Date();
  const seenDate = new Date(lastSeen);

  const diffInMs = now - seenDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays < 1) return "today";
  if (diffInDays <= 7) return "this week";
  if (diffInDays <= 30) return "this month";
  return "long time";
}

export function getIsPlayerKey(lastSeen, filterKey) {
  const playerKey = getFilterKeyFromDate(lastSeen);
  return playerKey === filterKey;
}

export function getLastSeenLeaderboard(data, filterKey) {
  if (!filterKey) return data;
  return data.filter((item) => getIsPlayerKey(item.last_seen, filterKey));
}
