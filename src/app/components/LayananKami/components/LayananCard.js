import Image from "next/image";

export default function LayananCard({title, image, link}){
    return (
        <div className={"w-full h-[274px] border-[#C2C2C2] border rounded-[4px] flex flex-col"}>
            <div className={"w-full h-[67%] relative"}>
                <Image src={image} className={"object-cover"} fill/>
            </div>
            <div className={"p-2 flex w-full h-[33%] flex-col justify-between"}>
                <p className={"text-black font-semibold text-sm line-clamp-3"}>{title}</p>
                <a href={link} className={"text-primary font-bold text-sm cursor-pointer"}>Lihat Selengkapnya</a>

            </div>
        </div>
    )
}