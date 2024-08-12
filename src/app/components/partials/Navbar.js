"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white  z-20 w-full fixed top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="w-full flex justify-center lg:justify-start my-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={500}
              className="w-32 md:w-48"
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
