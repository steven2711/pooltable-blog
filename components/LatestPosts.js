import Post from "../components/Post";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <div className="container mx-auto p-5 lg:p-12">
      <h2 className="text-xl xl:text-3xl border-b-4 py-5 font-bold uppercase">
        latest articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} itemNumber={index} />
        ))}
      </div>
      {/* <Link href="/all-articles">
        <a className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full capitalize">
          all articles
        </a>
      </Link> */}
    </div>
  );
}
