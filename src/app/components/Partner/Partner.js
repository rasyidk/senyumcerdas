import Image from "next/image";

export default function Partner() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center py-16 gap-10">
        <span className="text-primary text-4xl font-semibold">
          Partner Senyum Cerdas
        </span>
        <div className="flex flex-row gap-10 items-center justify-center">
          <Image
            alt="Kementerian Luar Negeri Republik Indonesia"
            src="/assets/partner/Kemenlu.svg"
            width={0}
            height={0}
            className="w-32 h-32"
          />
          <Image
            alt="Kementerian Kesehatan Republik Indonesia"
            src="/assets/partner/Kemenkes.svg"
            width={0}
            height={0}
            className="w-full h-32"
          />
          <Image
            alt="Badan Nasional Penanggulangan Terorisme"
            src="/assets/partner/BNPT.svg"
            width={0}
            height={0}
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
}
