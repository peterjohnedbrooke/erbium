import React from 'react'
import styles from "../styles/Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import BackButton from './BackButton';
import Image from 'next/image';

const AlbumPage = ({album, description}) => {
  const arrowReturn = <FontAwesomeIcon className="iconArrow" icon={faArrowTurnDown} />;
  return (
    <div className={styles.albumPageWrapper}>
      <div className={styles.button}>
        <BackButton text="RETURN"/>
      </div>
      <div className={styles.albumPageContainer}>
        <div className={styles.imgContainer}>
          <Image height={800} width={800}
            src={album.attributes.Image.data[0].attributes.url}
            alt={album.attributes.Title}
          />
        </div>
        <div className={styles.albumInfo}>
          <h1 className={styles.title}>{album.attributes.Title}</h1>
          <div className={styles.info} dangerouslySetInnerHTML={{__html: description}}>
          </div>
          <div className={styles.buyBtn}>
            <a target="blank" href={album.attributes.Url}>BUY</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumPage