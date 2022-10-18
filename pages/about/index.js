import React from "react";
import Head from "next/head";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Hero />
      <ContentWrapper>
        <div>
          <h5>About</h5>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}
