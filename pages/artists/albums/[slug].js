import Head from "next/head";
import React from "react";
import AlbumPage from "../../../components/AlbumPage";
import ContentWrapper from "../../../components/ContentWrapper";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import styles from "../../../styles/AlbumPage.module.scss";
import markdownToHtml from "../../../src/lib/markdownToHtml";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';


export default function Album({ album }) {
  if (!!album) {
    return (
      <div>
        <Head>
          <title>{album.fields.title}</title>
        </Head>
        <Hero />
        <ContentWrapper>
          <AlbumPage album={album} />
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID  ,
  accessToken: process.env.CONTENTFUL_ACCESS_ID
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'album'})
  const stringifiedData = safeJsonStringify(res.items);
  const data = JSON.parse(stringifiedData);

  const paths = data.map((item => {
    return {
      params: {slug: item.fields.slug}
    }
  }))

  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({ content_type: 'album', 'fields.slug': params.slug})
  const stringifiedData = safeJsonStringify(items);
  const data = JSON.parse(stringifiedData);

  return {
    props: {album: data[0]}
  }
}