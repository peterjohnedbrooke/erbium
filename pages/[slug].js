import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "../components/ContentWrapper";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const URL = process.env.STRAPIBASEURL;

export default function Artist({ artist, landing }) {
  console.log(artist);
  return (
    <div>
      {/* <DesktopNav navImages={navImages} /> */}
      <Hero></Hero>
      <ContentWrapper>
        <Head>
          <title>{artist.attributes.Name}</title>
        </Head>
        <Link href="/">
          <a> Go Home</a>
        </Link>
        <div>
          <img
            src={
              "https://erbiumbackend.herokuapp.com" +
              artist.attributes.Image.data[0].attributes.url
            }
          />
        </div>
        <div>
          <h1>{artist.attributes.Name}</h1>
          <p>{artist.attributes.Description}</p>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}

// tell next.js how many pages there are

export async function getStaticPaths() {
  const res = await fetch("https://erbiumbackend.herokuapp.com/api/artists");

  const artists = await res.json();

  const paths = artists.data.map((artist) => ({
    params: { slug: artist.attributes.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

//for each individual page: get the data for that page

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://erbiumbackend.herokuapp.com/api/artists?filters[Slug][$eq]=${slug}&populate[Image][fields][1]=url`
  );
  const artistData = await res.json();
  const artist = artistData.data[0];

  const resLanding = await fetch(
    "https://erbiumbackend.herokuapp.com/api/navlogo?populate[image][fields][0]=url"
  );
  const landing = await resLanding.json();

  return {
    props: { artist, landing },
  };
}
