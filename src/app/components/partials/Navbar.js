import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white absolute z-20 w-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="w-full flex justify-center lg:justify-start my-4">
          <Image
            src="/assets/logo.svg" // Path to your logo image in the public directory
            alt="Logo"
            width={80} // Adjust the width of the image
            height={50} // Adjust the height of the image
          />
        </div>
      </div>
    </div>
  );
}
