import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import GoBackBtn from "../../components/GoBackBtn";
import Post from "../../components/Post";
import { sortByDate } from "../../helpers";

export default function HowToPlayPage({ posts }) {
  return (
    <Layout
      title="How To Play | Anything Pool Tables"
      description="Learn all the rules of pool, various games, styles of play, and some common tips to perfect you billiards game."
      imagePath="/images/categories/how-to-play.jpeg"
      url="https://www.anythingpooltables.com/how-to-play"
    >
      <section className="container mx-auto p-5 mt-16 mb-12 lg:p-12">
        <GoBackBtn />
        <h1 className="text-2xl border-b-4 pb-3 mt-2 font-bold capitalize">
          How To Play
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

  const howToPlay = posts.filter(
    (post) => post.frontmatter.category === "How To Play"
  );

  return {
    props: {
      posts: howToPlay.sort(sortByDate),
    },
  };
}
