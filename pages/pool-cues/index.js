import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import GoBackBtn from "../../components/GoBackBtn";
import { sortByDate } from "../../helpers";

export default function PoolCuesPage({ posts }) {
  return (
    <Layout
      title="Pool Cues | Anything Pool Tables"
      description="Find out all there is to know about pool cues from different manufacturers, the best models and brands, tips for choosing a cue stick, how to take care of your investment!"
      imagePath="/images/categories/pool-cues.jpeg"
      url="https://www.anythingpooltables.com/pool-cues"
    >
      <section className="container mx-auto p-5 mt-16 mb-12 lg:p-12">
        <GoBackBtn />
        <h1 className="text-2xl border-b-4 pb-3 mt-2 font-bold capitalize">
          Pool Cues
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

  const poolCues = posts.filter(
    (post) => post.frontmatter.category === "Pool Cues"
  );

  return {
    props: {
      posts: poolCues.sort(sortByDate),
    },
  };
}
