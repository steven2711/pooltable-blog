import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title,
  children,
  keywords,
  description,
  imagePath,
  url,
}) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

        {/* Google Meta Tags */}

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={imagePath} />

        {/* Facebook Meta Tags */}

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePath} />

        {/* Twitter Meta Tags */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePath} />

        {/* Google Search Console Verification */}

        <meta
          name="google-site-verification"
          content="-JvaYpKFpaQTbRpkLKV5DpaWlKRjs2Zwve8w-w3EZ44"
        />

        {/* Rich Search Result Scripts */}
      </Head>
      <Header />
      <main className="md:mt-24">{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "anythingpooltables",
  keywords: "pool tables, cues, felt, billiards, billiard balls, accessories",
  description:
    "The best resource for anything you want to know relating to the game of billiards and/or pool tables.",
  imagePath: "/images/showcase.jpeg",
  url: "https://anythingpooltables.com",
};
