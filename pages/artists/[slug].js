import Head from "next/head";
import Link from "next/link";
import ArtistPage from "../../components/ArtistPage";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID  ,
  accessToken: process.env.CONTENTFUL_ACCESS_ID
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'artist'})

  // const rawData = await getSlugPageProps(params.slug, 'artist');
  const stringifiedData = safeJsonStringify(res.items);
  const data = JSON.parse(stringifiedData);

  const paths = data.map((item => {
    return {
      params: {slug: item.fields.slug}
    }
  }))
  
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({ content_type: 'artist', 'fields.slug': params.slug})
  const stringifiedData = safeJsonStringify(items);
  const data = JSON.parse(stringifiedData);

  return {
    props: {artist: data[0]}
  }
}

export default function Artist({ artist }) {
  if (!!artist) {
    return (
      <div>
        <Head>
          <title>{artist.fields.name}</title>
        </Head>
        <ContentWrapper>
          <ArtistPage artist={artist} />
        </ContentWrapper>
        <Footer />
      </div>
    );
  }
  return null;
}





