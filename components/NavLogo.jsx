import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss"


export default function NavLogo({navLogo}) {
  const logo = navLogo[0].fields.logo.fields.file.url;
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
          <a className={styles.navLogoContainer}>
            <img alt="" className={styles.navLogo} src={"https:" + logo} />
          </a>
      </Link>
    </div>
  );
}
