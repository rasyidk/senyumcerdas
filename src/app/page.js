import HomeHero from "./components/HomeHero";
import LayananKami from "@/app/components/LayananKami/LayananKami";
import Partner from "./components/Partner/Partner";
import Tentang from "./components/Tentang/Tentang";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <LayananKami />
      <Partner />
      <Tentang />
    </div>
  );
}
