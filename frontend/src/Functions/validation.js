import { PAGINATION_DISPLAY_LIMIT } from "@/Data/constants";

export function shouldRenderPaginationBtn(numberOfPages, index, currentPage) {
  const last3Buttons = [numberOfPages, numberOfPages - 1, numberOfPages - 2];

  const isOneOfTheLastButtons = last3Buttons.includes(index + 1);
  const shouldAlwaysShowLastThree = currentPage >= numberOfPages - 2;

  const startPage = Math.max(
    1,
    currentPage - Math.floor(PAGINATION_DISPLAY_LIMIT / 2)
  );
  const endPage = Math.min(
    numberOfPages,
    startPage + PAGINATION_DISPLAY_LIMIT - 1
  );

  const isInRange = index + 1 >= startPage && index + 1 <= endPage;

  return isInRange || (shouldAlwaysShowLastThree && isOneOfTheLastButtons);
}

export function isMobile() {
  const mobilesType = /Mobi|Android|iPhone|iPad|iPod/i;
  return mobilesType.test(navigator.userAgent);
}
