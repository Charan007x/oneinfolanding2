import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneInfo.ai - Turn Comments into Revenue",
  description: "AI responds to your audience, shares product links, and drives sales on autopilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-b from-obsidian via-obsidian to-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
