import React from "react";
import Link from "next/link";
import styles from "../styles/NavLogo.module.scss"
import Logo from "./Logo";
import Image from "next/image";

export default function NavLogo({navLogo}) {
  const logo = navLogo.data.attributes.NavLogo.data.attributes.url
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
          <a className={styles.navLogoText}>
            <Image alt="" height="65px" width="60px" className={styles.navLogo} src={logo} />
          </a>
      </Link>
    </div>
  );
}
