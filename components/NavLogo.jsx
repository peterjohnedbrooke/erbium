import React from "react";
import Link from "next/link";
import styles from "../styles/NavLogo.module.scss"
import Logo from "./Logo";
import {Image as NextImage} from 'next/image';


export default function NavLogo({navLogo}) {
  const logo = navLogo.data.attributes.NavLogo.data.attributes.url
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
          <a className={styles.navLogoText}>
            <NextImage src={logo} />
          </a>
      </Link>
    </div>
  );
}
