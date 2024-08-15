"use client";

import Custom404 from "@/app/404";
import { products } from "@/database/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { product } = useParams();
  const slug = products.map((item) => item.slug);
  const data = products.filter((item) => item.slug === product[0]);

  return !slug.includes(product[0]) ? (
    <Custom404 />
  ) : (
    <div className=" bg-white xl:px-52 sm:px-24 px-5">
      <Image
        src={data[0].image}
        alt="Logo"
        className="w-full rounded-2xl object-cover max-h-[50vh] shadow-xl mt-32"
        width={1500}
        height={1500}
      />
      <h1 className="my-8 text-4xl capitalize">{data[0].title}</h1>
      <p className="text-lg pb-16 text-justify">{data[0].content}</p>
    </div>
  );
};

export default page;
