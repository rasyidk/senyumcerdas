import Image from "next/image";
import LayananCard from "@/app/components/LayananKami/components/LayananCard";

export default function LayananKami(){
    return (
        <div className={"bg-white flex w-full"}>
            <div className={"flex flex-col gap-6 my-8 mx-4 w-full"}>
                <h1 className={"text-primary text-4xl font-bold "}>Layanan Kami</h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto"}>
                    {Array.from({length: 8}).map((_, index) => (
                    <LayananCard key={index} image={'/assets/layanan/card_header.png'} title={'Kursus Bahasa Korea Online Interaktif Via Zoom Meeting'} link={"#"} />
                    ))}
                </div>
            </div>

        </div>
    )
}