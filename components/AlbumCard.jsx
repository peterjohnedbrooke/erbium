import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Animation from "./Animate";

export default function AlbumCard({ Slug, album, id }) {
  const artwork = album.fields.image.fields.file.url
  return (
    <Animation>
        <div key={id} className={styles.albumCard}>
          <Link key={id} href={"albums/" + Slug} >
            <div key={id} className={styles.cardBack}>
                <img src={"https:" + artwork} className={styles.cardImg}/>
                <h5 className={styles.overlayText}>{album.fields.title}</h5>    
            </div>
          </Link>
        </div>
    </Animation>
  );
}
