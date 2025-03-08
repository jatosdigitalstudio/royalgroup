import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'

import "@/styles/globals.css"
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";
import Head from "./head";
import { AOSInit } from "./aos";

const styleFont = localFont({ 
  src: '../styles/Mortend.ttf',
  variable: '--font-style'
})
const textFont = localFont({ 
  src: '../styles/Optima.otf',
  variable: '--font-text'
})
const thirdFont = localFont({ 
  src: '../styles/Towards.ttf',
  variable: '--font-third'
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit/>
      <Head/>
      <body
        className={`${styleFont.variable} ${textFont.variable} ${thirdFont.variable} font-text antialiased bg-cream`}
      >
        <ScrollToTopButton/>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
