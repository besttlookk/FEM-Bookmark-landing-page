import type { NextPage } from "next";
import Head from "next/head";
import {
  CreditSection,
  DownloadSection,
  FAQSection,
  FeatureSection,
  FormSection,
  HeroSection,
} from "../layouts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bookmark Laninding Page | FEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeatureSection />
      <DownloadSection />
      <FAQSection />
      <FormSection />
      <CreditSection />
    </>
  );
};

export default Home;