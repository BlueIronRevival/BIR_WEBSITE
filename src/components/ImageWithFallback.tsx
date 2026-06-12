"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackLabel = "Blue Iron Revival",
  priority = false,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`image-fallback ${className}`} role={failed ? "img" : undefined} aria-label={failed ? alt : undefined}>
      <div className="fallback-art" aria-hidden="true">
        <span className="fallback-wheel fallback-wheel-small" />
        <span className="fallback-body" />
        <span className="fallback-wheel fallback-wheel-large" />
        <span className="fallback-label">{fallbackLabel}</span>
      </div>
      {!failed && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            setFailed(true);
          }}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </div>
  );
}
