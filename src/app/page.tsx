import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        src="/assets/image-hero-mobile.jpg"
        width={750}
        height={600}
        alt="an image of bamboo monitor riser"
        className="w-full md:hidden"
      />
      <Image
        src="/assets/image-hero-desktop.jpg"
        width={1440}
        height={400}
        alt="an image of bamboo monitor riser"
        className="w-full hidden md:block"
      />
    </main>
  );
}
