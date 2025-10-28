import Image from "next/image";
import agatho from "@/libs/fonts";

export default function Hero() {
  return (
    <section
      className={`${agatho.className} relative flex flex-col justify-center items-center bg-gray-100 border border-red-400`}
    >
      <Image
        src="/images/hero-image.png"
        alt="Hero section image"
        width={1400}
        height={648}
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-5xl text-black  drop-shadow-lg">Dzahin Bakery</h1>
        <p className="text-lg mt-4 drop-shadow-md">Freshly baked with love</p>
      </div>
    </section>
  );
}
