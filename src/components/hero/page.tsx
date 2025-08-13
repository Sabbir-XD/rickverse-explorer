"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function Page() {
  return (
    <div className="py-5 ml-2 md:ml-0 overflow-hidden">
      <div className="relative flex justify-start lg:justify-center items-start lg:items-center flex-col lg:flex-row">
        {/* Left Bubble */}
        <div className="absolute bottom-13 -left-12 sm:bottom-35 sm:left-15">
          <Image
            src="/Media asset/Home page/Hero Elements/bubble.png"
            alt="Rick and Morty"
            width={150}
            height={150}
            className="w-[100px] sm:w-[150px] lg:w-[215px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="font-extrabold text-center">
          {/* Top Row */}
          <div className="flex justify-center items-center flex-wrap gap-2">
            <div className="italic text-white text-[40px] sm:text-7xl lg:text-9xl">
              THE
            </div>

            <Image
              src="/Media asset/Home page/Hero Elements/portal.png"
              alt="Rick and Morty"
              width={150}
              height={100}
              className="w-[52px] sm:w-[150px] lg:w-[225px] h-auto"
            />

            <div className="relative">
              <div className="bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] bg-clip-text text-transparent text-[40px] sm:text-7xl lg:text-9xl">
                RICK &
              </div>
              <Image
                src="/Media asset/Home page/Hero Elements/pill.png"
                alt="Rick and Morty"
                width={50}
                height={10}
                className="hidden lg:block absolute -top-2 -right-10 transform -translate-x-1/2 -translate-y-1/2 w-[25px] sm:w-[35px] lg:w-[50px] h-auto"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center items-center text-[40px] text-white  sm:text-7xl lg:text-9xl flex-wrap">
            <span className="bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] bg-clip-text text-transparent mr-3 sm:mr-5">
              MORTY
            </span>
            <span className="italic"> WIKI</span>
          </div>
        </div>

        {/* Right Gun */}
        <div className="absolute top-10 -right-10 -sm:top-5 -sm:right-10">
          <Image
            src="/Media asset/Home page/Hero Elements/Gun.png"
            alt="Rick and Morty"
            width={200}
            height={200}
            className="w-[120px] sm:w-[200px] lg:w-[319px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-start md:justify-center items-start md:items-center gap-2 md:gap-10 ml-4">
        {/* Button with Play Icon */}

        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=KQ9Cgdsa9tc"
        >
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] rounded-full px-8 py-3 text-[10px] sm:text-xl text-white font-semibold mt-4 md:mt-10 hover:scale-105 transition-transform duration-200">
            <FaPlay className="text-sm sm:text-lg" />
            Watch Now
          </button>
        </Link>

        {/* Paragraph */}
        <p className="text-[10px] md:text-sm text-[#14D9E5] mt-2 md:mt-8">
          Brilliant but boozy scientist Rick hijacks his fretful <br />
          teenage grandson, Morty, for wild escapades
          <br /> in other worlds and alternate dimensions.
        </p>
      </div>
    </div>
  );
}
