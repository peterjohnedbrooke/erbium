import React from "react";
import styles from "../styles/Home.module.scss";

export default function ContentWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
