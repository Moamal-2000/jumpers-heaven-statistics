import { VALID_FPS, VALID_PARAMS } from "../Data/variables";

export const capitalize = (str) =>
  str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

export const getFpsNoun = (src) =>
  src === "0" ? "mix" : src === "999" ? "all" : src;

export const getFpsNumber = (src) =>
  src === "mix" ? "0" : src === "all" ? "999" : src;

export const getParams = () =>
  Object.fromEntries(new URLSearchParams(window.location.search));

export function getFixedParams() {
  const params = getParams();
  const filteredParams = {};

  for (const key in params) {
    const isValidParam = VALID_PARAMS.includes(key);
    const isEmptyParamValue = params[key] !== "";
    if (isEmptyParamValue && isValidParam) filteredParams[key] = params[key];
  }

  return filteredParams;
}

export function getFixedFps(fps) {
  return VALID_FPS.includes(fps) ? fps : "125";
}

export function getSortedLeaderBoard(data, sortKey = "Score") {
  const sortedData = [];

  for (const key in data) {
    data[key].name = key;
    sortedData.push(data[key]);
  }

  return sortedData.sort((a, b) => b[sortKey] - a[sortKey]);
}
