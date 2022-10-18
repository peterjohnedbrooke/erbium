import React from "react";
import styles from "../styles/ContentWrapper.module.scss";

export default function ContentWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}
