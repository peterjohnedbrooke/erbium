import React from 'react'
import styles from "../styles/Hero.module.scss"

export default function Hero({heading, message}) {
  return (
    <div className={styles.heroContainer}>
        {/* <div>
            <h2>{heading}</h2>
            <h3>{message}</h3>
            <button>Explore.</button>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <h3 className='py-5 text-xl'>{message}</h3>
            <button className='px-8 py-2 border'>Explore.</button>
            
        </div> */}
    </div>
  )
}
