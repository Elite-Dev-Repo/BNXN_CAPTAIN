"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons";
import ScrollReveal from "./ScrollReveal";

type FaqItem = {
  question: string;
  answer: string;
};

const bnxnFaqData: FaqItem[] = [
  {
    question: "Where can I purchase official BNXN concert tickets?",
    answer:
      "Official tickets for all BNXN tour dates and festival appearances are linked directly through the Live page on this website. Always purchase through authorized ticketing partners like Ticketmaster, Eventbrite, or venue box offices to avoid counterfeit passes.",
  },
  {
    question: "Are there age restrictions for live performances?",
    answer:
      "Age restrictions vary by city and venue. Most headline shows are either All Ages or 18+. Please check the specific venue guidelines linked on your ticket confirmation prior to the event.",
  },
  {
    question: "How do I get VIP or Meet & Greet passes?",
    answer:
      "VIP packages and Meet & Greet upgrades, when available, are sold exclusively alongside general admission tickets during pre-sale or general onsale. Announcements for upcoming VIP experiences are shared on official social channels.",
  },
  {
    question: "Where can I buy official BNXN merchandise?",
    answer:
      "Official merchandise is sold exclusively at live tour venues and through the official online shop on this website. All pieces are limited-run items crafted for specific project eras.",
  },
  {
    question: "How can I submit press, media, or booking inquiries?",
    answer:
      "For press interviews, media accreditation, or booking requests for live shows, please contact management directly via press@bnxn.com.",
  },
  {
    question: "When is new music releasing?",
    answer:
      "Stay updated on upcoming singles, EPs, and album release dates by subscribing to the newsletter or following BNXN across official streaming platforms and social media.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full overflow-hidden bg-foreground px-5 py-16 text-background sm:py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-3xl">
        {/* Section Header */}
        <ScrollReveal className="w-full text-center" direction="up">
          <h2 className="text-3xl font-bold uppercase tracking-[0.18em] sm:text-4xl sm:tracking-widest md:text-5xl">
            FAQ
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-background/60 sm:text-base">
            Everything you need to know. Can't find an answer?{" "}
            <a
              href="mailto:management@bnxn.com"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Email management.
            </a>
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="mt-10 w-full border-t border-background/15 sm:mt-14 md:mt-16">
          {bnxnFaqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal
                key={faq.question}
                className="w-full border-b border-background/15"
                direction="up"
                delay={(index % 3) * 0.06}
                duration={0.7}
                amount={0.1}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left outline-none focus-visible:ring-1 focus-visible:ring-background sm:gap-6 sm:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
                    {faq.question}
                  </span>

                  {/* Square Box Hugeicons Toggle anchored to top */}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-background/30 text-background transition-colors hover:border-background sm:h-8 sm:w-8">
                    <HugeiconsIcon
                      icon={isOpen ? Remove01Icon : Add01Icon}
                      size={15}
                    />
                  </span>
                </button>

                {/* Answer Container */}
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="animate-fadeIn pb-5 pr-8 text-sm leading-6 text-background/70 sm:pb-6 sm:pr-12 sm:leading-7"
                  >
                    {faq.answer}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
