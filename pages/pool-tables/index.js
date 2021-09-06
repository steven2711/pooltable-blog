import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import GoBackBtn from "../../components/GoBackBtn";
import { sortByDate } from "../../helpers";

export default function PoolTablesPage({ posts }) {
  return (
    <Layout
      title="Pool Tables | Anything Pool Tables"
      description="Have you ever wondered just how much a pool table costs, what it takes to maintain them, or the history of billiards? Anything Pool Tables contains everything there is to know about pool tables!"
      imagePath="/images/categories/pool-tables.jpeg"
      url="https://www.anythingpooltables.com/pool-tables"
    >
      <section className="container mx-auto p-5 mt-16 mb-12 lg:p-12">
        <GoBackBtn />
        <h1 className="text-2xl border-b-4 pb-3 mt-2 font-bold capitalize">
          Pool Tables
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

  const poolTables = posts.filter(
    (post) => post.frontmatter.category === "Pool Tables"
  );

  return {
    props: {
      posts: poolTables.sort(sortByDate),
    },
  };
}
