"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

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
          Produk Kami
        </span>
        <div className=" mx-20">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <Link href={"/products/jst"}>
              <Image
                alt="JST"
                src="/assets/layanan/jst.png"
                width={200}
                height={200}
                className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow-lg hover:scale-110 duration-300 ease-in-out hover:cursor-pointer"
              />
            </Link>
            <Link href={"/products/senyumin"}>
              <Image
                alt="senyumin"
                src="/assets/layanan/senyumin.png"
                width={200}
                height={200}
                className="w-full h-28 md:h-32 rounded-lg shadow-lg hover:scale-110 duration-300 ease-in-out hover:cursor-pointer"
              />
            </Link>
            <Link href={"/products/solve"}>
              <Image
                alt="solve"
                src="/assets/layanan/solve.png"
                width={200}
                height={200}
                className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow-lg hover:scale-110 duration-300 ease-in-out hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
