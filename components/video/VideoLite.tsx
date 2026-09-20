"use client";

import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/lib/track";
import { PlayIcon } from "@/components/ui/Icons";

type Props = { url: string; poster: string | null; title: string };

// Lite Facebook embed. Nothing from Facebook loads until the visitor clicks play.
export function VideoLite({ url, poster, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true`;
    return (
      <div className="relative aspect-video w-full bg-ink">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setPlaying(true);
        trackEvent("video_play", { video: url });
      }}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-slot"
    >
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover transition-transform duration-slow ease-out-quart group-hover:scale-[1.03]"
        />
      ) : null}
      <span className="absolute inset-0 bg-ink/25 transition-colors duration-fast ease-standard group-hover:bg-ink/35" />
      <span className="absolute left-1/2 top-1/2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-copper-700 text-white shadow-modal transition-transform duration-fast ease-out-quart group-hover:scale-105">
        <PlayIcon className="ml-1 h-9 w-9" />
      </span>
    </button>
  );
}
