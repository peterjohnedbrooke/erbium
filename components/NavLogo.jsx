import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss"


export default function NavLogo({navLogo, handleExit}) {
  const logo = navLogo[0].fields.logo.fields.file.url;
  return (
    <div onClick={handleExit} className={styles.logoContainer}>
      <Link href="/">
          <a className={styles.navLogoContainer}>
            <img alt="" className={styles.navLogo} src={"https:" + logo} />
          </a>
      </Link>
    </div>
  );
}
