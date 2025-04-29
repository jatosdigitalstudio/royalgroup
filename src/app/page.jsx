'use client'
import Hero from "@/components/Pages/Hero";
import HeroMobile from "@/components/Pages/HeroMobile";
import Company from "@/components/Pages/Company";
import Product from "@/components/Pages/Product";
import Quote from "@/components/Pages/Quote";
import Contact from "@/components/Pages/Contact";
import { useWindowSize } from "@/utils/custom";

export default function Home() {
  const size = useWindowSize()
  const w = size.width < 768
  return (
     <div>
      {w ? <HeroMobile/> : <Hero/>}
      <Company/>
      <Product/>
      <Quote/>
      <Contact/>
    </div>
  );
}
