import Head from "next/head";
import Link from "next/link";
import ArtistPage from "../../components/ArtistPage";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { useRouter } from "next/router";

const URL = process.env.STRAPIBASEURL;

export default function Artist({ artist }) {
  const router = useRouter();

  if (router.isFallback) return null;

  if (artist) {
    return (
      <div>
        <Head>
          <title>{artist.attributes.Name}</title>
        </Head>
        {/* <DesktopNav navImages={navImages} /> */}
        <ContentWrapper>
          <ArtistPage artist={artist} />
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
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
    `https://erbiumbackend.herokuapp.com/api/artists?filters[Slug][$eq]=${slug}&populate[Image][fields][1]=url&populate[albums][populate]=*&populate[socials][populate]=*`
  );

  if (!res?.artists?.[0]) {
    return { notFound: true };
  }

  const artistData = await res.json();
  const artist = artistData.data[0];

  return {
    props: { artist: res.artists[0] || {} },
  };
}
