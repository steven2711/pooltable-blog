import Link from "next/link";
import Image from "next/image";

export default function Category({ data: { category, imagePath, path } }) {
  return (
    <div className="w-11/12 md:w-1/3  h-32 lg:h-72 mx-5 my-5 lg:my-10 flex flex-col items-center justify-center hover:shadow-xl transform hover:scale-101">
      <Link href={path}>
        <div>
          <Image
            src={imagePath}
            layout="fill"
            objectFit="cover"
            className="rounded-xl filter brightness-75 cursor-pointer"
          />
          <h3 className="text-white text-3xl uppercase relative cursor-pointer">
            {category}
          </h3>
        </div>
      </Link>
    </div>
  );
}
