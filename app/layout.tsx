import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlushEase — The Bendable Moss Pole for Climbing Plants",
  description: "Premium 30-inch bendable coco coir moss poles. Shape them into hearts, arches, circles — support your Monstera, Pothos & Philodendron the way they want to grow.",
  openGraph: {
    title: "BlushEase — The Bendable Moss Pole for Climbing Plants",
    description: "Premium 30-inch bendable coco coir moss poles. Shape them into hearts, arches, circles — support your Monstera, Pothos & Philodendron the way they want to grow.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans text-forest bg-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
