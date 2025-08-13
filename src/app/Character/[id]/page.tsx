import Image from "next/image";
import Link from "next/link";
import { getCharacters } from "@/services/rickMorty";
import Logo from "@/components/Logo/page";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default async function CharacterDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const characters: Character[] = await getCharacters();
  const char = characters.find((c) => c.id === parseInt(id));

  if (!char) {
    return <p className="text-white p-6 text-center">Character not found</p>;
  }

  return (
    <div className="bg-double min-h-screen text-white flex flex-col items-center justify-center">
      <Logo />

      {/* Back Button */}
      <Link
        href="/"
        className="mt-4 mb-8 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-black px-4 py-2 rounded-lg hover:opacity-80 transition"
      >
        ← Back
      </Link>

      {/* Main Container */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-lg shadow-lg items-center">
        {/* Left Side */}
        <div className="col-span-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4 text-[#14D9E5]">
            {char.name}
          </h2>
          <Image
            src={char.image}
            alt={char.name}
            width={250}
            height={250}
            className="rounded-lg p-4 border border-[#14D9E5]"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:flex col-span-1 justify-center">
          <div className="w-[2px] h-[100px] bg-[#9DFE00]"></div>
        </div>

        {/* Right Side */}
        <div className="col-span-7 space-y-4">
          {/* Status / Species / Gender */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-transparent p-4 rounded-lg border border-[#9DFE00]">
              <Image
                src="/PNG/Status.png"
                alt="portal"
                width={30}
                height={30}
              />
              <p className="text-white font-bold">Status</p>
              <p>{char.status}</p>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-[#9DFE00]">
              <Image
                src="/PNG/species.png"
                alt="species"
                width={30}
                height={30}
              />
              <p className="text-white font-bold">Species</p>
              <p>{char.species}</p>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-[#9DFE00]">
              <Image
                src="/PNG/Gender.png"
                alt="Gender"
                width={30}
                height={30}
              />
              <p className="text-white font-bold">Gender</p>
              <p>{char.gender}</p>
            </div>
          </div>

          {/* Origin */}
          <div className="bg-[#1e293b] p-4 rounded-lg border border-[#9DFE00]">
            <Image src="/PNG/Origin.png" alt="Origin" width={30} height={30} />
            <p className="text-white font-bold">Origin</p>
            <p>{char.origin.name}</p>
          </div>

          {/* Location */}
          <div className="bg-[#1e293b] p-4 rounded-lg border border-[#9DFE00]">
            <Image
              src="/PNG/Location.png"
              alt="Location"
              width={30}
              height={30}
            />
            <p className="text-white font-bold">Last Known Location</p>
            <p>{char.location.name}</p>
          </div>

          {/* Episodes */}
          <div className="bg-[#1e293b] p-4 rounded-lg border border-[#9DFE00] max-h-48 overflow-y-auto">
            <Image
              src="/PNG/episode1.png"
              alt="Episode"
              width={20}
              height={30}
            />
            <p className="text-white font-bold mb-2 mt-2">Episode(s)</p>
            <ul className="list-disc list-inside space-y-1">
              {char.episode.map((_, i) => (
                <li key={i}>Episode {i + 1}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
