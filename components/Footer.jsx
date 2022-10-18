import React from "react";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
      <div className={styles.tagline}>
        <h3 className={styles.title}>&copy;ERBIUM RECORDS 2022</h3>
      </div>
      <div className={styles.bottomNav}>
        <h3 className={styles.title}>INFO</h3>
        <ul>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
        </ul>
      </div>
      <div className={styles.bottomNav}>
        <h3 className={styles.title}>CONNECT</h3>
        <ul>
          <li>
            <a href="">Soundcloud</a>
          </li>
          <li>
            <a href="">Bandcamp</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Spotify</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
        </ul>
      </div>
      {/* <div className={styles.copyrightText}>
        <ul>
          <li>&copy;Design by Iconiks</li>
        </ul>
      </div> */}
      <div className={styles.subscribe}>
        <h3 className={styles.title}>NEWSLETTER</h3>
        <div>
          <input type="text" name="" id="" placeholder="Email" />
          <button className={`${styles.title}`}>Submit</button>
        </div>
        <h3 className={styles.title}>&copy;SITE BY ICONIKS</h3>
      </div>
    </div>
    </div>
    
  ) 
}
