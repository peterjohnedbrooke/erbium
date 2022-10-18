import Head from "next/head";
import React from "react";
import AlbumPage from "../../../components/AlbumPage";
import ContentWrapper from "../../../components/ContentWrapper";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import styles from "../../../styles/AlbumPage.module.scss";
import markdownToHtml from "../../../src/lib/markdownToHtml";

export default function Album({ album, description }) {
  return (
    <div>
      <Head>
        <title>{album.attributes.Title}</title>
      </Head>
      {/* <DesktopNav navImages={navImages} /> */}
      <Hero />
      <ContentWrapper>
        <AlbumPage album={album} description={description} />
      </ContentWrapper>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://erbiumbackend.herokuapp.com/api/albums");

  const albums = await res.json();

  const paths = albums.data.map((artist) => ({
    params: { slug: artist.attributes.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

//for each individual page: get the data for that page

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://erbiumbackend.herokuapp.com/api/albums?filters[Slug][$eq]=${slug}&populate=*`
  );
  const albumData = await res.json();
  const album = albumData.data[0];

  const description = await markdownToHtml(album.attributes.Description);

  return {
    props: { album, description },
  };
}
