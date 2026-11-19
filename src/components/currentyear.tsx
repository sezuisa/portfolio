"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The site is a static export, so a year computed at render time would be
// frozen at build time. The build year (passed in as fallback) is rendered on
// the server and during hydration so the markup matches, then React switches
// to the visitor's current year in the browser.
export default function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );

  return <>{year}</>;
}
