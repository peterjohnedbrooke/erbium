import React from "react";
import styles from "../../styles/Artists.module.scss";
import ArtistCard from "../../components/ArtistCard";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';


export async function getStaticProps({}) {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'artist'})
  const stringifiedData = safeJsonStringify(res.items);
  const artists = JSON.parse(stringifiedData);

  return {
    props: {
      artists
    }
  }

}

export default function Artists({ artists }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  if (!!artists) {
    return (
      <div>
        <Head>
          <title>Artists</title>
        </Head>
        <ContentWrapper>
          <div className={styles.artistsGrid}>
              {artists.map((artist, i) => {
                console.log(artist)
                const { name, description } = artist.fields;
                const id = artist.sys.id;
                const { image } =
                  artist.fields.image.fields.file.url;
                return (
                  <ArtistCard
                    artist={artist}
                    Name={name}
                    Slug={`${artist.fields.slug}`}
                    Image={image}
                    id={id}
                    key={i}
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
