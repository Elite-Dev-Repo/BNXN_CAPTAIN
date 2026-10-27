"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bnxn1 from "../public/bnxn1.jpg";
import bnxn2 from "../public/bnxn2.jpg";
import bnxn3 from "../public/bnxn3.jpg";
import bnxn4 from "../public/bnxn4.jpg";
import bnxn5 from "../public/bnxn5.jpg";
import bnxn6 from "../public/bnxn6.jpg";
import header from "../public/bnxnheader.jpg";
import bnxn from "../public/bnxn.jpg";
import danfo1 from "../public/danfo1.jpg";
import danfo2 from "../public/danfo2.jpg";
import { getAlbums } from "./api/getAlbums";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import ScrollReveal from "./components/ScrollReveal";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  PlayIcon,
  PauseIcon,
  MenuTwoLineIcon,
  ArrowRight02Icon,
  ArrowUpRight02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

import { motion } from "framer-motion";
import Link from "next/link";
import VisualArchive from "./components/Archive";
import JustReleasedAlbum from "./components/JustReleased";
import FAQS from "./components/FAQs";

type Album = {
  name: string;
  shareUrl: string;
  cover: {
    url: string;
    width?: number;
    height?: number;
  }[];
};

export default function Home() {
  const images = [bnxn1, bnxn2, bnxn3, bnxn4, bnxn5, bnxn6];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState == "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => {
        setLoading(false);
      };
      document.addEventListener("load", handleLoad);
      return () => {
        document.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  const menuLinks = [
    { label: "Home", href: "#home" },
    { label: "The Artist", href: "#about" },
    { label: "Discography", href: "#discography" },
    { label: "Milestones", href: "#milestones" },
    { label: "Visual Archive", href: "#visual-archive" },
    { label: "Still In Charge", href: "#still-in-charge" },
    { label: "FAQs", href: "#faqs" },
  ];
  const [albums, setAlbums] = useState<Album[]>([]);

  const [isPlaying, setisPlaying] = useState(false);

  const careerHighlights = [
    {
      value: "2.24bn",
      description:
        "Spotify streams across BNXN's credited tracks, including collaborations.",
    },
    {
      value: "231.5m",
      description:
        "Spotify streams for Finesse, his career-defining collaboration with Pheelz.",
    },
    {
      value: "2",
      description:
        "Headies Awards won, recognising his impact on the Nigerian music scene.",
    },
    {
      value: "1.2bn",
      description:
        "Spotify streams accumulated as a lead artist across his catalogue.",
    },
    {
      value: "356m+",
      description:
        "Spotify streams for Sincerely, Benson, his debut studio album.",
    },
    {
      value: "107.5m",
      description:
        "Spotify streams for GWAGWALADA, featuring Kizz Daniel and Seyi Vibez.",
    },
  ];

  const [selected, setSelected] = useState<Album | null>(null);

  const loadAlbums = async () => {
    const res = await getAlbums();
    if (res && !Array.isArray(res) && "error" in res) {
      console.log("Failed to load albums:", res.error);
      return;
    }
    if (Array.isArray(res)) {
      setAlbums(res);
    }
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    loadAlbums();
    const audioInstance = new Audio("/bnxnitaly.mp3");
    audioRef.current = audioInstance;
    const handleEnded = () => setisPlaying(false);
    audioInstance.addEventListener("ended", handleEnded);

    return () => {
      audioInstance.removeEventListener("ended", handleEnded);
      audioInstance.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlayAudio = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setisPlaying(false);
    } else {
      audio
        .play()
        .then(() => setisPlaying(true))
        .catch((err) => console.log("Playback prevented:", err));
    }
  };

  if (loading) {
    return (
      <section className="w-screen min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
          <Image
            src={header}
            alt="bnxn header"
            className="inline-block h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-15 lg:w-15"
          />

          <div className="w-13 h-13 border-4 border-b-background border-primary animate-spin rounded-full"></div>

          <p className="text-sm font-light text-foreground">
            Wait a minute... The captain will be with you shortly.
          </p>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="w-screen min-h-screen overflow-x-hidden bg-background">
        <div className="cont relative overflow-hidden">
          <nav className="mt-3 flex h-17 w-full items-center justify-between px-5">
            <button
              type="button"
              onClick={togglePlayAudio}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              className="flex h-11 w-11 items-center justify-center transition-transform hover:scale-110"
            >
              {isPlaying ? (
                <HugeiconsIcon icon={PauseIcon} size={23} />
              ) : (
                <HugeiconsIcon icon={PlayIcon} size={23} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <HugeiconsIcon icon={MenuTwoLineIcon} size={28} />
            </button>
          </nav>
          <header
            id="home"
            className="flex min-h-[100svh] w-full flex-col items-center justify-evenly gap-10 py-10 sm:gap-12 sm:py-12 md:gap-14 md:py-16"
          >
            {/* Hero headline */}

            <ScrollReveal className="w-full" direction="scale" amount={0.2}>
              <h1 className="mt-2 w-full text-center text-5xl font-bold leading-[1.05] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
                Only{" "}
                <span className="inline-block align-middle">
                  <Image
                    src={header}
                    priority
                    alt="bnxn header"
                    className="inline-block h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-15 lg:w-15"
                  />
                </span>{" "}
                One,
                <br />
                Captain.
              </h1>
            </ScrollReveal>

            {/* Infinite image carousel */}
            <ScrollReveal
              className="w-full"
              direction="up"
              delay={0.15}
              amount={0.08}
            >
              <div className="mb-4 h-52 w-full overflow-hidden sm:mb-6 sm:h-64 md:h-72 lg:mb-9 lg:h-80">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-full w-max shrink-0 items-center gap-4 sm:gap-6 lg:gap-8"
                >
                  {Array(4)
                    .fill(null)
                    .map((_, row) =>
                      images.map((image, i) => (
                        <div
                          key={`${row}-${i}`}
                          className="h-full shrink-0 overflow-hidden rounded-xl"
                        >
                          <Image
                            src={image}
                            priority
                            alt={`BNXN portrait ${i + 1}`}
                            className="h-full w-40 skew-3 rounded-xl object-cover sm:w-48 md:w-56 lg:w-65"
                            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 260px"
                          />
                        </div>
                      )),
                    )}
                </motion.div>
              </div>
            </ScrollReveal>
          </header>

          {/* LIVE SHOWS/PERFORMANCES */}
        </div>
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="w-full min-h-screen bg-foreground text-background"
        >
          <div className="cont relative flex min-h-screen flex-col items-center justify-center gap-10 py-16 sm:gap-12 sm:py-20 md:py-24">
            {/* First paragraph */}
            <ScrollReveal
              className="flex w-full max-w-[850px] items-center"
              direction="fade"
              amount={0.1}
            >
              <div className="flex w-full max-w-[850px] items-center">
                <p className="text-base leading-relaxed tracking-wide text-start sm:text-lg md:text-xl lg:text-2xl">
                  <span className="group cursor-pointer transition-all duration-300 hover:border-b-4 hover:border-b-primary/90">
                    {" "}
                    BNXN (fka Buju){" "}
                    <Image
                      src={bnxn}
                      alt="BNXN"
                      className="inline h-8 w-14 rounded-sm object-cover object-top align-middle sm:h-9 sm:w-16 md:h-10 md:w-20"
                    />
                    <Image
                      src={bnxn}
                      alt="BNXN in a black and white suit"
                      className="pointer-events-none absolute bottom-6 right-1 z-10 hidden h-44 w-32 object-cover grayscale transition duration-400 group-hover:block sm:bottom-8 sm:right-4 sm:h-56 sm:w-40 md:bottom-10 md:right-10 md:h-70 md:w-55"
                    />
                  </span>{" "}
                  is an Afro-fusion singer and songwriter based in Lagos. He
                  crafts seamless, melody-driven anthems for listeners who value
                  mood, storytelling, and effortless sound. Every track is a
                  quiet masterpiece in the making, designed to capture a feeling
                  before the world turns the volume up.
                </p>
              </div>
            </ScrollReveal>

            {/* Second paragraph */}
            <ScrollReveal
              className="flex w-full max-w-[850px] items-center"
              direction="fade"
              delay={0.12}
              amount={0.1}
            >
              <div className="flex w-full max-w-[850px] items-center">
                <p className="text-base leading-relaxed tracking-wide text-start sm:text-lg md:text-xl lg:text-2xl">
                  <span className="group cursor-pointer transition-all duration-300 hover:border-b-4 hover:border-b-primary/90">
                    {" "}
                    Based in Lagos,{" "}
                    <Image
                      src={danfo2}
                      alt="Lagos danfo bus"
                      className="inline h-8 w-14 rounded-sm object-cover align-middle sm:h-9 sm:w-16 md:h-10 md:w-20"
                    />
                    <Image
                      src={danfo2}
                      alt="Lagos danfo bus"
                      className="pointer-events-none absolute bottom-6 right-1 z-10 hidden h-44 w-32 object-cover transition duration-400 group-hover:block sm:bottom-8 sm:right-4 sm:h-56 sm:w-40 md:bottom-10 md:right-10 md:h-70 md:w-55"
                    />
                  </span>{" "}
                  BNXN has built a distinct space in Afro-fusion through
                  patience, precision, and unforgettable melodies. His music
                  isn’t just made to be heard—it’s built to evoke nostalgia and
                  linger.{" "}
                  <span className="group cursor-pointer">
                    <Image
                      src={danfo1}
                      alt="Lagos danfo"
                      className="inline h-8 w-14 rounded-sm object-cover align-middle sm:h-9 sm:w-16 md:h-10 md:w-20"
                    />

                    <Image
                      src={danfo1}
                      alt="Lagos danfo"
                      className="pointer-events-none absolute left-1 top-6 z-10 hidden h-44 w-32 object-cover transition duration-400 group-hover:block sm:left-4 sm:top-8 sm:h-56 sm:w-40 md:left-10 md:top-10 md:h-70 md:w-55"
                    />
                  </span>{" "}
                  To him, every project is a complete world, meticulously
                  crafted from the first note to the final master.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          id="discography"
          className="relative w-full min-h-screen overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:flex lg:items-center lg:justify-center lg:py-0"
        >
          <div className="cont relative flex w-full flex-col items-center justify-center">
            <div className="relative w-full max-w-6xl lg:min-h-[900px] xl:min-h-screen">
              {/* Album covers */}
              <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:absolute lg:inset-0 lg:block">
                {albums.map((album, i) => {
                  const positions = [
                    "lg:top-[8%] lg:left-[15%] lg:-rotate-6",
                    "lg:top-[5%] lg:left-[40%] lg:rotate-3",
                    "lg:top-[10%] lg:right-[12%] lg:rotate-3",
                    "lg:top-[42%] lg:left-[3%] lg:rotate-3",
                    "lg:top-[42%] lg:right-[4%] lg:-rotate-3",
                    "lg:bottom-[5%] lg:left-[13%] lg:rotate-3",
                    "lg:bottom-[2%] lg:left-[42%] lg:-rotate-2",
                    "lg:bottom-[5%] lg:right-[12%] lg:rotate-3",
                  ];

                  return (
                    <ScrollReveal
                      key={i}
                      className={`relative w-full max-w-[170px] hover:z-20 sm:max-w-[185px] lg:absolute lg:w-[145px] lg:max-w-none ${
                        positions[i % positions.length]
                      }`}
                      direction={i % 2 === 0 ? "up" : "down"}
                      delay={(i % 4) * 0.08}
                      duration={0.85}
                      amount={0.1}
                    >
                      <Link
                        href={album.shareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block w-full transition-transform duration-300 hover:scale-105 lg:hover:scale-110"
                      >
                        <div className="border border-foreground/50 bg-foreground p-2 shadow-md">
                          <Image
                            src={album.cover[2].url}
                            alt={`${album.name} album cover`}
                            width={640}
                            height={640}
                            className="block aspect-square w-full object-cover"
                            sizes="(max-width: 640px) 170px, (max-width: 1024px) 185px, 145px"
                          />

                          <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-background sm:text-[10px]">
                            NO. {String(i + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Discography description and CTA */}
              <div className="relative mx-auto mt-12 flex w-full max-w-md flex-col items-center justify-center gap-6 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <ScrollReveal direction="fade" amount={0.1}>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/70 sm:text-base">
                    From infectious melodies to deeply personal stories, explore
                    the projects, sounds, and moments that define{" "}
                    <span className="font-bold">BNXN's</span> musical journey.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.15} amount={0.1}>
                  <Link
                    href="https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x/discography/all"
                    target="_blank"
                    className="inline-flex items-center justify-between gap-3 bg-primary px-4 py-2 text-background transition-opacity hover:opacity-85"
                  >
                    <span>View discography</span>

                    <span className="flex items-center justify-center border border-background bg-background p-1 text-foreground">
                      <HugeiconsIcon icon={ArrowRight02Icon} />
                    </span>
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONE */}

        <section
          id="milestones"
          className="w-full min-h-screen bg-foreground text-background py-24 md:py-32"
        >
          <div className="mx-auto flex w-full cont flex-col justify-center px-6 md:px-10">
            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
              {careerHighlights.map((item, i) => (
                <ScrollReveal
                  key={item.description}
                  className="flex flex-col border-t border-background/20 py-6 md:py-7"
                  direction={i % 2 === 0 ? "up" : "left"}
                  delay={(i % 3) * 0.1}
                  duration={0.8}
                  amount={0.1}
                >
                  <h3 className="text-3xl font-semibold tracking-[-0.06em] md:text-3xl lg:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/75 md:text-base">
                    {item.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 flex w-full flex-col gap-2 border-t border-background/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-background/70">
                The numbers behind the music
              </span>
              <span className="text-xs text-background/60">
                Streaming figures are approximate and change over time.
              </span>
            </div>
          </div>
        </section>

        <div id="visual-archive" className="scroll-mt-6">
          <VisualArchive />
        </div>

        <div id="still-in-charge" className="scroll-mt-6">
          <JustReleasedAlbum />
        </div>

        <div id="faqs" className="scroll-mt-6">
          <FAQS />
        </div>
      </section>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="fullscreen-navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[999] h-[100dvh] w-screen overflow-x-hidden overflow-y-auto bg-background text-foreground"
                role="dialog"
                aria-modal="true"
                aria-label="Main navigation"
              >
                <div className="flex min-h-full flex-col px-5 py-5 sm:px-8 sm:py-7 md:px-12 lg:px-16">
                  {/* Menu header */}
                  <div className="flex shrink-0 items-center justify-between border-b border-foreground/15 pb-5">
                    <div>
                      <Image
                        src={header}
                        alt="bnxn header"
                        className="w-15 h-15 rounded-lg inline"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Close navigation"
                      className="flex h-12 w-12 items-center justify-center border border-foreground/20 transition-colors duration-300 hover:bg-foreground hover:text-background"
                    >
                      <HugeiconsIcon icon={Cancel01Icon} size={24} />
                    </button>
                  </div>

                  {/* Huge navigation links */}
                  <nav className="flex flex-1 flex-col justify-center py-8 sm:py-10">
                    {menuLinks.map((item, i) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.045,
                        }}
                        className="group flex min-w-0 items-center gap-3 border-b border-foreground/15 py-3 sm:gap-5 sm:py-4 md:py-5"
                      >
                        <span className="w-5 shrink-0 font-mono text-[10px] text-foreground/40 sm:w-8 sm:text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="min-w-0 flex-1 break-words text-[clamp(1.8rem,7.5vw,7rem)] font-semibold leading-[0.95] tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-2 sm:group-hover:translate-x-4">
                          {item.label}
                        </span>

                        <HugeiconsIcon
                          icon={ArrowUpRight02Icon}
                          size={22}
                          className="shrink-0 opacity-30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 sm:size-7"
                        />
                      </motion.a>
                    ))}
                  </nav>

                  {/* Menu footer */}
                  <div className="flex shrink-0 flex-col gap-2 border-t border-foreground/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/50 sm:text-[10px]">
                      Only One, Captain.
                    </p>

                    <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/50 sm:text-[10px]">
                      Select a destination
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
