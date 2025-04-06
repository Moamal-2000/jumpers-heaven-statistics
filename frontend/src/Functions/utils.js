import { jhApis } from "@/Api/jumpersHeaven";
import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { COUNTRIES_BY_CODE, REGIONS, TOP_STATS_COLOR } from "@/Data/staticData";

export function getMaxFinishTimesFrom(bestPlayer) {
  const maxFinishTimes = Math.max(...Object.values(bestPlayer.TopList));
  return maxFinishTimes;
}

export function createQueryString(name, value, searchParams, router, pathname) {
  const params = new URLSearchParams(searchParams.toString());

  params.set(name?.toLowerCase(), String(value)?.toLowerCase());
  router.push(`${pathname}?${params.toString()}`, { scroll: false });
}

export function removeQueryString(queryName, searchParams, router, pathname) {
  const params = new URLSearchParams(searchParams.toString());

  params.delete(queryName?.toLowerCase());
  router.push(`${pathname}?${params.toString()}`, { scroll: false });
}

export function getStatsBarStyles({
  isSkilledLeaderboard,
  top,
  times,
  maxFinishTimes,
}) {
  const backgroundColor = isSkilledLeaderboard
    ? TOP_STATS_COLOR[9 - top]
    : TOP_STATS_COLOR[top - 1];
  const height = `${(times / maxFinishTimes) * 100}%`;

  return { backgroundColor, height };
}

export function paginateData(items, pageNumber = 1) {
  const page = Math.max(1, parseInt(pageNumber, 10) || 1);
  const startIndex = PAGINATION_ITEMS_PER_PAGE * (page - 1);
  const endIndex = startIndex + PAGINATION_ITEMS_PER_PAGE;

  return items?.slice(startIndex, endIndex);
}

export function getLeaderboardUrl(paramsObject) {
  const leaderboardType = paramsObject?.["leaderboard"] || "speedrun";
  const leaderboardUrls = {
    speedrun: jhApis(paramsObject).leaderboard.getSpeedRunLeaderboard,
    skilled: jhApis(paramsObject).leaderboard.getSkilledLeaderboard,
    defrag: jhApis(paramsObject).leaderboard.getDefragLeaderboard,
    surf: jhApis(paramsObject).leaderboard.getSurfLeaderboard,
  };

  return leaderboardUrls[leaderboardType];
}

export function getIsLastPagination(leaderboardData, paginationNumber) {
  const lastLeaderboardPagination = Math.ceil(
    leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
  );

  return paginationNumber > lastLeaderboardPagination;
}

export function getRegionByCountry(countryCode) {
  const upperCaseCode = countryCode.toUpperCase();

  for (const [region, countries] of Object.entries(REGIONS)) {
    if (countries.includes(upperCaseCode)) return region;
  }

  return "Unknown Region";
}

export function getCountryName(countryCode) {
  return COUNTRIES_BY_CODE[countryCode.toUpperCase()] || "Unknown Country";
}
