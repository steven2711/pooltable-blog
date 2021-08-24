import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="md:mt-24">{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "anythingpooltables",
  keywords: "pool tables, cues, felt, billiards, billiard balls",
  description:
    "The best resource for anything you want to know relating to the game of billiards and/or pool tables.",
};
