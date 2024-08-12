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
    "https://www.youtube.com/embed/nRlTg2KH_h8",
    "https://www.youtube.com/embed/tYuGl9R-hX8",
    "https://www.youtube.com/embed/84-m07v6VcQ",
    "https://www.youtube.com/embed/2oANsHiXMrE",
  ];

  return (
    <div className="w-full bg-white p-12 md:p-24">
      <div className="flex flex-col items-center justify-center gap-16">
        <span className="text-primary text-3xl md:text-4xl font-semibold text-center">
          Tentang Rumah Korea Indonesia
        </span>
        <div className="w-full mx-20">
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {image.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full pb-6 m-auto rounded-lg overflow-hidden">
                  <div
                    className="relative m-auto h-[192px] w-[320px] sm:h-[244px] sm:w-[400px] md:h-[195px] md:w-[300px] lg:h-[260px] lg:w-[417px] xl:h-[260px] xl:w-[417px]"
                    key={"tes"}
                  >
                    <div className="absolute inset-0 m-3 overflow-hidden rounded-xl bg-white shadow-lg sm:m-4 md:m-5 md:rounded-2xl">
                      <iframe
                        title={"sambutan.title"}
                        src={img}
                        className="absolute inset-0 h-full w-full rounded-2xl px-[8px] py-[7px] md:rounded-3xl md:p-[12px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
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
