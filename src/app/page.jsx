import Image from "next/image";
import Hero from "@/components/Pages/Hero";
import About from "@/components/Pages/About";
import Company from "@/components/Pages/Company";
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Company/>
    </div>
  );
}
