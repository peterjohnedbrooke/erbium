import React from 'react';
import styles from "../styles/Home.module.scss"
import BackButton from "../components/BackButton"
import ThemeToggle from './ThemeToggle';
import Links from './Links';
import Link from 'next/link';

const PageLabel = ({title}) => {  

  return (
    <div className={styles.pageLabelWrapper}>
        <div className={styles.pageLabelContainer}>
            <Link href="/">
                <a rel="noopener noreferrer">
                &copy;ERBIUM RECORDS
                </a>
            </Link>
        </div>
    </div>
  )
}

export default PageLabel