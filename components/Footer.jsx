import React from "react";
import styles from "../styles/Home.module.scss";
import Links from "./Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faInstagram, faSoundcloud, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const soundCloud = <FontAwesomeIcon className={styles.icons} icon={faSoundcloud} />;
  const twitter = <FontAwesomeIcon className={styles.icons} icon={faTwitter} />;
  const bandCamp = <FontAwesomeIcon className={styles.icons} icon={faBandcamp} />;
  const insta = <FontAwesomeIcon className={styles.icons} icon={faInstagram} />;
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.bottomNav}>
          <h3 className={styles.title}>CONNECT</h3>
          <ul>
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://erbiumrecords.bandcamp.com/" >
              {bandCamp}
            </a>
            </li>
            <li>
              <a rel="noopener noreferrer"target="_blank"  href="https://soundcloud.com/erbium-records">
                {soundCloud}
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"target="_blank"  href="https://twitter.com/erbiumrecords">
                {twitter}
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"target="_blank"  href="https://www.instagram.com/erbiumrecords/?hl=en">
                {insta}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.tagline}>
          <h5 className={styles.title}>&copy;ERBIUM RECORDS 2022</h5>
          <h5 className={styles.title}>&copy;SITE BY ICONIKS</h5>
        </div>
      </div>
    </div>
    
  ) 
}
