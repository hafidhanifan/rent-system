import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/hero-image.jpg"
        alt="Hero section image"
        width={800}
        height={400}
        priority
      />
    </section>
  );
}
