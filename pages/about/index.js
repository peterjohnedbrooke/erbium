import React from "react";
import Head from "next/head";
import ContentWrapper from "../../components/ContentWrapper";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import styles from "../../styles/Home.module.scss";
import { createClient } from "contentful";
import safeJsonStringify from 'safe-json-stringify';

export async function getStaticProps({}) {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'owner'})
  const stringifiedData = safeJsonStringify(res.items);
  const owners = JSON.parse(stringifiedData);

  return {
    props: {
      owners
    }, 
    revalidate: 60
  }

}

export default function About({owners}) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <ContentWrapper>
        <div className={styles.aboutContainer}>
          <h1>MINING RARE EARTH ELEMENTS.</h1>
          <p>Welcome to Erbium Records, we are an independent record label based in Birmingham & London UK bringing together electronic artists and producers from around the world.
          </p>
          <p>&apos;Erbium is silvery-white, metallic, and malleable. A delicate substance tarnished by air, eroded by water, dissolved by acid.But where imperfection permeates atomic structure, new states emerge - a sound remoulded and reimagined for curious ears. From raw, dancefloor focussed energies to deep soundscapes of the void.&apos;</p>
          <p><a href="mailto:erbiumrecords@gmail.com">Send us your demos</a></p>

          <div className={styles.imageContainer}>
            {owners.map((owner, i) => {
              console.log(owner)
              const {name, link, alt} = owner.fields;
              const image = owner.fields.image.fields.file.url;
              const id = owner.sys.id;
              console.log(image)
              return (
                <a href={link} target="_blank" rel="noreferrer" key={id}>
                  <img src={"https:" + image} alt={alt} title={name} />
                  <h3>{name}</h3>
                </a>
              )
            })}
          </div>
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}
