import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "oneinfo.ai",
  description: "AI responds to your audience, shares product links, and drives sales on autopilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className} antialiased bg-[#0A0A0A] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
