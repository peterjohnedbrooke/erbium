import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArtistCard from "../components/ArtistCard";
import ContentWrapper from "../components/ContentWrapper";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import PageLabel from "../components/PageLabel";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  // get posts from out api (strapi)

  const res = await fetch(
    "https://erbiumbackend.herokuapp.com/api/artists?populate=*"
  );
  const artists = await res.json();

  const resVideo = await fetch(
    "https://erbiumbackend.herokuapp.com/api/landing-video?populate=*"
  );
  const video = await resVideo.json();

  const resCarousel = await fetch(
    "https://erbiumbackend.herokuapp.com/api/landing-carousels?populate=*"
  );

  const carousel = await resCarousel.json();

  return {
    props: { artists, video, carousel },
  };
}

export default function Home({ artists, video, carousel }) {
  const title = "Erbium Records";
  console.log(carousel);
  if (artists) {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <ContentWrapper>
          <div className={styles.landingContainer}>
            <video autoPlay loop muted playsInline>
              <source
                src={video.data.attributes.Video.data[0].attributes.url}
              />
            </video>

            {/* <Carousel controls={false} indicators={false} interval={4000}>
              {carousel.data.map((video, i) => {
                return (
                  <Carousel.Item key={i}>
                    <video controls autoPlay loop muted playsInline>
                      <source
                        src={video.attributes.Media.data[0].attributes.url}
                      />
                    </video>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={video.attributes.Media.data[0].attributes.url}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel> */}
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
