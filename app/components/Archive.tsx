"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import bnxn7 from "../../public/bnxn7.jpg";
import bnxn8 from "../../public/bnxn8.jpg";
import bnxn9 from "../../public/bnxn9.jpg";
import bnxn10 from "../../public/bnxn10.jpg";
import bnxn11 from "../../public/bnxn11.jpg";
import bnxn12 from "../../public/bnxn12.jpg";
import Image, { StaticImageData } from "next/image";

type ArchiveItem = {
  title: string;
  category: string;
  caption: string;
  image: StaticImageData;
  source: string;
  sourceName: string;
  layout: string;
  aspect: string;
};

const archiveItems: ArchiveItem[] = [
  {
    title: "The Red Room",
    category: "ARTIST PORTRAIT",
    caption:
      "A bold portrait that captures BNXN's visual identity beyond the music.",
    image: bnxn7,
    source: "https://tidal.com/artist/31449814",
    sourceName: "TIDAL",
    layout: "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1",
    aspect: "aspect-[16/9]",
  },
  {
    title: "In the Room",
    category: "STUDIO / COLLABORATION",
    caption: "BNXN in a listening-room setting alongside producer Sarz.",
    image: bnxn8,
    source:
      "https://www.musicinafrica.net/magazine/bnxn-and-sarz-release-collaborative-ep-game-needs-us",
    sourceName: "Music In Africa",
    layout: "md:col-start-3 md:row-start-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Under the Lights",
    category: "LIVE PERFORMANCE",
    caption:
      "A live performance portrait framed by deep red and blue stage lighting.",
    image: bnxn9,
    source:
      "https://www.okayafrica.com/bnxn-delivers-his-much-anticipated-album-sincerely-benson/181182",
    sourceName: "OkayAfrica",
    layout: "md:col-start-4 md:row-start-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "I Rise, We Rise",
    category: "CAMPAIGN / 2024",
    caption: "A campaign portrait from BNXN's collaboration with Chivas Regal.",
    image: bnxn10,
    source:
      "https://thelagosweekender.com/chivas-regal-launches-i-rise-we-rise-campaign/",
    sourceName: "The Lagos Weekender",
    layout: "md:col-start-1 md:row-start-2",
    aspect: "aspect-[4/3]",
  },
  {
    title: "A Different Perspective",
    category: "EDITORIAL",
    caption: "A striking red-background portrait from the Bad Since '97 era.",
    image: bnxn11,
    source:
      "https://www.okayafrica.com/listen-to-bnxns-bad-since-97-ep-featuring-wizkid-olamide-wande-coal/221294",
    sourceName: "OkayAfrica",
    layout: "md:col-start-2 md:row-start-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Made for the Stage",
    category: "LIVE / PERFORMANCE",
    caption:
      "A concert photograph capturing BNXN performing beneath vibrant stage lights.",
    image: bnxn12,
    source:
      "https://medium.com/@evolvemagazinehq/breaking-the-monotony-of-bnxns-music-challenging-the-status-quo-in-nigerian-pop-20454bd42676",
    sourceName: "Evolve Magazine",
    layout: "md:col-start-3 md:col-span-2 md:row-start-2 md:row-span-2",
    aspect: "aspect-[4/3]",
  },
];

export default function VisualArchive() {
  const [active, setActive] = useState<ArchiveItem | null>(null);

  return (
    <section className="overflow-hidden bg-background px-5 py-24 text-foreground md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Frames from
              <span className="block font-normal italic">the journey.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-foreground/65">
            Beyond the sound. A collection of portraits, creative moments, and
            memories from BNXN's world.
          </p>
        </div>

        {/* Editorial gallery grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {archiveItems.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              aria-label={`View ${item.title}`}
              className={`group relative block w-full cursor-pointer overflow-visible text-left outline-none focus-visible:ring-2 focus-visible:ring-primary ${item.layout}`}
            >
              {/* Image Container with Relative and Explicit Height / Aspect */}
              <div
                className={`relative w-full overflow-hidden bg-foreground/10 transition-transform duration-300 ease-out min-h-[220px] ${item.aspect}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i < 3}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                {/* Number */}
                <span className="absolute left-3 top-3 z-10 bg-background/90 px-2 py-1 font-mono text-[10px] text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Open indicator */}
                <span className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-background text-foreground opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <HugeiconsIcon icon={ArrowUpRight02Icon} size={18} />
                </span>
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/50">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <span className="mt-4 shrink-0 text-xs text-foreground/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setActive(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActive(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="relative my-auto grid w-full max-w-5xl overflow-hidden bg-background md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center bg-background text-foreground hover:bg-foreground hover:text-background"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={20} />
            </button>

            <div className="relative flex min-h-[320px] w-full items-center justify-center bg-foreground/5 md:min-h-[560px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                {active.category}
              </p>

              <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                {active.title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-foreground/70">
                {active.caption}
              </p>

              <div className="mt-8 border-t border-foreground/15 pt-5">
                <p className="text-xs text-foreground/50">Image source</p>

                <a
                  href={active.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:opacity-60"
                >
                  {active.sourceName}
                  <HugeiconsIcon icon={ArrowUpRight02Icon} size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
