"use client";
import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("resize", onChange);
  // unsubscribe from the event on component unmount
  return () => window.removeEventListener("resize", onChange);
};

// window is not available on the server, so both sizes are 0 there
const getServerSize = () => 0;

const useWindowSize = () => {
  const width = useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    getServerSize,
  );
  const height = useSyncExternalStore(
    subscribe,
    () => window.innerHeight,
    getServerSize,
  );

  return [width, height];
};
export default useWindowSize;
