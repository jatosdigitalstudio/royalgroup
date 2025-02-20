import Image from "next/image";
import Hero from "@/components/Pages/Hero";
import About from "@/components/Pages/About";
import Company from "@/components/Pages/Company";
import Product from "@/components/Pages/Product";
import Quote from "@/components/Pages/Quote";
import Contact from "@/components/Pages/Contact";
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Company/>
      <Product/>
      <Quote/>
      <Contact/>
    </div>
  );
}
