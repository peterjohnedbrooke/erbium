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

export async function getStaticProps() {
  // get albums from out api (strapi)

  // const res = await fetch(
  //   "https://erbiumbackend.herokuapp.com/api/albums?populate=*"
  // );
  // const albums = await res.json();

  // return {
  //   props: { albums },
  // };
}

export default function Albums({ albums }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const reverseAlbums = albums.data.map((album) => album).reverse();
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
                  const { Title, Description } = album.attributes;
                  const id = album.id;
                  const { Image } =
                    album.attributes.Image.data[0].attributes.url;
                  return (
                    <motion.div key={id} className={styles.item}>
                      <AlbumCard
                        album={album}
                        Title={Title}
                        Descriptiom={Description}
                        Slug={`${album.attributes.Slug}`}
                        Image={Image}
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
