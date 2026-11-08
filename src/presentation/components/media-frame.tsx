import Image from "next/image";

import { withAssetPath } from "@/lib/asset-path";
import { isPlaceholder } from "@/lib/placeholders";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  priority,
  className,
  sizes = "(max-width: 768px) 100vw, 320px",
}: MediaFrameProps) {
  if (isPlaceholder(src)) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        Vista previa pendiente
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border",
        className,
      )}
    >
      <Image
        src={withAssetPath(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
