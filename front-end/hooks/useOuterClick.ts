import { MutableRefObject, useEffect, useRef } from "react";

export default function useOuterClick({ callback }: { callback: () => void }) {
  const callbackRef = useRef<() => void>(); // initialize mutable ref, which stores callback
  const innerRef = useRef<HTMLDivElement>(); // returned to client, who marks "border" element

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: MouseEvent) {
      const targetNode = e.target as Node;
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(targetNode)
      )
        callbackRef.current();
    }
  }, []); // no dependencies -> stable click listener

  return innerRef as MutableRefObject<HTMLDivElement>; // convenience for client (doesn't need to init ref himself)
}
