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
import { createClient } from "contentful";
import 'bootstrap/dist/css/bootstrap.min.css';



export async function getStaticProps({landingVid}) {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'landingVideo'})

  return {
    props: {
      landingVid: res.items
    }, 
    revalidate: 60
  }
}

export default function Home({ landingVid }) {
  const landingVideo = landingVid[0].fields.video.fields.file.url

    return (
      <div>
        <Head>
          <title>Erbium Records</title>
        </Head>
        <ContentWrapper>
          <div className={styles.landingContainer}>
            <video width="1100" height="440" autoPlay loop muted playsInline>
              <source
                src={"https:" + landingVideo}
              />
            </video>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
