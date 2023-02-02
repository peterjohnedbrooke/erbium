import Head from "next/head";
import React from "react";
import AlbumCard from "../../../components/AlbumCard";
import ContentWrapper from "../../../components/ContentWrapper";
import styles from "../../../styles/Albums.module.scss";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';
import { Carousel } from "react-bootstrap";
import Media from 'react-media'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'album'})
  const stringifiedData = safeJsonStringify(res.items);
  const albums = JSON.parse(stringifiedData);

  return {
    props: {
      albums
    }, 
    revalidate: 60
  }
}

export default function Albums({ albums }) {

  const reverseAlbums = albums.map((album) => album).reverse();
  if (!!albums) {
    return (
      <div>
        <Head>
          <title>Albums</title>
        </Head>
        <Hero />
        <ContentWrapper>
          <div className={styles.container}>
            
            <Carousel indicators={false} className={styles.carousel}>
                {albums.map((album, i) => {
                  const { title, description } = album.fields;
                  const id = album.id;
                  return (
                    <Carousel.Item key={id} className={styles.item}>
                      <AlbumCard
                        album={album}
                        Title={title}
                        Description={description}
                        Slug={album.fields.slug}
                        id={id}
                        key={i}
                      />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
