'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA?: {
      GLOBE: (options: Record<string, unknown>) => void;
    };
  }
}

export default function VantaBackground() {
  const myRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA) {
      window.VANTA.GLOBE({
        el: myRef.current,
        color: 0xec3750,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0a0a,
      });
    }
  }, []);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.globe.min.js" strategy="beforeInteractive" />

      <div ref={myRef} className="w-full h-screen z-100" />
    </>
  );
}
