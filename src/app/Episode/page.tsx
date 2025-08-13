"use client";
import { useState, useEffect } from "react";
import { getEpisodes } from "@/services/rickMorty";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Episode {
  id: number;
  name: string;
  episode: string;
}

export default function EpisodeSlider() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    (async () => {
      const eps = await getEpisodes();
      setEpisodes(eps.slice(0, 12)); // প্রথম 12 এপিসোড
    })();
  }, []);

  return (
    <section className="mt-20 px-4">
      <h3 className="text-2xl font-semibold mb-8 text-white">Episodes</h3>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={15}
        slidesPerView={2.2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        {episodes.map((ep) => (
          <SwiperSlide key={ep.id}>
            <div className="relative rounded-sm w-full max-w-xs h-[60px] md:h-[96px] mx-auto">
              {/* SVG border shape */}
              <svg
                viewBox="0 0 200 240"
                className="absolute top-0 left-0 w-full h-full"
                preserveAspectRatio="none"
                pointerEvents="none"
              >
                <polygon
                  points="200,0 200,150 146,240 0,240 0,0"
                  fill="#1F2937"
                  stroke="#9DFE00"
                  strokeWidth=".5"
                />
              </svg>

              {/* Content */}
              <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-start z-10">
                <p className="text-[10px] md:text-[14px] text-white font-bold">
                  {ep.episode}
                </p>
                <p className="text-[12px] md:text-[16px] text-white">
                  {ep.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Style */}
      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #9dfe00; /* তোমার মূল রঙ */
          background: #000000;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          top: 45% !important;
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
