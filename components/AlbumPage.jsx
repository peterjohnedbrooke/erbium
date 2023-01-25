import React from 'react'
import styles from "../styles/Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import BackButton from './BackButton';
import Image from 'next/image';

const AlbumPage = ({album}) => {
  const arrowReturn = <FontAwesomeIcon className="iconArrow" icon={faArrowTurnDown} />;
  const artwork = album.fields.image.fields.file.url;
  console.log(artwork)
  return (
    <div className={styles.albumPageWrapper}>
      {/* <div className={styles.button}>
        <BackButton text="RETURN"/>
      </div> */}
      <div className={styles.albumPageContainer}>
        <div className={styles.imgContainer}>
          <img src={"https:" + artwork}/>
        </div>
        <div className={styles.albumInfo}>
          <h1 className={styles.title}>{album.fields.title}</h1>
          <div className={styles.info}>
            <p>{album.fields.description}</p>
          </div>
          <div className={styles.buyBtn}>
            <a target="blank" href={album.fields.link}>BUY</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumPage