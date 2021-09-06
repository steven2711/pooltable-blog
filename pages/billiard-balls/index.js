import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import GoBackBtn from "../../components/GoBackBtn";
import { sortByDate } from "../../helpers";

export default function BilliardBallsPage({ posts }) {
  return (
    <Layout
      title="Billiard Balls | Anything Pool Tables"
      description="Learn everything you need to know about billiard balls. From the physics behind ball movement, to how they affect your game play, Anything Pool Tables is the number one resource for all things billiards."
      imagePath="https://www.anythingpooltables.com/public/images/categories/billiard-balls.jpeg"
      url="https://www.anythingpooltables.com/billiard-balls"
    >
      <section className="container mx-auto p-5 mt-16 mb-12 lg:p-12">
        <GoBackBtn />
        <h1 className="text-2xl border-b-4 pb-3 mt-2 font-bold capitalize">
          Billiard Balls
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const billiardBalls = posts.filter(
    (post) => post.frontmatter.category === "Billiard Balls"
  );

  return {
    props: {
      posts: billiardBalls.sort(sortByDate),
    },
  };
}
