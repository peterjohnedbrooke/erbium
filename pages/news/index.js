import React from "react";
import Head from "next/head";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function News() {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      <Hero />
      <ContentWrapper>
        <div>
          <h5>News</h5>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}
