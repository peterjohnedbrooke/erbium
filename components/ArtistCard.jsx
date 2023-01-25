import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Animation from "./Animate";


export default function ArtistCard({Name,Image,Slug,id, artist}) 
{
  const [hover, setHover] = useState(false)
  const handleHover= (i) => {
    setHover(!hover)
  }

  const imageUrl = artist.fields.image.fields.file.url

  return (
    <Animation>
        <div className={styles.card}>
        <Link href={"artists/" + Slug} key={id}>
          <div className={styles.cardBack}>
              <img src={"https:" + imageUrl} className={`rounded-0 card-img ${styles.image}`}/>
              <div className={`img-overlay ${styles.imageOverlay}`}>
                <div className={styles.desktopCardInfo}>
                    <button><h2>{artist.fields.name}</h2></button>
                </div>    
              </div>
              <div className={styles.mobileCardInfo}>
                {/* <h5 className={styles.overlayText}>{artist.fields.name}</h5> */}
                <button><h2>{artist.fields.name}</h2></button>
              </div>  
          </div>
        </Link>
      </div>
    </Animation>
  );
}
