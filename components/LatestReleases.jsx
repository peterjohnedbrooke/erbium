import React, { useState } from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link';
import {Card} from "react-bootstrap"

const LatestReleases = ({album, arrowReturn, slugDirect}) => {
    const artwork = album.fields.image.fields.file.url;
    console.log(artwork)
    const title = album.fields.title;
    const titleUpper = title.toUpperCase();
    const slug = album.fields.slug
    const artists = album.fields.artists.map((artist, i) =>  {
        return artist
    })

    const id = album.id
    const [click, setClick] = useState(false)

  return (
    <div className={styles.releasesItem}>
      <Link key={id} href={slugDirect + slug}>
        <div key={id} className={styles.cardBackReleases}>
          <img src={"https:" + artwork} className={styles.cardImg}/>
        </div>
      </Link>
      <div className={styles.cardInfo}>
        <h5>{titleUpper}</h5>
      </div>
    </div>
  )
}

export default LatestReleases