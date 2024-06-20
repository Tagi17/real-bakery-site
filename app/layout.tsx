import "./globals.css";

import { Cormorant } from "next/font/google";
import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "Celestine Crunch",
  description: "Artisinal Desserts",
  // icons: {
  //   icon: "/public/favicon-32x32.png",
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[#fcf6e8] ${cormorant.className}`}>
        {/* <link
          rel="icon"
          sizes="any"
          href="/public/favicon-32x32.png"
        /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
