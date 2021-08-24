import Category from "../components/Category";

export default function Categories() {
  const categories = [
    {
      category: "Pool Cues",
      imagePath: "/images/categories/pool-cues.jpeg",
      path: "/pool-cues",
    },
    {
      category: "Pool Tables",
      imagePath: "/images/categories/pool-tables.jpeg",
      path: "/pool-tables",
    },
    {
      category: "Billiard Balls",
      imagePath: "/images/categories/billiard-balls.jpeg",
      path: "/billiard-balls",
    },
    {
      category: "How To Play",
      imagePath: "/images/categories/how-to-play.jpeg",
      path: "/how-to-play",
    },
    {
      category: "Accessories",
      imagePath: "/images/categories/accessories.jpeg",
      path: "/accessories",
    },
  ];

  return (
    <div className="container mx-auto p-5 lg:p-12">
      <h2 className="text-xl xl:text-3xl border-b-4 py-5 font-bold uppercase">
        categories
      </h2>
      {categories.map((category, index) => (
        <Category key={index} data={category} />
      ))}
    </div>
  );
}
