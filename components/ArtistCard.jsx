import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Animation from "./Animate";


export default function ArtistCard({Name,Image,Description,Slug,id,artist,}) 
{
  const [hover, setHover] = useState(false)
  const handleHover= (i) => {
    setHover(!hover)
  }

  const photo = artist.attributes.Image.data[0].attributes.url

  return (
    <Animation>
        <div className={styles.card}>
        <Link href={"artists/" + Slug} key={id}>
          <Card className={`rounded-0 border-0 d-flex ${styles.cardBack}`}>
            <Card.Img src={photo} className={`rounded-0 card-img ${styles.image}`}/>
              <Card.ImgOverlay className={`img-overlay ${styles.imageOverlay}`}>
                <div className={styles.desktopCardInfo}>
                    {/* <h5 className={styles.overlayText}>{artist.attributes.Name}</h5> */}
                    <button>{artist.attributes.Name}</button>
                </div>    
              </Card.ImgOverlay>
              <div className={styles.mobileCardInfo}>
                {/* <h5 className={styles.overlayText}>{artist.attributes.Name}</h5> */}
                <button>{artist.attributes.Name}</button>
              </div>  
          </Card>
        </Link>
      </div>
    </Animation>
  );
}
