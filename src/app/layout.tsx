import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation.component";
import Image from "next/image";

const lato = Lato({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maicol Avila",
  description: "Maicol Avila personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-background-100`}>
        <div className="flex flex-row bg-background-100 px-8 justify-center items-center">
          <div className="flex flex-row w-full max-w-screen-xl max-h-screen overflow-x-hidden">
            <div className="flex-col hidden md:flex">
              <Image
                className="rounded-full"
                width={350}
                height={350}
                src="/images/profile.webp"
                alt="Maicol Avila"
                loading="lazy"
              />
              <Navigation />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
