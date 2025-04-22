import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { HEROIMG } from "@/lib/data";

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
            HEROIMG.map((item) => (
                <div className="relative w-full h-full overflow-hidden" key={item.id}>
                  <Image
                      src={item.image}
                      alt={item.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ 
                        width: '100%',
                        height: 'auto',
                      }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cream from-0% to-cream/30 to-45%" />
                </div>
            ))
        }
      </Slider>
    </div>
  );
}

