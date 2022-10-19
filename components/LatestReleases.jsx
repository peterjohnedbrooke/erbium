import React, { useState } from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link';
import {Card} from "react-bootstrap"

const LatestReleases = ({album, arrowReturn}) => {
    const artwork = album.attributes.Image.data[0].attributes.url;
    const { Title} = album.attributes;
    const titleUpper = Title.toUpperCase();
    const slug = album.attributes.Slug
    const artists = album.attributes.artists.data.map((artist, i) =>  {
        return artist
    })

    const id = album.id
    const [click, setClick] = useState(false)

  return (
    <div className={styles.item}>
        <div className={styles.card}>
          <Link key={id} href={"albums/" + slug} >
            <Card key={id} className={`rounded-0 border-0 d-flex ${styles.cardBack}`}>
              <Card.Img src={artwork} className={`rounded-0 card-img ${styles.cardImg}`}/>
                <Card.ImgOverlay className='rounded-0 text-center d-flex flex-column justify-content-center img-overlay'>
                  <div>
                      <h5 className={styles.overlayText}>Explore</h5>
                  </div>    
                </Card.ImgOverlay> 
            </Card>
          </Link>
          <div className={styles.cardInfo}>
            <h5>{titleUpper}</h5>
            <div>
                <p>- </p>
                {artists.map((artist, i) => {
                    const artistName = artist.attributes.Name
                    const artistNameUpper = artistName.toUpperCase();
                    return (
                        <p key={i}>
                            {" " + artistNameUpper}
                            <br></br>
                        </p>
                    )
                })}
            </div>
           </div>
        </div>
    </div>
  )
}

export default LatestReleases