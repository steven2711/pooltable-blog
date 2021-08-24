import Image from "next/image";

export default function Showcase() {
  return (
    <div className="relative w-full h-screen md:h-96 lg:h-96 flex flex-col items-center justify-center">
      <Image
        src="/images/showcase.jpeg"
        layout="fill"
        objectFit="cover"
        className="filter brightness-75"
      />
      <h1 className="text-white relative uppercase text-2xl md:text-3xl lg:text-4xl font-bold px-4 text-center">
        the best resource for anything pool tables
      </h1>
    </div>
  );
}
