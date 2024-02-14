import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation.component";
import MoonAnimation from "@/components/moon/Moon";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maicol Avila",
  description: "Maicol Avila personal website",
  keywords:
    "Maicol Avila, Software Engineer, Fullstack Developer, Colombia Developer, Desarrollador de Software, Ingeniero de Software",
  manifest: "/manifest.json",
  authors: [
    { name: "Maicol Andres Avila Vela" },
    {
      name: "Maicol Andres Avila Vela",
      url: "https://www.linkedin.com/in/maicol-andres-avila-vela-b5a0211ab",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "images/apple-touch-icon.png" },
    { rel: "icon", url: "images/android-chrome-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-background-100`}>
        <div className="background-space">
          <MoonAnimation />
        </div>
        <div className="flex flex-row justify-center items-center z-10 relative">
          <div
            id="content-scrollable"
            className="w-full max-w-screen-xl overflow-x-hidden layout-grid max-h-screen px-8"
          >
            <Navigation />
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
