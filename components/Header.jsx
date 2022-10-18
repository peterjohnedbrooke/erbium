import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import Media from "react-media";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import Links from "./Links";
import DesktopNav from "./DesktopNav";
import Image from "next/image";

export default function Header({ landing }) {
  const image = landing.data.attributes.image.data[0].attributes.url;
  return (
      <div>
          <Link href="/">
            <a>
              <Image
                className={styles.navLogo}
                src={"https://erbiumbackend.herokuapp.com" + image}
                alt=""
              />
            </a>
          </Link>
          <Links />
      </div>
  );
}
