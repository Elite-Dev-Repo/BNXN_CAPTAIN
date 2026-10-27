"use client";

import Image from "next/image";
import still_in_charge from "../../public/bnxn-still-in-charge.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, ArrowUpRight02Icon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";

const tracks = [
  {
    title: "Eja Meja",
    featured: "feat. Asake",
    duration: "2:38",
    streams: 19.4,
  },
  {
    title: "Online",
    featured: "",
    duration: "2:52",
    streams: 7.8,
  },
  {
    title: "16",
    featured: "",
    duration: "3:23",
    streams: 4.3,
  },
  {
    title: "Deliberate Work",
    featured: "",
    duration: "2:34",
    streams: 3.5,
  },
  {
    title: "Shamaya",
    featured: "feat. FOLA",
    duration: "2:41",
    streams: 3.8,
  },
  {
    title: "If You Like",
    featured: "",
    duration: "2:42",
    streams: 4.6,
  },
];

const spotifyUrl = "https://open.spotify.com/album/0NlUfh4P7iyypIcxYd0GiD";

export default function JustReleasedAlbum() {
  const highestStreams = Math.max(...tracks.map((track) => track.streams));

  return (
    <section className="w-full overflow-hidden bg-background py-12 text-foreground sm:py-16 md:py-20">
      <div className="cont">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:mb-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-4xl lg:text-4xl">
              Latest release / 2026
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-foreground/60">
            Six records. One unmistakable voice. Step into the latest chapter of
            BNXN&apos;s sound.
          </p>
        </div>

        {/* Album and tracklist */}
        <div className="flex min-w-0 flex-col items-center justify-center gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
          {/* Left: album artwork and Spotify CTA */}
          <div className="w-full min-w-0 max-w-[420px] lg:sticky lg:top-10 lg:w-[38%] lg:max-w-[380px] lg:shrink-0">
            <ScrollReveal
              className="group relative mx-auto aspect-square w-full overflow-hidden rounded-xl bg-foreground/5 lg:mx-0"
              direction="left"
              duration={1}
              amount={0.1}
            >
              <Image
                src={still_in_charge}
                alt="BNXN — Still In Charge album cover"
                fill
                priority
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 420px, 380px"
                className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 text-foreground sm:bottom-5 sm:left-5 md:bottom-6 md:left-6">
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/70 sm:text-[10px] sm:tracking-[0.25em]">
                  BNXN / T.Y.E. / EMPIRE
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                  STILL IN
                  <br />
                  CHARGE.
                </p>
              </div>
            </ScrollReveal>

            {/* Spotify CTA */}
            <ScrollReveal
              className="mt-3 w-full sm:mt-4"
              direction="up"
              delay={0.15}
              amount={0.1}
            >
              <a
                href={spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center justify-between gap-3 bg-primary px-3 py-3 text-background transition-opacity duration-300 hover:opacity-85 sm:px-4"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-background/30 sm:h-9 sm:w-9">
                    <HugeiconsIcon icon={PlayIcon} size={18} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">
                      Play on Spotify
                    </span>

                    <span className="mt-1 block text-[9px] uppercase tracking-widest opacity-70 sm:text-[10px]">
                      Listen to the project
                    </span>
                  </span>
                </span>

                <HugeiconsIcon
                  icon={ArrowUpRight02Icon}
                  size={20}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: tracklist */}
          <div className="w-full min-w-0 lg:flex-1">
            <ScrollReveal direction="right" amount={0.1}>
              <div className="flex items-center justify-between gap-3 border-b border-foreground pb-3">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  Tracklist
                </h3>

                <span className="shrink-0 font-mono text-[10px] text-foreground/50 sm:text-xs">
                  01 — 06
                </span>
              </div>
            </ScrollReveal>

            <div>
              {tracks.map((track, i) => (
                <ScrollReveal
                  key={track.title}
                  className="group border-b border-foreground/15 py-3 transition-colors duration-300 hover:bg-foreground/[0.025] sm:py-4"
                  direction={i % 2 === 0 ? "right" : "left"}
                  delay={(i % 3) * 0.07}
                  duration={0.7}
                  amount={0.1}
                >
                  <div className="flex min-w-0 items-center gap-2 px-1 sm:gap-3 sm:px-2 md:gap-4">
                    <span className="w-4 shrink-0 font-mono text-[10px] text-foreground/40 sm:w-5 sm:text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Image
                      src={still_in_charge}
                      alt="Still In Charge album cover"
                      width={40}
                      height={40}
                      className="h-9 w-9 shrink-0 rounded-sm bg-foreground object-cover sm:h-10 sm:w-10"
                    />

                    <div className="min-w-0 flex-1">
                      <h4 className="break-words text-sm font-medium tracking-tight sm:text-base">
                        {track.title}
                      </h4>

                      {track.featured && (
                        <p className="mt-0.5 text-[10px] text-foreground/50 sm:text-xs">
                          {track.featured}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-xs font-semibold tabular-nums sm:text-sm">
                        {track.streams.toFixed(1)}M
                      </p>

                      <p className="mt-0.5 text-[8px] uppercase tracking-[0.12em] text-foreground/85 sm:text-[9px] sm:tracking-[0.15em]">
                        Streams
                      </p>
                    </div>
                  </div>

                  {/* Relative stream-count indicator */}
                  <div className="ml-7 mt-2 h-[2px] overflow-hidden bg-foreground/10 sm:ml-10 sm:mt-3 md:ml-12">
                    <div
                      className="h-full bg-primary transition-all duration-500 group-hover:opacity-70"
                      style={{
                        width: `${(track.streams / highestStreams) * 100}%`,
                      }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Tracklist footer */}
            <ScrollReveal
              className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-end sm:justify-between"
              direction="up"
              amount={0.1}
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-foreground/50 sm:text-xs sm:tracking-[0.2em]">
                The sound speaks for itself.
              </p>

              <a
                href={spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50"
              >
                Explore the EP
                <HugeiconsIcon icon={ArrowUpRight02Icon} size={16} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
