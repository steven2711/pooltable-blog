import Layout from "../../components/Layout";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Article from "../../components/Article";
import GoBackBtn from "../../components/GoBackBtn";

export default function PostPage({ frontmatter, content }) {
  const { title, category, cover_image, excerpt } = frontmatter;

  return (
    <Layout
      title={title}
      description={excerpt}
      imagePath={cover_image}
      keywords={category}
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
