export function getLastSeenCategories(lastSeen) {
  const now = new Date();
  const seenDate = new Date(lastSeen);
  const diffInMs = now - seenDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const filters = ["today", "this week", "this month", "long time"];

  if (diffInDays < 1) return filters.slice(0, 3);
  if (diffInDays <= 7) return filters.slice(1, 3);
  if (diffInDays <= 30) return filters.slice(2, 4);
  return [filters.at(-1)];
}

export function matchesFilterKey(lastSeen, filterKey) {
  const filters = getLastSeenCategories(lastSeen);
  return filters?.includes(filterKey);
}

export function getLastSeenLeaderboard(data, filterKey) {
  if (!filterKey) return data;
  return data?.filter((item) => matchesFilterKey(item.LastSeen, filterKey));
}

export function getRegionLeaderboard(data, filterKey) {
  if (!filterKey) return data;
  return data?.filter((item) => item?.Region?.toLowerCase() === filterKey);
}

export function getFilteredMaps(mapsData, paramsObject) {
  const mapType = paramsObject?.type || "jump";
  const shouldFilterByType = mapType !== "jump" && mapType !== "all";

  let filteredMaps = mapsData;

  if (shouldFilterByType) {
    filteredMaps = mapsData.filter((map) => map.Type === mapType);
  }

  return filteredMaps;
}

export function getSortedMaps(mapsData, paramsObject) {
  const difficultyByFps = paramsObject?.difficulty || "125";

  const filteredMaps = mapsData.toSorted((a, b) => {
    const difficultyA = a.Difficulty?.[difficultyByFps]?.Difficulty ?? 0;
    const difficultyB = b.Difficulty?.[difficultyByFps]?.Difficulty ?? 0;
    return difficultyA - difficultyB;
  });

  return filteredMaps;
}
