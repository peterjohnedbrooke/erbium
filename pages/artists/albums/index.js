import Head from "next/head";
import React from "react";
import AlbumCard from "../../../components/AlbumCard";
import ContentWrapper from "../../../components/ContentWrapper";
import styles from "../../../styles/Artists.module.scss";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';
import { Carousel } from "react-bootstrap";
import Media from 'react-media'
import ArtistCard from "../../../components/ArtistCard";
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
            <div className={styles.artistsGrid}>
              {albums.map((album, i) => {
                const { title, description } = album.fields;
                const id = album.id;
                const { image } = album.fields.image.fields.file.url;
                return (
                  <ArtistCard
                    artist={album}
                    Name={title}
                    Slug={`${album.fields.slug}`}
                    Image={image}
                    id={id}
                    key={i}
                    border={true}
                    album={true}
                  />
                );
              })}
            </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
