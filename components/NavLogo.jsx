import React from "react";
import Link from "next/link";
import styles from "../styles/NavLogo.module.scss"
import Logo from "./Logo";

export default function NavLogo({navLogo}) {
  const logo = navLogo.data.attributes.NavLogo.data.attributes.url
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
          <a className={styles.navLogoText}>
            <img src={logo} />
          </a>
      </Link>
    </div>
  );
}
