import React from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faInstagram, faSoundcloud, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  const soundCloud = <FontAwesomeIcon className={styles.icons} icon={faSoundcloud} />;
  const twitter = <FontAwesomeIcon className={styles.icons} icon={faTwitter} />;
  const bandCamp = <FontAwesomeIcon className={styles.icons} icon={faBandcamp} />;
  const insta = <FontAwesomeIcon className={styles.icons} icon={faInstagram} />;


  return (
    <div className={styles.linkWrapper}>
      <div className={styles.linkContainer}>
      <span>
         <a rel="noopener noreferrer" target="_blank" href="https://erbiumrecords.bandcamp.com/" >
           {bandCamp}
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://soundcloud.com/erbium-records">
           {soundCloud}
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://twitter.com/erbiumrecords">
           {twitter}
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://www.instagram.com/erbiumrecords/?hl=en">
           {insta}
         </a>
      </span>
      </div>
    </div>
  );
}
