import "./globals.css";

import { Cormorant } from "next/font/google";
import Footer from "./components/Footer";
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
      {/* <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (g => {
                var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;
                b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));
                e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);
                e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;
                d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";
                m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
                  key: "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}",
                  v: "weekly"
                });
              `,
          }}
        />
      </Head> */}
      <body className={`min-h-screen flex flex-col bg-[#FCF0E1] ${cormorant.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
