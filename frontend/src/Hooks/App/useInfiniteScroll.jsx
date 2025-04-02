"use client";

import { getIsLastPagination } from "@/Functions/utils";
import { useCallback, useRef, useState } from "react";

const useInfiniteScroll = (data, isTableElementReversed = null) => {
  const [paginationNumber, setPaginationNumber] = useState(1);
  const observer = useRef();

  const lastElementRef = useCallback((node) => {
    if (isTableElementReversed && isTableElementReversed !== null) return;

    const isLastPagination = getIsLastPagination(data, paginationNumber);

    if (isLastPagination) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting)
        setPaginationNumber((prevValue) => prevValue + 1);
    });

    if (node) observer.current.observe(node);
  });

  return { paginationNumber, setPaginationNumber, lastElementRef };
};

export default useInfiniteScroll;
