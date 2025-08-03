"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type ScrollWrapperProps = {
  children: ReactNode;
};

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
  useEffect(() => {
    const lenisInstance = new Lenis();
    (window as any).lenis = lenisInstance;

    let frameId: number;
    const raf = (time: number) => {
      lenisInstance.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <>{children}</>;
}
