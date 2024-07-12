import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white absolute z-20 w-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="w-full flex justify-center lg:justify-start my-4">
          <p className="text-primary font-bold text-3xl">Senyum Cerdas</p>
        </div>
      </div>
    </div>
  );
}
