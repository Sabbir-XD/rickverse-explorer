import Image from 'next/image';

export default function Logo() {
  return (
    <header className="flex justify-center py-8">
      <Image
        src="/Media asset/Logo.png"
        alt="Rick and Morty"
        width={200}
        height={200}
      />
    </header>
  );
}

