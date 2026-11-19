"use client";

import { useEffect, useState } from "react";

// The site is a static export, so a year computed at render time would be
// frozen at build time. Render the build year (passed in as fallback) first so
// server and client markup match, then update to the visitor's current year.
export default function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
