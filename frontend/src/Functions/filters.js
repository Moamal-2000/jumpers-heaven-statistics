export function getFilterKeyFromDate(lastSeen) {
  const now = new Date();
  const seenDate = new Date(lastSeen);

  const diffInMs = now - seenDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const periods = ["today", "this week", "this month", "long time"];

  if (diffInDays < 1) return periods.slice(0, 3);
  if (diffInDays <= 7) return periods.slice(1, 3);
  if (diffInDays <= 30) return periods.slice(2, 4);
  return [periods.at(-1)];
}

export function getIsPlayerKey(lastSeen, filterKey) {
  const playerKey = getFilterKeyFromDate(lastSeen);
  return playerKey?.includes(filterKey);
}

export function getLastSeenLeaderboard(data, filterKey) {
  if (!filterKey) return data;
  return data.filter((item) => getIsPlayerKey(item.LastSeen, filterKey));
}

export function getRegionLeaderboard(data, filterKey) {
  const filteredData = data.filter(
    (item) => item?.Region?.toLowerCase() === filterKey
  );

  return filteredData;
}
