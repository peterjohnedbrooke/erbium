import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArtistCard from "../components/ArtistCard";
import ContentWrapper from "../components/ContentWrapper";
import DesktopNav from "../components/DesktopNav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import dynamic from "next/dynamic";
import PageLabel from "../components/PageLabel";
import LatestReleases from "../components/LatestReleases";
import { useRouter } from "next/router";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import { createClient } from "contentful";
import 'bootstrap/dist/css/bootstrap.min.css';
import safeJsonStringify from 'safe-json-stringify';
import styles from "../styles/Home.module.scss"




export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'landingVideo'})

  const resAlbums = await client.getEntries({ content_type: 'album'})
  const stringifiedData = safeJsonStringify(resAlbums.items);
  const albums = JSON.parse(stringifiedData);

  return {
    props: {
      landingVid: res.items,
      albums
    }, 
    revalidate: 60
  }
}

export default function Home({ landingVid, albums }) {
  const landingVideo = landingVid[0].fields.video.fields.file.url
  console.log(albums[0])

    return (
      <>
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
              <h1>Latest Releases</h1>
              <div className={styles.latestReleasesContainer}>
              {albums.slice(0, 3).map((album, i)=> {
                  const id = album.id;
                  const albumKey = album.fields.title;
                  return (
                      <LatestReleases key={albumKey} album={album} slugDirect="/" />
                  )
              })}
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </>
    );
  }
