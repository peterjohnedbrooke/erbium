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

export async function getStaticProps() {
  const res = await fetch(
    "https://erbiumbackend.herokuapp.com/api/artists?populate=*"
  );
  const artists = await res.json();

  return {
    props: { artists },
  };
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
          <div className={styles.container}>
            <Row
              xs={1}
              md={2}
              lg={3}
              className={`g-4 ${styles.artistCardBody}`}
            >
              {artists.data.map((artist, i) => {
                const { Name, Description } = artist.attributes;
                const id = artist.id;
                const { Image } =
                  artist.attributes.Image.data[0].attributes.url;
                return (
                  <ArtistCard
                    artist={artist}
                    Name={Name}
                    Description={Description}
                    Slug={`${artist.attributes.Slug}`}
                    Image={Image}
                    id={id}
                    key={i}
                  />
                );
              })}
            </Row>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
