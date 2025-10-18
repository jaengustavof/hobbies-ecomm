import type { Metadata } from "next";
import Header from "@/components/Header";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Time – Creative Hobbies & Wellbeing",
  description: "Rediscover your time through creativity and mindful hobbies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable}antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
