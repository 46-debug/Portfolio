import { Big_Shoulders_Display, Geist, Geist_Mono, Pixelify_Sans, Poppins, Silkscreen, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight:["400", "500", "600"]
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--silkscreen",
  weight:["400", "700"]
});

const devanagari = Tiro_Devanagari_Hindi({
  subsets: ["latin"],
  variable: "--Tiro_Devanagari_Hindi",
  weight:["400"]
});

export const metadata = {
  title: "Sumit's Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      data-arp="">
      <body
      cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} ${bigShoulders.variable} ${pixelifySans.variable} ${poppins.variable} ${silkscreen.variable} ${devanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
