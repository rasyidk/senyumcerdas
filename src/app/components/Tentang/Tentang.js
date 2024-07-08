"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function Tentang() {
  const image = [
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
  ];

  return (
    <div className="w-full bg-white p-24">
      <div className="flex flex-col items-center justify-center gap-16">
        <span className="text-primary text-4xl font-semibold">
          Tentang Rumah Korea Indonesia
        </span>
        <div className="w-full">
          <Swiper
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {image.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`kotak gambar ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
