"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center py-32" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center px-8 md:px-0">
        <div className="md:p-20" data-aos="fade-up">
            <h1 className="text-5xl lg:text-7xl uppercase text-blue mb-4 font-third">Securing and innovating indonesia</h1>
        </div>
        <div className="relative bg-blue w-full " >
          <Image
            src="/images/biotech_01.jpg"
            alt="biotech"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream from-10% to-blue/20 to-50%" />
        </div>
      </div>
    </section>
  );
}
