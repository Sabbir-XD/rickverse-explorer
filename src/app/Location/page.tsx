"use client";
import { useState, useEffect } from "react";
import { getLocations } from "@/services/rickMorty";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Location {
  id: number;
  name: string;
}

export default function LocationSlider() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    (async () => {
      const locs = await getLocations();
      setLocations(locs.slice(0, 12));
    })();
  }, []);

  return (
    <section className="mt-30 mb-10 px-4">
      <h3 className="text-2xl font-semibold mb-8 text-white">Locations</h3>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        spaceBetween={15}
        slidesPerView={2.2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        {locations.map((loc) => (
          <SwiperSlide key={loc.id}>
            <div className="relative rounded-sm w-full max-w-xs h-[50px] md:h-[96px] mx-auto">
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
                <p className="text-[9px] md:text-[14px] text-white font-bold">
                  #{loc.id}
                </p>
                <p className="text-[10px] md:text-[16px] text-white">
                  {loc.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
