"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

// Reliable fallback: a dark charcoal panel with a subtle gold shimmer pattern
const FALLBACK_SVG = `data:image/svg+xml,${encodeURIComponent(`
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1A1614;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#231C18;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1A1614;stop-opacity:1" />
    </linearGradient>
    <pattern id="p" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="#C5A05918" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#p)"/>
  <text x="400" y="295" font-family="Georgia,serif" font-size="13" fill="#C5A059" fill-opacity="0.5" text-anchor="middle" letter-spacing="4">B · S T A R</text>
  <text x="400" y="315" font-family="Georgia,serif" font-size="9" fill="#C5A05960" text-anchor="middle" letter-spacing="6">UNISEX SALON</text>
</svg>
`)}`;

export default function SafeImage({ src, fallbackSrc, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  return (
    <Image
      {...props}
      src={errored ? (fallbackSrc ?? FALLBACK_SVG) : imgSrc}
      alt={alt}
      onError={() => {
        if (!errored) {
          setErrored(true);
          setImgSrc(fallbackSrc ?? FALLBACK_SVG);
        }
      }}
    />
  );
}
