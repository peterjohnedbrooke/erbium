import Head from "next/head";
import React from "react";
import AlbumCard from "../../../components/AlbumCard";
import ContentWrapper from "../../../components/ContentWrapper";
import styles from "../../../styles/Albums.module.scss";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';

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
    }
  }
}

export default function Albums({ albums }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
            <motion.div
              ref={carousel}
              className={styles.carousel}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className={styles.innerCarousel}
              >
                {reverseAlbums.map((album, i) => {
                  const { title, description } = album.fields;
                  const id = album.id;
                  const { image } =
                    album.fields.image.fields.file.url;
                  return (
                    <motion.div key={id} className={styles.item}>
                      <AlbumCard
                        album={album}
                        Title={title}
                        Description={description}
                        Slug={`${album.fields.Slug}`}
                        Image={image}
                        id={id}
                        key={i}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
