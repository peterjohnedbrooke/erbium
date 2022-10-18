import React from 'react';
import styles from "../styles/PageLabel.module.scss"
import BackButton from "../components/BackButton"
import ThemeToggle from './ThemeToggle';
import Links from './Links';
import Link from 'next/link';

const PageLabel = ({title}) => {  

  return (
    <div className={styles.linkWrapper}>
        <div className={styles.linkContainer}>
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