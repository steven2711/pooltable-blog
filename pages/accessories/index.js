import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import GoBackBtn from "../../components/GoBackBtn";
import Post from "../../components/Post";
import { sortByDate } from "../../helpers";

export default function AccessoriesPage({ posts }) {
  return (
    <Layout
      title="Accessories | Anything Pool Tables"
      description="Find out what to consider when buying pool tables and how it can impact your game. Learn all about light fixtures, chalk, racks, accessories &amp; more!"
      imagePath="/images/categories/accessories.jpeg"
      url="https://www.anythingpooltables.com/accessories"
    >
      <section className="container mx-auto p-5 mt-16 mb-12 lg:p-12">
        <GoBackBtn />
        <h1 className="text-2xl border-b-4 pb-3 mt-2 font-bold capitalize">
          Accessories
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

  const accessories = posts.filter(
    (post) => post.frontmatter.category === "Accessories"
  );

  return {
    props: {
      posts: accessories.sort(sortByDate),
    },
  };
}
