import React from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Links({activeTheme}) {
  const soundCloud = <FontAwesomeIcon className={styles.icons} icon={faSoundcloud} />;
  const searchIcon = <FontAwesomeIcon className={styles.icons} icon={faSearch} />;
  const bandCamp = <FontAwesomeIcon className={styles.icons} icon={faBandcamp} />;


  return (
    <div className={styles.linkWrapper}>
      <div className={styles.linkContainer}>
      <span>
         <a rel="noopener noreferrer" target="_blank" href="https://erbiumrecords.bandcamp.com/" >
           BANDCAMP
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://soundcloud.com/erbium-records">
           SOUNDCLOUD
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://twitter.com/erbiumrecords">
           TWITTER
         </a>
      </span>
      <span>
         <a rel="noopener noreferrer"target="_blank"  href="https://www.instagram.com/erbiumrecords/?hl=en">
           INSTAGRAM
         </a>
      </span>
      </div>
    </div>
  );
}
