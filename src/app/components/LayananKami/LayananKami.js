import Image from "next/image";
import LayananCard from "@/app/components/LayananKami/components/LayananCard";
import { services } from "@/database/service";

export default function LayananKami() {
  return (
    <div className={"bg-white flex w-full 2xl:px-52 lg:px-32 py-20"}>
      <div className={"flex flex-col gap-6 my-8 mx-4 w-full"}>
        <h1 className={"text-primary text-4xl font-semibold "}>Layanan Kami</h1>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto"
          }
        >
          {services.map((service, index) => (
            <LayananCard
              key={index}
              image={service.image}
              title={service.title}
              link={`/services/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
