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

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  // get posts from out api (strapi)

  const res = await fetch(
    "https://erbiumbackend.herokuapp.com/api/artists?populate=*"
  );
  const artists = await res.json();

  return {
    props: { artists },
  };
}

export default function Home({ artists }) {
  const title = "Erbium Records";
  const router = useRouter();

  if (router.isFallback) return null;
  if (artists) {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <ContentWrapper>
          <div className={styles.landingContainer}>
            {/* <div>
              <h3>Mining rare earth elements</h3>
              <h5>driven by like-minded creators</h5>
            </div> */}
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}
