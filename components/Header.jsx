import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import Media from "react-media";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import Links from "./Links";
import DesktopNav from "./DesktopNav";

export default function Header({ landing }) {
  const image = landing.data.attributes.image.data[0].attributes.url;
  return (
      <div>
          <Link href="/">
            <a>
              <img
                className={styles.navLogo}
                src={"https://erbiumbackend.herokuapp.com" + image}
              />
            </a>
          </Link>
          <Links />
      </div>
  );
}
