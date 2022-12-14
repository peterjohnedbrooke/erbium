import React from 'react'
import styles from "../styles/Home.module.scss";

export default function Carousel({children}) {
  return (
    <div className={styles.carousel}>
        <div className={styles.innerCarousel}>
            {children}
        </div>
    </div>
  )
}
