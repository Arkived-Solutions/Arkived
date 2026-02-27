import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arkived Solutions",
  description:
    "Arkived Solutions is a software solutions team of undergraduate students from the Polytechnic University of the Philippines, building modern digital experiences.",
  keywords: ["software solutions", "PUP", "portfolio", "Arkived", "web development", "mobile", "API"
    , "Rhandie Sales Jr.", "Donna Rachel Reymatias", "Kerby Bryan Correa", "Akisha Lei De Castro",
    "Philippines"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#1A1F35] text-[#EEF0F7]`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
