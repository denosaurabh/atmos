import { useState, useCallback, useEffect } from "react";
import { debounce } from "@utils";
import { RectDimensionsI } from "@lib/hooks";

function getDimensionObject(node: HTMLElement): RectDimensionsI {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export default function useBoundingRect(limit?: number) {
  const [dimensions, setDimensions] = useState<RectDimensionsI | {}>({});
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement) => setNode(node), []);

  useEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() => {
          setDimensions(getDimensionObject(node));
        });

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
