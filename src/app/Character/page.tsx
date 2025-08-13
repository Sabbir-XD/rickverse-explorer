"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link"; // <-- Link import
import { getCharacters } from "@/services/rickMorty";
import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
}

export default function CharacterCastSlider() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    (async () => {
      const chars = await getCharacters();
      setCharacters(chars.slice(0, 12));
    })();
  }, []);

  return (
    <section className="mt-12 px-4">
      <h3 className="text-2xl font-semibold mb-6 text-white">Meet The Cast</h3>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={15}
        slidesPerView={2.5}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5.5 },
        }}
      >
        {characters.map((char) => (
          <SwiperSlide key={char.id}>
            {/* Card wrapped in Link */}
            <Link href={`/Character/${char.id}`}>
              <div className="relative rounded-sm w-full max-w-xs aspect-[5/6] mx-auto cursor-pointer">
                {/* SVG border shape */}
                <svg
                  viewBox="0 0 200 240"
                  className="absolute top-0 left-0 w-full h-full"
                  preserveAspectRatio="none"
                  pointerEvents="none"
                >
                  <polygon
                    points="200,0 200,199 146,240 0,240 0,0"
                    fill="#1F2937"
                    stroke="#14D9E5"
                    strokeWidth="1"
                  />
                </svg>

                {/* Content */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden p-3 flex flex-col">
                  <div className="justify-items-center items-center">
                    <Image
                      src={char.image}
                      alt={char.name}
                      width={258}
                      height={210}
                      className="object-cover rounded-sm"
                      priority={false}
                      quality={75}
                    />
                  </div>
                  <p className="font-medium mt-auto text-[10px] md:text-[16px] text-white">
                    {char.name}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
