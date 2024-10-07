import { useCallback, useRef } from "react";

export const useScrollEnd = ({ isLoading, hasMore, onScrollEnd }: { isLoading: boolean, hasMore: boolean, onScrollEnd : () => void }) => {
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((items) => {
        if (items[0].isIntersecting && hasMore) {
          onScrollEnd();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, onScrollEnd]
  );

  return { lastPostElementRef }
}