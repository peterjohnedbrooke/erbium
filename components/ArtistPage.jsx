import React from 'react'
import styles from "../styles/Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSoundcloud, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import LatestReleases from './LatestReleases';
import BackButton from './BackButton';
import Carousel from "../components/Carousel"
import { Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const ArtistPage = ({artist}) => {
    const soundCloud = <FontAwesomeIcon className={styles.icons} icon={faSoundcloud} />;
    const bandCamp = <FontAwesomeIcon className={styles.icons} icon={faBandcamp} />;
    const insta = <FontAwesomeIcon className={styles.icons} icon={faInstagram} />;
    const arrowReturn = <FontAwesomeIcon className="iconArrow" icon={faArrowTurnDown} />;
    const artistAlbums = artist.fields.albums;

    const name = artist.fields.name;
    const imageUrl = artist.fields.image.fields.file.url 
    const nameUpper = name.toUpperCase();
    // const socials = artist.attributes.socials;
    console.log(artist)

  return (
    <div className={styles.artistPageContainer}>
        {/* <div className={styles.button}>
            <BackButton text="ALL ARTISTS"/>
        </div>         */}
        
        <div className={styles.row}>
            <div className={styles.imageCard}>
                <img className={styles.image} src={"https:" + imageUrl} alt={nameUpper} />
            </div>
            <div className={styles.infoCard}>
                <h1 className={styles.mainTitle}>{nameUpper}</h1>
                <div className={styles.bio}>
                    <h3 className={styles.cardTitle}>BIO</h3>
                    <p>{artist.fields.description}</p>
                </div>
                <div className={styles.releases}>
                    <h3 className={styles.cardTitle}>LATEST RELEASES</h3>
                    <div className={styles.releasesContainer}>
                        {artistAlbums.map((album, i)=> {
                            const id = album.id;
                            const albumKey = album.fields.title;
                            return (
                                <LatestReleases key={albumKey} album={album} arrowReturn={arrowReturn} slugDirect="albums/" />
                            )
                        })}
                    </div>
                </div>    
            </div>
        </div> 
    </div>
  
  )
}

export default ArtistPage