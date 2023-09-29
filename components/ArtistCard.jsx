import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Animation from "./Animate";


export default function ArtistCard({Name,Image,Slug,id, artist, border, album}) 
{
  const [hover, setHover] = useState(false)
  const handleHover= (i) => {
    setHover(!hover)
  }

  const imageUrl = artist.fields.image.fields.file.url

  console.log(artist)
  return (
    <>
        <div className={styles.card}>
        <Link href={album ? `albums/${Slug}` : `artists/${Slug}`} key={id}>
          <div className={border ? `${styles.cardBack} + ${styles.border}` : `${styles.cardBack}`}>
              <img src={"https:" + imageUrl} className={styles.image}/>
              <div className={styles.mobileCardInfo}>
                <button><h2>{artist.fields.name ? artist.fields.name : artist.fields.title}</h2></button>
              </div>  
          </div>
        </Link>
      </div>
    </>
  );
}
