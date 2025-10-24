import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/hero-image.png"
        alt="Hero section image"
        width={1400}
        height={648}
        priority
      />
    </section>
  );
}
