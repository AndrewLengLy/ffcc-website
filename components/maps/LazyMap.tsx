"use client";

import { useState } from "react";
import { site, fullAddress } from "@/content/site";
import { PinIcon } from "@/components/ui/Icons";

// Google Maps loads only after the visitor asks for it. Until then the slot
// shows the address with a directions link, which keeps the page fast.
export function LazyMap({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={site.maps.embed}
        title={`Map showing ${site.name} at ${fullAddress}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`h-80 w-full border-0 sm:h-[26rem] ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex min-h-80 w-full min-w-0 flex-col items-center justify-center gap-4 border border-line bg-paper p-6 text-center sm:min-h-[26rem] ${className}`}
    >
      <PinIcon className="h-9 w-9 text-copper-700" />
      <p className="font-medium text-ink">
        {site.address.street}
        <br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setShow(true)}
          className="inline-flex min-h-12 items-center border-2 border-ink/80 px-6 font-semibold text-ink transition-colors duration-micro ease-standard hover:border-copper-700 hover:text-copper-800"
        >
          Show Map
        </button>
        <a
          href={site.maps.directions}
          target="_blank"
          rel="noopener noreferrer"
          data-track="directions_click"
          data-track-label="map"
          className="inline-flex min-h-12 items-center bg-copper-700 px-6 font-semibold text-white transition-colors duration-micro ease-standard hover:bg-copper-800"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
