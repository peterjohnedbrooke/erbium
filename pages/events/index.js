import React from "react";
import Head from "next/head";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Events() {
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>
      <Hero />
      <ContentWrapper>
        <div>
          <h5>Events</h5>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}
