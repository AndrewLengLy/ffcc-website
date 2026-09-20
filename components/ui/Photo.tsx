import Image from "next/image";
import type { PhotoSlot } from "@/content/media";

type Props = {
  slot: PhotoSlot;
  // Tailwind aspect class, for example "aspect-[4/3]". Omit when the parent sets the size.
  aspect?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
};

// Real FFCC photo when the slot has one. Otherwise a flat gray block that
// fills the slot and names the photo needed (see PHOTO_TODO.md).
export function Photo({ slot, aspect = "", sizes, priority, className = "", rounded = true }: Props) {
  const shape = `${aspect} ${rounded ? "rounded-card" : ""} relative overflow-hidden ${className}`;

  if (!slot.src) {
    return <div role="img" aria-label={slot.alt} className={`bg-slot ${shape}`} />;
  }

  return (
    <div className={shape}>
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
