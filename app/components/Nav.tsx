"use client";

import { useState } from "react";
import Image from "next/image";

import instagram from "../../public/instagram.png";
import x from "../../public/x.png";
import tiktok from "../../public/tiktok.png";
import spotify from "../../public/spotify.png";
import elite from "../../public/elite_new.jpg";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight02Icon,
  Cancel01Icon,
  Call02Icon,
  Globe02Icon,
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

const socialIcons = [
  {
    icon: instagram,
    href: "https://www.instagram.com/bnxn/",
    label: "Instagram",
  },
  {
    icon: x,
    href: "https://x.com/BNXN",
    label: "X",
  },
  {
    icon: tiktok,
    href: "https://www.tiktok.com/@bnxn_tye",
    label: "TikTok",
  },
  {
    icon: spotify,
    href: "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x",
    label: "Spotify",
  },
];

const contactLinks = [
  {
    label: "Phone",
    value: "+234 916 768 6804",
    href: "tel:+2349167686804",
    icon: Call02Icon,
  },
  {
    label: "Portfolio",
    value: "oyenekanemmanuel.xyz",
    href: "https://www.oyenekanemmanuel.xyz/",
    icon: Globe02Icon,
  },
  {
    label: "GitHub",
    value: "Elite-Dev-Repo",
    href: "https://github.com/Elite-Dev-Repo",
    icon: GithubIcon,
  },
  {
    label: "X - Twitter",
    value: "Elite_developer",
    href: "https://x.com/elite_developer",
    icon: NewTwitterIcon,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 px-4">
      <div className="relative mx-auto w-[min(400px,calc(100vw-2rem))]">
        {/* Social information panel */}
        <div
          id="social-information"
          aria-hidden={!isOpen}
          className={`absolute bottom-full left-0 mb-4 w-full rounded-xl border border-white/12 bg-background/90 p-5 text-foreground shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                Get in touch
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                Let's connect.
              </h3>

              <p className="mt-1 text-xs opacity-60">
                Find me around the internet.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close social information"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 transition-colors hover:bg-foreground hover:text-background"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={18} />
            </button>
          </div>

          <div className="flex flex-col">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Phone" ? undefined : "_blank"}
                rel={item.label === "Phone" ? undefined : "noreferrer"}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 border-t border-foreground/10 py-4 transition-opacity hover:opacity-60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5">
                  <HugeiconsIcon icon={item.icon} size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">
                    {item.label}
                  </p>

                  <p className="mt-1 truncate text-sm font-medium">
                    {item.value}
                  </p>
                </div>

                <HugeiconsIcon
                  icon={ArrowUpRight02Icon}
                  size={17}
                  className="shrink-0 opacity-40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>

          <div className="mt-2 border-t border-foreground/10 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
              Oyenekan Emmanuel / Developer
            </p>
          </div>
        </div>

        {/* Floating navigation bar */}
        <div className="relative flex h-17 w-full items-center justify-evenly gap-1 rounded-lg border border-white/12 bg-white/5 px-2 backdrop-blur-2xl">
          {socialIcons.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-white/10 p-2 transition duration-300 hover:scale-110 hover:skew-3"
            >
              <Image
                alt={social.label}
                src={social.icon}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </a>
          ))}

          <span className="h-8 w-px shrink-0 bg-white/20" />

          {/* Clickable profile image */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen ? "Close social information" : "Open social information"
            }
            aria-expanded={isOpen}
            aria-controls="social-information"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition duration-300 hover:scale-105 ${
              isOpen
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "hover:rotate-3"
            }`}
          >
            <Image
              alt="Open Oyenekan Emmanuel's social information"
              src={elite}
              width={48}
              height={48}
              className="h-full w-full rounded-lg object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
