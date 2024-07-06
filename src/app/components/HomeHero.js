import Image from "next/image";
import React from "react";

export default function HomeHero() {
  const backgroundImage = {
    backgroundImage: "url('/assets/hero.svg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className="flex w-full relative">
      <div
        style={backgroundImage}
        className="flex w-full flex-col min-h-screen  p-4 md:p-6 xl:p-8"
      ></div>

      <div className="flex w-full flex-col min-h-screen absolute z-10 items-start justify-center">
        <div className="container mx-auto ">
          <div className="flex justify-center lg:justify-start">
            <Image
              width={200}
              height={100}
              src="/assets/ruko-hero.svg"
              alt="Logo"
              className="w-32 md:w-32 lg:w-80"
            />
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl text-primary font-poppins font-bold text-center lg:text-start">
            Rumah Korea Indonesia
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-white italic  text-center lg:text-start">
            Learn Korean in Your Finger Tips
          </p>
        </div>
      </div>
    </div>
  );
}
