import Layout from "../../components/Layout";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import GoBackBtn from "../../components/GoBackBtn";
import Article from "../../components/Article";
import { useRouter } from "next/router";

export default function PostPage({ frontmatter, content }) {
  const router = useRouter();
  const { title, category, cover_image, excerpt } = frontmatter;

  // Construct url for FB meta
  const url = `https://anythingpooltables.com${router.asPath}`;

  return (
    <Layout
      title={title}
      description={excerpt}
      imagePath={cover_image}
      keywords={category}
      url={url}
    >
      <div className="container mx-auto mt-20 px-6 mb-4 lg:mb-12 md:mt-32 lg:mt-40 md:px-20">
        <GoBackBtn />
        <Article frontmatter={frontmatter} content={content} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
