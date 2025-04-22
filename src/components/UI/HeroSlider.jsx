import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { SECTOR } from "@/lib/data";

export default function HeroSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            SECTOR.map((item) => (
                <div className="relative w-full h-full" key={item.id}>
                  <Image
                      src={item.image}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cream from-10% to-cream/40 to-50%" />
                </div>
            ))
        }
      </Slider>
    </div>
  );
}

