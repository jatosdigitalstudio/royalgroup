"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { HEROIMG } from "@/lib/data";

export default function Hero() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="realtive h-screen w-full" id="hero" >
      <div className="mb-8 absolute !z-30 pt-[18rem] px-8 lg:px-[6rem]">
        <h1 className="text-4xl lg:text-7xl uppercase text-blue mb-4 font-third">Securing and <br />innovating <br /> indonesia</h1>
      </div>
      <Slider {...settings}>
        {
        HEROIMG.map((item) => (
            <div className="relative w-full h-screen overflow-hidden" key={item.id}>
              <Image
                  src={item.image}
                  alt={item.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                  }} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream from-0% to-cream/0 to-20%" />
            </div>
        ))
        }
      </Slider>
    </section>
  )
}
