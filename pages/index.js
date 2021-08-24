import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { sortByDate } from "../helpers";
import LatestPosts from "../components/LatestPosts";
import Subscribe from "../components/Subscribe";
import Categories from "../components/Categories";
import Showcase from "../components/Showcase";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Showcase />
      <LatestPosts posts={posts} />
      <Categories />
      {/* <Subscribe /> */}
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

  return {
    props: {
      posts: posts.sort(sortByDate).splice(0, 5),
    },
  };
}
