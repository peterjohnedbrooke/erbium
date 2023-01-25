import React, { useState } from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link';
import {Card} from "react-bootstrap"

const LatestReleases = ({album, arrowReturn}) => {
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
        <div className={styles.card}>
          <Link key={id} href={"albums/" + slug}>
            <div key={id} className={styles.cardBack}>
              <img src={"https:" + artwork} className={styles.cardImg}/>
                <div>
                  <h5 className={styles.overlayText}>Explore</h5>  
                </div> 
            </div>
          </Link>
          <div className={styles.cardInfo}>
            <h5>{titleUpper}</h5>
            <div>
                {/* {artists.map((artist, i) => {
                    const artistName = artist.attributes.Name
                    const artistNameUpper = artistName.toUpperCase();
                    return (
                        <p key={i}>
                            {" " + artistNameUpper}
                            <br></br>
                        </p>
                    )
                })} */}
            </div>
           </div>
        </div>
    </div>
  )
}

export default LatestReleases