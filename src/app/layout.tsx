import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation.component";

const lato = Lato({ weight: "700", subsets: ["latin"]});

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
      <body className={lato.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
