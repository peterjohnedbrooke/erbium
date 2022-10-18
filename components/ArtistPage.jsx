import React from 'react'
import styles from "../styles/ArtistPage.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSoundcloud, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import LatestReleases from './LatestReleases';
import BackButton from './BackButton';
import Carousel from "../components/Carousel"
import { Row, Col, Card, Button } from 'react-bootstrap';
import {Image as NextImage} from 'next/image';

const ArtistPage = ({artist}) => {
    const soundCloud = <FontAwesomeIcon className={styles.icons} icon={faSoundcloud} />;
    const bandCamp = <FontAwesomeIcon className={styles.icons} icon={faBandcamp} />;
    const insta = <FontAwesomeIcon className={styles.icons} icon={faInstagram} />;
    const arrowReturn = <FontAwesomeIcon className="iconArrow" icon={faArrowTurnDown} />;
    const artistAlbums = artist.attributes.albums;

    const name = artist.attributes.Name 
    const nameUpper = name.toUpperCase();
    const socials = artist.attributes.socials;

  return (
    <div className={styles.container}>
        <div className={`${styles.button}`}>
            <BackButton text="ALL ARTISTS"/>
        </div>
        
        {/* <div className={`${styles.title} ${styles.card}`}>
            <div>
                <h1>{nameUpper}</h1>
            </div>
            
        </div> */}
        
        
        <div className={styles.artistImageCard}>
            <NextImage className={styles.image} src={artist.attributes.Image.data[0].attributes.url} alt={nameUpper} />
            <h5 className={styles.mainTitle}>{nameUpper}</h5>    
        </div> 
      
        <div className={styles.artistContents}>
            <div  className={styles.bio}>
                <h3 className={styles.cardTitle}>BIO</h3>
                <p>{artist.attributes.Description}</p>
                <h3 className={styles.cardTitle}>FOLLOW</h3>
                <div className={styles.socials}>
                    {/* <span> 
                        <a href="">{soundCloud}</a>
                    </span>
                    <span>
                        <a href="">{bandCamp}</a>
                    </span>
                    <span>
                        <a href="">{insta}</a>
                    </span> */}

                    {
                        socials.data.map((social, i) => {
                            const title = social.attributes.Name;
                            // const image = social.attributes.Image.data.attributes.url;
                           
                            return (
                                <span key={i}>
                                    <a target="blank" href={social.attributes.Url}>{title}</a>
                                    {/* <img src={image} alt="" /> */}
                                </span>
                                
                                
                            )
                        })
                    }

                </div>
            </div>
            <div className={styles.releases}>
                <h3 className={styles.cardTitle}>LATEST RELEASES</h3>
                <Carousel>
                    {artistAlbums.data.map((album, i)=> {
                        const id = album.id;
                        const albumKey = album.attributes.Title;
                        return (
                            <LatestReleases key={albumKey} album={album} arrowReturn={arrowReturn} />
                        )
                    })}
                </Carousel>
            </div>
        </div>
            
    </div>
  
  )
}

export default ArtistPage