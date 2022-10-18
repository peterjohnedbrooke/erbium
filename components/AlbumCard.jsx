import React from "react";
import Link from "next/link";
import styles from "../styles/AlbumCard.module.scss";
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import Animation from "./Animate";

export default function AlbumCard({ Title, Description, Slug, album, id }) {
  return (
    <Animation>
        <div key={id} className={styles.card}>
          <Link key={id} href={"albums/" + Slug} >
            <Card key={id} className={`rounded-0 border-0 d-flex ${styles.cardBack}`}>
              <Card.Img src={album.attributes.Image.data[0].attributes.url} className={`rounded-0 card-img ${styles.cardImg}`}/>
                <Card.ImgOverlay className='rounded-0 text-center d-flex flex-column justify-content-center img-overlay'>
                  <div>
                      <h5 className={styles.overlayText}>{Title}</h5>
                  </div>    
                </Card.ImgOverlay>
            </Card>
          </Link>
        </div>
    </Animation>
  );
}
