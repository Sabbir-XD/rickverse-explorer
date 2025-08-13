import Hero from "@/components/hero/page";
import Logo from "@/components/Logo/page";
import CharacterCastSlider from "./Character/page";
import EpisodeCard from "./Episode/page";
import LocationSlider from "./Location/page";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Top Right Gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#14D9E5] opacity-40 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Bottom Left Gradient */}
      <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-[#14D9E5] opacity-40 blur-[120px] rounded-full pointer-events-none"></div>

      <div>
        <div className="bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat h-auto">
          {/* Logo Section */}
          <Logo />
          {/* Hero Section */}
          <Hero />
          {/* Characters Section */}
          <CharacterCastSlider />
        </div>

        <div className="bg-[url('/Star.png')] bg-contain bg-center bg-no-repeat h-auto">
          {/* Episodes section */}
          <EpisodeCard />

          {/* Locations */}
          <LocationSlider />
        </div>
      </div>
    </main>
  );
}
