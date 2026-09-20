import { FB_VIDEO_URL, VIDEO_POSTER } from "@/content/media";
import { site } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { VideoLite } from "./VideoLite";

type Props = { title?: string; tone?: "light" | "dark" };

// The latest service video, framed like the player pane in the template notes.
// With no FB_VIDEO_URL set, a gray 16:9 block links to FFCC's Facebook videos.
export function VideoBlock({ title = "Latest FFCC service", tone = "light" }: Props) {
  const linkColor =
    tone === "dark" ? "text-white hover:text-copper-300" : "text-copper-700 hover:text-copper-900";

  return (
    <div>
      <div className="bg-paper p-2 shadow-modal sm:p-3">
        {FB_VIDEO_URL ? (
          <VideoLite url={FB_VIDEO_URL} poster={VIDEO_POSTER} title={title} />
        ) : (
          <a
            href={site.social.facebookVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex aspect-video w-full flex-col items-center justify-center gap-3 bg-slot px-6 text-center text-ink"
          >
            <span className="text-lg font-medium">The latest service video is on Facebook</span>
            <span className="inline-flex items-center gap-2 font-semibold underline underline-offset-4">
              Open FFCC videos
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-fast ease-standard group-hover:translate-x-1" />
            </span>
          </a>
        )}
      </div>
      <p className="mt-4 text-[0.9375rem]">
        <a
          href={site.social.facebookVideos}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center gap-2 font-medium underline underline-offset-4 transition-colors duration-micro ease-standard ${linkColor}`}
        >
          See all videos on Facebook
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </p>
    </div>
  );
}
