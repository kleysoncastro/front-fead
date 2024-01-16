import React from "react";

import styles from "./Header.module.css";
import logo from "../assets/header-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo svg" />
      <strong>Fead Castro</strong>
    </header>
  );
}
