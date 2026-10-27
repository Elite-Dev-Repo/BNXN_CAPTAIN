import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BNXN - Captain",
  description:
    "The un-official home of BNXN (fka Buju), the Afro-fusion singer and songwriter from Lagos. Explore his discography, milestones, visual archive, and latest releases.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        <Nav />
      </body>
    </html>
  );
}
