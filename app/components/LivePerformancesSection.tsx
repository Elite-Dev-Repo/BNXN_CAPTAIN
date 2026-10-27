import Image from "next/image";

import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { ArrowUpRight02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
export default function LivePerformancesSection() {
  const [selected, setSelected] = useState(null);

  const performances = [
    {
      title: "BNXN in Birmingham",
      venue: "Birmingham, United Kingdom",
      date: "LIVE IN THE UK",
      type: "instagram",
      image: null,
      embedUrl: "https://www.instagram.com/p/DeWFS01iLKb/embed",
      link: "https://www.instagram.com/p/DeWFS01iLKb/",
      description:
        "BNXN brings his sound to Birmingham. Watch moments from the live performance.",
    },
    {
      title: "BNXN in Manchester",
      venue: "Manchester, United Kingdom",
      date: "2025 · LIVE PERFORMANCE",
      type: "tiktok",
      image: null,
      embedUrl:
        "https://www.tiktok.com/player/v1/7571197419312909590?controls=0&description=0&music_info=0",
      link: "https://www.tiktok.com/video/7571197419312909590",
      description: 'BNXN performs "For Days" live in Manchester.',
    },
    {
      title: "BNXN in Montreal",
      venue: "Montreal, Canada",
      date: "LIVE IN CANADA",
      type: "instagram",
      image: null,
      embedUrl: "https://www.instagram.com/reel/CxV06RtA5I9/embed",
      link: "https://www.instagram.com/reel/CxV06RtA5I9/",
      description:
        "A live performance moment captured in Montreal by Afrobeats Montreal.",
    },
    {
      title: "BNXN in Boston",
      venue: "Boston, United States",
      date: "LIVE IN BOSTON",
      type: "image",
      image: "/bnxn-boston.jpg",
      link: "",
      description: "A moment from BNXN's time in Boston.",
    },
    {
      title: "BNXN in Edmonton",
      venue: "Edmonton, Canada",
      date: "LIVE IN EDMONTON",
      type: "image",
      image: "/bnxn-edmonton.jpg",
      link: "",
      description: "A captured moment from BNXN in Edmonton.",
    },
  ];

  // Map specific grid positioning and aspect ratios to match the reference image grid exactly
  const getItemGridClasses = (index) => {
    switch (index) {
      case 0:
        // Top Left (Tall item)
        return "md:col-start-1 md:row-start-1 md:row-span-2 aspect-[3/4]";
      case 1:
        // Top Middle
        return "md:col-start-2 md:row-start-1 aspect-[4/3]";
      case 2:
        // Top Right
        return "md:col-start-3 md:row-start-1 aspect-[4/3]";
      case 3:
        // Bottom Left
        return "md:col-start-1 md:row-start-3 aspect-[4/3]";
      case 4:
        // Bottom Wide Center/Right (Spans 2 columns)
        return "md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 aspect-[16/9]";
      default:
        return "aspect-square";
    }
  };

  return (
    <section className="bg-background text-foreground px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Gallery Grid matching reference layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {performances.map((show, i) => (
            <div
              key={show.title}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${show.title}`}
              onClick={() => setSelected(show)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(show);
                }
              }}
              className={`group relative isolate overflow-hidden bg-neutral-900 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-foreground ${getItemGridClasses(
                i,
              )}`}
            >
              {/* Media Container */}
              <div className="absolute inset-0 overflow-hidden bg-neutral-900">
                {show.image ? (
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <iframe
                    src={show.embedUrl}
                    title={show.title}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0 object-cover"
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture"
                  />
                )}
              </div>

              {/* Hover overlay with minimal details */}
              <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-4 text-foreground">
                <div className="flex justify-between items-center text-xs tracking-widest uppercase">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="border border-foreground/40 px-2 py-0.5 text-[10px]">
                    {show.type === "image" ? "PHOTO" : "VIDEO"}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-medium">{show.title}</h3>
                  <p className="text-xs text-neutral-300">{show.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Instagram Link Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-neutral-700 px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-neutral-300 transition-colors hover:border-foreground hover:text-foreground"
          >
            FOLLOW ON INSTAGRAM
            <HugeiconsIcon icon={ArrowUpRight02Icon} size={14} />
          </a>
        </div>

        {/* Selected Performance Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-sm sm:p-6"
            onClick={() => setSelected(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="relative my-auto grid w-full max-w-5xl overflow-hidden bg-neutral-900 text-foreground md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-foreground/20 bg-background text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              </button>

              {/* Media View */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950 md:aspect-auto md:min-h-[460px]">
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <iframe
                    src={selected.embedUrl}
                    title={selected.title}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>

              {/* Show Info */}
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  {selected.date}
                </p>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  {selected.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-400">
                  {selected.venue}
                </p>

                <div className="my-7 h-px w-full bg-neutral-800" />

                <p className="text-sm leading-7 text-neutral-300">
                  {selected.description}
                </p>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-4 bg-foreground px-5 py-3 text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-80"
                  >
                    View original post
                    <HugeiconsIcon icon={ArrowUpRight02Icon} size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
